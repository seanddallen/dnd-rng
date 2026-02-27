import { ITEM_CATALOG } from '../data/itemCatalog';

class ItemGenerator {
  static TYPE_ORDER = ['normal', 'magic'];
  static TIER_ORDER = ['novice', 'expert', 'master'];

  static RARITY_ORDER = ['common', 'uncommon', 'rare', 'legendary'];

  static TYPE_WEIGHTS = {
    normal: 65,
    magic: 35,
  };

  static RARITY_WEIGHTS = {
    common: 55,
    uncommon: 28,
    rare: 13,
    legendary: 4,
  };

  static LOCATION_OPTIONS = [
    { value: 'dungeon', label: 'Dungeon' },
    { value: 'forest', label: 'Forest' },
    { value: 'city', label: 'City' },
    { value: 'roadside', label: 'Roadside' },
    { value: 'ruins', label: 'Ruins' },
    { value: 'wilderness', label: 'Wilderness' },
  ];

  static LEVEL_GROUPS = {
    novice: { label: 'Novice' },
    expert: { label: 'Expert' },
    master: { label: 'Master' },
  };

  static LEVEL_TIER_OPTIONS = [
    { value: 'novice', label: 'Novice' },
    { value: 'expert', label: 'Expert' },
    { value: 'master', label: 'Master' },
  ];

  static ITEM_CATALOG = ITEM_CATALOG;

  static weightedPick(entries) {
    const validEntries = entries.filter((entry) => entry.weight > 0);
    if (validEntries.length === 0) {
      return null;
    }

    const totalWeight = validEntries.reduce((sum, entry) => sum + entry.weight, 0);
    let roll = Math.random() * totalWeight;

    for (const entry of validEntries) {
      roll -= entry.weight;
      if (roll <= 0) {
        return entry.value;
      }
    }

    return validEntries[validEntries.length - 1].value;
  }

  static getRandomFromList(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  static getLevelGroupLabel(levelTier) {
    const key = levelTier;
    return key ? (this.LEVEL_GROUPS[key]?.label || 'Unknown') : 'Unknown';
  }

  static getTierKeysUpTo(levelTier) {
    const idx = this.TIER_ORDER.indexOf(levelTier);
    if (idx < 0) {
      return [];
    }
    return this.TIER_ORDER.slice(0, idx + 1);
  }

  static generateItem({ levelTier, location, typeFilter, rarityFilter }) {
    const activeTierKeys = this.getTierKeysUpTo(levelTier);
    const activeCatalogs = activeTierKeys
      .map((tierKey) => this.ITEM_CATALOG[tierKey])
      .filter(Boolean);

    if (activeCatalogs.length === 0) {
      return {
        item: 'No result',
        type: 'N/A',
        rarity: 'N/A',
        details: 'No level group found for this selected tier.',
        note: 'Choose a valid tier.',
      };
    }

    const allowedTypes = typeFilter ? [typeFilter] : this.TYPE_ORDER;
    const allowedRarities = rarityFilter ? [rarityFilter] : this.RARITY_ORDER;

    const hasLocation = (entry, targetLocation) => {
      if (!targetLocation) {
        return true;
      }
      const locations = entry.locations || (entry.location ? [entry.location] : []);
      return locations.includes(targetLocation);
    };

    const getPool = (type, rarity) => (
      activeCatalogs.flatMap((catalog) => catalog[type] || []).filter(
        (entry) => hasLocation(entry, location) && entry.rarity === rarity,
      )
    );

    const getAllLocationItems = () => (
      allowedTypes.flatMap((type) =>
        activeCatalogs.flatMap((catalog) => catalog[type] || [])
          .filter((entry) => hasLocation(entry, location) && allowedRarities.includes(entry.rarity))
          .map((entry) => ({
            ...entry,
            type,
          })),
      )
    );

    let itemType = null;
    let rarity = null;
    let selectedEntry = null;

    for (let attempt = 0; attempt < 20; attempt += 1) {
      itemType = this.weightedPick(
        allowedTypes.map((type) => ({ value: type, weight: this.TYPE_WEIGHTS[type] || 1 })),
      );
      rarity = this.weightedPick(
        allowedRarities.map((rank) => ({ value: rank, weight: this.RARITY_WEIGHTS[rank] || 1 })),
      );
      const pool = getPool(itemType, rarity);
      if (pool.length > 0) {
        selectedEntry = this.getRandomFromList(pool);
        break;
      }
    }

    if (!selectedEntry) {
      const allItems = getAllLocationItems();
      if (allItems.length === 0) {
        return {
          item: 'No result',
          type: 'N/A',
          rarity: 'N/A',
          details: 'No items found for this location in the selected level group.',
          note: 'Try a different location or level.',
        };
      }

      const fallback = this.getRandomFromList(allItems);
      return {
        ...fallback,
        note: 'Used fallback pick because weighted slot had no items.',
      };
    }

    return {
      ...selectedEntry,
      type: itemType,
      rarity,
      note: null,
    };
  }
}

export default ItemGenerator;
