import { monsterCatalogue } from '../data/monsterCatalogue';

class EncounterGenerator {
  static MAX_COUNT_PER_CREATURE = 5;

  static DIFFICULTIES = ['easy', 'moderate', 'hard', 'deadly'];

  static DIFFICULTY_WEIGHTS = {
    easy: 0,
    moderate: 60,
    hard: 30,
    deadly: 10,
  };

  static experiencePoints = {
    easy: 25,
    moderate: 50,
    hard: 100,
    deadly: 150,
  };

  static TYPE_COUNT_WEIGHTS = {
    1: 20,
    2: 60,
    3: 20,
  };

  static HABITAT_OPTIONS = [
    { value: '', label: 'Any Habitat' },
    { value: 'cave', label: 'Cave' },
    { value: 'forest', label: 'Forest' },
    { value: 'grassland', label: 'Grassland' },
    { value: 'mountain', label: 'Mountain' },
    { value: 'swamp', label: 'Swamp' },
    { value: 'underdark', label: 'Underdark' },
    { value: 'urban', label: 'Urban' },
    { value: 'plains', label: 'Plains' },
    { value: 'coast', label: 'Coast' },
  ];

  static REGION_OPTIONS = [
    { value: '', label: 'Any Region' },
    { value: 'Faerun', label: 'Faerun' },
    { value: 'Phyrexia', label: 'Phyrexia' },
    { value: 'Zendikar', label: 'Zendikar' },
    { value: 'Velen', label: 'Velen' },
    { value: 'Erwyld', label: 'Erwyld' },
    { value: 'Feywild', label: 'Feywild' },
    { value: 'Shadowfell', label: 'Shadowfell' },
  ];

  static LOCATION_OPTIONS = [
    { value: '', label: 'Any Location' },
    { value: 'dungeon', label: 'Dungeon' },
    { value: 'ruins', label: 'Ruins' },
    { value: 'city', label: 'City' },
    { value: 'roadside', label: 'Roadside' },
    { value: 'wilderness', label: 'Wilderness' },
    { value: 'sewers', label: 'Sewers' },
    { value: 'castle', label: 'Castle' },
  ];

  static perPlayerDifficultyBudgets = {
    partyLevel1: { easyMaxXP: 50, moderateMaxXP: 75, hardMaxXP: 100, deadlyMaxXP: 150 },
    partyLevel2: { easyMaxXP: 100, moderateMaxXP: 150, hardMaxXP: 200, deadlyMaxXP: 300 },
    partyLevel3: { easyMaxXP: 150, moderateMaxXP: 225, hardMaxXP: 400, deadlyMaxXP: 450 },
    partyLevel4: { easyMaxXP: 250, moderateMaxXP: 375, hardMaxXP: 500, deadlyMaxXP: 600 },
    partyLevel5: { easyMaxXP: 500, moderateMaxXP: 750, hardMaxXP: 1100, deadlyMaxXP: 1250 },
    partyLevel6: { easyMaxXP: 600, moderateMaxXP: 1000, hardMaxXP: 1400, deadlyMaxXP: 1500 },
    partyLevel7: { easyMaxXP: 750, moderateMaxXP: 1300, hardMaxXP: 1700, deadlyMaxXP: 2100 },
    partyLevel8: { easyMaxXP: 1000, moderateMaxXP: 1700, hardMaxXP: 2100, deadlyMaxXP: 3000 },
    partyLevel9: { easyMaxXP: 1300, moderateMaxXP: 2000, hardMaxXP: 2600, deadlyMaxXP: 3375 },
    partyLevel10: { easyMaxXP: 1600, moderateMaxXP: 2300, hardMaxXP: 3100, deadlyMaxXP: 3750 },
    partyLevel11: { easyMaxXP: 1900, moderateMaxXP: 2900, hardMaxXP: 4100, deadlyMaxXP: 5000 },
    partyLevel12: { easyMaxXP: 2200, moderateMaxXP: 3700, hardMaxXP: 4700, deadlyMaxXP: 5500 },
    partyLevel13: { easyMaxXP: 2600, moderateMaxXP: 4200, hardMaxXP: 5400, deadlyMaxXP: 6250 },
    partyLevel14: { easyMaxXP: 2900, moderateMaxXP: 4900, hardMaxXP: 6200, deadlyMaxXP: 8250 },
    partyLevel15: { easyMaxXP: 3300, moderateMaxXP: 5400, hardMaxXP: 7800, deadlyMaxXP: 10250 },
    partyLevel16: { easyMaxXP: 3800, moderateMaxXP: 6100, hardMaxXP: 9800, deadlyMaxXP: 15500 },
    partyLevel17: { easyMaxXP: 4500, moderateMaxXP: 7200, hardMaxXP: 11700, deadlyMaxXP: 22500 },
    partyLevel18: { easyMaxXP: 5000, moderateMaxXP: 8700, hardMaxXP: 14200, deadlyMaxXP: 30000 },
    partyLevel19: { easyMaxXP: 5500, moderateMaxXP: 10700, hardMaxXP: 17200, deadlyMaxXP: 33750 },
    partyLevel20: { easyMaxXP: 6400, moderateMaxXP: 13200, hardMaxXP: 22000, deadlyMaxXP: 38750 },
  };


  static monsters = monsterCatalogue;

  static getMonsterCR(monster) {
    return Number(monster.cr ?? monster.crBudget ?? 0) || 0;
  }

  static getMonsterXP(monster) {
    return Number(monster.xp ?? monster.xpBudget ?? 0) || 0;
  }

  static getMonsterHabitats(monster) {
    return monster.habitats || (monster.habitat ? [monster.habitat] : []);
  }

  static getMonsterLocations(monster) {
    return monster.locations || (monster.location ? [monster.location] : []);
  }

  static getMonsterRegions(monster) {
    return monster.regions || [];
  }

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

  static getEncounterBudget(partyLevel, difficulty, partyNumber) {
    const key = `partyLevel${partyLevel}`;
    const levelBudgets = this.perPlayerDifficultyBudgets[key];
    if (!levelBudgets) {
      return null;
    }

    const maxXPPerPlayer = levelBudgets[`${difficulty}MaxXP`];
    if (!Number.isFinite(maxXPPerPlayer)) {
      return null;
    }

    const orderedDifficulties = this.DIFFICULTIES;
    const currentIdx = orderedDifficulties.indexOf(difficulty);
    const prevDifficulty = currentIdx > 0 ? orderedDifficulties[currentIdx - 1] : null;
    const previousLevelBudgets = this.perPlayerDifficultyBudgets[`partyLevel${partyLevel - 1}`];
    const minXPPerPlayer = difficulty === 'easy'
      ? (previousLevelBudgets?.easyMaxXP ?? 0)
      : (prevDifficulty ? (levelBudgets[`${prevDifficulty}MaxXP`] ?? 0) : 0);
    const totalPlayers = Math.max(1, Number(partyNumber) || 1);
    const minXP = minXPPerPlayer * totalPlayers;
    const maxXP = maxXPPerPlayer * totalPlayers;

    return {
      partyLevel,
      partyNumber: totalPlayers,
      difficulty,
      minXPPerPlayer,
      maxXPPerPlayer,
      minXP,
      maxXP,
    };
  }

  static pickDistinctMonsters(eligibleMonsters, targetTypeCount) {
    const selected = [];
    const copy = [...eligibleMonsters];
    while (selected.length < targetTypeCount && copy.length > 0) {
      const picked = copy.splice(Math.floor(Math.random() * copy.length), 1)[0];
      selected.push(picked);
    }
    return selected;
  }

  static buildXPWeightedCandidates(candidates) {
    if (candidates.length === 0) {
      return [];
    }

    const minXP = Math.max(1, Math.min(...candidates.map((monster) => this.getMonsterXP(monster))));
    return candidates.map((monster) => {
      const ratio = this.getMonsterXP(monster) / minXP;
      return {
        value: monster,
        weight: Math.max(1, ratio * ratio),
      };
    });
  }

  static getCompositionTotalXP(composition) {
    return [...composition.values()].reduce((sum, entry) => sum + (entry.count * this.getMonsterXP(entry)), 0);
  }

  static pickMonsterForGap(candidates, gapXP) {
    if (candidates.length === 0) {
      return null;
    }

    const withinGap = candidates.filter((monster) => this.getMonsterXP(monster) <= gapXP);
    if (withinGap.length > 0) {
      return [...withinGap].sort((a, b) => this.getMonsterXP(b) - this.getMonsterXP(a))[0];
    }

    return [...candidates].sort((a, b) => this.getMonsterXP(b) - this.getMonsterXP(a))[0];
  }

  static incrementCompositionEntry(composition, monster) {
    if (!composition.has(monster.name)) {
      composition.set(monster.name, {
        ...monster,
        count: 0,
      });
    }
    composition.get(monster.name).count += 1;
  }

  static buildGreedyCompositionFromEligible({ eligibleMonsters, budget }) {
    const composition = new Map();
    const validMonsters = eligibleMonsters.filter((monster) => this.getMonsterXP(monster) > 0);
    let totalXP = 0;
    let loops = 0;

    while (totalXP < budget.minXP && loops < 1000) {
      loops += 1;
      const remainingForCap = budget.maxXP - totalXP;
      if (remainingForCap <= 0) {
        break;
      }

      const candidates = validMonsters.filter((monster) => {
        const currentCount = composition.get(monster.name)?.count || 0;
        return currentCount < this.MAX_COUNT_PER_CREATURE && this.getMonsterXP(monster) <= remainingForCap;
      });

      if (candidates.length === 0) {
        break;
      }

      const gapXP = budget.minXP - totalXP;
      const picked = this.pickMonsterForGap(candidates, gapXP);
      if (!picked) {
        break;
      }

      this.incrementCompositionEntry(composition, picked);
      totalXP = this.getCompositionTotalXP(composition);
    }

    return {
      composition,
      totalXP,
    };
  }

  static generateEncounter({ partyLevel, partyNumber, region, habitat, location, selectedDifficulty }) {
    const difficulty = selectedDifficulty || this.weightedPick([
      { value: 'easy', weight: this.DIFFICULTY_WEIGHTS.easy },
      { value: 'moderate', weight: this.DIFFICULTY_WEIGHTS.moderate },
      { value: 'hard', weight: this.DIFFICULTY_WEIGHTS.hard },
      { value: 'deadly', weight: this.DIFFICULTY_WEIGHTS.deadly },
    ]);
    const xpGained = this.experiencePoints[difficulty] ?? 0;

    const budget = this.getEncounterBudget(partyLevel, difficulty, partyNumber);
    if (!budget) {
      return {
        error: 'No XP budget found for this party level and difficulty.',
      };
    }

    const filterByRegion = Boolean(region);
    const filterByHabitat = Boolean(habitat);
    const filterByLocation = !filterByHabitat && Boolean(location);

    const eligibleMonsters = this.monsters.filter((monster) => {
      if (monster.aggressive !== true) {
        return false;
      }
      const monsterRegions = this.getMonsterRegions(monster);
      const monsterHabitats = this.getMonsterHabitats(monster);
      const monsterLocations = this.getMonsterLocations(monster);
      if (filterByRegion && !monsterRegions.includes(region)) {
        return false;
      }
      if (filterByHabitat) {
        return monsterHabitats.includes(habitat);
      }
      if (filterByLocation) {
        return monsterLocations.includes(location);
      }
      return true;
    });

    if (eligibleMonsters.length === 0) {
      return {
        error: 'No monsters match the selected filters.',
        difficulty,
        xpGained,
        budget,
      };
    }

    const typeCount = this.weightedPick([
      { value: 1, weight: this.TYPE_COUNT_WEIGHTS[1] },
      { value: 2, weight: this.TYPE_COUNT_WEIGHTS[2] },
      { value: 3, weight: this.TYPE_COUNT_WEIGHTS[3] },
    ]);

    const targetTypes = Math.min(typeCount, eligibleMonsters.length);
    const chosenTypes = this.pickDistinctMonsters(eligibleMonsters, targetTypes);
    const minTypeXP = Math.min(...chosenTypes.map((monster) => this.getMonsterXP(monster)));

    const composition = new Map();
    let remainingXP = budget.maxXP;
    let loops = 0;

    while (remainingXP >= minTypeXP && loops < 300) {
      loops += 1;
      const candidates = [];
      for (const monster of chosenTypes) {
        const currentCount = composition.get(monster.name)?.count || 0;
        if (currentCount >= this.MAX_COUNT_PER_CREATURE) {
          continue;
        }
        if (this.getMonsterXP(monster) <= remainingXP) {
          candidates.push(monster);
        }
      }
      if (candidates.length === 0) {
        break;
      }

      const weightedCandidates = this.buildXPWeightedCandidates(candidates);

      const selectedMonster = this.weightedPick(weightedCandidates);
      this.incrementCompositionEntry(composition, selectedMonster);
      remainingXP -= this.getMonsterXP(selectedMonster);
    }

    if (composition.size === 0) {
      const fallback = [...eligibleMonsters].sort((a, b) => this.getMonsterXP(b) - this.getMonsterXP(a))
        .find((monster) => this.getMonsterXP(monster) <= budget.maxXP);

      if (!fallback) {
        return {
          error: 'No valid monster can fit inside the XP budget.',
          difficulty,
          xpGained,
          budget,
        };
      }

      composition.set(fallback.name, {
        ...fallback,
        count: 1,
      });
    }

    let totalXP = this.getCompositionTotalXP(composition);

    // Guarantee a valid encounter budget window: minXP <= totalXP <= maxXP.
    let fillLoops = 0;
    while (totalXP < budget.minXP && fillLoops < 500) {
      fillLoops += 1;
      const remainingForCap = budget.maxXP - totalXP;
      if (remainingForCap <= 0) {
        break;
      }

      const candidates = chosenTypes.filter((monster) => {
        const currentCount = composition.get(monster.name)?.count || 0;
        return currentCount < this.MAX_COUNT_PER_CREATURE && this.getMonsterXP(monster) <= remainingForCap;
      });

      if (candidates.length === 0) {
        break;
      }

      const gapXP = budget.minXP - totalXP;
      const picked = this.pickMonsterForGap(candidates, gapXP);
      if (!picked) {
        break;
      }

      this.incrementCompositionEntry(composition, picked);
      totalXP = this.getCompositionTotalXP(composition);
    }

    if (totalXP < budget.minXP || totalXP > budget.maxXP) {
      const rebuilt = this.buildGreedyCompositionFromEligible({
        eligibleMonsters,
        budget,
      });
      if (rebuilt.composition.size > 0) {
        composition.clear();
        rebuilt.composition.forEach((entry, key) => composition.set(key, entry));
        totalXP = rebuilt.totalXP;
      }
    }

    if (totalXP < budget.minXP || totalXP > budget.maxXP) {
      return {
        error: 'Could not generate an encounter within the required XP range for this level and difficulty.',
        difficulty,
        xpGained,
        budget,
      };
    }

    const encounterMonsters = [...composition.values()].map((entry) => ({
      ...entry,
      xpBudget: this.getMonsterXP(entry),
      crBudget: this.getMonsterCR(entry),
      subtotalXP: entry.count * this.getMonsterXP(entry),
    }));

    return {
      difficulty,
      xpGained,
      budget,
      encounterMonsters,
      totalXP,
      remainingXP: budget.maxXP - totalXP,
      filterUsed: filterByHabitat ? `habitat:${habitat}` : filterByLocation ? `location:${location}` : 'none',
    };
  }
}

export default EncounterGenerator;
