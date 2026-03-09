import { ITEM_CATALOG } from '../data/itemCatalog';
import { SHOPS_CATALOGUE } from '../data/shopsCatalogue';

class ShopGenerator {
  static LOCATION_OPTIONS = [
    { value: '', label: 'Any Location' },
    { value: 'city', label: 'City' },
    { value: 'forest', label: 'Forest' },
    { value: 'dungeon', label: 'Dungeon' },
    { value: 'roadside', label: 'Roadside' },
    { value: 'ruins', label: 'Ruins' },
    { value: 'wilderness', label: 'Wilderness' },
  ];

  static SHOPS_CATALOGUE = SHOPS_CATALOGUE;

  static SHOP_OPTIONS = [
    { value: '', label: 'Random Known Shop' },
    ...SHOPS_CATALOGUE.map((shop) => ({ value: shop.shop, label: shop.shop })),
  ];

  static SHOP_TYPE_OPTIONS = [
    { value: '', label: 'Any Shop Type' },
    { value: 'general store', label: 'General Store' },
    { value: 'equipment store', label: 'Equipment Store' },
    { value: 'potion store', label: 'Potion Store' },
    { value: 'relic store', label: 'Relic Store' },
  ];

  static PARTY_MASTERY_LEVEL_OPTIONS = [
    { value: '', label: 'None (Use Base Rarity Weights)' },
    { value: 'novice', label: 'Novice' },
    { value: 'expert', label: 'Expert' },
    { value: 'master', label: 'Master' },
    { value: 'commander', label: 'Commander' },
  ];
  static PARTY_LEVEL_OPTIONS = Array.from({ length: 20 }, (_, idx) => {
    const level = idx + 1;
    return { value: level, label: `Level ${level}` };
  });

  static RARITY_COST_RANGES = {
    common: [8, 55],
    uncommon: [60, 250],
    rare: [260, 1500],
    legendary: [1600, 9000],
  };

  static RARITY_WEIGHTS = {
    common: 60,
    uncommon: 25,
    rare: 10,
    legendary: 5,
  };

  static RARITY_WEIGHTS_BY_PARTY_MASTERY_LEVEL = {
    novice: { common: 70, uncommon: 20, rare: 10, legendary: 0 },
    expert: { common: 60, uncommon: 25, rare: 10, legendary: 5 },
    master: { common: 50, uncommon: 25, rare: 15, legendary: 10 },
    commander: { common: 45, uncommon: 25, rare: 20, legendary: 10 },
  };

  static QUANTITY_BY_RARITY = {
    common: [3, 10],
    uncommon: [2, 5],
    rare: [1, 1],
    legendary: [1, 1],
  };

  static TYPE_COST_MULTIPLIER = {
    normal: 1,
    magic: 1.4,
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

  static formatGoldCost(value) {
    return `${value} GP`;
  }

  static resolveItemCost(candidate) {
    const rawCost = candidate?.cost;
    if (rawCost === undefined || rawCost === null) {
      return '0';
    }
    const trimmed = String(rawCost).trim();
    return trimmed.length > 0 ? trimmed : '0';
  }

  static isPotionItem(entry) {
    return /potion|philter/i.test(String(entry?.item || ''));
  }

  static isHealthPotion(entry) {
    return /(health potion|potion of healing|potion of greater healing|potion of superior healing|potion of supreme healing)/i.test(String(entry?.item || ''));
  }

  static isManaPotion(entry) {
    return /(mana potion|greater mana potion|supreme mana potion)/i.test(String(entry?.item || ''));
  }

  static isBasicPotion(entry) {
    return /potion/i.test(String(entry?.item || '')) && !/(greater|superior|supreme)/i.test(String(entry?.item || ''));
  }

  static isBasicHealthPotion(entry) {
    return /^(health potion|potion of healing)$/i.test(String(entry?.item || '').trim());
  }

  static isBasicManaPotion(entry) {
    return /^mana potion$/i.test(String(entry?.item || '').trim());
  }

  static isGreaterOrSupremePotion(entry) {
    return /potion/i.test(String(entry?.item || '')) && /(greater|superior|supreme)/i.test(String(entry?.item || ''));
  }

  static computeEntryQuantity({ candidate, shopType, forcedQuantity }) {
    return 1;
  }

  static toDisplayItemName(itemName) {
    if (String(itemName || '').toLowerCase() === 'potion of healing') {
      return 'Health Potion';
    }
    return itemName;
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

  static getAllCatalogItemsByLocation(location, shopType, partyLevel = null) {
    const allItems = Object.values(ITEM_CATALOG).flatMap((tier) => (
      ['normal', 'magic'].flatMap((type) => (
        (tier[type] || []).map((entry) => ({
          ...entry,
          type,
        }))
      ))
    ));

    const byPartyLevel = allItems.filter((entry) => this.isPartyLevelEligible(entry, partyLevel));
    const byLocation = !location ? byPartyLevel : byPartyLevel.filter((entry) => {
      const locations = entry.locations || (entry.location ? [entry.location] : []);
      if (locations.length === 0) {
        return true;
      }
      return locations.includes(location);
    });
    const locationPool = byLocation.length > 0 ? byLocation : allItems;

    if (!shopType) {
      return locationPool;
    }

    const byShopType = locationPool.filter((entry) => (entry.storeTypes || []).includes(shopType));
    return byShopType.length > 0 ? byShopType : locationPool;
  }

  static buildRandomInventory(location, shopType, partyMasteryLevel = '', partyLevel = null) {
    const sourceRaw = this.getAllCatalogItemsByLocation(location, shopType, partyLevel);
    const source = shopType === 'relic store'
      ? sourceRaw
      : sourceRaw.filter((entry) => String(entry.rarity || '').toLowerCase() !== 'legendary');
    const maxDistinctBySource = new Set(source.map((entry) => entry.item)).size;
    const maxInventory = shopType === 'relic store' ? 7 : (shopType === 'general store' ? 20 : 10);
    const inventoryRoll = shopType === 'general store' ? this.randomInt(10, 20) : this.randomInt(5, 10);
    const inventorySize = Math.min(inventoryRoll, maxInventory, maxDistinctBySource);
    const picked = [];
    const usedNames = new Set();

    const addCandidate = (candidate, forcedQuantity = null) => {
      if (!candidate || usedNames.has(candidate.item) || picked.length >= inventorySize) {
        return false;
      }
      usedNames.add(candidate.item);
      const quantity = this.computeEntryQuantity({ candidate, shopType, forcedQuantity });

      picked.push({
        item: this.toDisplayItemName(candidate.item),
        details: candidate.details || 'No details provided.',
        effects: candidate.effects || '',
        damage: candidate.damage || '',
        type: candidate.type,
        rarity: candidate.rarity,
        size: candidate.size || 'unknown',
        quantity,
        cost: this.resolveItemCost(candidate),
      });
      return true;
    };

    if (shopType === 'potion store' || shopType === 'general store') {
      const healingPotion = source.find((entry) => this.isBasicHealthPotion(entry));
      const manaPotion = source.find((entry) => this.isBasicManaPotion(entry));
      addCandidate(healingPotion, this.randomInt(5, 10));
      addCandidate(manaPotion, this.randomInt(1, 5));
    }

    let safety = 0;
    while (picked.length < inventorySize && safety < 200) {
      safety += 1;
      const availableRarities = ['common', 'uncommon', 'rare', 'legendary']
        .filter((rarity) => source.some((entry) => entry.rarity === rarity && !usedNames.has(entry.item)));
      if (availableRarities.length === 0) {
        break;
      }

      const rarityPick = this.weightedPick(
        availableRarities.map((rarity) => ({
          value: rarity,
          weight: partyMasteryLevel
            ? ((this.RARITY_WEIGHTS_BY_PARTY_MASTERY_LEVEL[partyMasteryLevel]
              || this.RARITY_WEIGHTS_BY_PARTY_MASTERY_LEVEL.novice)[rarity] || 0)
            : (this.RARITY_WEIGHTS[rarity] || 1),
        })),
      );

      const rarityPool = source.filter(
        (entry) => entry.rarity === rarityPick && !usedNames.has(entry.item),
      );
      if (rarityPool.length === 0) {
        continue;
      }

      const candidate = this.getRandomFromList(rarityPool);
      if (usedNames.has(candidate.item)) {
        continue;
      }
      addCandidate(candidate);
    }

    // Global rule: every generated shop entry has max quantity of 1.
    picked.forEach((entry) => { entry.quantity = 1; });

    return picked;
  }

  static buildRandomShop(location, shopType, partyMasteryLevel = '', partyLevel = null) {
    const shopNamesByLocation = {
      city: ['Market Ward Outfitters', 'Gilded Street Exchange', 'Candlekeep Provisions'],
      forest: ['Thornpath Trading Post', 'Whisperbark Supplies', 'Greenveil Outfitter'],
      dungeon: ['Delver Supply Depot', 'Vault Runner Exchange', 'Lantern & Lever'],
      roadside: ['Wayfarer Cart Stop', 'Crossroad Merchant Tent', 'Milemarker Goods'],
      ruins: ['Rubbleline Curios', 'Dustbound Relics', 'Oldstone Finds'],
      wilderness: ['Frontier Camp Store', 'Wildtrail Depot', 'Stormmark Wagon'],
      default: ['Traveler Goods & Co.', 'Adventurer Relay', 'Open Road Exchange'],
    };

    const ownerNames = [
      'Arin Coldwater',
      'Selka Thorn',
      'Bram Hollow',
      'Edda Moor',
      'Rion Vale',
      'Tamsin Kestrel',
    ];

    const chosenLocation = location || this.getRandomFromList(this.LOCATION_OPTIONS.filter((opt) => opt.value).map((opt) => opt.value));
    const namesPool = shopNamesByLocation[chosenLocation] || shopNamesByLocation.default;

    return {
      shop: this.getRandomFromList(namesPool),
      shopDetails: `A ${chosenLocation} vendor serving local adventurers and passing parties.`,
      owner: this.getRandomFromList(ownerNames),
      ownerDetails: 'Keeps a close ledger and adjusts stock based on recent demand.',
      source: 'location-random',
      location: chosenLocation,
      shopType: shopType || 'any',
      partyMasteryLevel: partyMasteryLevel || 'none (base rarity weights)',
      partyLevel: Number(partyLevel) || 1,
      inventory: this.buildRandomInventory(chosenLocation, shopType || '', partyMasteryLevel, partyLevel),
    };
  }

  static generateShop({
    selectedShop,
    location,
    shopType,
    partyMasteryLevel = '',
    partyLevel = null,
  }) {
    const chosenShop = selectedShop
      ? this.SHOPS_CATALOGUE.find((entry) => entry.shop === selectedShop)
      : null;

    if (chosenShop) {
      const resolvedLocation = location || chosenShop.locations?.[0] || 'varied';
      const filteredInventory = shopType
        ? this.buildRandomInventory(
          resolvedLocation === 'varied' ? '' : resolvedLocation,
          shopType,
          partyMasteryLevel,
          partyLevel,
        )
        : (chosenShop.inventory || [])
          .filter((entry) => this.isPartyLevelEligible(entry, partyLevel))
          .filter((entry) => String(entry.rarity || '').toLowerCase() !== 'legendary')
          .map((entry) => ({
            ...entry,
            item: this.toDisplayItemName(entry.item),
            effects: entry.effects || '',
            damage: entry.damage || '',
            size: entry.size || 'unknown',
          }));
      return {
        ...chosenShop,
        source: 'known-shop',
        location: resolvedLocation,
        shopType: shopType || 'any',
        partyMasteryLevel: partyMasteryLevel || 'none (base rarity weights)',
        partyLevel: Number(partyLevel) || 1,
        inventory: filteredInventory,
      };
    }

    return this.buildRandomShop(location, shopType || '', partyMasteryLevel, partyLevel);
  }
}

export default ShopGenerator;
