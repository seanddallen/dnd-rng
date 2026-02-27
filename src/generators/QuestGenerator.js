import { QUEST_CATALOGUE } from '../data/questCatalogue';

class QuestGenerator {
  static QUEST_CATALOGUE = QUEST_CATALOGUE;

  static DIFFICULTY_WEIGHTS = {
    easy: 45,
    moderate: 35,
    hard: 20,
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

  static generateQuest({ location }) {
    const byLocation = location
      ? this.QUEST_CATALOGUE.filter((quest) => !quest.locations || quest.locations.includes(location))
      : this.QUEST_CATALOGUE;

    const source = byLocation.length > 0 ? byLocation : this.QUEST_CATALOGUE;
    const weightedDifficulty = this.weightedPick(
      Object.entries(this.DIFFICULTY_WEIGHTS).map(([difficulty, weight]) => ({
        value: difficulty,
        weight,
      })),
    );

    const withDifficulty = source.filter((quest) => quest.difficulty === weightedDifficulty);
    const pickPool = withDifficulty.length > 0 ? withDifficulty : source;

    return this.getRandomFromList(pickPool);
  }
}

export default QuestGenerator;

