export const CALCULATIONS_CATALOGUE = {
  combat: [
    {
      id: 'armor-class',
      name: 'Armor Class (AC)',
      formula: 'Equipment AC + AC bonuses (perks, items, spells, etc)',
    },
    {
      id: 'resist-class',
      name: 'Resist Class (RC)',
      formula: 'Equipment RC + RC bonuses (perks, items, spells, etc)',
    },
    {
      id: 'attack-roll',
      name: 'Attack Roll',
      formula: 'd20 + Attack Bonus (AB)',
    },
    {
      id: 'attack-bonus',
      name: 'Attack Bonus (AB)',
      formula: 'd20 + ability modifier (STR/DEX) + Mastery Level + Attack bonuses',
    },
    {
      id: 'damage',
      name: 'Damage',
      formula: 'damage dice + Damage Bonus (DB)',
    },
    {
      id: 'damage-bonus',
      name: 'Damage Bonus (DB)',
      formula: 'damage bonuses from weapons, perks, spells, etc.',
    },
    {
      id: 'initiative',
      name: 'Initiative',
      formula: 'd20 + Dexterity modifier + bonuses',
      notes: 'Determines turn order.',
    },
  ],
  checks: [
    {
      id: 'ability-check',
      name: 'Ability Check',
      formula: 'd20 + skill modifier',
      notes: 'Compared against DC.',
    },
    {
      id: 'saving-throw',
      name: 'Saving Throw',
      formula: 'd20 + saving throw modifier (or RC). Compare against save DC.',
    },
    {
      id: 'passive-perception',
      name: 'Passive Perception',
      formula: '10 + Perception modifier',
    },
  ],
  spellcasting: [
    {
      id: 'spell-roll',
      name: 'Spell Roll',
      formula: 'd20 + Attack/Force Bonus (FB)',
    },
    {
      id: 'force-bonus',
      name: 'Force Bonus (FB)',
      formula: 'Force Modifier (INT/WIS/CHA) + Mastery Level + Force bonuses',
    },
    {
      id: 'spell-save-dc',
      name: 'Spell Save DC',
      formula: '8 + Mastery Level + spellcasting ability modifier',
      notes: 'Target must meet or beat this value.',
    },
  ],
  progression: [
    {
      id: 'hit-points-levelup',
      name: 'HP at Level Up',
      formula: 'HP/L + Constitution modifier',
    },
    {
      id: 'mana-points-levelup',
      name: 'MP at Level Up',
      formula: 'MP/L',
    },
  ],
};

