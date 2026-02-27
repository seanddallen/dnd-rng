import { SPELL_CATALOGUE, WILD_MAGIC_CATALOGUE } from '../data/spellCatalogue';

class SpellGenerator {
  static MASTERY_LEVEL_OPTIONS = [
    { value: 'cantrips', label: 'Cantrips' },
    { value: 'novice', label: 'Novice' },
    { value: 'expert', label: 'Expert' },
    { value: 'master', label: 'Master' },
    { value: 'commander', label: 'Commander' },
  ];

  static COLOR_OPTIONS = [
    { value: 'white', label: 'White' },
    { value: 'blue', label: 'Blue' },
    { value: 'black', label: 'Black' },
    { value: 'red', label: 'Red' },
    { value: 'green', label: 'Green' },
  ];

  static CLASS_OPTIONS = [
    { value: '', label: 'Any Class' },
    ...Array.from(
      new Set(
        Object.values(SPELL_CATALOGUE)
          .flatMap((entry) => (Array.isArray(entry) ? entry : []))
          .map((spell) => String(spell.class || '').trim().toLowerCase())
          .filter(Boolean),
      ),
    )
      .sort((a, b) => a.localeCompare(b))
      .map((value) => ({
        value,
        label: value[0].toUpperCase() + value.slice(1),
      })),
  ];

  static SPELL_CATALOGUE = SPELL_CATALOGUE;
  static WILD_MAGIC_CATALOGUE = WILD_MAGIC_CATALOGUE;

  static getRandomFromList(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  static getMatchingSpells({ color, masteryLevel, spellClass }) {
    const masteryPool = this.SPELL_CATALOGUE[masteryLevel] || [];
    const selectedClass = String(spellClass || '').trim().toLowerCase();
    const classPool = selectedClass
      ? masteryPool.filter((spell) => String(spell.class || '').trim().toLowerCase() === selectedClass)
      : [];
    const colorPool = masteryPool.filter((spell) => (spell.colors || []).includes(color));
    const spells = selectedClass ? classPool : colorPool;
    return {
      spells,
      selectedClass,
    };
  }

  static generateSpell({ color, masteryLevel, spellClass }) {
    const { spells: finalPool, selectedClass } = this.getMatchingSpells({ color, masteryLevel, spellClass });

    if (finalPool.length === 0) {
      if (selectedClass) {
        return {
          error: `No ${masteryLevel} spells found for class ${selectedClass}.`,
        };
      }
      return {
        error: `No ${masteryLevel} spells found for ${color}.`,
      };
    }

    const selected = this.getRandomFromList(finalPool);
    return {
      ...selected,
      masteryLevel,
      selectedClass: selectedClass || null,
    };
  }

  static listSpells({ color, masteryLevel, spellClass }) {
    const { spells, selectedClass } = this.getMatchingSpells({ color, masteryLevel, spellClass });
    if (spells.length === 0) {
      if (selectedClass) {
        return {
          error: `No ${masteryLevel} spells found for class ${selectedClass}.`,
        };
      }
      return {
        error: `No ${masteryLevel} spells found for ${color}.`,
      };
    }

    return {
      spells,
      masteryLevel,
      selectedClass: selectedClass || null,
      color: selectedClass ? null : color,
    };
  }

  static generateWildMagic() {
    if (!Array.isArray(this.WILD_MAGIC_CATALOGUE) || this.WILD_MAGIC_CATALOGUE.length === 0) {
      return {
        error: 'Wild Magic catalogue is empty.',
      };
    }

    return this.getRandomFromList(this.WILD_MAGIC_CATALOGUE);
  }

  static generateRandomSpellFromCatalogue() {
    const pooled = Object.entries(this.SPELL_CATALOGUE)
      .flatMap(([masteryLevel, spells]) => (
        (Array.isArray(spells) ? spells : []).map((spell) => ({
          ...spell,
          masteryLevel,
        }))
      ));

    if (pooled.length === 0) {
      return {
        error: 'Spell catalogue is empty.',
      };
    }

    return this.getRandomFromList(pooled);
  }
}

export default SpellGenerator;
