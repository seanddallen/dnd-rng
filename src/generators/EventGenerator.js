import { events } from '../data/events';
import { EVENT_HABITAT_OPTIONS } from '../data/habitatOptions';

class EventGenerator {
  static MANA_ZONE_OPTIONS = [
    { value: 'safe', label: 'Safe' },
    { value: 'wild', label: 'Wild' },
    { value: 'dead', label: 'Dead' },
    { value: 'flux', label: 'Flux' },
  ];

  static HABITAT_ONLY_OPTIONS = EVENT_HABITAT_OPTIONS.filter((option) => option.value !== 'urban');
  static HABITAT_OPTIONS = [{ value: '', label: 'Any Habitat' }, ...EVENT_HABITAT_OPTIONS.filter((option) => option.value !== 'urban')];
  static CITY_OPTIONS = [
    { value: '', label: 'Any City Area' },
    { value: 'tavern', label: 'Tavern' },
    { value: 'marketDistrict', label: 'Market District' },
    { value: 'castleDistrict', label: 'Castle District' },
    { value: 'universityDistrict', label: 'University District' },
    { value: 'templeDistrict', label: 'Temple District' },
    { value: 'highDistrict', label: 'High District' },
    { value: 'lowDistrict', label: 'Low District' },
    { value: 'slums', label: 'Slums' },
    { value: 'tomb', label: 'Tomb' },
  ];

  static DIFFICULTY_OPTIONS = ['minor', 'severe', 'catastrophic'];

  static DIFFICULTY_WEIGHTS_BY_ZONE = {
    safe: {
      minor: 90,
      severe: 10,
      catastrophic: 0,
    },
    dead: {
      minor: 60,
      severe: 35,
      catastrophic: 5,
    },
    flux: {
      minor: 80,
      severe: 15,
      catastrophic: 5,
    },
    wild: {
      minor: 45,
      severe: 50,
      catastrophic: 5,
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

  static getRandomFromList(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  static generateEvent({ habitat, city, manaZone, difficulty }) {
    const useCity = Boolean(city);
    const resolvedHabitat = useCity
      ? null
      : (habitat || this.getRandomFromList(this.HABITAT_ONLY_OPTIONS.map((option) => option.value)));
    const pool = useCity
      ? (events.city?.[city] || [])
      : (events.habitats?.[resolvedHabitat] || []);

    if (pool.length === 0) {
      return {
        error: useCity
          ? 'No events configured for that city area.'
          : 'No events configured for that habitat and mana zone.',
      };
    }

    if (useCity) {
      let candidates = difficulty ? pool.filter((entry) => entry.difficulty === difficulty) : [...pool];
      let note = null;
      if (difficulty && candidates.length === 0) {
        candidates = [...pool];
        note = 'No city events matched that difficulty exactly; used available city events.';
      }

      const selected = this.getRandomFromList(candidates);
      return {
        event: selected.event,
        goal: selected.goal,
        difficulty: selected.difficulty,
        city,
        habitat: null,
        manaZone: null,
        note,
      };
    }

    const zone = manaZone || 'safe';
    const zoneWeights = this.DIFFICULTY_WEIGHTS_BY_ZONE[zone] || this.DIFFICULTY_WEIGHTS_BY_ZONE.safe;
    const allowedDifficulties = this.DIFFICULTY_OPTIONS.filter((level) => (zoneWeights[level] || 0) > 0);
    const isSelectedDifficultyAllowed = difficulty && allowedDifficulties.includes(difficulty);

    const resolvedDifficulty = isSelectedDifficultyAllowed
      ? difficulty
      : this.weightedPick(
        this.DIFFICULTY_OPTIONS.map((level) => ({
          value: level,
          weight: zoneWeights[level] || 0,
        })),
      );

    let candidates = pool.filter((entry) => entry.difficulty === resolvedDifficulty);
    let note = null;

    if (difficulty && !isSelectedDifficultyAllowed) {
      note = `Selected difficulty "${difficulty}" is not allowed in ${zone} zone; used zone-weighted difficulty.`;
    }

    if (candidates.length === 0) {
      const fallbackCandidates = pool.filter((entry) => allowedDifficulties.includes(entry.difficulty));
      candidates = fallbackCandidates.length > 0 ? fallbackCandidates : pool;
      note = note
        ? `${note} No events matched exactly, used available zone-allowed events.`
        : 'No events matched that difficulty exactly, used available zone-allowed events.';
    }

    const selected = this.getRandomFromList(candidates);

    return {
      event: selected.event,
      goal: selected.goal,
      difficulty: selected.difficulty,
      habitat: resolvedHabitat,
      city: null,
      manaZone: zone,
      note,
    };
  }
}

export default EventGenerator;

