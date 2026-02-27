export const monsterCatalogue = [
  {
    name: "Awakened Shrub",
    description: "Awakened Shrub is an animated plant creature with predatory or defensive instincts. It is small in size and typically represents a low-threat creature. It is commonly encountered in forest environments.",
    type: "plant",
    size: "small",
    cr: 0.125,
    xp: 10,
    initiative: -1,
    habitats: [
      "forest"
    ],
    locations: null,
    regions: ["Faerun", "Feywild", "Erwyld"],
    aggressive: true
  },
  {
    name: "Baboon",
    description: "Baboon is a natural creature that relies on instinct and physical prowess. It is small in size and typically represents a low-threat creature. It is commonly encountered in forest environments.",
    type: "beast",
    size: "small",
    cr: 0.125,
    xp: 10,
    initiative: 2,
    habitats: [
      "forest"
    ],
    locations: null,
    regions: ["Faerun", "Erwyld"],
    aggressive: true
  },
  {
    name: "Badger",
    description: "Badger is a natural creature that relies on instinct and physical prowess. It is tiny in size and typically represents a low-threat creature. It is commonly encountered in forest environments.",
    type: "beast",
    size: "tiny",
    cr: 0.125,
    xp: 10,
    initiative: 0,
    habitats: [
      "forest", "plains", "grassland"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Bat",
    description: "Bat is a natural creature that relies on instinct and physical prowess. It is tiny in size and typically represents a low-threat creature. It is commonly encountered in forest and mountain environments.",
    type: "beast",
    size: "tiny",
    cr: 0.125,
    xp: 10,
    initiative: 2,
    habitats: [
      "forest",
      "mountain",
      "underdark",
      "urban"
    ],
    locations: null,
    regions: ["Faerun", "Phyrexia", "Erwyld", "Zendikar"],
    aggressive: true
  },
  {
    name: "Cat",
    description: "Cat is a natural creature that relies on instinct and physical prowess. It is tiny in size and typically represents a low-threat creature. It is commonly encountered in desert and forest environments.",
    type: "beast",
    size: "tiny",
    cr: 0.0,
    xp: 10,
    initiative: 2,
    habitats: [
      "desert",
      "forest",
      "grassland",
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: false
  },
  {
    name: "Commoner",
    description: "Commoner is a sentient humanoid opponent that uses tactics and equipment. It is medium in size and typically represents a low-threat creature. It is commonly encountered in any environments.",
    type: "humanoid",
    size: "medium",
    cr: 0.0,
    xp: 10,
    initiative: 0,
    habitats: [
      "any"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: false
  },
  {
    name: "Crab",
    description: "Crab is a natural creature that relies on instinct and physical prowess. It is tiny in size and typically represents a low-threat creature. It is commonly encountered in coastal and underwater environments.",
    type: "beast",
    size: "tiny",
    cr: 0.125,
    xp: 10,
    initiative: 0,
    habitats: [
      "coastal",
      "underwater"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Deer",
    description: "Deer is a natural creature that relies on instinct and physical prowess. It is medium in size and typically represents a low-threat creature. It is commonly encountered in forest and grassland environments.",
    type: "beast",
    size: "medium",
    cr: 0.125,
    xp: 10,
    initiative: 3,
    habitats: [
      "forest",
      "grassland"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: false
  },
  {
    name: "Eagle",
    description: "Eagle is a natural creature that relies on instinct and physical prowess. It is small in size and typically represents a low-threat creature. It is commonly encountered in coastal and grassland environments.",
    type: "beast",
    size: "small",
    cr: 0.125,
    xp: 10,
    initiative: 2,
    habitats: [
      "coastal",
      "grassland",
      "forest",
      "hill",
      "mountain"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Frog",
    description: "Frog is a natural creature that relies on instinct and physical prowess. It is tiny in size and typically represents a low-threat creature. It is commonly encountered in forest and swamp environments.",
    type: "beast",
    size: "tiny",
    cr: 0.0,
    xp: 10,
    initiative: 1,
    habitats: [
      "forest",
      "swamp"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: false
  },
  {
    name: "Giant Fire Beetle",
    description: "Giant Fire Beetle is a massive combatant that dominates space with strength and reach. It is small in size and typically represents a low-threat creature. It is commonly encountered in underdark environments.",
    type: "beast",
    size: "small",
    cr: 0.125,
    xp: 10,
    initiative: 0,
    habitats: [
      "underdark",
      "grassland"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Giant Fly",
    description: "Giant Fly is a massive combatant that dominates space with strength and reach. It is large in size and typically represents a low-threat creature.",
    type: "beast",
    size: "large",
    cr: 0.0,
    xp: 10,
    initiative: 1,
    habitats: null,
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Goat",
    description: "Goat is a natural creature that relies on instinct and physical prowess. It is medium in size and typically represents a low-threat creature. It is commonly encountered in grassland and hill environments.",
    type: "beast",
    size: "medium",
    cr: 0.0,
    xp: 10,
    initiative: 0,
    habitats: [
      "grassland",
      "hill",
      "mountain"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Hawk",
    description: "Hawk is a natural creature that relies on instinct and physical prowess. It is tiny in size and typically represents a low-threat creature. It is commonly encountered in arctic and coastal environments.",
    type: "beast",
    size: "tiny",
    cr: 0.125,
    xp: 10,
    initiative: 3,
    habitats: [
      "arctic",
      "coastal",
      "forest",
      "grassland",
      "hill",
      "mountain"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Homunculus",
    description: "Homunculus is an artificial construct built for relentless action. It is tiny in size and typically represents a low-threat creature. It is commonly encountered in any environments.",
    type: "construct",
    size: "tiny",
    cr: 0.125,
    xp: 10,
    initiative: 2,
    habitats: [
      "any"
    ],
    locations: null,
    regions: ["Faerun", "Phyrexia"],
    aggressive: true
  },
  {
    name: "Hyena",
    description: "Hyena is a natural creature that relies on instinct and physical prowess. It is medium in size and typically represents a low-threat creature. It is commonly encountered in desert and forest environments.",
    type: "beast",
    size: "medium",
    cr: 0.125,
    xp: 10,
    initiative: 1,
    habitats: [
      "desert",
      "forest",
      "grassland",
      "hill"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Jackal",
    description: "Jackal is a natural creature that relies on instinct and physical prowess. It is small in size and typically represents a low-threat creature. It is commonly encountered in desert and grassland environments.",
    type: "beast",
    size: "small",
    cr: 0.0,
    xp: 10,
    initiative: 2,
    habitats: [
      "desert",
      "grassland"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Lemure",
    description: "Lemure is a malevolent fiend infused with infernal or abyssal power. It is medium in size and typically represents a low-threat creature. It is commonly encountered in planar nine hells environments.",
    type: "fiend",
    size: "medium",
    cr: 0.0,
    xp: 10,
    initiative: -3,
    habitats: [
      "gehenna"
    ],
    locations: null,
    regions: ["Gehenna"],
    aggressive: false
  },
  {
    name: "Lizard",
    description: "Lizard is a natural creature that relies on instinct and physical prowess. It is tiny in size and typically represents a low-threat creature. It is commonly encountered in coastal and desert environments.",
    type: "beast",
    size: "tiny",
    cr: 0.0,
    xp: 10,
    initiative: 0,
    habitats: [
      "coastal",
      "desert",
      "forest",
      "swamp",
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: false
  },
  {
    name: "Octopus",
    description: "Octopus is a natural creature that relies on instinct and physical prowess. It is small in size and typically represents a low-threat creature. It is commonly encountered in underwater environments.",
    type: "beast",
    size: "small",
    cr: 0.125,
    xp: 10,
    initiative: 2,
    habitats: [
      "underwater"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Owl",
    description: "Owl is a natural creature that relies on instinct and physical prowess. It is tiny in size and typically represents a low-threat creature. It is commonly encountered in arctic and forest environments.",
    type: "beast",
    size: "tiny",
    cr: 0.125,
    xp: 10,
    initiative: 1,
    habitats: [
      "arctic",
      "forest",
      "hill"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Piranha",
    description: "Piranha is a natural creature that relies on instinct and physical prowess. It is tiny in size and typically represents a low-threat creature. It is commonly encountered in underwater environments.",
    type: "beast",
    size: "tiny",
    cr: 0.125,
    xp: 10,
    initiative: 3,
    habitats: [
      "underwater"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Rat",
    description: "Rat is a natural creature that relies on instinct and physical prowess. It is tiny in size and typically represents a low-threat creature. It is commonly encountered in forest and swamp environments.",
    type: "beast",
    size: "tiny",
    cr: 0.125,
    xp: 10,
    initiative: 0,
    habitats: [
      "forest",
      "swamp",
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Raven",
    description: "Raven is a natural creature that relies on instinct and physical prowess. It is tiny in size and typically represents a low-threat creature. It is commonly encountered in hill and swamp environments.",
    type: "beast",
    size: "tiny",
    cr: 0.125,
    xp: 10,
    initiative: 2,
    habitats: [
      "hill",
      "swamp",
      "urban",
      "forest"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Scorpion",
    description: "Scorpion is a natural creature that relies on instinct and physical prowess. It is tiny in size and typically represents a low-threat creature. It is commonly encountered in desert environments.",
    type: "beast",
    size: "tiny",
    cr: 0.125,
    xp: 10,
    initiative: 0,
    habitats: [
      "desert",
      "mountain"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Seahorse",
    description: "Seahorse is a natural creature that relies on instinct and physical prowess. It is tiny in size and typically represents a low-threat creature. It is commonly encountered in underwater environments.",
    type: "beast",
    size: "tiny",
    cr: 0.125,
    xp: 10,
    initiative: 1,
    habitats: [
      "underwater"
    ],
    locations: null,
    regions: ["Islands"],
    aggressive: false
  },
  {
    name: "Shrieker Fungus",
    description: "Shrieker Fungus is an animated plant creature with predatory or defensive instincts. It is medium in size and typically represents a low-threat creature. It is commonly encountered in underdark environments.",
    type: "plant",
    size: "medium",
    cr: 0.125,
    xp: 10,
    initiative: -5,
    habitats: [
      "underdark"
    ],
    locations: null,
    regions: ["Faerun", "Phyrexia"],
    aggressive: true
  },
  {
    name: "Spider",
    description: "Spider is a natural creature that relies on instinct and physical prowess. It is tiny in size and typically represents a low-threat creature. It is commonly encountered in desert and forest environments.",
    type: "beast",
    size: "tiny",
    cr: 0.125,
    xp: 10,
    initiative: 2,
    habitats: [
      "desert",
      "forest",
      "swamp",
      "underdark",
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Vulture",
    description: "Vulture is a natural creature that relies on instinct and physical prowess. It is medium in size and typically represents a low-threat creature. It is commonly encountered in desert and hill environments.",
    type: "beast",
    size: "medium",
    cr: 0.125,
    xp: 10,
    initiative: 0,
    habitats: [
      "desert",
      "hill"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Weasel",
    description: "Weasel is a natural creature that relies on instinct and physical prowess. It is tiny in size and typically represents a low-threat creature. It is commonly encountered in forest and grassland environments.",
    type: "beast",
    size: "tiny",
    cr: 0.125,
    xp: 10,
    initiative: 3,
    habitats: [
      "forest",
      "grassland",
      "hill"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Bandit",
    description: "Bandit is a trained humanoid combatant using weapons, discipline, and teamwork. It is medium in size and typically represents a low-threat creature. It is commonly encountered in any environments.",
    type: "humanoid",
    size: "medium",
    cr: 0.125,
    xp: 25,
    initiative: 1,
    habitats: [
      "any"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Blood Hawk",
    description: "Blood Hawk is a natural creature that relies on instinct and physical prowess. It is small in size and typically represents a low-threat creature. It is commonly encountered in arctic and coastal environments.",
    type: "beast",
    size: "small",
    cr: 0.125,
    xp: 25,
    initiative: 2,
    habitats: [
      "arctic",
      "coastal",
      "forest",
      "grassland",
      "hill",
      "mountain"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Camel",
    description: "Camel is a natural creature that relies on instinct and physical prowess. It is large in size and typically represents a low-threat creature. It is commonly encountered in desert environments.",
    type: "beast",
    size: "large",
    cr: 0.125,
    xp: 25,
    initiative: -1,
    habitats: [
      "desert"
    ],
    locations: null,
    regions: ["Phyrexia"],
    aggressive: false
  },
  {
    name: "Cultist",
    description: "Cultist is a trained humanoid combatant using weapons, discipline, and teamwork. It is medium in size and typically represents a low-threat creature. It is commonly encountered in any environments.",
    type: "humanoid",
    size: "medium",
    cr: 0.125,
    xp: 25,
    initiative: 1,
    habitats: [
      "any"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Flying Snake",
    description: "Flying Snake is a monstrous predator whose form and instincts defy natural order. It is tiny in size and typically represents a low-threat creature. It is commonly encountered in desert and forest environments.",
    type: "monstrosity",
    size: "tiny",
    cr: 0.125,
    xp: 25,
    initiative: 2,
    habitats: [
      "desert",
      "forest",
      "grassland"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Giant Crab",
    description: "Giant Crab is a massive combatant that dominates space with strength and reach. It is medium in size and typically represents a low-threat creature. It is commonly encountered in coastal and underwater environments.",
    type: "beast",
    size: "medium",
    cr: 0.125,
    xp: 25,
    initiative: 1,
    habitats: [
      "coastal",
      "underwater"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Giant Rat",
    description: "Giant Rat is a massive combatant that dominates space with strength and reach. It is small in size and typically represents a low-threat creature. It is commonly encountered in forest and swamp environments.",
    type: "beast",
    size: "small",
    cr: 0.125,
    xp: 25,
    initiative: 3,
    habitats: [
      "forest",
      "swamp",
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Giant Weasel",
    description: "Giant Weasel is a massive combatant that dominates space with strength and reach. It is medium in size and typically represents a low-threat creature. It is commonly encountered in forest and grassland environments.",
    type: "beast",
    size: "medium",
    cr: 0.125,
    xp: 25,
    initiative: 3,
    habitats: [
      "forest",
      "grassland",
      "hill"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Goblin Minion",
    description: "Goblin Minion is a goblinoid raider that uses pack tactics, ambushes, and battlefield pressure. It is small in size and typically represents a low-threat creature. It is commonly encountered in forest and grassland environments.",
    type: "fey",
    size: "small",
    cr: 0.125,
    xp: 25,
    initiative: 2,
    habitats: [
      "forest",
      "grassland",
      "hill",
      "planar:acheron",
      "underdark"
    ],
    locations: null,
    regions: ["Faerun", "Phyrexia"],
    aggressive: true
  },
  {
    name: "Guard",
    description: "Guard is a trained humanoid combatant using weapons, discipline, and teamwork. It is medium in size and typically represents a low-threat creature. It is commonly encountered in any environments.",
    type: "humanoid",
    size: "medium",
    cr: 0.125,
    xp: 25,
    initiative: 1,
    habitats: [
      "any"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Kobold Warrior",
    description: "Kobold Warrior is a draconic threat with cunning instincts and overwhelming presence. It is small in size and typically represents a low-threat creature. It is commonly encountered in arctic and coastal environments.",
    type: "dragon",
    size: "small",
    cr: 0.125,
    xp: 25,
    initiative: 2,
    habitats: [
      "arctic",
      "coastal",
      "desert",
      "forest",
      "hill",
      "mountain",
      "swamp",
      "underdark",
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Mastiff",
    description: "Mastiff is a natural creature that relies on instinct and physical prowess. It is medium in size and typically represents a low-threat creature. It is commonly encountered in forest and hill environments.",
    type: "beast",
    size: "medium",
    cr: 0.125,
    xp: 25,
    initiative: 2,
    habitats: [
      "forest",
      "hill",
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Merfolk Skirmisher",
    description: "Merfolk Skirmisher is an elemental being formed from raw primal forces. It is medium in size and typically represents a low-threat creature. It is commonly encountered in coastal and underwater environments.",
    type: "elemental",
    size: "medium",
    cr: 0.125,
    xp: 25,
    initiative: 1,
    habitats: [
      "coastal",
      "underwater"
    ],
    locations: null,
    regions: ["Islands"],
    aggressive: true
  },
  {
    name: "Mule",
    description: "Mule is a natural creature that relies on instinct and physical prowess. It is medium in size and typically represents a low-threat creature. It is commonly encountered in desert and hill environments.",
    type: "beast",
    size: "medium",
    cr: 0.125,
    xp: 25,
    initiative: 0,
    habitats: [
      "desert",
      "hill",
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: false
  },
  {
    name: "Noble",
    description: "Noble is a sentient humanoid opponent that uses tactics and equipment. It is medium in size and typically represents a low-threat creature. It is commonly encountered in any environments.",
    type: "humanoid",
    size: "medium",
    cr: 0.125,
    xp: 25,
    initiative: 1,
    habitats: [
      "any"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: false
  },
  {
    name: "Pony",
    description: "Pony is a natural creature that relies on instinct and physical prowess. It is medium in size and typically represents a low-threat creature. It is commonly encountered in grassland and urban environments.",
    type: "beast",
    size: "medium",
    cr: 0.125,
    xp: 25,
    initiative: 0,
    habitats: [
      "grassland",
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: false
  },
  {
    name: "Stirge",
    description: "Stirge is a monstrous predator whose form and instincts defy natural order. It is tiny in size and typically represents a low-threat creature. It is commonly encountered in desert and forest environments.",
    type: "monstrosity",
    size: "tiny",
    cr: 0.125,
    xp: 25,
    initiative: 3,
    habitats: [
      "desert",
      "forest",
      "grassland",
      "hill",
      "mountain",
      "swamp",
      "underdark",
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Venomous Snake",
    description: "Venomous Snake is a natural creature that relies on instinct and physical prowess. It is tiny in size and typically represents a low-threat creature. It is commonly encountered in coastal and desert environments.",
    type: "beast",
    size: "tiny",
    cr: 0.125,
    xp: 25,
    initiative: 2,
    habitats: [
      "coastal",
      "desert",
      "forest",
      "grassland",
      "hill",
      "swamp"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Animated Flying Sword",
    description: "Animated Flying Sword is an artificial construct built for relentless action. It is small in size and typically represents a low-threat creature. It is commonly encountered in urban environments.",
    type: "construct",
    size: "small",
    cr: 0.25,
    xp: 50,
    initiative: 2,
    habitats: [
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Axe Beak",
    description: "Axe Beak is a monstrous predator whose form and instincts defy natural order. It is large in size and typically represents a low-threat creature. It is commonly encountered in arctic and grassland environments.",
    type: "monstrosity",
    size: "large",
    cr: 0.25,
    xp: 50,
    initiative: 1,
    habitats: [
      "arctic",
      "grassland",
      "hill"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Blink Dog",
    description: "Blink Dog is a whimsical and dangerous fey creature tied to primal magic. It is medium in size and typically represents a low-threat creature. It is commonly encountered in forest and planar feywild environments.",
    type: "fey",
    size: "medium",
    cr: 0.25,
    xp: 50,
    initiative: 3,
    habitats: [
      "forest",
      "planar:feywild"
    ],
    locations: null,
    regions: ["Feywild"],
    aggressive: true
  },
  {
    name: "Boar",
    description: "Boar is a natural creature that relies on instinct and physical prowess. It is medium in size and typically represents a low-threat creature. It is commonly encountered in forest and grassland environments.",
    type: "beast",
    size: "medium",
    cr: 0.25,
    xp: 50,
    initiative: 0,
    habitats: [
      "forest",
      "grassland",
      "hill"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Constrictor Snake",
    description: "Constrictor Snake is a natural creature that relies on instinct and physical prowess. It is large in size and typically represents a low-threat creature. It is commonly encountered in desert and forest environments.",
    type: "beast",
    size: "large",
    cr: 0.25,
    xp: 50,
    initiative: 2,
    habitats: [
      "forest",
      "swamp",
      "underwater"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Dretch",
    description: "Dretch is a malevolent fiend infused with infernal or abyssal power. It is small in size and typically represents a low-threat creature. It is commonly encountered in planar abyss environments.",
    type: "fiend",
    size: "small",
    cr: 0.25,
    xp: 50,
    initiative: 0,
    habitats: [
      "planar:abyss"
    ],
    locations: null,
    regions: ["Shadowfell"],
    aggressive: true
  },
  {
    name: "Elk",
    description: "Elk is a natural creature that relies on instinct and physical prowess. It is large in size and typically represents a low-threat creature. It is commonly encountered in forest and grassland environments.",
    type: "beast",
    size: "large",
    cr: 0.25,
    xp: 50,
    initiative: 0,
    habitats: [
      "forest",
      "grassland",
      "hill"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: false
  },
  {
    name: "Giant Badger",
    description: "Giant Badger is a massive combatant that dominates space with strength and reach. It is medium in size and typically represents a low-threat creature. It is commonly encountered in forest environments.",
    type: "beast",
    size: "medium",
    cr: 0.25,
    xp: 50,
    initiative: 0,
    habitats: [
      "forest",
      "grassland"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Giant Bat",
    description: "Giant Bat is a massive combatant that dominates space with strength and reach. It is large in size and typically represents a low-threat creature. It is commonly encountered in forest and mountain environments.",
    type: "beast",
    size: "large",
    cr: 0.25,
    xp: 50,
    initiative: 3,
    habitats: [
      "forest",
      "mountain",
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Giant Centipede",
    description: "Giant Centipede is a massive combatant that dominates space with strength and reach. It is small in size and typically represents a low-threat creature. It is commonly encountered in underdark and urban environments.",
    type: "beast",
    size: "small",
    cr: 0.25,
    xp: 50,
    initiative: 2,
    habitats: [
      "underdark",
      "urban",
      "forest"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Giant Frog",
    description: "Giant Frog is a massive combatant that dominates space with strength and reach. It is medium in size and typically represents a low-threat creature. It is commonly encountered in forest and swamp environments.",
    type: "beast",
    size: "medium",
    cr: 0.25,
    xp: 50,
    initiative: 1,
    habitats: [
      "forest",
      "swamp"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Giant Lizard",
    description: "Giant Lizard is a massive combatant that dominates space with strength and reach. It is large in size and typically represents a low-threat creature. It is commonly encountered in coastal and desert environments.",
    type: "beast",
    size: "large",
    cr: 0.25,
    xp: 50,
    initiative: 1,
    habitats: [
      "coastal",
      "desert",
      "forest",
      "swamp",
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Giant Owl",
    description: "Giant Owl is a massive combatant that dominates space with strength and reach. It is large in size and typically represents a low-threat creature. It is commonly encountered in arctic and forest environments.",
    type: "celestial",
    size: "large",
    cr: 0.25,
    xp: 50,
    initiative: 2,
    habitats: [
      "arctic",
      "forest",
      "hill"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Giant Venomous Snake",
    description: "Giant Venomous Snake is a massive combatant that dominates space with strength and reach. It is medium in size and typically represents a low-threat creature. It is commonly encountered in coastal and desert environments.",
    type: "beast",
    size: "medium",
    cr: 0.25,
    xp: 50,
    initiative: 4,
    habitats: [
      "coastal",
      "desert",
      "forest",
      "grassland",
      "hill",
      "swamp"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Giant Wolf Spider",
    description: "Giant Wolf Spider is a hunting predator that isolates prey and attacks as a coordinated threat. It is medium in size and typically represents a low-threat creature. It is commonly encountered in desert and forest environments.",
    type: "beast",
    size: "medium",
    cr: 0.25,
    xp: 50,
    initiative: 3,
    habitats: [
      "desert",
      "forest",
      "grassland",
      "swamp",
      "underdark",
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Goat of Traveling",
    description: "Goat of Traveling is a natural creature that relies on instinct and physical prowess. It is large in size and typically represents a low-threat creature.",
    type: "beast",
    size: "large",
    cr: 0.25,
    xp: 50,
    initiative: 1,
    habitats: null,
    locations: null,
    regions: ["Faerun"],
    aggressive: false
  },
  {
    name: "Goblin Warrior",
    description: "Goblin Warrior is a goblinoid raider that uses pack tactics, ambushes, and battlefield pressure. It is small in size and typically represents a low-threat creature. It is commonly encountered in forest and grassland environments.",
    type: "fey",
    size: "small",
    cr: 0.25,
    xp: 50,
    initiative: 2,
    habitats: [
      "forest",
      "grassland",
      "hill",
      "planar:acheron",
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Grimlock",
    description: "Grimlock is an alien aberration with unsettling behavior and unnatural abilities. It is medium in size and typically represents a low-threat creature. It is commonly encountered in underdark environments.",
    type: "aberration",
    size: "medium",
    cr: 0.25,
    xp: 50,
    initiative: 1,
    habitats: [
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Panther",
    description: "Panther is a natural creature that relies on instinct and physical prowess. It is medium in size and typically represents a low-threat creature. It is commonly encountered in forest and hill environments.",
    type: "beast",
    size: "medium",
    cr: 0.25,
    xp: 50,
    initiative: 3,
    habitats: [
      "forest",
      "hill"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Phantom Steed",
    description: "Phantom Steed is a natural creature that relies on instinct and physical prowess. It is large in size and typically represents a low-threat creature.",
    type: "beast",
    size: "large",
    cr: 0.25,
    xp: 50,
    initiative: 1,
    habitats: null,
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Priest Acolyte",
    description: "Priest Acolyte is a sentient humanoid opponent that uses tactics and equipment. It is medium in size and typically represents a low-threat creature. It is commonly encountered in any environments.",
    type: "humanoid",
    size: "medium",
    cr: 0.25,
    xp: 50,
    initiative: 0,
    habitats: [
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Pseudodragon",
    description: "Pseudodragon is a draconic creature with predatory intelligence and devastating presence. It is tiny in size and typically represents a low-threat creature. It is commonly encountered in coastal and desert environments.",
    type: "dragon",
    size: "tiny",
    cr: 0.25,
    xp: 50,
    initiative: 2,
    habitats: [
      "coastal",
      "desert",
      "forest",
      "hill",
      "mountain",
      "urban"
    ],
    locations: null,
    regions: ["Zendikar"],
    aggressive: true
  },
  {
    name: "Pteranodon",
    description: "Pteranodon is a natural creature that relies on instinct and physical prowess. It is medium in size and typically represents a low-threat creature. It is commonly encountered in coastal and grassland environments.",
    type: "beast",
    size: "medium",
    cr: 0.25,
    xp: 50,
    initiative: 2,
    habitats: [
      "coastal",
      "grassland"
    ],
    locations: null,
    regions: ["Zendikar"],
    aggressive: true
  },
  {
    name: "Riding Horse",
    description: "Riding Horse is a natural creature that relies on instinct and physical prowess. It is large in size and typically represents a low-threat creature. It is commonly encountered in grassland and urban environments.",
    type: "beast",
    size: "large",
    cr: 0.25,
    xp: 50,
    initiative: 1,
    habitats: [
      "grassland",
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: false
  },
  {
    name: "Skeleton",
    description: "Skeleton is an undead foe that fights without fear and often carries supernatural menace. It is medium in size and typically represents a low-threat creature. It is commonly encountered in planar shadowfell and underdark environments.",
    type: "undead",
    size: "medium",
    cr: 0.25,
    xp: 50,
    initiative: 3,
    habitats: [
      "planar:shadowfell",
      "underdark",
      "urban"
    ],
    locations: null,
    regions: ["Phyrexia"],
    aggressive: true
  },
  {
    name: "Sprite",
    description: "Sprite is a whimsical and dangerous fey creature tied to primal magic. It is tiny in size and typically represents a low-threat creature. It is commonly encountered in forest and planar feywild environments.",
    type: "fey",
    size: "tiny",
    cr: 0.25,
    xp: 50,
    initiative: 4,
    habitats: [
      "forest",
      "planar:feywild"
    ],
    locations: null,
    regions: ["Feywild"],
    aggressive: true
  },
  {
    name: "Steam Mephit",
    description: "Steam Mephit is an elemental being formed from raw primal forces. It is small in size and typically represents a low-threat creature. It is commonly encountered in planar elemental planes environments.",
    type: "elemental",
    size: "small",
    cr: 0.25,
    xp: 50,
    initiative: 0,
    habitats: [],
    locations: null,
    regions: ["Shadowfell"],
    aggressive: true
  },
  {
    name: "Swarm of Bats",
    description: "Swarm of Bats is a natural creature that relies on instinct and physical prowess. It is large in size and typically represents a low-threat creature. It is commonly encountered in forest and mountain environments.",
    type: "beast",
    size: "large",
    cr: 0.25,
    xp: 50,
    initiative: 2,
    habitats: [
      "forest",
      "mountain",
      "underdark",
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Swarm of Rats",
    description: "Swarm of Rats is a natural creature that relies on instinct and physical prowess. It is medium in size and typically represents a low-threat creature. It is commonly encountered in forest and swamp environments.",
    type: "beast",
    size: "medium",
    cr: 0.25,
    xp: 50,
    initiative: 0,
    habitats: [
      "forest",
      "swamp",
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Swarm of Ravens",
    description: "Swarm of Ravens is a natural creature that relies on instinct and physical prowess. It is medium in size and typically represents a low-threat creature. It is commonly encountered in hill and swamp environments.",
    type: "beast",
    size: "medium",
    cr: 0.25,
    xp: 50,
    initiative: 2,
    habitats: [
      "hill",
      "swamp"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Violet Fungus",
    description: "Violet Fungus is an animated plant creature with predatory or defensive instincts. It is medium in size and typically represents a low-threat creature. It is commonly encountered in underdark environments.",
    type: "plant",
    size: "medium",
    cr: 0.25,
    xp: 50,
    initiative: -5,
    habitats: [
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Wolf",
    description: "Wolf is a hunting predator that isolates prey and attacks as a coordinated threat. It is medium in size and typically represents a low-threat creature. It is commonly encountered in forest and hill environments.",
    type: "beast",
    size: "medium",
    cr: 0.25,
    xp: 50,
    initiative: 2,
    habitats: [
      "forest",
      "hill",
      "grassland"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Zombie",
    description: "Zombie is an undead foe that fights without fear and often carries supernatural menace. It is medium in size and typically represents a low-threat creature. It is commonly encountered in planar shadowfell and underdark environments.",
    type: "undead",
    size: "medium",
    cr: 0.25,
    xp: 50,
    initiative: -2,
    habitats: [
      "underdark",
      "urban"
    ],
    locations: null,
    regions: ["Phyrexia", "Shadowfell"],
    aggressive: true
  },
  {
    name: "Ape",
    description: "Ape is a natural creature that relies on instinct and physical prowess. It is medium in size and typically represents a moderate threat for early adventurers. It is commonly encountered in forest environments.",
    type: "beast",
    size: "medium",
    cr: 0.5,
    xp: 100,
    initiative: 2,
    habitats: [
      "forest"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Black Bear",
    description: "Black Bear is a natural creature that relies on instinct and physical prowess. It is medium in size and typically represents a moderate threat for early adventurers. It is commonly encountered in forest environments.",
    type: "beast",
    size: "medium",
    cr: 0.5,
    xp: 100,
    initiative: 1,
    habitats: [
      "forest"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Cockatrice",
    description: "Cockatrice is a monstrous predator whose form and instincts defy natural order. It is small in size and typically represents a moderate threat for early adventurers. It is commonly encountered in grassland environments.",
    type: "monstrosity",
    size: "small",
    cr: 0.5,
    xp: 100,
    initiative: 1,
    habitats: [
      "grassland"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Crocodile",
    description: "Crocodile is a natural creature that relies on instinct and physical prowess. It is large in size and typically represents a moderate threat for early adventurers. It is commonly encountered in coastal and swamp environments.",
    type: "beast",
    size: "large",
    cr: 0.5,
    xp: 100,
    initiative: 0,
    habitats: [
      "coastal",
      "swamp",
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Darkmantle",
    description: "Darkmantle is an alien aberration with unsettling behavior and unnatural abilities. It is small in size and typically represents a moderate threat for early adventurers. It is commonly encountered in underdark environments.",
    type: "aberration",
    size: "small",
    cr: 0.5,
    xp: 100,
    initiative: 1,
    habitats: [
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Dust Mephit",
    description: "Dust Mephit is an elemental being formed from raw primal forces. It is small in size and typically represents a moderate threat for early adventurers. It is commonly encountered in planar elemental planes environments.",
    type: "elemental",
    size: "small",
    cr: 0.5,
    xp: 100,
    initiative: 2,
    habitats: [
      "planar:elemental planes"
    ],
    locations: null,
    regions: ["Feywild"],
    aggressive: true
  },
  {
    name: "Giant Goat",
    description: "Giant Goat is a massive combatant that dominates space with strength and reach. It is large in size and typically represents a moderate threat for early adventurers. It is commonly encountered in grassland and hill environments.",
    type: "beast",
    size: "large",
    cr: 0.5,
    xp: 100,
    initiative: 1,
    habitats: [
      "grassland",
      "hill",
      "mountain"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Giant Seahorse",
    description: "Giant Seahorse is a massive combatant that dominates space with strength and reach. It is large in size and typically represents a moderate threat for early adventurers. It is commonly encountered in underwater environments.",
    type: "beast",
    size: "large",
    cr: 0.5,
    xp: 100,
    initiative: 1,
    habitats: [
      "underwater"
    ],
    locations: null,
    regions: ["Islands"],
    aggressive: true
  },
  {
    name: "Giant Wasp",
    description: "Giant Wasp is a massive combatant that dominates space with strength and reach. It is medium in size and typically represents a moderate threat for early adventurers. It is commonly encountered in forest and grassland environments.",
    type: "beast",
    size: "medium",
    cr: 0.5,
    xp: 100,
    initiative: 2,
    habitats: [
      "forest",
      "grassland",
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Gnoll Warrior",
    description: "Gnoll Warrior is a malevolent fiend infused with infernal or abyssal power. It is medium in size and typically represents a moderate threat for early adventurers. It is commonly encountered in desert and forest environments.",
    type: "fiend",
    size: "medium",
    cr: 0.5,
    xp: 100,
    initiative: 1,
    habitats: [
      "desert",
      "forest",
      "grassland",
      "hill"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Gray Ooze",
    description: "Gray Ooze is an amorphous predator that engulfs prey and ignores conventional tactics. It is medium in size and typically represents a moderate threat for early adventurers. It is commonly encountered in underdark environments.",
    type: "ooze",
    size: "medium",
    cr: 0.5,
    xp: 100,
    initiative: -2,
    habitats: [
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Hobgoblin Warrior",
    description: "Hobgoblin Warrior is a goblinoid raider that uses pack tactics, ambushes, and battlefield pressure. It is medium in size and typically represents a moderate threat for early adventurers. It is commonly encountered in desert and forest environments.",
    type: "fey",
    size: "medium",
    cr: 0.5,
    xp: 100,
    initiative: 1,
    habitats: [
      "desert",
      "forest",
      "grassland",
      "hill",
      "mountain",
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Ice Mephit",
    description: "Ice Mephit is an elemental being formed from raw primal forces. It is small in size and typically represents a moderate threat for early adventurers. It is commonly encountered in planar elemental planes environments.",
    type: "elemental",
    size: "small",
    cr: 0.5,
    xp: 100,
    initiative: 1,
    habitats: [],
    locations: null,
    regions: ["Feywild"],
    aggressive: true
  },
  {
    name: "Magma Mephit",
    description: "Magma Mephit is an elemental being formed from raw primal forces. It is small in size and typically represents a moderate threat for early adventurers. It is commonly encountered in planar elemental planes environments.",
    type: "elemental",
    size: "small",
    cr: 0.5,
    xp: 100,
    initiative: 1,
    habitats: [],
    locations: null,
    regions: ["Feywild"],
    aggressive: true
  },
  {
    name: "Magmin",
    description: "Magmin is an elemental being formed from raw primal forces. It is small in size and typically represents a moderate threat for early adventurers. It is commonly encountered in planar elemental plane of fire environments.",
    type: "elemental",
    size: "small",
    cr: 0.5,
    xp: 100,
    initiative: 2,
    habitats: [],
    locations: null,
    regions: ["Feywild"],
    aggressive: true
  },
  {
    name: "Reef Shark",
    description: "Reef Shark is a natural creature that relies on instinct and physical prowess. It is medium in size and typically represents a moderate threat for early adventurers. It is commonly encountered in underwater environments.",
    type: "beast",
    size: "medium",
    cr: 0.5,
    xp: 100,
    initiative: 2,
    habitats: [
      "underwater"
    ],
    locations: null,
    regions: ["Islands"],
    aggressive: true
  },
  {
    name: "Rust Monster",
    description: "Rust Monster is a monstrous predator whose form and instincts defy natural order. It is medium in size and typically represents a moderate threat for early adventurers. It is commonly encountered in underdark environments.",
    type: "monstrosity",
    size: "medium",
    cr: 0.5,
    xp: 100,
    initiative: 1,
    habitats: [
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Sahuagin Warrior",
    description: "Sahuagin Warrior is a malevolent fiend infused with infernal or abyssal power. It is medium in size and typically represents a moderate threat for early adventurers. It is commonly encountered in coastal and underwater environments.",
    type: "fiend",
    size: "medium",
    cr: 0.5,
    xp: 100,
    initiative: 0,
    habitats: [
      "coastal",
      "underwater"
    ],
    locations: null,
    regions: ["Islands"],
    aggressive: true
  },
  {
    name: "Satyr",
    description: "Satyr is a whimsical and dangerous fey creature tied to primal magic. It is medium in size and typically represents a moderate threat for early adventurers. It is commonly encountered in forest and planar feywild environments.",
    type: "fey",
    size: "medium",
    cr: 0.5,
    xp: 100,
    initiative: 3,
    habitats: [
      "forest",
      "planar:feywild"
    ],
    locations: null,
    regions: ["Feywild"],
    aggressive: true
  },
  {
    name: "Scout",
    description: "Scout is a sentient humanoid opponent that uses tactics and equipment. It is medium in size and typically represents a moderate threat for early adventurers. It is commonly encountered in any environments.",
    type: "humanoid",
    size: "medium",
    cr: 0.5,
    xp: 100,
    initiative: 2,
    habitats: [
      "any"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Shadow",
    description: "Shadow is an undead horror animated by necromantic forces. It is medium in size and typically represents a moderate threat for early adventurers. It is commonly encountered in planar shadowfell and underdark environments.",
    type: "undead",
    size: "medium",
    cr: 0.5,
    xp: 100,
    initiative: 2,
    habitats: [
      "underdark",
      "urban"
    ],
    locations: null,
    regions: ["Phyrexia", "Shadowfell"],
    aggressive: true
  },
  {
    name: "Swarm of Insects",
    description: "Swarm of Insects is a natural creature that relies on instinct and physical prowess. It is medium in size and typically represents a moderate threat for early adventurers. It is commonly encountered in desert and forest environments.",
    type: "beast",
    size: "medium",
    cr: 0.5,
    xp: 100,
    initiative: 1,
    habitats: [
      "desert",
      "forest",
      "grassland",
      "swamp",
      "underdark",
      "underwater"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Tough",
    description: "Tough is a sentient humanoid opponent that uses tactics and equipment. It is medium in size and typically represents a moderate threat for early adventurers. It is commonly encountered in any environments.",
    type: "humanoid",
    size: "medium",
    cr: 0.5,
    xp: 100,
    initiative: 1,
    habitats: [
      "any"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Troll Limb",
    description: "Troll Limb is a towering giant known for brute strength and battlefield control. It is small in size and typically represents a moderate threat for early adventurers. It is commonly encountered in arctic and forest environments.",
    type: "giant",
    size: "small",
    cr: 0.5,
    xp: 100,
    initiative: 1,
    habitats: [
      "arctic",
      "forest",
      "hill",
      "mountain",
      "swamp",
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Warhorse",
    description: "Warhorse is a natural creature that relies on instinct and physical prowess. It is large in size and typically represents a moderate threat for early adventurers. It is commonly encountered in underdark and urban environments.",
    type: "beast",
    size: "large",
    cr: 0.5,
    xp: 100,
    initiative: 1,
    habitats: [
      "underdark",
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Warhorse Skeleton",
    description: "Warhorse Skeleton is an undead foe that fights without fear and often carries supernatural menace. It is large in size and typically represents a moderate threat for early adventurers. It is commonly encountered in planar shadowfell and underdark environments.",
    type: "undead",
    size: "large",
    cr: 0.5,
    xp: 100,
    initiative: 1,
    habitats: [
      "underdark",
      "urban"
    ],
    locations: null,
    regions: ["Phyrexia", "Shadowfell"],
    aggressive: true
  },
  {
    name: "Worg",
    description: "Worg is a whimsical and dangerous fey creature tied to primal magic. It is large in size and typically represents a moderate threat for early adventurers. It is commonly encountered in forest and grassland environments.",
    type: "fey",
    size: "large",
    cr: 0.5,
    xp: 100,
    initiative: 1,
    habitats: [
      "forest",
      "grassland",
      "hill",
    ],
    locations: null,
    regions: ["Faerun", "Worg"],
    aggressive: true
  },
  {
    name: "Animated Armor",
    description: "Animated Armor is an artificial construct built for relentless action. It is medium in size and typically represents a moderate threat for early adventurers. It is commonly encountered in urban environments.",
    type: "construct",
    size: "medium",
    cr: 1.0,
    xp: 200,
    initiative: 0,
    habitats: [
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Brass Dragon Wyrmling",
    description: "Brass Dragon Wyrmling is a draconic creature with predatory intelligence and devastating presence. It is medium in size and typically represents a moderate threat for early adventurers. It is commonly encountered in desert environments.",
    type: "dragon",
    size: "medium",
    cr: 1.0,
    xp: 200,
    initiative: 0,
    habitats: [
      "desert"
    ],
    locations: null,
    regions: ["Velen"],
    aggressive: true
  },
  {
    name: "Brown Bear",
    description: "Brown Bear is a natural creature that relies on instinct and physical prowess. It is large in size and typically represents a moderate threat for early adventurers. It is commonly encountered in arctic and forest environments.",
    type: "beast",
    size: "large",
    cr: 1.0,
    xp: 200,
    initiative: 1,
    habitats: [
      "arctic",
      "forest",
      "hill"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Bugbear Warrior",
    description: "Bugbear Warrior is a goblinoid raider that uses pack tactics, ambushes, and battlefield pressure. It is medium in size and typically represents a moderate threat for early adventurers. It is commonly encountered in forest and grassland environments.",
    type: "fey",
    size: "medium",
    cr: 1.0,
    xp: 200,
    initiative: 2,
    habitats: [
      "forest",
      "grassland",
      "underdark"
    ],
    locations: null,
    regions: ["Faerun", "Feywild"],
    aggressive: true
  },
  {
    name: "Copper Dragon Wyrmling",
    description: "Copper Dragon Wyrmling is a draconic creature with predatory intelligence and devastating presence. It is medium in size and typically represents a moderate threat for early adventurers. It is commonly encountered in hill environments.",
    type: "dragon",
    size: "medium",
    cr: 1.0,
    xp: 200,
    initiative: 1,
    habitats: [
      "hill"
    ],
    locations: null,
    regions: ["Velen"],
    aggressive: true
  },
  {
    name: "Death Dog",
    description: "Death Dog is a monstrous predator whose form and instincts defy natural order. It is medium in size and typically represents a moderate threat for early adventurers. It is commonly encountered in desert environments.",
    type: "monstrosity",
    size: "medium",
    cr: 1.0,
    xp: 200,
    initiative: 2,
    habitats: [
      "desert"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Dire Wolf",
    description: "Dire Wolf is a hunting predator that isolates prey and attacks as a coordinated threat. It is large in size and typically represents a moderate threat for early adventurers. It is commonly encountered in forest and hill environments.",
    type: "beast",
    size: "large",
    cr: 1.0,
    xp: 200,
    initiative: 2,
    habitats: [
      "forest",
      "hill"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Dryad",
    description: "Dryad is a whimsical and dangerous fey creature tied to primal magic. It is medium in size and typically represents a moderate threat for early adventurers. It is commonly encountered in forest environments.",
    type: "fey",
    size: "medium",
    cr: 1.0,
    xp: 200,
    initiative: 1,
    habitats: [
      "forest"
    ],
    locations: null,
    regions: ["Feywild"],
    aggressive: true
  },
  {
    name: "Ghoul",
    description: "Ghoul is an undead foe that fights without fear and often carries supernatural menace. It is medium in size and typically represents a moderate threat for early adventurers. It is commonly encountered in swamp and underdark environments.",
    type: "undead",
    size: "medium",
    cr: 1.0,
    xp: 200,
    initiative: 2,
    habitats: [
      "swamp",
      "underdark",
      "urban"
    ],
    locations: null,
    regions: ["Phyrexia", "Shadowfell"],
    aggressive: true
  },
  {
    name: "Giant Eagle",
    description: "Giant Eagle is a massive combatant that dominates space with strength and reach. It is large in size and typically represents a moderate threat for early adventurers. It is commonly encountered in coastal and grassland environments.",
    type: "celestial",
    size: "large",
    cr: 1.0,
    xp: 200,
    initiative: 3,
    habitats: [
      "coastal",
      "grassland",
      "hill",
      "mountain"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Giant Hyena",
    description: "Giant Hyena is a massive combatant that dominates space with strength and reach. It is large in size and typically represents a moderate threat for early adventurers. It is commonly encountered in desert and forest environments.",
    type: "beast",
    size: "large",
    cr: 1.0,
    xp: 200,
    initiative: 2,
    habitats: [
      "desert",
      "forest",
      "grassland",
      "hill"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Giant Octopus",
    description: "Giant Octopus is a massive combatant that dominates space with strength and reach. It is large in size and typically represents a moderate threat for early adventurers. It is commonly encountered in underwater environments.",
    type: "beast",
    size: "large",
    cr: 1.0,
    xp: 200,
    initiative: 1,
    habitats: [
      "underwater"
    ],
    locations: null,
    regions: ["Islands"],
    aggressive: true
  },
  {
    name: "Giant Spider",
    description: "Giant Spider is a massive combatant that dominates space with strength and reach. It is large in size and typically represents a moderate threat for early adventurers. It is commonly encountered in desert and forest environments.",
    type: "beast",
    size: "large",
    cr: 1.0,
    xp: 200,
    initiative: 3,
    habitats: [
      "desert",
      "forest",
      "swamp",
      "underdark",
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Giant Toad",
    description: "Giant Toad is a massive combatant that dominates space with strength and reach. It is large in size and typically represents a moderate threat for early adventurers. It is commonly encountered in coastal and forest environments.",
    type: "beast",
    size: "large",
    cr: 1.0,
    xp: 200,
    initiative: 1,
    habitats: [
      "coastal",
      "forest",
      "swamp",
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Giant Vulture",
    description: "Giant Vulture is a massive combatant that dominates space with strength and reach. It is large in size and typically represents a moderate threat for early adventurers. It is commonly encountered in desert and grassland environments.",
    type: "monstrosity",
    size: "large",
    cr: 1.0,
    xp: 200,
    initiative: 0,
    habitats: [
      "desert",
      "grassland",
      "hill"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Goblin Boss",
    description: "Goblin Boss is a goblinoid raider that uses pack tactics, ambushes, and battlefield pressure. It is small in size and typically represents a moderate threat for early adventurers. It is commonly encountered in forest and grassland environments.",
    type: "fey",
    size: "small",
    cr: 1.0,
    xp: 200,
    initiative: 2,
    habitats: [
      "forest",
      "grassland",
      "hill",
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Harpy",
    description: "Harpy is a monstrous predator whose form and instincts defy natural order. It is medium in size and typically represents a moderate threat for early adventurers. It is commonly encountered in coastal and forest environments.",
    type: "monstrosity",
    size: "medium",
    cr: 1.0,
    xp: 200,
    initiative: 1,
    habitats: [
      "coastal",
      "forest",
      "hill",
      "mountain"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Hippogriff",
    description: "Hippogriff is a monstrous predator whose form and instincts defy natural order. It is large in size and typically represents a moderate threat for early adventurers. It is commonly encountered in grassland and hill environments.",
    type: "monstrosity",
    size: "large",
    cr: 1.0,
    xp: 200,
    initiative: 1,
    habitats: [
      "grassland",
      "hill",
      "mountain"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Imp",
    description: "Imp is a malevolent fiend infused with infernal or abyssal power. It is tiny in size and typically represents a moderate threat for early adventurers. It is commonly encountered in any environments.",
    type: "fiend",
    size: "tiny",
    cr: 1.0,
    xp: 200,
    initiative: 3,
    habitats: [
      "any"
    ],
    locations: null,
    regions: ["Shadowfell"],
    aggressive: true
  },
  {
    name: "Lion",
    description: "Lion is a natural creature that relies on instinct and physical prowess. It is large in size and typically represents a moderate threat for early adventurers. It is commonly encountered in desert and grassland environments.",
    type: "beast",
    size: "large",
    cr: 1.0,
    xp: 200,
    initiative: 2,
    habitats: [
      "desert",
      "grassland",
      "hill",
      "mountain"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Pirate",
    description: "Pirate is a sentient humanoid opponent that uses tactics and equipment. It is medium in size and typically represents a moderate threat for early adventurers. It is commonly encountered in any environments.",
    type: "humanoid",
    size: "medium",
    cr: 1.0,
    xp: 200,
    initiative: 3,
    habitats: [
      "any"
    ],
    locations: null,
    regions: ["Islands"],
    aggressive: true
  },
  {
    name: "Quasit",
    description: "Quasit is a malevolent fiend infused with infernal or abyssal power. It is tiny in size and typically represents a moderate threat for early adventurers. It is commonly encountered in planar abyss environments.",
    type: "fiend",
    size: "tiny",
    cr: 1.0,
    xp: 200,
    initiative: 3,
    habitats: [],
    locations: null,
    regions: ["Gehenna"],
    aggressive: true
  },
  {
    name: "Specter",
    description: "Specter is an undead horror animated by necromantic forces. It is medium in size and typically represents a moderate threat for early adventurers. It is commonly encountered in underdark and urban environments.",
    type: "undead",
    size: "medium",
    cr: 1.0,
    xp: 200,
    initiative: 2,
    habitats: [
      "underdark",
      "urban"
    ],
    locations: null,
    regions: ["Phyrexia"],
    aggressive: true
  },
  {
    name: "Sphinx of Wonder",
    description: "Sphinx of Wonder is a radiant celestial entity with divine resilience. It is tiny in size and typically represents a moderate threat for early adventurers. It is commonly encountered in desert and planar upper planes environments.",
    type: "celestial",
    size: "tiny",
    cr: 1.0,
    xp: 200,
    initiative: 3,
    habitats: [
      "desert",
    ],
    locations: null,
    regions: ["Feywild"],
    aggressive: true
  },
  {
    name: "Spy",
    description: "Spy is a sentient humanoid opponent that uses tactics and equipment. It is medium in size and typically represents a moderate threat for early adventurers. It is commonly encountered in any environments.",
    type: "humanoid",
    size: "medium",
    cr: 1.0,
    xp: 200,
    initiative: 2,
    habitats: [
      "any"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Swarm of Piranhas",
    description: "Swarm of Piranhas is a natural creature that relies on instinct and physical prowess. It is medium in size and typically represents a moderate threat for early adventurers. It is commonly encountered in underwater environments.",
    type: "beast",
    size: "medium",
    cr: 1.0,
    xp: 200,
    initiative: 3,
    habitats: [
      "underwater"
    ],
    locations: null,
    regions: ["Islands"],
    aggressive: true
  },
  {
    name: "Tiger",
    description: "Tiger is a natural creature that relies on instinct and physical prowess. It is large in size and typically represents a moderate threat for early adventurers. It is commonly encountered in forest and grassland environments.",
    type: "beast",
    size: "large",
    cr: 1.0,
    xp: 200,
    initiative: 3,
    habitats: [
      "forest",
      "grassland"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Allosaurus",
    description: "Allosaurus is a natural creature that relies on instinct and physical prowess. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in grassland environments.",
    type: "beast",
    size: "large",
    cr: 2.0,
    xp: 450,
    initiative: 1,
    habitats: [
      "grassland"
    ],
    locations: null,
    regions: ["Zendikar"],
    aggressive: true
  },
  {
    name: "Animated Rug of Smothering",
    description: "Animated Rug of Smothering is an artificial construct built for relentless action. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in urban environments.",
    type: "construct",
    size: "large",
    cr: 2.0,
    xp: 450,
    initiative: 2,
    habitats: [
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Ankheg",
    description: "Ankheg is a monstrous predator whose form and instincts defy natural order. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in forest and grassland environments.",
    type: "monstrosity",
    size: "large",
    cr: 2.0,
    xp: 450,
    initiative: 0,
    habitats: [
      "forest",
      "grassland"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Awakened Tree",
    description: "Awakened Tree is an animated plant creature with predatory or defensive instincts. It is huge in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in forest environments.",
    type: "plant",
    size: "huge",
    cr: 2.0,
    xp: 450,
    initiative: -2,
    habitats: [
      "forest"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Azer Sentinel",
    description: "Azer Sentinel is an elemental being formed from raw primal forces. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in mountain and planar elemental plane of fire environments.",
    type: "elemental",
    size: "medium",
    cr: 2.0,
    xp: 450,
    initiative: 1,
    habitats: [
      "mountain",
    ],
    locations: null,
    regions: ["Feywild"],
    aggressive: true
  },
  {
    name: "Bandit Captain",
    description: "Bandit Captain is a trained humanoid combatant using weapons, discipline, and teamwork. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in any environments.",
    type: "humanoid",
    size: "medium",
    cr: 2.0,
    xp: 450,
    initiative: 3,
    habitats: [
      "any"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Berserker",
    description: "Berserker is a sentient humanoid opponent that uses tactics and equipment. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in any environments.",
    type: "humanoid",
    size: "medium",
    cr: 2.0,
    xp: 450,
    initiative: 1,
    habitats: [
      "any"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Black Dragon Wyrmling",
    description: "Black Dragon Wyrmling is a draconic creature with predatory intelligence and devastating presence. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in swamp environments.",
    type: "dragon",
    size: "medium",
    cr: 2.0,
    xp: 450,
    initiative: 2,
    habitats: [
      "swamp"
    ],
    locations: null,
    regions: ["Phyrexia"],
    aggressive: true
  },
  {
    name: "Bronze Dragon Wyrmling",
    description: "Bronze Dragon Wyrmling is a draconic creature with predatory intelligence and devastating presence. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in coastal environments.",
    type: "dragon",
    size: "medium",
    cr: 2.0,
    xp: 450,
    initiative: 0,
    habitats: [
      "coastal"
    ],
    locations: null,
    regions: ["Velen"],
    aggressive: true
  },
  {
    name: "Centaur Trooper",
    description: "Centaur Trooper is a whimsical and dangerous fey creature tied to primal magic. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in forest and grassland environments.",
    type: "fey",
    size: "large",
    cr: 2.0,
    xp: 450,
    initiative: 2,
    habitats: [
      "forest",
      "grassland",
    ],
    locations: null,
    regions: ["Feywild"],
    aggressive: true
  },
  {
    name: "Cultist Fanatic",
    description: "Cultist Fanatic is a trained humanoid combatant using weapons, discipline, and teamwork. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in any environments.",
    type: "humanoid",
    size: "medium",
    cr: 2.0,
    xp: 450,
    initiative: 2,
    habitats: [
      "any"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Druid",
    description: "Druid is a sentient humanoid opponent that uses tactics and equipment. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in any environments.",
    type: "humanoid",
    size: "medium",
    cr: 2.0,
    xp: 450,
    initiative: 1,
    habitats: [
      "any"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Ettercap",
    description: "Ettercap is a monstrous predator whose form and instincts defy natural order. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in forest environments.",
    type: "monstrosity",
    size: "medium",
    cr: 2.0,
    xp: 450,
    initiative: 2,
    habitats: [
      "forest"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Gargoyle",
    description: "Gargoyle is an elemental being formed from raw primal forces. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in underdark and urban environments.",
    type: "elemental",
    size: "medium",
    cr: 2.0,
    xp: 450,
    initiative: 0,
    habitats: [
      "underdark",
      "urban"
    ],
    locations: null,
    regions: ["Phyrexia"],
    aggressive: true
  },
  {
    name: "Gelatinous Cube",
    description: "Gelatinous Cube is an amorphous predator that engulfs prey and ignores conventional tactics. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in underdark environments.",
    type: "ooze",
    size: "large",
    cr: 2.0,
    xp: 450,
    initiative: -4,
    habitats: [
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Ghast",
    description: "Ghast is an undead horror animated by necromantic forces. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in swamp and underdark environments.",
    type: "undead",
    size: "medium",
    cr: 2.0,
    xp: 450,
    initiative: 3,
    habitats: [
      "swamp",
      "underdark",
      "urban"
    ],
    locations: null,
    regions: ["Phyrexia"],
    aggressive: true
  },
  {
    name: "Giant Boar",
    description: "Giant Boar is a massive combatant that dominates space with strength and reach. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in forest and grassland environments.",
    type: "beast",
    size: "large",
    cr: 2.0,
    xp: 450,
    initiative: 0,
    habitats: [
      "forest",
      "grassland",
      "hill"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Giant Constrictor Snake",
    description: "Giant Constrictor Snake is a massive combatant that dominates space with strength and reach. It is huge in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in desert and forest environments.",
    type: "beast",
    size: "huge",
    cr: 2.0,
    xp: 450,
    initiative: 2,
    habitats: [
      "desert",
      "forest",
      "swamp",
      "underwater"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Giant Elk",
    description: "Giant Elk is a massive combatant that dominates space with strength and reach. It is huge in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in forest and grassland environments.",
    type: "celestial",
    size: "huge",
    cr: 2.0,
    xp: 450,
    initiative: 4,
    habitats: [
      "forest",
      "grassland",
      "hill"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Gibbering Mouther",
    description: "Gibbering Mouther is an alien aberration with unsettling behavior and unnatural abilities. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in underdark environments.",
    type: "aberration",
    size: "medium",
    cr: 2.0,
    xp: 450,
    initiative: -1,
    habitats: [
      "underdark"
    ],
    locations: null,
    regions: ["Phyrexia"],
    aggressive: true
  },
  {
    name: "Green Dragon Wyrmling",
    description: "Green Dragon Wyrmling is a draconic creature with predatory intelligence and devastating presence. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in forest environments.",
    type: "dragon",
    size: "medium",
    cr: 2.0,
    xp: 450,
    initiative: 1,
    habitats: [
      "forest"
    ],
    locations: null,
    regions: ["Zendikar"],
    aggressive: true
  },
  {
    name: "Grick",
    description: "Grick is an alien aberration with unsettling behavior and unnatural abilities. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in forest and underdark environments.",
    type: "aberration",
    size: "medium",
    cr: 2.0,
    xp: 450,
    initiative: 2,
    habitats: [
      "forest",
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Griffon",
    description: "Griffon is a monstrous predator whose form and instincts defy natural order. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in arctic and coastal environments.",
    type: "monstrosity",
    size: "large",
    cr: 2.0,
    xp: 450,
    initiative: 2,
    habitats: [
      "arctic",
      "coastal",
      "grassland",
      "hill",
      "mountain"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Hunter Shark",
    description: "Hunter Shark is a natural creature that relies on instinct and physical prowess. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in underwater environments.",
    type: "beast",
    size: "large",
    cr: 2.0,
    xp: 450,
    initiative: 2,
    habitats: [
      "underwater"
    ],
    locations: null,
    regions: ["Islands"],
    aggressive: true
  },
  {
    name: "Merrow",
    description: "Merrow is a monstrous predator whose form and instincts defy natural order. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in coastal and underwater environments.",
    type: "monstrosity",
    size: "large",
    cr: 2.0,
    xp: 450,
    initiative: 2,
    habitats: [
      "coastal",
      "underwater"
    ],
    locations: null,
    regions: ["Islands"],
    aggressive: true
  },
  {
    name: "Mimic",
    description: "Mimic is a monstrous predator whose form and instincts defy natural order. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in underdark and urban environments.",
    type: "monstrosity",
    size: "medium",
    cr: 2.0,
    xp: 450,
    initiative: 1,
    habitats: [
      "underdark",
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Minotaur Skeleton",
    description: "Minotaur Skeleton is an undead foe that fights without fear and often carries supernatural menace. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in planar shadowfell and underdark environments.",
    type: "undead",
    size: "large",
    cr: 2.0,
    xp: 450,
    initiative: 0,
    habitats: [
      "planar:shadowfell",
      "underdark",
      "urban"
    ],
    locations: null,
    regions: ["Phyrexia"],
    aggressive: true
  },
  {
    name: "Ochre Jelly",
    description: "Ochre Jelly is an amorphous predator that engulfs prey and ignores conventional tactics. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in underdark environments.",
    type: "ooze",
    size: "large",
    cr: 2.0,
    xp: 450,
    initiative: -2,
    habitats: [
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Ogre",
    description: "Ogre is a towering giant known for brute strength and battlefield control. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in arctic and desert environments.",
    type: "giant",
    size: "large",
    cr: 2.0,
    xp: 450,
    initiative: -1,
    habitats: [
      "arctic",
      "desert",
      "forest",
      "grassland",
      "hill",
      "mountain",
      "swamp",
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Ogre Zombie",
    description: "Ogre Zombie is an undead foe that fights without fear and often carries supernatural menace. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in planar shadowfell and underdark environments.",
    type: "undead",
    size: "large",
    cr: 2.0,
    xp: 450,
    initiative: -2,
    habitats: [
      "planar:shadowfell",
      "underdark",
      "urban"
    ],
    locations: null,
    regions: ["Phyrexia"],
    aggressive: true
  },
  {
    name: "Pegasus",
    description: "Pegasus is a radiant celestial entity with divine resilience. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in forest and grassland environments.",
    type: "celestial",
    size: "large",
    cr: 2.0,
    xp: 450,
    initiative: 2,
    habitats: [
      "forest",
      "grassland",
      "hill",
      "planar:upper planes"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: false
  },
  {
    name: "Plesiosaurus",
    description: "Plesiosaurus is a natural creature that relies on instinct and physical prowess. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in coastal environments.",
    type: "beast",
    size: "large",
    cr: 2.0,
    xp: 450,
    initiative: 2,
    habitats: [
      "coastal"
    ],
    locations: null,
    regions: ["Zendikar"],
    aggressive: true
  },
  {
    name: "Polar Bear",
    description: "Polar Bear is a natural creature that relies on instinct and physical prowess. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in arctic environments.",
    type: "beast",
    size: "large",
    cr: 2.0,
    xp: 450,
    initiative: 2,
    habitats: [
      "arctic"
    ],
    locations: null,
    regions: ["Velen"],
    aggressive: true
  },
  {
    name: "Priest",
    description: "Priest is a sentient humanoid opponent that uses tactics and equipment. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in any environments.",
    type: "humanoid",
    size: "medium",
    cr: 2.0,
    xp: 450,
    initiative: 0,
    habitats: [
      "any"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Rhinoceros",
    description: "Rhinoceros is a natural creature that relies on instinct and physical prowess. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in grassland environments.",
    type: "beast",
    size: "large",
    cr: 2.0,
    xp: 450,
    initiative: -1,
    habitats: [
      "grassland"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Saber-Toothed Tiger",
    description: "Saber-Toothed Tiger is a natural creature that relies on instinct and physical prowess. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in arctic and hill environments.",
    type: "beast",
    size: "large",
    cr: 2.0,
    xp: 450,
    initiative: 3,
    habitats: [
      "arctic",
      "hill",
      "mountain"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Sea Hag",
    description: "Sea Hag is a whimsical and dangerous fey creature tied to primal magic. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in coastal and underwater environments.",
    type: "fey",
    size: "medium",
    cr: 2.0,
    xp: 450,
    initiative: 1,
    habitats: [
      "coastal",
      "underwater"
    ],
    locations: null,
    regions: ["Islands"],
    aggressive: true
  },
  {
    name: "Silver Dragon Wyrmling",
    description: "Silver Dragon Wyrmling is a draconic creature with predatory intelligence and devastating presence. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in mountain and urban environments.",
    type: "dragon",
    size: "medium",
    cr: 2.0,
    xp: 450,
    initiative: 0,
    habitats: [
      "mountain",
      "urban"
    ],
    locations: null,
    regions: ["Velen"],
    aggressive: true
  },
  {
    name: "Swarm of Venomous Snakes",
    description: "Swarm of Venomous Snakes is a natural creature that relies on instinct and physical prowess. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in coastal and desert environments.",
    type: "beast",
    size: "medium",
    cr: 2.0,
    xp: 450,
    initiative: 4,
    habitats: [
      "coastal",
      "desert",
      "forest",
      "grassland",
      "hill",
      "swamp"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Wererat",
    description: "Wererat is a monstrous predator whose form and instincts defy natural order. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in forest and urban environments.",
    type: "monstrosity",
    size: "medium",
    cr: 2.0,
    xp: 450,
    initiative: 3,
    habitats: [
      "forest",
      "urban"
    ],
    locations: null,
    regions: ["Phyrexia"],
    aggressive: true
  },
  {
    name: "White Dragon Wyrmling",
    description: "White Dragon Wyrmling is a draconic creature with predatory intelligence and devastating presence. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in arctic environments.",
    type: "dragon",
    size: "medium",
    cr: 2.0,
    xp: 450,
    initiative: 0,
    habitats: [
      "arctic"
    ],
    locations: null,
    regions: ["Velen"],
    aggressive: true
  },
  {
    name: "Will-o'-Wisp",
    description: "Will-o'-Wisp is an undead horror animated by necromantic forces. It is tiny in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in forest and swamp environments.",
    type: "undead",
    size: "tiny",
    cr: 2.0,
    xp: 450,
    initiative: 9,
    habitats: [
      "forest",
      "swamp",
      "urban"
    ],
    locations: null,
    regions: ["Phyyrexia"],
    aggressive: true
  },
  {
    name: "Ankylosaurus",
    description: "Ankylosaurus is a natural creature that relies on instinct and physical prowess. It is huge in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in grassland environments.",
    type: "beast",
    size: "huge",
    cr: 3.0,
    xp: 700,
    initiative: 0,
    habitats: [
      "grassland"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Basilisk",
    description: "Basilisk is a monstrous predator whose form and instincts defy natural order. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in mountain and underdark environments.",
    type: "monstrosity",
    size: "medium",
    cr: 3.0,
    xp: 700,
    initiative: -1,
    habitats: [
      "mountain",
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Bearded Devil",
    description: "Bearded Devil is a malevolent fiend infused with infernal or abyssal power. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in planar nine hells environments.",
    type: "fiend",
    size: "medium",
    cr: 3.0,
    xp: 700,
    initiative: 2,
    habitats: [
      "planar:nine hells"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Blue Dragon Wyrmling",
    description: "Blue Dragon Wyrmling is a draconic creature with predatory intelligence and devastating presence. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in coastal and desert environments.",
    type: "dragon",
    size: "medium",
    cr: 3.0,
    xp: 700,
    initiative: 0,
    habitats: [
      "coastal",
      "desert"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Bugbear Stalker",
    description: "Bugbear Stalker is a goblinoid raider that uses pack tactics, ambushes, and battlefield pressure. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in forest and grassland environments.",
    type: "fey",
    size: "medium",
    cr: 3.0,
    xp: 700,
    initiative: 2,
    habitats: [
      "forest",
      "grassland",
      "planar:feywild",
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Doppelganger",
    description: "Doppelganger is a monstrous predator whose form and instincts defy natural order. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in underdark and urban environments.",
    type: "monstrosity",
    size: "medium",
    cr: 3.0,
    xp: 700,
    initiative: 4,
    habitats: [
      "underdark",
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Giant Scorpion",
    description: "Giant Scorpion is a massive combatant that dominates space with strength and reach. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in desert environments.",
    type: "beast",
    size: "large",
    cr: 3.0,
    xp: 700,
    initiative: 1,
    habitats: [
      "desert"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Gold Dragon Wyrmling",
    description: "Gold Dragon Wyrmling is a draconic creature with predatory intelligence and devastating presence. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in forest and grassland environments.",
    type: "dragon",
    size: "medium",
    cr: 3.0,
    xp: 700,
    initiative: 2,
    habitats: [
      "forest",
      "grassland"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Green Hag",
    description: "Green Hag is a whimsical and dangerous fey creature tied to primal magic. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in forest and hill environments.",
    type: "fey",
    size: "medium",
    cr: 3.0,
    xp: 700,
    initiative: 1,
    habitats: [
      "forest",
      "hill",
      "swamp"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Hell Hound",
    description: "Hell Hound is a malevolent fiend infused with infernal or abyssal power. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in mountain and planar lower planes environments.",
    type: "fiend",
    size: "medium",
    cr: 3.0,
    xp: 700,
    initiative: 1,
    habitats: [
      "mountain",
      "planar:lower planes",
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Hobgoblin Captain",
    description: "Hobgoblin Captain is a goblinoid raider that uses pack tactics, ambushes, and battlefield pressure. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in desert and forest environments.",
    type: "fey",
    size: "medium",
    cr: 3.0,
    xp: 700,
    initiative: 2,
    habitats: [
      "desert",
      "forest",
      "grassland",
      "hill",
      "mountain",
      "planar:acheron",
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Killer Whale",
    description: "Killer Whale is a natural creature that relies on instinct and physical prowess. It is huge in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in underwater environments.",
    type: "beast",
    size: "huge",
    cr: 3.0,
    xp: 700,
    initiative: 2,
    habitats: [
      "underwater"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Knight",
    description: "Knight is a trained humanoid combatant using weapons, discipline, and teamwork. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in any environments.",
    type: "humanoid",
    size: "medium",
    cr: 3.0,
    xp: 700,
    initiative: 0,
    habitats: [
      "any"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Manticore",
    description: "Manticore is a monstrous predator whose form and instincts defy natural order. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in arctic and coastal environments.",
    type: "monstrosity",
    size: "large",
    cr: 3.0,
    xp: 700,
    initiative: 3,
    habitats: [
      "arctic",
      "coastal",
      "grassland",
      "hill",
      "mountain"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Minotaur of Baphomet",
    description: "Minotaur of Baphomet is a monstrous predator whose form and instincts defy natural order. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in underdark environments.",
    type: "monstrosity",
    size: "large",
    cr: 3.0,
    xp: 700,
    initiative: 0,
    habitats: [
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Mummy",
    description: "Mummy is an undead foe that fights without fear and often carries supernatural menace. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in desert and swamp environments.",
    type: "undead",
    size: "medium",
    cr: 3.0,
    xp: 700,
    initiative: -1,
    habitats: [
      "desert",
      "swamp"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Nightmare",
    description: "Nightmare is a malevolent fiend infused with infernal or abyssal power. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in planar lower planes environments.",
    type: "fiend",
    size: "large",
    cr: 3.0,
    xp: 700,
    initiative: 2,
    habitats: [
      "planar:lower planes"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Owlbear",
    description: "Owlbear is a monstrous predator whose form and instincts defy natural order. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in forest environments.",
    type: "monstrosity",
    size: "large",
    cr: 3.0,
    xp: 700,
    initiative: 1,
    habitats: [
      "forest"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Phase Spider",
    description: "Phase Spider is a monstrous predator whose form and instincts defy natural order. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in desert and forest environments.",
    type: "monstrosity",
    size: "large",
    cr: 3.0,
    xp: 700,
    initiative: 3,
    habitats: [
      "desert",
      "forest",
      "grassland",
      "hill",
      "planar:ethereal plane",
      "underdark",
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Swarm of Crawling Claws",
    description: "Swarm of Crawling Claws is an undead horror animated by necromantic forces. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in any environments.",
    type: "undead",
    size: "medium",
    cr: 3.0,
    xp: 700,
    initiative: 2,
    habitats: [
      "any"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Vampire Familiar",
    description: "Vampire Familiar is an undead foe that fights without fear and often carries supernatural menace. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in underdark and urban environments.",
    type: "humanoid",
    size: "medium",
    cr: 3.0,
    xp: 700,
    initiative: 3,
    habitats: [
      "underdark",
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Warrior Veteran",
    description: "Warrior Veteran is a trained humanoid combatant using weapons, discipline, and teamwork. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in any environments.",
    type: "humanoid",
    size: "medium",
    cr: 3.0,
    xp: 700,
    initiative: 1,
    habitats: [
      "any"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Werewolf",
    description: "Werewolf is a hunting predator that isolates prey and attacks as a coordinated threat. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in forest and hill environments.",
    type: "(lycanthrope)",
    size: "medium",
    cr: 3.0,
    xp: 700,
    initiative: 2,
    habitats: [
      "forest",
      "hill"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Wight",
    description: "Wight is an undead foe that fights without fear and often carries supernatural menace. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in desert and planar shadowfell environments.",
    type: "undead",
    size: "medium",
    cr: 3.0,
    xp: 700,
    initiative: 2,
    habitats: [
      "desert",
      "planar:shadowfell",
      "swamp",
      "underdark",
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Winter Wolf",
    description: "Winter Wolf is a hunting predator that isolates prey and attacks as a coordinated threat. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in arctic environments.",
    type: "monstrosity",
    size: "large",
    cr: 3.0,
    xp: 700,
    initiative: 1,
    habitats: [
      "arctic"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Archelon",
    description: "Archelon is a natural creature that relies on instinct and physical prowess. It is huge in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in underwater environments.",
    type: "beast",
    size: "huge",
    cr: 4.0,
    xp: 1100,
    initiative: 3,
    habitats: [
      "underwater"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Black Pudding",
    description: "Black Pudding is an amorphous predator that engulfs prey and ignores conventional tactics. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in underdark environments.",
    type: "ooze",
    size: "large",
    cr: 4.0,
    xp: 1100,
    initiative: -3,
    habitats: [
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Chuul",
    description: "Chuul is an alien aberration with unsettling behavior and unnatural abilities. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in coastal and swamp environments.",
    type: "aberration",
    size: "large",
    cr: 4.0,
    xp: 1100,
    initiative: 0,
    habitats: [
      "coastal",
      "swamp",
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Couatl",
    description: "Couatl is a radiant celestial entity with divine resilience. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in desert and forest environments.",
    type: "celestial",
    size: "medium",
    cr: 4.0,
    xp: 1100,
    initiative: 5,
    habitats: [
      "desert",
      "forest",
      "grassland",
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Elephant",
    description: "Elephant is a natural creature that relies on instinct and physical prowess. It is huge in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in grassland environments.",
    type: "beast",
    size: "huge",
    cr: 4.0,
    xp: 1100,
    initiative: -1,
    habitats: [
      "grassland"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Ettin",
    description: "Ettin is a towering giant known for brute strength and battlefield control. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in hill and mountain environments.",
    type: "giant",
    size: "large",
    cr: 4.0,
    xp: 1100,
    initiative: -1,
    habitats: [
      "hill",
      "mountain",
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Ghost",
    description: "Ghost is an undead foe that fights without fear and often carries supernatural menace. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in underdark and urban environments.",
    type: "undead",
    size: "medium",
    cr: 4.0,
    xp: 1100,
    initiative: 1,
    habitats: [
      "underdark",
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Guard Captain",
    description: "Guard Captain is a trained humanoid combatant using weapons, discipline, and teamwork. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in any environments.",
    type: "humanoid",
    size: "medium",
    cr: 4.0,
    xp: 1100,
    initiative: 2,
    habitats: [
      "any"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Hippopotamus",
    description: "Hippopotamus is a natural creature that relies on instinct and physical prowess. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in forest and grassland environments.",
    type: "beast",
    size: "large",
    cr: 4.0,
    xp: 1100,
    initiative: -2,
    habitats: [
      "forest",
      "grassland",
      "swamp"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Incubus",
    description: "Incubus is a malevolent fiend infused with infernal or abyssal power. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in planar lower planes and urban environments.",
    type: "fiend",
    size: "medium",
    cr: 4.0,
    xp: 1100,
    initiative: 3,
    habitats: [
      "planar:lower planes",
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Lamia",
    description: "Lamia is a malevolent fiend infused with infernal or abyssal power. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in desert environments.",
    type: "fiend",
    size: "large",
    cr: 4.0,
    xp: 1100,
    initiative: 1,
    habitats: [
      "desert"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Red Dragon Wyrmling",
    description: "Red Dragon Wyrmling is a draconic creature with predatory intelligence and devastating presence. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in hill and mountain environments.",
    type: "dragon",
    size: "medium",
    cr: 4.0,
    xp: 1100,
    initiative: 0,
    habitats: [
      "hill",
      "mountain"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Succubus",
    description: "Succubus is a malevolent fiend infused with infernal or abyssal power. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in planar lower planes and urban environments.",
    type: "fiend",
    size: "medium",
    cr: 4.0,
    xp: 1100,
    initiative: 3,
    habitats: [
      "planar:lower planes",
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Tough Boss",
    description: "Tough Boss is a sentient humanoid opponent that uses tactics and equipment. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in any environments.",
    type: "humanoid",
    size: "medium",
    cr: 4.0,
    xp: 1100,
    initiative: 2,
    habitats: [
      "any"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Wereboar",
    description: "Wereboar is a monstrous predator whose form and instincts defy natural order. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in forest and grassland environments.",
    type: "monstrosity",
    size: "medium",
    cr: 4.0,
    xp: 1100,
    initiative: 0,
    habitats: [
      "forest",
      "grassland",
      "hill"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Weretiger",
    description: "Weretiger is a monstrous predator whose form and instincts defy natural order. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in desert and forest environments.",
    type: "monstrosity",
    size: "medium",
    cr: 4.0,
    xp: 1100,
    initiative: 2,
    habitats: [
      "desert",
      "forest",
      "grassland"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Air Elemental",
    description: "Air Elemental is an elemental being formed from raw primal forces. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in desert and mountain environments.",
    type: "elemental",
    size: "large",
    cr: 5.0,
    xp: 1800,
    initiative: 5,
    habitats: [
      "desert",
      "mountain",
      "planar:elementalplane of air"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Barbed Devil",
    description: "Barbed Devil is a malevolent fiend infused with infernal or abyssal power. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in planar nine hells environments.",
    type: "fiend",
    size: "medium",
    cr: 5.0,
    xp: 1800,
    initiative: 3,
    habitats: [
      "planar:nine hells"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Bulette",
    description: "Bulette is a monstrous predator whose form and instincts defy natural order. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in grassland and hill environments.",
    type: "monstrosity",
    size: "large",
    cr: 5.0,
    xp: 1800,
    initiative: 0,
    habitats: [
      "grassland",
      "hill",
      "mountain"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Earth Elemental",
    description: "Earth Elemental is an elemental being formed from raw primal forces. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in mountain and planar elemental plane of earth environments.",
    type: "elemental",
    size: "large",
    cr: 5.0,
    xp: 1800,
    initiative: -1,
    habitats: [
      "mountain",
      "planar:elemental plane of earth",
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Fire Elemental",
    description: "Fire Elemental is an elemental being formed from raw primal forces. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in desert and planar elemental plane of fire environments.",
    type: "elemental",
    size: "large",
    cr: 5.0,
    xp: 1800,
    initiative: 3,
    habitats: [
      "desert",
      "planar:elemental plane of fire"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Flesh Golem",
    description: "Flesh Golem is an artificial construct built for relentless action. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in any environments.",
    type: "construct",
    size: "medium",
    cr: 5.0,
    xp: 1800,
    initiative: -1,
    habitats: [
      "any"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Giant Crocodile",
    description: "Giant Crocodile is a massive combatant that dominates space with strength and reach. It is huge in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in coastal and swamp environments.",
    type: "beast",
    size: "huge",
    cr: 5.0,
    xp: 1800,
    initiative: -1,
    habitats: [
      "coastal",
      "swamp",
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Giant Shark",
    description: "Giant Shark is a massive combatant that dominates space with strength and reach. It is huge in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in underwater environments.",
    type: "beast",
    size: "huge",
    cr: 5.0,
    xp: 1800,
    initiative: 0,
    habitats: [
      "underwater"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Gladiator",
    description: "Gladiator is a sentient humanoid opponent that uses tactics and equipment. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in any environments.",
    type: "humanoid",
    size: "medium",
    cr: 5.0,
    xp: 1800,
    initiative: 2,
    habitats: [
      "any"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Gorgon",
    description: "Gorgon is an artificial construct built for relentless action. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in forest and grassland environments.",
    type: "construct",
    size: "large",
    cr: 5.0,
    xp: 1800,
    initiative: 0,
    habitats: [
      "forest",
      "grassland",
      "hill"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Half-Dragon",
    description: "Half-Dragon is a draconic creature with predatory intelligence and devastating presence. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in any environments.",
    type: "dragon",
    size: "medium",
    cr: 5.0,
    xp: 1800,
    initiative: 2,
    habitats: [
      "any"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Hill Giant",
    description: "Hill Giant is a massive combatant that dominates space with strength and reach. It is huge in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in hill environments.",
    type: "giant",
    size: "huge",
    cr: 5.0,
    xp: 1800,
    initiative: -1,
    habitats: [
      "hill"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Night Hag",
    description: "Night Hag is a malevolent fiend infused with infernal or abyssal power. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in planar lower planes environments.",
    type: "fiend",
    size: "medium",
    cr: 5.0,
    xp: 1800,
    initiative: 2,
    habitats: [
      "planar:lower planes"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Otyugh",
    description: "Otyugh is an alien aberration with unsettling behavior and unnatural abilities. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in underdark environments.",
    type: "aberration",
    size: "large",
    cr: 5.0,
    xp: 1800,
    initiative: 0,
    habitats: [
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Roper",
    description: "Roper is an alien aberration with unsettling behavior and unnatural abilities. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in underdark environments.",
    type: "aberration",
    size: "large",
    cr: 5.0,
    xp: 1800,
    initiative: -1,
    habitats: [
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Salamander",
    description: "Salamander is an elemental being formed from raw primal forces. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in planar elemental plane of fire and underdark environments.",
    type: "elemental",
    size: "large",
    cr: 5.0,
    xp: 1800,
    initiative: 2,
    habitats: [
      "planar:elemental plane of fire",
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Shambling Mound",
    description: "Shambling Mound is an animated plant creature with predatory or defensive instincts. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in forest and swamp environments.",
    type: "plant",
    size: "large",
    cr: 5.0,
    xp: 1800,
    initiative: -1,
    habitats: [
      "forest",
      "swamp"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Triceratops",
    description: "Triceratops is a natural creature that relies on instinct and physical prowess. It is huge in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in grassland environments.",
    type: "beast",
    size: "huge",
    cr: 5.0,
    xp: 1800,
    initiative: -1,
    habitats: [
      "grassland"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Troll",
    description: "Troll is a towering giant known for brute strength and battlefield control. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in arctic and forest environments.",
    type: "giant",
    size: "large",
    cr: 5.0,
    xp: 1800,
    initiative: 1,
    habitats: [
      "arctic",
      "forest",
      "hill",
      "mountain",
      "swamp",
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Unicorn",
    description: "Unicorn is a radiant celestial entity with divine resilience. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in forest and planar feywild environments.",
    type: "celestial",
    size: "large",
    cr: 5.0,
    xp: 1800,
    initiative: 2,
    habitats: [
      "forest",
      "planar:feywild"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Vampire Spawn",
    description: "Vampire Spawn is an undead foe that fights without fear and often carries supernatural menace. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in underdark and urban environments.",
    type: "undead",
    size: "medium",
    cr: 5.0,
    xp: 1800,
    initiative: 3,
    habitats: [
      "underdark",
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Water Elemental",
    description: "Water Elemental is an elemental being formed from raw primal forces. It is large in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in coastal and planar elemental plane of water environments.",
    type: "elemental",
    size: "large",
    cr: 5.0,
    xp: 1800,
    initiative: 2,
    habitats: [
      "coastal",
      "planar:elemental plane of water",
      "swamp",
      "underwater"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Werebear",
    description: "Werebear is a monstrous predator whose form and instincts defy natural order. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in arctic and forest environments.",
    type: "monstrosity",
    size: "medium",
    cr: 5.0,
    xp: 1800,
    initiative: 0,
    habitats: [
      "arctic",
      "forest",
      "hill"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Wraith",
    description: "Wraith is an undead foe that fights without fear and often carries supernatural menace. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in planar shadowfell and underdark environments.",
    type: "undead",
    size: "medium",
    cr: 5.0,
    xp: 1800,
    initiative: 3,
    habitats: [
      "planar:shadowfell",
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Xorn",
    description: "Xorn is an elemental being formed from raw primal forces. It is medium in size and typically represents a dangerous challenge for low-to-mid level adventurers. It is commonly encountered in underdark and planar elemental plane of earth environments.",
    type: "elemental",
    size: "medium",
    cr: 5.0,
    xp: 1800,
    initiative: 0,
    habitats: [
      "underdark",
      "planar:elemental plane of earth"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Chimera",
    description: "Chimera is a monstrous predator whose form and instincts defy natural order. It is large in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in grassland and hill environments.",
    type: "monstrosity",
    size: "large",
    cr: 6.0,
    xp: 2300,
    initiative: 0,
    habitats: [
      "grassland",
      "hill",
      "mountain"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Drider",
    description: "Drider is a monstrous predator whose form and instincts defy natural order. It is large in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in forest and underdark environments.",
    type: "monstrosity",
    size: "large",
    cr: 6.0,
    xp: 2300,
    initiative: 4,
    habitats: [
      "forest",
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Invisible Stalker",
    description: "Invisible Stalker is an elemental being formed from raw primal forces. It is large in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in urban environments.",
    type: "elemental",
    size: "large",
    cr: 6.0,
    xp: 2300,
    initiative: 4,
    habitats: [
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Mage",
    description: "Mage is a sentient humanoid opponent that uses tactics and equipment. It is medium in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in any environments.",
    type: "humanoid",
    size: "medium",
    cr: 6.0,
    xp: 2300,
    initiative: 2,
    habitats: [
      "any"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Mammoth",
    description: "Mammoth is a natural creature that relies on instinct and physical prowess. It is huge in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in arctic environments.",
    type: "beast",
    size: "huge",
    cr: 6.0,
    xp: 2300,
    initiative: -1,
    habitats: [
      "arctic"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Medusa",
    description: "Medusa is a monstrous predator whose form and instincts defy natural order. It is medium in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in desert environments.",
    type: "monstrosity",
    size: "medium",
    cr: 6.0,
    xp: 2300,
    initiative: 3,
    habitats: [
      "desert"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Pirate Captain",
    description: "Pirate Captain is a sentient humanoid opponent that uses tactics and equipment. It is medium in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in any environments.",
    type: "humanoid",
    size: "medium",
    cr: 6.0,
    xp: 2300,
    initiative: 4,
    habitats: [
      "any"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Vrock",
    description: "Vrock is a malevolent fiend infused with infernal or abyssal power. It is large in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in planar abyss environments.",
    type: "fiend",
    size: "large",
    cr: 6.0,
    xp: 2300,
    initiative: 2,
    habitats: [
      "planar:abyss"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Wyvern",
    description: "Wyvern is a draconic threat with cunning instincts and overwhelming presence. It is large in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in hill and mountain environments.",
    type: "dragon",
    size: "large",
    cr: 6.0,
    xp: 2300,
    initiative: 0,
    habitats: [
      "hill",
      "mountain"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Young Brass Dragon",
    description: "Young Brass Dragon is a draconic creature with predatory intelligence and devastating presence. It is large in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in desert environments.",
    type: "dragon",
    size: "large",
    cr: 6.0,
    xp: 2300,
    initiative: 0,
    habitats: [
      "desert"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Young White Dragon",
    description: "Young White Dragon is a draconic creature with predatory intelligence and devastating presence. It is large in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in arctic environments.",
    type: "dragon",
    size: "large",
    cr: 6.0,
    xp: 2300,
    initiative: 0,
    habitats: [
      "arctic"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Giant Ape",
    description: "Giant Ape is a massive combatant that dominates space with strength and reach. It is huge in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in forest environments.",
    type: "beast",
    size: "huge",
    cr: 7.0,
    xp: 2900,
    initiative: 2,
    habitats: [
      "forest"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Oni",
    description: "Oni is a malevolent fiend infused with infernal or abyssal power. It is large in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in forest and urban environments.",
    type: "fiend",
    size: "large",
    cr: 7.0,
    xp: 2900,
    initiative: 0,
    habitats: [
      "forest",
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Shield Guardian",
    description: "Shield Guardian is a trained humanoid combatant using weapons, discipline, and teamwork. It is large in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in urban environments.",
    type: "construct",
    size: "large",
    cr: 7.0,
    xp: 2900,
    initiative: -1,
    habitats: [
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Stone Giant",
    description: "Stone Giant is a massive combatant that dominates space with strength and reach. It is huge in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in mountain and underdark environments.",
    type: "giant",
    size: "huge",
    cr: 7.0,
    xp: 2900,
    initiative: 2,
    habitats: [
      "mountain",
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Young Black Dragon",
    description: "Young Black Dragon is a draconic creature with predatory intelligence and devastating presence. It is large in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in swamp environments.",
    type: "dragon",
    size: "large",
    cr: 7.0,
    xp: 2900,
    initiative: 2,
    habitats: [
      "swamp"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Young Copper Dragon",
    description: "Young Copper Dragon is a draconic creature with predatory intelligence and devastating presence. It is large in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in hill environments.",
    type: "dragon",
    size: "large",
    cr: 7.0,
    xp: 2900,
    initiative: 1,
    habitats: [
      "hill"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Assassin",
    description: "Assassin is a sentient humanoid opponent that uses tactics and equipment. It is medium in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in any environments.",
    type: "humanoid",
    size: "medium",
    cr: 8.0,
    xp: 3900,
    initiative: 4,
    habitats: [
      "any"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Chain Devil",
    description: "Chain Devil is a malevolent fiend infused with infernal or abyssal power. It is medium in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in planar nine hells environments.",
    type: "fiend",
    size: "medium",
    cr: 8.0,
    xp: 3900,
    initiative: 2,
    habitats: [
      "planar:nine hells"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Cloaker",
    description: "Cloaker is an alien aberration with unsettling behavior and unnatural abilities. It is large in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in underdark environments.",
    type: "aberration",
    size: "large",
    cr: 8.0,
    xp: 3900,
    initiative: 2,
    habitats: [
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Frost Giant",
    description: "Frost Giant is a massive combatant that dominates space with strength and reach. It is huge in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in arctic and mountain environments.",
    type: "giant",
    size: "huge",
    cr: 8.0,
    xp: 3900,
    initiative: -1,
    habitats: [
      "arctic",
      "mountain"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Hezrou",
    description: "Hezrou is a malevolent fiend infused with infernal or abyssal power. It is large in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in planar abyss environments.",
    type: "fiend",
    size: "large",
    cr: 8.0,
    xp: 3900,
    initiative: 3,
    habitats: [
      "planar:abyss"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Hydra",
    description: "Hydra is a monstrous predator whose form and instincts defy natural order. It is huge in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in coastal and swamp environments.",
    type: "monstrosity",
    size: "huge",
    cr: 8.0,
    xp: 3900,
    initiative: 1,
    habitats: [
      "coastal",
      "swamp"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Spirit Naga",
    description: "Spirit Naga is a malevolent fiend infused with infernal or abyssal power. It is large in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in planar lower planes underdark environments.",
    type: "fiend",
    size: "large",
    cr: 8.0,
    xp: 3900,
    initiative: 3,
    habitats: [
      "planar:lower planes underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Tyrannosaurus Rex",
    description: "Tyrannosaurus Rex is a natural creature that relies on instinct and physical prowess. It is huge in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in grassland environments.",
    type: "beast",
    size: "huge",
    cr: 8.0,
    xp: 3900,
    initiative: 0,
    habitats: [
      "grassland"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Young Bronze Dragon",
    description: "Young Bronze Dragon is a draconic creature with predatory intelligence and devastating presence. It is large in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in coastal environments.",
    type: "dragon",
    size: "large",
    cr: 8.0,
    xp: 3900,
    initiative: 0,
    habitats: [
      "coastal"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Young Green Dragon",
    description: "Young Green Dragon is a draconic creature with predatory intelligence and devastating presence. It is large in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in forest environments.",
    type: "dragon",
    size: "large",
    cr: 8.0,
    xp: 3900,
    initiative: 1,
    habitats: [
      "forest"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Bone Devil",
    description: "Bone Devil is a malevolent fiend infused with infernal or abyssal power. It is large in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in planar nine hells environments.",
    type: "fiend",
    size: "large",
    cr: 9.0,
    xp: 5000,
    initiative: 3,
    habitats: [
      "planar:nine hells"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Clay Golem",
    description: "Clay Golem is an artificial construct built for relentless action. It is large in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in urban environments.",
    type: "construct",
    size: "large",
    cr: 9.0,
    xp: 5000,
    initiative: -1,
    habitats: [
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Cloud Giant",
    description: "Cloud Giant is a massive combatant that dominates space with strength and reach. It is huge in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in mountain environments.",
    type: "giant",
    size: "huge",
    cr: 9.0,
    xp: 5000,
    initiative: 0,
    habitats: [
      "mountain"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Fire Giant",
    description: "Fire Giant is a massive combatant that dominates space with strength and reach. It is huge in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in mountain and underdark environments.",
    type: "giant",
    size: "huge",
    cr: 9.0,
    xp: 5000,
    initiative: -1,
    habitats: [
      "mountain",
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Glabrezu",
    description: "Glabrezu is a malevolent fiend infused with infernal or abyssal power. It is large in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in planar abyss environments.",
    type: "fiend",
    size: "large",
    cr: 9.0,
    xp: 5000,
    initiative: 2,
    habitats: [
      "planar:abyss"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Treant",
    description: "Treant is an animated plant creature with predatory or defensive instincts. It is huge in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in forest environments.",
    type: "plant",
    size: "huge",
    cr: 9.0,
    xp: 5000,
    initiative: -1,
    habitats: [
      "forest"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Young Blue Dragon",
    description: "Young Blue Dragon is a draconic creature with predatory intelligence and devastating presence. It is large in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in coastal and desert environments.",
    type: "dragon",
    size: "large",
    cr: 9.0,
    xp: 5000,
    initiative: 0,
    habitats: [
      "coastal",
      "desert"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Young Silver Dragon",
    description: "Young Silver Dragon is a draconic creature with predatory intelligence and devastating presence. It is large in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in mountain and urban environments.",
    type: "dragon",
    size: "large",
    cr: 9.0,
    xp: 5000,
    initiative: 0,
    habitats: [
      "mountain",
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Aboleth",
    description: "Aboleth is an alien aberration with unsettling behavior and unnatural abilities. It is large in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in underdark and underwater environments.",
    type: "aberration",
    size: "large",
    cr: 10.0,
    xp: 5900,
    initiative: -1,
    habitats: [
      "underdark",
      "underwater"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Deva",
    description: "Deva is a radiant celestial entity with divine resilience. It is medium in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in planar upper planes environments.",
    type: "celestial",
    size: "medium",
    cr: 10.0,
    xp: 5900,
    initiative: 4,
    habitats: [
      "planar:upper planes"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Guardian Naga",
    description: "Guardian Naga is a trained humanoid combatant using weapons, discipline, and teamwork. It is large in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in desert and forest environments.",
    type: "celestial",
    size: "large",
    cr: 10.0,
    xp: 5900,
    initiative: 4,
    habitats: [
      "desert",
      "forest",
      "planar:upper planes"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Stone Golem",
    description: "Stone Golem is an artificial construct built for relentless action. It is large in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in any environments.",
    type: "construct",
    size: "large",
    cr: 10.0,
    xp: 5900,
    initiative: -1,
    habitats: [
      "any"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Young Gold Dragon",
    description: "Young Gold Dragon is a draconic creature with predatory intelligence and devastating presence. It is large in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in forest and grassland environments.",
    type: "dragon",
    size: "large",
    cr: 10.0,
    xp: 5900,
    initiative: 2,
    habitats: [
      "forest",
      "grassland"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Young Red Dragon",
    description: "Young Red Dragon is a draconic creature with predatory intelligence and devastating presence. It is large in size and typically represents a major threat requiring strong tactical play. It is commonly encountered in hill and mountain environments.",
    type: "dragon",
    size: "large",
    cr: 10.0,
    xp: 5900,
    initiative: 0,
    habitats: [
      "hill",
      "mountain"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Behir",
    description: "Behir is a monstrous predator whose form and instincts defy natural order. It is huge in size and typically represents a high-tier threat suited to veteran adventurers. It is commonly encountered in underdark environments.",
    type: "monstrosity",
    size: "huge",
    cr: 11.0,
    xp: 7200,
    initiative: 3,
    habitats: [
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Djinni",
    description: "Djinni is an elemental being formed from raw primal forces. It is large in size and typically represents a high-tier threat suited to veteran adventurers. It is commonly encountered in coastal and planar elemental plane of air environments.",
    type: "elemental",
    size: "large",
    cr: 11.0,
    xp: 7200,
    initiative: 2,
    habitats: [
      "coastal",
      "planar:elemental plane of air"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Efreeti",
    description: "Efreeti is an elemental being formed from raw primal forces. It is large in size and typically represents a high-tier threat suited to veteran adventurers. It is commonly encountered in desert and planar elemental plane of fire environments.",
    type: "elemental",
    size: "large",
    cr: 11.0,
    xp: 7200,
    initiative: 1,
    habitats: [
      "desert",
      "planar:elemental plane of fire"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Horned Devil",
    description: "Horned Devil is a malevolent fiend infused with infernal or abyssal power. It is large in size and typically represents a high-tier threat suited to veteran adventurers. It is commonly encountered in planar nine hells environments.",
    type: "fiend",
    size: "large",
    cr: 11.0,
    xp: 7200,
    initiative: 3,
    habitats: [
      "planar:nine hells"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Remorhaz",
    description: "Remorhaz is a monstrous predator whose form and instincts defy natural order. It is huge in size and typically represents a high-tier threat suited to veteran adventurers. It is commonly encountered in arctic environments.",
    type: "monstrosity",
    size: "huge",
    cr: 11.0,
    xp: 7200,
    initiative: 1,
    habitats: [
      "arctic"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Roc",
    description: "Roc is a monstrous predator whose form and instincts defy natural order. It is gargantuan in size and typically represents a high-tier threat suited to veteran adventurers. It is commonly encountered in arctic and coastal environments.",
    type: "monstrosity",
    size: "gargantuan",
    cr: 11.0,
    xp: 7200,
    initiative: 0,
    habitats: [
      "arctic",
      "coastal",
      "desert",
      "hill",
      "mountain"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Sphinx of Lore",
    description: "Sphinx of Lore is a radiant celestial entity with divine resilience. It is large in size and typically represents a high-tier threat suited to veteran adventurers. It is commonly encountered in desert and planar upper planes environments.",
    type: "celestial",
    size: "large",
    cr: 11.0,
    xp: 7200,
    initiative: 2,
    habitats: [
      "desert",
      "planar:upper planes"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Archmage",
    description: "Archmage is a sentient humanoid opponent that uses tactics and equipment. It is medium in size and typically represents a high-tier threat suited to veteran adventurers. It is commonly encountered in any environments.",
    type: "humanoid",
    size: "medium",
    cr: 12.0,
    xp: 8400,
    initiative: 2,
    habitats: [
      "any"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Erinyes",
    description: "Erinyes is a malevolent fiend infused with infernal or abyssal power. It is medium in size and typically represents a high-tier threat suited to veteran adventurers. It is commonly encountered in planar nine hells environments.",
    type: "fiend",
    size: "medium",
    cr: 12.0,
    xp: 8400,
    initiative: 3,
    habitats: [
      "planar:nine hells"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Adult Brass Dragon",
    description: "Adult Brass Dragon is a draconic creature with predatory intelligence and devastating presence. It is huge in size and typically represents a high-tier threat suited to veteran adventurers. It is commonly encountered in desert environments.",
    type: "dragon",
    size: "huge",
    cr: 13.0,
    xp: 10000,
    initiative: 0,
    habitats: [
      "desert"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Adult White Dragon",
    description: "Adult White Dragon is a draconic creature with predatory intelligence and devastating presence. It is huge in size and typically represents a high-tier threat suited to veteran adventurers. It is commonly encountered in arctic environments.",
    type: "dragon",
    size: "huge",
    cr: 13.0,
    xp: 10000,
    initiative: 0,
    habitats: [
      "arctic"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Nalfeshnee",
    description: "Nalfeshnee is a malevolent fiend infused with infernal or abyssal power. It is large in size and typically represents a high-tier threat suited to veteran adventurers. It is commonly encountered in planar abyss environments.",
    type: "fiend",
    size: "large",
    cr: 13.0,
    xp: 10000,
    initiative: 0,
    habitats: [
      "planar:abyss"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Rakshasa",
    description: "Rakshasa is a malevolent fiend infused with infernal or abyssal power. It is medium in size and typically represents a high-tier threat suited to veteran adventurers. It is commonly encountered in planar nine hells and urban environments.",
    type: "fiend",
    size: "medium",
    cr: 13.0,
    xp: 10000,
    initiative: 3,
    habitats: [
      "planar:nine hells",
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Storm Giant",
    description: "Storm Giant is a massive combatant that dominates space with strength and reach. It is huge in size and typically represents a high-tier threat suited to veteran adventurers. It is commonly encountered in coastal and underwater environments.",
    type: "giant",
    size: "huge",
    cr: 13.0,
    xp: 10000,
    initiative: 2,
    habitats: [
      "coastal",
      "underwater"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Vampire",
    description: "Vampire is an undead foe that fights without fear and often carries supernatural menace. It is medium in size and typically represents a high-tier threat suited to veteran adventurers. It is commonly encountered in underdark and urban environments.",
    type: "undead",
    size: "medium",
    cr: 13.0,
    xp: 10000,
    initiative: 4,
    habitats: [
      "underdark",
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Adult Black Dragon",
    description: "Adult Black Dragon is a draconic creature with predatory intelligence and devastating presence. It is huge in size and typically represents a high-tier threat suited to veteran adventurers. It is commonly encountered in swamp environments.",
    type: "dragon",
    size: "huge",
    cr: 14.0,
    xp: 11500,
    initiative: 2,
    habitats: [
      "swamp"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Adult Copper Dragon",
    description: "Adult Copper Dragon is a draconic creature with predatory intelligence and devastating presence. It is huge in size and typically represents a high-tier threat suited to veteran adventurers. It is commonly encountered in hill environments.",
    type: "dragon",
    size: "huge",
    cr: 14.0,
    xp: 11500,
    initiative: 1,
    habitats: [
      "hill"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Ice Devil",
    description: "Ice Devil is a malevolent fiend infused with infernal or abyssal power. It is large in size and typically represents a high-tier threat suited to veteran adventurers. It is commonly encountered in planar nine hells environments.",
    type: "fiend",
    size: "large",
    cr: 14.0,
    xp: 11500,
    initiative: 2,
    habitats: [
      "planar:nine hells"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Adult Bronze Dragon",
    description: "Adult Bronze Dragon is a draconic creature with predatory intelligence and devastating presence. It is huge in size and typically represents a high-tier threat suited to veteran adventurers. It is commonly encountered in coastal environments.",
    type: "dragon",
    size: "huge",
    cr: 15.0,
    xp: 13000,
    initiative: 0,
    habitats: [
      "coastal"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Adult Green Dragon",
    description: "Adult Green Dragon is a draconic creature with predatory intelligence and devastating presence. It is huge in size and typically represents a high-tier threat suited to veteran adventurers. It is commonly encountered in forest environments.",
    type: "dragon",
    size: "huge",
    cr: 15.0,
    xp: 13000,
    initiative: 1,
    habitats: [
      "forest"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Mummy Lord",
    description: "Mummy Lord is an undead foe that fights without fear and often carries supernatural menace. It is medium in size and typically represents a high-tier threat suited to veteran adventurers. It is commonly encountered in desert and swamp environments.",
    type: "undead",
    size: "medium",
    cr: 15.0,
    xp: 13000,
    initiative: 0,
    habitats: [
      "desert",
      "swamp"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Purple Worm",
    description: "Purple Worm is a monstrous predator whose form and instincts defy natural order. It is gargantuan in size and typically represents a high-tier threat suited to veteran adventurers. It is commonly encountered in desert and underdark environments.",
    type: "monstrosity",
    size: "gargantuan",
    cr: 15.0,
    xp: 13000,
    initiative: -2,
    habitats: [
      "desert",
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Adult Blue Dragon",
    description: "Adult Blue Dragon is a draconic creature with predatory intelligence and devastating presence. It is huge in size and typically represents a high-tier threat suited to veteran adventurers. It is commonly encountered in coastal and desert environments.",
    type: "dragon",
    size: "huge",
    cr: 16.0,
    xp: 15000,
    initiative: 0,
    habitats: [
      "coastal",
      "desert"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Adult Silver Dragon",
    description: "Adult Silver Dragon is a draconic creature with predatory intelligence and devastating presence. It is huge in size and typically represents a high-tier threat suited to veteran adventurers. It is commonly encountered in mountain and urban environments.",
    type: "dragon",
    size: "huge",
    cr: 16.0,
    xp: 15000,
    initiative: 0,
    habitats: [
      "mountain",
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Iron Golem",
    description: "Iron Golem is an artificial construct built for relentless action. It is large in size and typically represents a high-tier threat suited to veteran adventurers. It is commonly encountered in any environments.",
    type: "construct",
    size: "large",
    cr: 16.0,
    xp: 15000,
    initiative: -1,
    habitats: [
      "any"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Marilith",
    description: "Marilith is a malevolent fiend infused with infernal or abyssal power. It is large in size and typically represents a high-tier threat suited to veteran adventurers. It is commonly encountered in planar abyss environments.",
    type: "fiend",
    size: "large",
    cr: 16.0,
    xp: 15000,
    initiative: 5,
    habitats: [
      "planar:abyss"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Planetar",
    description: "Planetar is a radiant celestial entity with divine resilience. It is large in size and typically represents a high-tier threat suited to veteran adventurers. It is commonly encountered in planar upper planes environments.",
    type: "celestial",
    size: "large",
    cr: 16.0,
    xp: 15000,
    initiative: 5,
    habitats: [
      "planar:upper planes"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Adult Gold Dragon",
    description: "Adult Gold Dragon is a draconic creature with predatory intelligence and devastating presence. It is huge in size and typically represents an apex threat intended for epic-level parties. It is commonly encountered in forest and grassland environments.",
    type: "dragon",
    size: "huge",
    cr: 17.0,
    xp: 18000,
    initiative: 2,
    habitats: [
      "forest",
      "grassland"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Adult Red Dragon",
    description: "Adult Red Dragon is a draconic creature with predatory intelligence and devastating presence. It is huge in size and typically represents an apex threat intended for epic-level parties. It is commonly encountered in hill and mountain environments.",
    type: "dragon",
    size: "huge",
    cr: 17.0,
    xp: 18000,
    initiative: 0,
    habitats: [
      "hill",
      "mountain"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Dragon Turtle",
    description: "Dragon Turtle is a draconic creature with predatory intelligence and devastating presence. It is gargantuan in size and typically represents an apex threat intended for epic-level parties. It is commonly encountered in coastal and underwater environments.",
    type: "dragon",
    size: "gargantuan",
    cr: 17.0,
    xp: 18000,
    initiative: 0,
    habitats: [
      "coastal",
      "underwater"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Sphinx of Valor",
    description: "Sphinx of Valor is a radiant celestial entity with divine resilience. It is large in size and typically represents an apex threat intended for epic-level parties. It is commonly encountered in desert and planar upper planes environments.",
    type: "celestial",
    size: "large",
    cr: 17.0,
    xp: 18000,
    initiative: 0,
    habitats: [
      "desert",
      "planar:upper planes"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Balor",
    description: "Balor is a malevolent fiend infused with infernal or abyssal power. It is huge in size and typically represents an apex threat intended for epic-level parties. It is commonly encountered in planar abyss environments.",
    type: "fiend",
    size: "huge",
    cr: 19.0,
    xp: 22000,
    initiative: 2,
    habitats: [
      "planar:abyss"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Ancient Brass Dragon",
    description: "Ancient Brass Dragon is a draconic creature with predatory intelligence and devastating presence. It is gargantuan in size and typically represents an apex threat intended for epic-level parties. It is commonly encountered in desert environments.",
    type: "dragon",
    size: "gargantuan",
    cr: 20.0,
    xp: 25000,
    initiative: 0,
    habitats: [
      "desert"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Ancient White Dragon",
    description: "Ancient White Dragon is a draconic creature with predatory intelligence and devastating presence. It is gargantuan in size and typically represents an apex threat intended for epic-level parties. It is commonly encountered in arctic environments.",
    type: "dragon",
    size: "gargantuan",
    cr: 20.0,
    xp: 25000,
    initiative: 0,
    habitats: [
      "arctic"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Pit Fiend",
    description: "Pit Fiend is a malevolent fiend infused with infernal or abyssal power. It is large in size and typically represents an apex threat intended for epic-level parties. It is commonly encountered in planar nine hells environments.",
    type: "fiend",
    size: "large",
    cr: 20.0,
    xp: 25000,
    initiative: 2,
    habitats: [
      "planar:nine hells"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Ancient Black Dragon",
    description: "Ancient Black Dragon is a draconic creature with predatory intelligence and devastating presence. It is gargantuan in size and typically represents an apex threat intended for epic-level parties. It is commonly encountered in swamp environments.",
    type: "dragon",
    size: "gargantuan",
    cr: 21.0,
    xp: 33000,
    initiative: 2,
    habitats: [
      "swamp"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Ancient Copper Dragon",
    description: "Ancient Copper Dragon is a draconic creature with predatory intelligence and devastating presence. It is gargantuan in size and typically represents an apex threat intended for epic-level parties. It is commonly encountered in hill environments.",
    type: "dragon",
    size: "gargantuan",
    cr: 21.0,
    xp: 33000,
    initiative: 1,
    habitats: [
      "hill"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Lich",
    description: "Lich is an undead horror animated by necromantic forces. It is medium in size and typically represents an apex threat intended for epic-level parties. It is commonly encountered in any environments.",
    type: "undead",
    size: "medium",
    cr: 21.0,
    xp: 33000,
    initiative: 3,
    habitats: [
      "any"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Solar",
    description: "Solar is a radiant celestial entity with divine resilience. It is large in size and typically represents an apex threat intended for epic-level parties. It is commonly encountered in planar upper planes environments.",
    type: "celestial",
    size: "large",
    cr: 21.0,
    xp: 33000,
    initiative: 6,
    habitats: [
      "planar:upper planes"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Ancient Bronze Dragon",
    description: "Ancient Bronze Dragon is a draconic creature with predatory intelligence and devastating presence. It is gargantuan in size and typically represents an apex threat intended for epic-level parties. It is commonly encountered in coastal environments.",
    type: "dragon",
    size: "gargantuan",
    cr: 22.0,
    xp: 41000,
    initiative: 0,
    habitats: [
      "coastal"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Ancient Green Dragon",
    description: "Ancient Green Dragon is a draconic creature with predatory intelligence and devastating presence. It is gargantuan in size and typically represents an apex threat intended for epic-level parties. It is commonly encountered in forest environments.",
    type: "dragon",
    size: "gargantuan",
    cr: 22.0,
    xp: 41000,
    initiative: 1,
    habitats: [
      "forest"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Ancient Blue Dragon",
    description: "Ancient Blue Dragon is a draconic creature with predatory intelligence and devastating presence. It is gargantuan in size and typically represents an apex threat intended for epic-level parties. It is commonly encountered in coastal and desert environments.",
    type: "dragon",
    size: "gargantuan",
    cr: 23.0,
    xp: 50000,
    initiative: 0,
    habitats: [
      "coastal",
      "desert"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Ancient Silver Dragon",
    description: "Ancient Silver Dragon is a draconic creature with predatory intelligence and devastating presence. It is gargantuan in size and typically represents an apex threat intended for epic-level parties. It is commonly encountered in mountain and urban environments.",
    type: "dragon",
    size: "gargantuan",
    cr: 23.0,
    xp: 50000,
    initiative: 0,
    habitats: [
      "mountain",
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Kraken",
    description: "Kraken is a monstrous predator whose form and instincts defy natural order. It is gargantuan in size and typically represents an apex threat intended for epic-level parties. It is commonly encountered in underwater environments.",
    type: "monstrosity",
    size: "gargantuan",
    cr: 23.0,
    xp: 50000,
    initiative: 0,
    habitats: [
      "underwater"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Ancient Gold Dragon",
    description: "Ancient Gold Dragon is a draconic creature with predatory intelligence and devastating presence. It is gargantuan in size and typically represents an apex threat intended for epic-level parties. It is commonly encountered in forest and grassland environments.",
    type: "dragon",
    size: "gargantuan",
    cr: 24.0,
    xp: 62000,
    initiative: 2,
    habitats: [
      "forest",
      "grassland"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Ancient Red Dragon",
    description: "Ancient Red Dragon is a draconic creature with predatory intelligence and devastating presence. It is gargantuan in size and typically represents an apex threat intended for epic-level parties. It is commonly encountered in hill and mountain environments.",
    type: "dragon",
    size: "gargantuan",
    cr: 24.0,
    xp: 62000,
    initiative: 0,
    habitats: [
      "hill",
      "mountain"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Tarrasque",
    description: "Tarrasque is a monstrous predator whose form and instincts defy natural order. It is gargantuan in size and typically represents an apex threat intended for epic-level parties. It is commonly encountered in urban environments.",
    type: "monstrosity",
    size: "gargantuan",
    cr: 30.0,
    xp: 155000,
    initiative: 0,
    habitats: [
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Crawling Claw",
    description: "Crawling Claw is an undead horror animated by necromantic forces. It is tiny in size and typically represents a low-threat creature. It is commonly encountered in urban and underdark environments.",
    type: "undead",
    size: "tiny",
    cr: 0.125,
    xp: 10,
    initiative: 2,
    habitats: [
      "urban",
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Adult Kruthik",
    description: "Adult Kruthik is a monstrous predator whose form and instincts defy natural order. It is medium in size and typically represents a moderate threat for developing parties. It is commonly encountered in cave and underdark environments.",
    type: "monstrosity",
    size: "medium",
    cr: 2.0,
    xp: 450,
    initiative: 2,
    habitats: [
      "cave",
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Myconid",
    description: "Myconid is an animated plant creature with predatory or defensive instincts. It is medium in size and typically represents a low-threat creature. It is commonly encountered in underdark and cave environments.",
    type: "plant",
    size: "medium",
    cr: 0.5,
    xp: 100,
    initiative: 0,
    habitats: [
      "underdark",
      "cave"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Twig Blight",
    description: "Twig Blight is an animated plant creature with predatory or defensive instincts. It is small in size and typically represents a low-threat creature. It is commonly encountered in forest and swamp environments.",
    type: "plant",
    size: "small",
    cr: 0.125,
    xp: 25,
    initiative: 1,
    habitats: [
      "forest",
      "swamp"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Manes",
    description: "Manes is a malevolent fiend infused with infernal or abyssal power. It is small in size and typically represents a low-threat creature. It is commonly encountered in planar:abyss environments.",
    type: "fiend",
    size: "small",
    cr: 0.125,
    xp: 25,
    initiative: 1,
    habitats: [
      "planar:abyss"
    ],
    locations: null,
    regions: ["Shadowfell"],
    aggressive: true
  },
  {
    name: "Boggle",
    description: "Boggle is a fey creature shaped by trickery and wild magic. It is small in size and typically represents a low-threat creature. It is commonly encountered in urban and feywild environments.",
    type: "fey",
    size: "small",
    cr: 0.125,
    xp: 25,
    initiative: 1,
    habitats: [
      "urban",
      "feywild"
    ],
    locations: null,
    regions: ["Feywild"],
    aggressive: true
  },
  {
    name: "Flumph",
    description: "Flumph is an aberrant lifeform shaped by alien instincts and psychic influence. It is small in size and typically represents a low-threat creature. It is commonly encountered in underdark environments.",
    type: "aberration",
    size: "small",
    cr: 0.125,
    xp: 25,
    initiative: 0,
    habitats: [
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Neogi Hatchling",
    description: "Neogi Hatchling is a monstrous predator whose form and instincts defy natural order. It is tiny in size and typically represents a low-threat creature. It is commonly encountered in underdark environments.",
    type: "monstrosity",
    size: "tiny",
    cr: 0.125,
    xp: 25,
    initiative: 3,
    habitats: [
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Xvart",
    description: "Xvart is a sentient humanoid opponent that uses tactics and equipment. It is small in size and typically represents a low-threat creature. It is commonly encountered in cave and underdark environments.",
    type: "humanoid",
    size: "small",
    cr: 0.125,
    xp: 25,
    initiative: 1,
    habitats: [
      "cave",
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Needle Blight",
    description: "Needle Blight is an animated plant creature with predatory or defensive instincts. It is medium in size and typically represents a low-threat creature. It is commonly encountered in forest environments.",
    type: "plant",
    size: "medium",
    cr: 0.25,
    xp: 50,
    initiative: 1,
    habitats: [
      "forest"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Bullywug",
    description: "Bullywug is a sentient humanoid opponent that uses tactics and equipment. It is medium in size and typically represents a low-threat creature. It is commonly encountered in swamp environments.",
    type: "humanoid",
    size: "medium",
    cr: 0.25,
    xp: 50,
    initiative: 1,
    habitats: [
      "swamp"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Drow",
    description: "Drow is a sentient humanoid opponent that uses tactics and equipment. It is medium in size and typically represents a low-threat creature. It is commonly encountered in underdark and urban environments.",
    type: "humanoid",
    size: "medium",
    cr: 0.25,
    xp: 50,
    initiative: 2,
    habitats: [
      "underdark",
      "urban"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Velociraptor",
    description: "Velociraptor is a natural creature that relies on instinct and physical prowess. It is tiny in size and typically represents a low-threat creature. It is commonly encountered in grassland and forest environments.",
    type: "beast",
    size: "tiny",
    cr: 0.25,
    xp: 50,
    initiative: 2,
    habitats: [
      "grassland",
      "forest"
    ],
    locations: null,
    regions: ["Zendikar"],
    aggressive: true
  },
  {
    name: "Gnoll Witherling",
    description: "Gnoll Witherling is an undead horror animated by necromantic forces. It is medium in size and typically represents a low-threat creature. It is commonly encountered in grassland and desert environments.",
    type: "undead",
    size: "medium",
    cr: 0.25,
    xp: 50,
    initiative: 0,
    habitats: [
      "grassland",
      "desert"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Grung",
    description: "Grung is a sentient humanoid opponent that uses tactics and equipment. It is small in size and typically represents a low-threat creature. It is commonly encountered in swamp and forest environments.",
    type: "humanoid",
    size: "small",
    cr: 0.25,
    xp: 50,
    initiative: 2,
    habitats: [
      "swamp",
      "forest"
    ],
    locations: null,
    regions: ["Zendikar"],
    aggressive: true
  },
  {
    name: "Derro",
    description: "Derro is a sentient humanoid opponent that uses tactics and equipment. It is medium in size and typically represents a low-threat creature. It is commonly encountered in underdark environments.",
    type: "humanoid",
    size: "medium",
    cr: 0.25,
    xp: 50,
    initiative: 2,
    habitats: [
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Kenku",
    description: "Kenku is a sentient humanoid opponent that uses tactics and equipment. It is medium in size and typically represents a low-threat creature. It is commonly encountered in urban and swamp environments.",
    type: "humanoid",
    size: "medium",
    cr: 0.25,
    xp: 50,
    initiative: 2,
    habitats: [
      "urban",
      "swamp"
    ],
    locations: null,
    regions: ["Faerun", "Shadowfell"],
    aggressive: true
  },
  {
    name: "Rothe",
    description: "Rothe is a natural creature that relies on instinct and physical prowess. It is large in size and typically represents a low-threat creature. It is commonly encountered in underdark and grassland environments.",
    type: "beast",
    size: "large",
    cr: 0.25,
    xp: 50,
    initiative: -1,
    habitats: [
      "underdark",
      "grassland"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Troglodyte",
    description: "Troglodyte is a sentient humanoid opponent that uses tactics and equipment. It is medium in size and typically represents a low-threat creature. It is commonly encountered in cave and underdark environments.",
    type: "humanoid",
    size: "medium",
    cr: 0.25,
    xp: 50,
    initiative: 0,
    habitats: [
      "cave",
      "underdark"
    ],
    locations: null,
    regions: ["Zendikar"],
    aggressive: true
  },
  {
    name: "Chitine",
    description: "Chitine is a monstrous predator whose form and instincts defy natural order. It is small in size and typically represents a low-threat creature. It is commonly encountered in underdark environments.",
    type: "monstrosity",
    size: "small",
    cr: 0.5,
    xp: 100,
    initiative: 2,
    habitats: [
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Gnoll Hunter",
    description: "Gnoll Hunter is a sentient humanoid opponent that uses tactics and equipment. It is medium in size and typically represents a low-threat creature. It is commonly encountered in grassland and desert environments.",
    type: "humanoid",
    size: "medium",
    cr: 0.5,
    xp: 100,
    initiative: 2,
    habitats: [
      "grassland",
      "desert"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Svirfneblin",
    description: "Svirfneblin is a sentient humanoid opponent that uses tactics and equipment. It is small in size and typically represents a low-threat creature. It is commonly encountered in underdark environments.",
    type: "humanoid",
    size: "small",
    cr: 0.5,
    xp: 100,
    initiative: 1,
    habitats: [
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Swarm of Rot Grubs",
    description: "Swarm of Rot Grubs is a swarming threat made of numerous tiny organisms acting in concert. It is medium in size and typically represents a low-threat creature. It is commonly encountered in swamp, cave, and underdark environments.",
    type: "swarm",
    size: "medium",
    cr: 0.5,
    xp: 100,
    initiative: 0,
    habitats: [
      "swamp",
      "cave",
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Lizardfolk",
    description: "Lizardfolk is a sentient humanoid opponent that uses tactics and equipment. It is medium in size and typically represents a low-threat creature. It is commonly encountered in swamp and coastal environments.",
    type: "humanoid",
    size: "medium",
    cr: 0.5,
    xp: 100,
    initiative: 0,
    habitats: [
      "swamp",
      "coastal"
    ],
    locations: null,
    regions: ["Faerun", "Zendikar"],
    aggressive: true
  },
  {
    name: "Tridrone",
    description: "Tridrone is a construct entity animated by artifice and programmed purpose. It is medium in size and typically represents a low-threat creature. It is commonly encountered in planar:mechanus environments.",
    type: "construct",
    size: "medium",
    cr: 0.5,
    xp: 100,
    initiative: 0,
    habitats: [
    ],
    locations: null,
    regions: ["Phyrexia"],
    aggressive: true
  },
  {
    name: "Skulk",
    description: "Skulk is a humanoid-shaped ambusher that stalks from darkness and obscurity. It is medium in size and typically represents a low-threat creature. It is commonly encountered in urban and shadowfell environments.",
    type: "humanoid",
    size: "medium",
    cr: 0.5,
    xp: 100,
    initiative: 2,
    habitats: [
      "urban",
      "shadowfell"
    ],
    locations: null,
    regions: ["Shadowfell"],
    aggressive: true
  },
  {
    name: "Orc",
    description: "Orc is a sentient humanoid opponent that uses tactics and equipment. It is medium in size and typically represents a low-threat creature. It is commonly encountered in mountain and grassland environments.",
    type: "humanoid",
    size: "medium",
    cr: 0.5,
    xp: 100,
    initiative: 1,
    habitats: [
      "mountain",
      "grassland"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Duergar",
    description: "Duergar is a sentient humanoid opponent that uses tactics and equipment. It is medium in size and typically represents a moderate threat for developing parties. It is commonly encountered in underdark environments.",
    type: "humanoid",
    size: "medium",
    cr: 1.0,
    xp: 200,
    initiative: 0,
    habitats: [
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Nilbog",
    description: "Nilbog is a sentient humanoid opponent that uses disruptive magic and unpredictable behavior. It is small in size and typically represents a moderate threat for developing parties. It is commonly encountered in forest and cave environments.",
    type: "humanoid",
    size: "small",
    cr: 1.0,
    xp: 200,
    initiative: 1,
    habitats: [
      "forest",
      "cave"
    ],
    locations: null,
    regions: ["Faerun", "Feywild"],
    aggressive: true
  },
  {
    name: "Quadrone",
    description: "Quadrone is a construct entity animated by artifice and programmed purpose. It is medium in size and typically represents a moderate threat for developing parties. It is commonly encountered in planar:mechanus environments.",
    type: "construct",
    size: "medium",
    cr: 1.0,
    xp: 200,
    initiative: 0,
    habitats: [
    ],
    locations: null,
    regions: ["Phyrexia"],
    aggressive: true
  },
  {
    name: "Meazel",
    description: "Meazel is a fey creature shaped by shadow and malicious intent. It is medium in size and typically represents a moderate threat for developing parties. It is commonly encountered in shadowfell and underdark environments.",
    type: "fey",
    size: "medium",
    cr: 1.0,
    xp: 200,
    initiative: 3,
    habitats: [
      "shadowfell",
      "underdark"
    ],
    locations: null,
    regions: ["Phyrexia", "Shadowfell"],
    aggressive: true
  },
  {
    name: "Fire Snake",
    description: "Fire Snake is an elemental force bound into a predatory form. It is medium in size and typically represents a moderate threat for developing parties. It is commonly encountered in desert and planar:elemental fire environments.",
    type: "elemental",
    size: "medium",
    cr: 1.0,
    xp: 200,
    initiative: 3,
    habitats: [
      "desert",
      "forest"
    ],
    locations: null,
    regions: ["Faerun", "Zendikar"],
    aggressive: true
  },
  {
    name: "Thri-kreen",
    description: "Thri-kreen is a sentient humanoid opponent that uses speed, precision, and natural weapons. It is medium in size and typically represents a moderate threat for developing parties. It is commonly encountered in desert and grassland environments.",
    type: "humanoid",
    size: "medium",
    cr: 1.0,
    xp: 200,
    initiative: 3,
    habitats: [
      "desert",
      "grassland"
    ],
    locations: null,
    regions: ["Zendikar"],
    aggressive: true
  },
  {
    name: "Centaur",
    description: "Centaur is a fey-touched sentient humanoid that combines speed with martial force. It is large in size and typically represents a moderate threat for developing parties. It is commonly encountered in forest and grassland environments.",
    type: "monstrosity",
    size: "large",
    cr: 2.0,
    xp: 450,
    initiative: 2,
    habitats: [
      "forest",
      "grassland"
    ],
    locations: null,
    regions: ["Feywild", "Erwyld"],
    aggressive: true
  },
  {
    name: "Spined Devil",
    description: "Spined Devil is a malevolent fiend infused with infernal or abyssal power. It is small in size and typically represents a moderate threat for developing parties. It is commonly encountered in planar:nine hells environments.",
    type: "fiend",
    size: "small",
    cr: 2.0,
    xp: 450,
    initiative: 2,
    habitats: [
    ],
    locations: null,
    regions: ["Shadowfell"],
    aggressive: true
  },
  {
    name: "Berbalang",
    description: "Berbalang is an aberrant lifeform shaped by alien instincts and psychic influence. It is medium in size and typically represents a moderate threat for developing parties. It is commonly encountered in underdark and ruins environments.",
    type: "aberration",
    size: "medium",
    cr: 2.0,
    xp: 450,
    initiative: 2,
    habitats: [
      "underdark",
      "ruins"
    ],
    locations: null,
    regions: ["Faerun", "Shadowfell"],
    aggressive: true
  },
  {
    name: "Quetzalcoatlus",
    description: "Quetzalcoatlus is a natural creature that relies on instinct and physical prowess. It is huge in size and typically represents a moderate threat for developing parties. It is commonly encountered in coastal and grassland environments.",
    type: "beast",
    size: "huge",
    cr: 2.0,
    xp: 450,
    initiative: 0,
    habitats: [
      "coastal",
      "grassland"
    ],
    locations: null,
    regions: ["Zendikar"],
    aggressive: true
  },
  {
    name: "Meenlock",
    description: "Meenlock is a fey creature warped by fear and shadow. It is small in size and typically represents a moderate threat for developing parties. It is commonly encountered in shadowfell and underdark environments.",
    type: "fey",
    size: "small",
    cr: 2.0,
    xp: 450,
    initiative: 2,
    habitats: [
      "shadowfell",
      "underdark"
    ],
    locations: null,
    regions: ["Phyrexia", "Shadowfell"],
    aggressive: true
  },
  {
    name: "Intellect Devourer",
    description: "Intellect Devourer is an aberrant lifeform shaped by alien instincts and psychic influence. It is tiny in size and typically represents a moderate threat for developing parties. It is commonly encountered in underdark and urban environments.",
    type: "aberration",
    size: "tiny",
    cr: 2.0,
    xp: 450,
    initiative: 2,
    habitats: [
      "underdark",
      "urban"
    ],
    locations: null,
    regions: ["Faerun", "Phyrexia"],
    aggressive: true
  },
  {
    name: "Lizardfolk Shaman",
    description: "Lizardfolk Shaman is a sentient humanoid opponent that combines primal rites with battlefield magic. It is medium in size and typically represents a moderate threat for developing parties. It is commonly encountered in swamp and coastal environments.",
    type: "humanoid",
    size: "medium",
    cr: 2.0,
    xp: 450,
    initiative: 0,
    habitats: [
      "swamp",
      "coastal"
    ],
    locations: null,
    regions: ["Zendikar"],
    aggressive: true
  },
  {
    name: "Ogre Howdah",
    description: "Ogre Howdah is a giant brute adapted for mounted raiding and frontline pressure. It is large in size and typically represents a moderate threat for developing parties. It is commonly encountered in grassland and mountain environments.",
    type: "giant",
    size: "large",
    cr: 2.0,
    xp: 450,
    initiative: -1,
    habitats: [
      "grassland",
      "mountain"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Nothic",
    description: "Nothic is an aberrant lifeform shaped by broken arcane knowledge and hunger. It is medium in size and typically represents a moderate threat for developing parties. It is commonly encountered in ruins and underdark environments.",
    type: "aberration",
    size: "medium",
    cr: 2.0,
    xp: 450,
    initiative: 3,
    habitats: [
      "ruins",
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Orog",
    description: "Orog is a sentient humanoid opponent that uses disciplined tactics and heavy equipment. It is medium in size and typically represents a moderate threat for developing parties. It is commonly encountered in mountain and underdark environments.",
    type: "humanoid",
    size: "medium",
    cr: 2.0,
    xp: 450,
    initiative: 1,
    habitats: [
      "mountain",
      "underdark"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Quaggoth",
    description: "Quaggoth is a sentient humanoid opponent that fights with savage melee aggression. It is medium in size and typically represents a moderate threat for developing parties. It is commonly encountered in underdark and cave environments.",
    type: "humanoid",
    size: "medium",
    cr: 2.0,
    xp: 450,
    initiative: 2,
    habitats: [
      "underdark",
      "cave"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  },
  {
    name: "Poltergeist",
    description: "Poltergeist is an undead horror animated by restless malice. It is medium in size and typically represents a moderate threat for developing parties. It is commonly encountered in urban, ruins, and shadowfell environments.",
    type: "undead",
    size: "medium",
    cr: 2.0,
    xp: 450,
    initiative: 2,
    habitats: [
      "urban",
      "ruins",
      "shadowfell"
    ],
    locations: null,
    regions: ["Shadowfell"],
    aggressive: true
  },
  {
    name: "Cave Bear",
    description: "Cave Bear is a natural creature that relies on instinct and physical prowess. It is large in size and typically represents a moderate threat for developing parties. It is commonly encountered in cave and mountain environments.",
    type: "beast",
    size: "large",
    cr: 2.0,
    xp: 450,
    initiative: 0,
    habitats: [
      "cave",
      "mountain"
    ],
    locations: null,
    regions: ["Faerun"],
    aggressive: true
  }
];
