import { ITEM_CATALOG } from '../data/itemCatalog';
import { EVENT_HABITAT_OPTIONS } from '../data/habitatOptions';

class LocationGenerator {
  static TYPE_OPTIONS = [
    { value: '', label: 'Any Type' },
    { value: 'settlement', label: 'Settlement' },
    { value: 'ruins', label: 'Ruins' },
    { value: 'encampment', label: 'Encampment' },
    { value: 'abandoned building', label: 'Abandoned Building' },
    { value: 'cave', label: 'Cave' },
    { value: 'temple', label: 'Temple' },
    { value: 'castle', label: 'Castle' },
    { value: 'guard watchtower', label: 'Guard Watchtower' },
    { value: 'shrine', label: 'Shrine' },
    { value: 'burial site', label: 'Burial Site' },
    { value: 'farm', label: 'Farm' },
    { value: 'mage tower', label: 'Mage Tower' },
    { value: 'underground tunnel', label: 'Underground Tunnel' },
    { value: 'cabin', label: 'Cabin' },
  ];

  static HABITAT_OPTIONS = [
    { value: '', label: 'Any Habitat' },
    ...EVENT_HABITAT_OPTIONS,
  ];
  static MASTERY_LEVEL_OPTIONS = [
    { value: '', label: 'Any Mastery Level' },
    { value: 'novice', label: 'Novice' },
    { value: 'expert', label: 'Expert' },
    { value: 'commander', label: 'Commander' },
  ];
  static PARTY_LEVEL_OPTIONS = Array.from({ length: 20 }, (_, idx) => {
    const level = idx + 1;
    return { value: level, label: `Level ${level}` };
  });

  static DEFAULT_TYPES = this.TYPE_OPTIONS.filter((option) => option.value).map((option) => option.value);

  static DEFAULT_HABITATS = this.HABITAT_OPTIONS.filter((option) => option.value).map((option) => option.value);

  static RACES_BY_HABITAT = {
    forest: ['elf', 'human', 'halfling', 'goblin', 'firbolg', 'orc'],
    mountain: ['dwarf', 'human', 'goliath', 'orc', 'kobold', 'dragonborn'],
    swamp: ['lizardfolk', 'human', 'goblin', 'yuan-ti', 'orc', 'elf'],
    arctic: ['human', 'dwarf', 'goliath', 'orc', 'dragonborn', 'gnome'],
    desert: ['human', 'dragonborn', 'orc', 'goliath', 'tiefling', 'dwarf'],
    jungle: ['human', 'elf', 'goblin', 'orc', 'halfling', 'dragonborn'],
    volcanic: ['dwarf', 'dragonborn', 'human', 'goliath', 'orc', 'tiefling'],
    roadside: ['human', 'halfling', 'dwarf', 'elf', 'goblin', 'orc'],
    urban: ['human', 'elf', 'dwarf', 'tiefling', 'halfling', 'dragonborn'],
    plains: ['human', 'halfling', 'orc', 'goblin', 'centaur', 'elf'],
    coast: ['human', 'elf', 'triton', 'dwarf', 'halfling', 'goblin'],
  };

  static RARITY_COST_RANGES = {
    common: [8, 55],
    uncommon: [60, 250],
    rare: [260, 1500],
    legendary: [1600, 9000],
  };

  static TYPE_COST_MULTIPLIER = {
    normal: 1,
    magic: 1.4,
  };

  static QUANTITY_BY_RARITY = {
    common: [1, 5],
    uncommon: [1, 1],
    rare: [1, 1],
    legendary: [1, 1],
  };

  static RARITY_WEIGHTS = {
    common: 60,
    uncommon: 25,
    rare: 10,
    legendary: 5,
  };

  static TYPE_WEIGHTS = {
    normal: 90,
    magic: 10,
  };

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

  static randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static uniqueSample(list, count) {
    const copy = [...list];
    const out = [];
    while (copy.length > 0 && out.length < count) {
      const idx = Math.floor(Math.random() * copy.length);
      out.push(copy.splice(idx, 1)[0]);
    }
    return out;
  }

  static getRoomsByType(type) {
    const byType = {
      settlement: [4, 10],
      ruins: [3, 8],
      encampment: [2, 6],
      'abandoned building': [2, 7],
      cave: [2, 9],
      temple: [3, 10],
      castle: [8, 16],
      'guard watchtower': [2, 5],
      shrine: [1, 4],
      'burial site': [2, 6],
      farm: [2, 6],
      'mage tower': [3, 9],
      'underground tunnel': [3, 10],
      cabin: [1, 3],
    };
    return byType[type] || [2, 8];
  }

  static getTierKeysForMasteryLevel(masteryLevel) {
    if (masteryLevel === 'novice') {
      return ['novice'];
    }
    if (masteryLevel === 'expert') {
      return ['expert'];
    }
    // Commander maps to highest available item tier.
    if (masteryLevel === 'commander') {
      return ['master'];
    }
    return ['novice', 'expert', 'master'];
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

  static getItemsForHabitat(_habitat, masteryLevel = '', partyLevel = null) {
    const tierKeys = this.getTierKeysForMasteryLevel(masteryLevel);
    const allItems = tierKeys.flatMap((tierKey) => {
      const tier = ITEM_CATALOG[tierKey];
      if (!tier) {
        return [];
      }
      return ['normal', 'magic'].flatMap((type) => (
        (tier[type] || []).map((entry) => ({
          ...entry,
          type,
        }))
      ))
      ;
    });

    if (allItems.length === 0) {
      return [];
    }

    const eligible = allItems.filter((entry) => this.isPartyLevelEligible(entry, partyLevel));
    if (eligible.length === 0) {
      return [];
    }

    const uniqueByName = [...new Map(eligible.map((entry) => [entry.item, entry])).values()];
    const itemCount = this.randomInt(1, Math.min(2, uniqueByName.length));
    const selectedItems = [];
    const usedNames = new Set();

    let safety = 0;
    while (selectedItems.length < itemCount && safety < 100) {
      safety += 1;
      const available = uniqueByName.filter((entry) => !usedNames.has(entry.item));
      if (available.length === 0) {
        break;
      }

      const availableRarities = ['common', 'uncommon', 'rare', 'legendary']
        .filter((rarity) => available.some((entry) => entry.rarity === rarity));
      const availableTypes = ['normal', 'magic']
        .filter((type) => available.some((entry) => entry.type === type));

      const pickedRarity = this.weightedPick(
        availableRarities.map((rarity) => ({
          value: rarity,
          weight: this.RARITY_WEIGHTS[rarity] || 1,
        })),
      );

      const pickedType = this.weightedPick(
        availableTypes.map((type) => ({
          value: type,
          weight: this.TYPE_WEIGHTS[type] || 1,
        })),
      );

      let pool = available.filter((entry) => (
        entry.rarity === pickedRarity && entry.type === pickedType
      ));
      if (pool.length === 0) {
        pool = available.filter((entry) => entry.rarity === pickedRarity);
      }
      if (pool.length === 0) {
        pool = available.filter((entry) => entry.type === pickedType);
      }
      if (pool.length === 0) {
        pool = available;
      }

      const entry = this.getRandomFromList(pool);
      usedNames.add(entry.item);
      selectedItems.push(entry);
    }

    return selectedItems.map((entry) => {
      const [minQty, maxQty] = this.QUANTITY_BY_RARITY[entry.rarity] || [1, 3];
      const resolvedCost = String(entry.cost || '').trim() || '0';

      return {
        item: entry.item,
        details: entry.details,
        effects: entry.effects || '',
        damage: entry.damage || '',
        type: entry.type,
        rarity: entry.rarity,
        quantity: this.randomInt(minQty, maxQty),
        cost: resolvedCost,
      };
    });
  }

  static generateLocation({ type, habitat, masteryLevel, partyLevel = null }) {
    const resolvedType = type || this.getRandomFromList(this.DEFAULT_TYPES);
    const resolvedHabitat = habitat || this.getRandomFromList(this.DEFAULT_HABITATS);
    const resolvedMasteryLevel = masteryLevel || '';
    const racesPool = this.RACES_BY_HABITAT[resolvedHabitat] || ['human', 'elf', 'dwarf', 'goblin'];

    const inhabitants = this.weightedPick([
      { value: this.randomInt(1, 4), weight: 45 },
      { value: this.randomInt(5, 9), weight: 35 },
      { value: this.randomInt(10, 16), weight: 20 },
    ]);

    const racesCount = this.randomInt(1, Math.min(3, racesPool.length));
    const [minRooms, maxRooms] = this.getRoomsByType(resolvedType);

    return {
      habitat: resolvedHabitat,
      type: resolvedType,
      inhabitants,
      races: this.uniqueSample(racesPool, racesCount),
      rooms: this.randomInt(minRooms, maxRooms),
      masteryLevel: resolvedMasteryLevel || 'any',
      partyLevel: Number(partyLevel) || 1,
      items: this.getItemsForHabitat(resolvedHabitat, resolvedMasteryLevel, partyLevel),
    };
  }
}

export default LocationGenerator;
