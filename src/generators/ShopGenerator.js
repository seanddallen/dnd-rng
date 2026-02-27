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

  static RARITY_COST_RANGES = {
    common: [8, 55],
    uncommon: [60, 250],
    rare: [260, 1500],
    legendary: [1600, 9000],
  };

  static RARITY_WEIGHTS = {
    common: 60,
    uncommon: 25,
    rare: 12,
    legendary: 3,
  };

  static RARITY_WEIGHTS_BY_PARTY_MASTERY_LEVEL = {
    novice: { common: 70, uncommon: 20, rare: 10, legendary: 0 },
    expert: { common: 60, uncommon: 25, rare: 15, legendary: 0 },
    master: { common: 50, uncommon: 25, rare: 15, legendary: 10 },
    commander: { common: 40, uncommon: 25, rare: 20, legendary: 15 },
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
    const [minQty, maxQty] = this.QUANTITY_BY_RARITY[candidate.rarity] || [1, 4];
    let quantity = Number.isFinite(forcedQuantity) ? forcedQuantity : this.randomInt(minQty, maxQty);
    const rarity = String(candidate.rarity || '').toLowerCase();

    if (rarity === 'rare' || rarity === 'legendary') {
      quantity = 1;
    }

    if (shopType === 'relic store') {
      quantity = Math.min(quantity, 1);
    }
    if (shopType === 'equipment store') {
      quantity = Math.min(quantity, 1);
    }
    if (shopType === 'potion store' && !this.isPotionItem(candidate)) {
      quantity = Math.min(quantity, 3);
    }
    if (shopType === 'general store') {
      if (this.isHealthPotion(candidate)) {
        quantity = Math.min(quantity, 10);
      } else {
        quantity = Math.min(quantity, 5);
      }
    }

    return Math.max(1, quantity);
  }

  static toDisplayItemName(itemName) {
    if (String(itemName || '').toLowerCase() === 'potion of healing') {
      return 'Health Potion';
    }
    return itemName;
  }

  static getAllCatalogItemsByLocation(location, shopType) {
    const allItems = Object.values(ITEM_CATALOG).flatMap((tier) => (
      ['normal', 'magic'].flatMap((type) => (
        (tier[type] || []).map((entry) => ({
          ...entry,
          type,
        }))
      ))
    ));

    const byLocation = !location ? allItems : allItems.filter((entry) => {
      const locations = entry.locations || (entry.location ? [entry.location] : []);
      return locations.includes(location);
    });
    const locationPool = byLocation.length > 0 ? byLocation : allItems;

    if (!shopType) {
      return locationPool;
    }

    const byShopType = locationPool.filter((entry) => (entry.storeTypes || []).includes(shopType));
    return byShopType.length > 0 ? byShopType : locationPool;
  }

  static buildRandomInventory(location, shopType, partyMasteryLevel = '') {
    const sourceRaw = this.getAllCatalogItemsByLocation(location, shopType);
    const source = shopType === 'relic store'
      ? sourceRaw
      : sourceRaw.filter((entry) => String(entry.rarity || '').toLowerCase() !== 'legendary');
    const maxDistinctBySource = new Set(source.map((entry) => entry.item)).size;
    const maxInventory = shopType === 'relic store' ? 7 : 10;
    const inventorySize = Math.min(this.randomInt(5, 10), maxInventory, maxDistinctBySource);
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

    if (shopType === 'potion store' || shopType === 'general store') {
      const healing = picked.find((entry) => this.isBasicHealthPotion(entry));
      const mana = picked.find((entry) => this.isBasicManaPotion(entry));
      if (healing && mana && healing.quantity <= mana.quantity) {
        healing.quantity = mana.quantity + 1;
      }

      const advancedHealthPotions = picked.filter((entry) => (
        /potion of (greater|superior|supreme) healing/i.test(String(entry.item || ''))
        || /^(greater|superior|supreme) health potion$/i.test(String(entry.item || '').trim())
      ));
      if (healing && advancedHealthPotions.length > 0) {
        const maxAdvancedHealthQty = Math.max(...advancedHealthPotions.map((entry) => entry.quantity));
        if (healing.quantity <= maxAdvancedHealthQty) {
          healing.quantity = maxAdvancedHealthQty + 1;
        }
      }

      const basicTotal = picked
        .filter((entry) => this.isBasicPotion(entry))
        .reduce((sum, entry) => sum + entry.quantity, 0);
      const advancedTotal = picked
        .filter((entry) => this.isGreaterOrSupremePotion(entry))
        .reduce((sum, entry) => sum + entry.quantity, 0);
      if (basicTotal <= advancedTotal && healing) {
        healing.quantity += (advancedTotal - basicTotal) + 1;
      }
    }

    return picked;
  }

  static buildRandomShop(location, shopType, partyMasteryLevel = '') {
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
      inventory: this.buildRandomInventory(chosenLocation, shopType || '', partyMasteryLevel),
    };
  }

  static generateShop({
    selectedShop,
    location,
    shopType,
    partyMasteryLevel = '',
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
        )
        : (chosenShop.inventory || [])
          .filter((entry) => String(entry.rarity || '').toLowerCase() !== 'legendary')
          .map((entry) => ({
            ...entry,
            item: this.toDisplayItemName(entry.item),
            size: entry.size || 'unknown',
          }));
      return {
        ...chosenShop,
        source: 'known-shop',
        location: resolvedLocation,
        shopType: shopType || 'any',
        partyMasteryLevel: partyMasteryLevel || 'none (base rarity weights)',
        inventory: filteredInventory,
      };
    }

    return this.buildRandomShop(location, shopType || '', partyMasteryLevel);
  }
}

export default ShopGenerator;
