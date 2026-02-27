export const QUEST_CATALOGUE = [
  {
    type: 'FIND',
    details: 'Recover a missing satchel of spell components from the old mill ruins.',
    difficulty: 'easy',
    reward: '35 GP and a Potion of Healing',
    locations: ['city', 'roadside', 'ruins'],
  },
  {
    type: 'ESCORT',
    details: 'Escort a wounded courier through the deepwood to a safe waystation.',
    difficulty: 'moderate',
    reward: '75 GP and local guide favor',
    locations: ['forest', 'wilderness', 'roadside'],
  },
  {
    type: 'HUNT',
    details: 'Track and drive out a predatory beast threatening nearby farmers.',
    difficulty: 'moderate',
    reward: '90 GP and crafted hide armor',
    locations: ['forest', 'wilderness'],
  },
  {
    type: 'DELVE',
    details: 'Retrieve a lost relic from a collapsed shrine beneath the lower district.',
    difficulty: 'hard',
    reward: '180 GP and one uncommon magic trinket',
    locations: ['dungeon', 'city', 'ruins'],
  },
  {
    type: 'DEFEND',
    details: 'Hold a chokepoint while townsfolk evacuate from an incoming raid.',
    difficulty: 'hard',
    reward: '200 GP and militia commendation',
    locations: ['city', 'roadside'],
  },
];

