import { questHookCatalogue, questHookTemplateFillers } from '../data/questHooksCatalogue';

class QuestGenerator {
  static QUEST_TYPE_OPTIONS = [
    { value: '', label: 'Auto (Any)' },
    { value: 'random', label: 'Random' },
    { value: 'rescue', label: 'Rescue' },
    { value: 'retrieve', label: 'Retrieve' },
    { value: 'investigate', label: 'Investigate' },
    { value: 'eliminate', label: 'Eliminate' },
    { value: 'explore', label: 'Explore' },
    { value: 'escort', label: 'Escort' },
    { value: 'prevent', label: 'Prevent' },
    { value: 'survive', label: 'Survive' },
    { value: 'revenge', label: 'Revenge' },
    { value: 'heist', label: 'Heist' },
    { value: 'test', label: 'Test' },
    { value: 'political', label: 'Political' },
    { value: 'moralDilemma', label: 'Moral Dilemma' },
  ];

  static RANDOM_FORMULA_OPTIONS = {
    questTypes: [
      'Rescue',
      'Retrieve',
      'Investigate',
      'Eliminate',
      'Explore',
      'Escort',
      'Prevent',
      'Survive',
      'Revenge',
      'Heist',
      'Test / Trial',
      'Political',
    ],
    targets: [
      'kidnapped noble',
      'missing child',
      'stolen relic',
      'ancient artifact',
      'dangerous monster',
      'bandit leader',
      'lost caravan',
      'magical creature',
      'secret documents',
      'cursed item',
      'hidden treasure',
      'rogue mage',
      'escaped prisoner',
      'mysterious stranger',
      'lost expedition',
      'rare resource',
      'sacred relic',
      'powerful weapon',
      'secret map',
      'rival adventurer',
    ],
    locations: [
      'abandoned mine',
      'ruined tower',
      'forest shrine',
      'mountain pass',
      'swamp ruins',
      'coastal cave',
      'haunted mansion',
      'underground catacombs',
      'hidden valley',
      'ancient battlefield',
      'old fortress',
      'jungle temple',
      'desert ruin',
      'frozen cavern',
      'sunken shipwreck',
      'city sewers',
      "wizard's tower",
      'abandoned village',
      'bandit camp',
      'remote monastery',
    ],
    complications: [
      'A rival adventuring party is after the same goal.',
      'The target is cursed.',
      'The location is haunted.',
      'Someone in town is secretly involved.',
      "The target doesn't want to be rescued.",
      'A powerful storm is approaching.',
      'The enemy knows the party is coming.',
      'The objective is guarded by traps.',
      'Time is running out.',
      'The quest giver is hiding something.',
      'Another faction is competing.',
      'The area is magically unstable.',
      'The target turns out to be innocent.',
      'The treasure is protected by a puzzle.',
      'A monster stalks the area.',
      'The party must stay unnoticed.',
      'The path is blocked by natural hazards.',
      'The objective is not what it seems.',
      'Someone betrays the party.',
      'The mission must remain secret.',
    ],
    twists: [
      'The quest giver betrays the party.',
      'The objective moves to a new location.',
      'The villain escapes early.',
      'The reward is cursed.',
      'A hidden ally appears.',
      'The party is framed for a crime.',
      'A natural disaster strikes.',
      'A powerful monster arrives unexpectedly.',
      'A secret passage changes the plan.',
      'The target is not what it seemed.',
      'The mission becomes far more dangerous.',
      'The party gains unexpected fame.',
      'The quest giver is secretly working for the villain.',
      'Another group completes part of the objective first.',
      'The target refuses to cooperate with the party.',
      'The mission was a test arranged by a powerful faction.',
      'The objective is destroyed or lost before the party arrives.',
      'An unexpected ally demands a share of the reward.',
      'The party discovers a second, hidden objective tied to the mission.',
      'Completing the quest causes a new and greater problem.',
    ],
  };

  static DIFFICULTY_WEIGHTS = {
    easy: 45,
    standard: 35,
    deadly: 15,
    epic: 5,
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

  static toTitleCase(value) {
    if (!value) return '';
    return value[0].toUpperCase() + value.slice(1);
  }

  static generateRandomFormulaQuest() {
    const randomQuestType = this.getRandomFromList(this.RANDOM_FORMULA_OPTIONS.questTypes);
    const target = this.getRandomFromList(this.RANDOM_FORMULA_OPTIONS.targets);
    const questLocation = this.getRandomFromList(this.RANDOM_FORMULA_OPTIONS.locations);
    const complication = this.getRandomFromList(this.RANDOM_FORMULA_OPTIONS.complications);
    const extraTwist = this.getRandomFromList(this.RANDOM_FORMULA_OPTIONS.twists);

    return {
      type: randomQuestType,
      details: `${target} at ${questLocation}. ${complication} ${extraTwist}`,
    };
  }

  static generateQuest({ location, questType }) {
    const autoTypeOptions = this.QUEST_TYPE_OPTIONS
      .map((entry) => entry.value)
      .filter((value) => Boolean(value));
    const resolvedQuestType = questType || this.getRandomFromList(autoTypeOptions);
    const isRandomFormula = resolvedQuestType === 'random';
    const availableTypes = Object.entries(questHookCatalogue)
      .filter(([, templates]) => Array.isArray(templates) && templates.length > 0)
      .map(([type]) => type);
    const selectedType = !isRandomFormula && resolvedQuestType && availableTypes.includes(resolvedQuestType)
      ? resolvedQuestType
      : this.getRandomFromList(availableTypes);
    const templates = isRandomFormula ? [] : (questHookCatalogue[selectedType] || []);
    const selectedTemplate = templates.length > 0 ? this.getRandomFromList(templates) : 'No quest hook available.';
    const fillTemplate = isRandomFormula ? null : questHookTemplateFillers[selectedType];
    const randomFormulaQuest = isRandomFormula ? this.generateRandomFormulaQuest() : null;
    const details = randomFormulaQuest
      ? randomFormulaQuest.details
      : (typeof fillTemplate === 'function' ? fillTemplate(selectedTemplate) : selectedTemplate);
    const resolvedType = randomFormulaQuest
      ? randomFormulaQuest.type
      : this.toTitleCase(selectedType);
    const weightedDifficulty = this.weightedPick(
      Object.entries(this.DIFFICULTY_WEIGHTS).map(([difficulty, weight]) => ({
        value: difficulty,
        weight,
      })),
    );
    return {
      type: resolvedType,
      details,
      difficulty: weightedDifficulty,
      reward: 'Pending reward',
      habitat: location || 'Any Habitat',
    };
  }
}

export default QuestGenerator;
