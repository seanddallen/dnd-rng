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
    common: 60,
    uncommon: 25,
    rare: 10,
    legendary: 5,
  };

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
  static PARTY_LEVEL_OPTIONS = Array.from({ length: 20 }, (_, idx) => {
    const level = idx + 1;
    return { value: level, label: `Level ${level}` };
  });

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

  static isPartyLevelEligible(entry, partyLevel) {
    const requiredLevel = Number(entry?.partyLevel);
    const selectedPartyLevel = Number(partyLevel);
    if (!Number.isFinite(requiredLevel) || requiredLevel <= 0) {
      return true;
    }
    if (!Number.isFinite(selectedPartyLevel) || selectedPartyLevel <= 0) {
      return true;
    }
    return selectedPartyLevel >= requiredLevel;
  }

  static generateItem({ levelTier, typeFilter, rarityFilter, partyLevel }) {
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

    const getPool = (type, rarity) => (
      activeCatalogs.flatMap((catalog) => catalog[type] || []).filter(
        (entry) => entry.rarity === rarity
          && this.isPartyLevelEligible(entry, partyLevel),
      )
    );

    const getAllItems = () => (
      allowedTypes.flatMap((type) =>
        activeCatalogs.flatMap((catalog) => catalog[type] || [])
          .filter((entry) => allowedRarities.includes(entry.rarity))
          .filter((entry) => this.isPartyLevelEligible(entry, partyLevel))
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
      const allItems = getAllItems();
      if (allItems.length === 0) {
        return {
          item: 'No result',
          type: 'N/A',
          rarity: 'N/A',
          details: 'No items found in the selected level group.',
          note: 'Try a different tier or filter.',
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
