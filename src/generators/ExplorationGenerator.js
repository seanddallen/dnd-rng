class ExplorationGenerator {
  static MANA_ZONE_OPTIONS = [
    { value: 'safe', label: 'Safe (safe / stable)' },
    { value: 'wild', label: 'Wild (unsafe / unstable)' },
    { value: 'dead', label: 'Dead (unsafe / stable)' },
    { value: 'flux', label: 'Flux (safe / unstable)' },
  ];

  static PARTY_MASTERY_LEVEL_OPTIONS = [
    { value: 'novice', label: 'Novice' },
    { value: 'expert', label: 'Expert' },
    { value: 'master', label: 'Master' },
    { value: 'commander', label: 'Commander' },
  ];

  static ENCOUNTER_TYPE_WEIGHTS_BY_ZONE = {
    safe: { Fight: 20, Face: 30, Find: 50 },
    flux: { Fight: 30, Face: 35, Find: 35 },
    dead: { Fight: 40, Face: 30, Find: 30 },
    wild: { Fight: 50, Face: 25, Find: 25 },
  };

  static FIND_TYPE_WEIGHTS_BY_ZONE = {
    safe: { item: 40, location: 20, shop: 25, npc: 15 },
    dead: { item: 40, location: 25, shop: 20, npc: 15 },
    flux: { item: 40, location: 30, shop: 15, npc: 15 },
    wild: { item: 50, location: 30, shop: 10, npc: 10 },
  };

  static ITEM_RARITY_WEIGHTS_BY_ZONE = {
    safe: { common: 75, uncommon: 20, rare: 5, legendary: 0 },
    flux: { common: 60, uncommon: 25, rare: 10, legendary: 5 },
    dead: { common: 50, uncommon: 25, rare: 15, legendary: 10 },
    wild: { common: 40, uncommon: 35, rare: 15, legendary: 10 },
  };

  static ITEM_RARITY_WEIGHTS_BY_PARTY_MASTERY_LEVEL = {
    novice: { common: 70, uncommon: 20, rare: 10, legendary: 0 },
    expert: { common: 60, uncommon: 25, rare: 15, legendary: 0 },
    master: { common: 50, uncommon: 25, rare: 15, legendary: 10 },
    commander: { common: 40, uncommon: 25, rare: 20, legendary: 15 },
  };

  static MANA_EFFECT_WEIGHTS_BY_ZONE = {
    wild: {
      'wild magic': 25,
      'random spell': 25,
      normal: 50,
    },
    dead: {
      'Spell costs double': 10,
      'spell free': 10,
      'Spell fails': 10,
      'Dead magic': 20,
      normal: 50,
    },
    flux: {
      'Spell targets everyone': 10,
      'Spell double damage': 10,
      'spell half damage': 10,
      'Flux magic': 20,
      normal: 50,
    },
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

  static getZoneTraits(manaZone) {
    const traits = {
      safe: { safety: 'safe', stability: 'stable' },
      wild: { safety: 'unsafe', stability: 'unstable' },
      dead: { safety: 'unsafe', stability: 'stable' },
      flux: { safety: 'safe', stability: 'unstable' },
    };
    return traits[manaZone] || traits.safe;
  }

  static generateExploration({ manaZone, partyMasteryLevel }) {
    const zone = manaZone || 'safe';
    const masteryLevel = partyMasteryLevel || 'novice';
    const encounterWeights = this.ENCOUNTER_TYPE_WEIGHTS_BY_ZONE[zone] || this.ENCOUNTER_TYPE_WEIGHTS_BY_ZONE.safe;
    const encounterType = this.weightedPick(
      Object.entries(encounterWeights).map(([value, weight]) => ({ value, weight })),
    );

    let findType = null;
    let findItemRarity = null;
    if (encounterType === 'Find') {
      const findWeights = this.FIND_TYPE_WEIGHTS_BY_ZONE[zone] || this.FIND_TYPE_WEIGHTS_BY_ZONE.safe;
      findType = this.weightedPick(
        Object.entries(findWeights).map(([value, weight]) => ({ value, weight })),
      );

      if (findType === 'item') {
        const zoneRarityWeights = this.ITEM_RARITY_WEIGHTS_BY_ZONE[zone] || this.ITEM_RARITY_WEIGHTS_BY_ZONE.safe;
        const masteryRarityWeights = this.ITEM_RARITY_WEIGHTS_BY_PARTY_MASTERY_LEVEL[masteryLevel]
          || this.ITEM_RARITY_WEIGHTS_BY_PARTY_MASTERY_LEVEL.novice;
        const combinedRarityWeights = {
          common: (zoneRarityWeights.common || 0) + (masteryRarityWeights.common || 0),
          uncommon: (zoneRarityWeights.uncommon || 0) + (masteryRarityWeights.uncommon || 0),
          rare: (zoneRarityWeights.rare || 0) + (masteryRarityWeights.rare || 0),
          legendary: (zoneRarityWeights.legendary || 0) + (masteryRarityWeights.legendary || 0),
        };
        findItemRarity = this.weightedPick(
          Object.entries(combinedRarityWeights).map(([value, weight]) => ({ value, weight })),
        );
      }
    }

    const traits = this.getZoneTraits(zone);
    return {
      manaZone: zone,
      safety: traits.safety,
      stability: traits.stability,
      encounterType,
      findType,
      findItemRarity,
      partyMasteryLevel: masteryLevel,
      manaEffect: null,
    };
  }

  static generateManaEffect({ manaZone }) {
    const zone = manaZone || 'safe';
    const effectWeights = this.MANA_EFFECT_WEIGHTS_BY_ZONE[zone];
    if (!effectWeights) {
      return {
        manaZone: zone,
        manaEffect: null,
        error: 'Mana Effect only applies in wild, dead, or flux zones.',
      };
    }

    const manaEffect = this.weightedPick(
      Object.entries(effectWeights).map(([value, weight]) => ({ value, weight })),
    );

    return {
      manaZone: zone,
      manaEffect,
      error: null,
    };
  }
}

export default ExplorationGenerator;
