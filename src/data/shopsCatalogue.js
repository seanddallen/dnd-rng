export const SHOPS_CATALOGUE = [
  {
    shop: 'Tolarian General',
    storeType: "general store",
    shopDetails: 'Tolarian general shop.',
    owner: 'Curtis Fenroot',
    ownerDetails: 'Older black human man. A retired military with a sharp eye for quality gear.',
    locations: ['Tolaria'],
    inventory: [
      {
        item: 'Potion of Healing',
        details: 'A small red vial that restores vitality.',
        type: 'magic',
        rarity: 'common',
        quantity: 4,
        cost: '50 GP',
      },
      {
        "item": "Antitoxin (vial)",
        "effects": "cure poison from target or advantage on saving throws against poison for 1 hour.",
        "cost": "50 GP",
        "storeTypes": [
          "potion store"
        ],
        "rarity": "common",
        "size": "small",
        "level": "novice",
        "type": "normal"
      },
    ],
  },
  {
    shop: 'Eds Equipment',
    storeType: "equipment store",
    shopDetails: 'Tolarian equipment shop.',
    owner: 'Ed Green',
    ownerDetails: 'Middle age human man. Balding with beer belly. Speaks fast like an actioneer. Called Steady Ed',
    locations: ['Tolaria'],
    inventory: [
      {
        "item": "Dagger",
        "details": "Standardized weapon profile (finesse, basic).",
        "damage": "1d6 piercing (per ML for Might classes)",
        "type": "normal",
        "proficiency": "basic",
        "size": "light",
        "hold": "one-handed",
        "rarity": "common",
        "cost": "10 GP",
        "storeTypes": [
          "equipment store"
        ],
        "weaponType": "finesse",
        "level": "novice",
        "partyLevel": 1
      },
    ],
  },
  {
    shop: 'Potions and Perfumes.',
    storeType: "potion store",
    shopDetails: 'Tolarian potion shop.',
    owner: 'Claudia Clause',
    ownerDetails: 'Older Tiefling woman. Red skin and bright purple hair. Bit of a flirt.',
    locations: ['Tolaria'],
    inventory: [
      {
        "item": "Health Potion",
        "details": "Potion, varies You regain hit points when you drink this potion.",
        "effects": "",
        "cost": "50 GP",
        "manaColors": [
          ""
        ],
        "storeTypes": [
          "general store",
          "potion store"
        ],
        "rarity": "common",
        "size": "tiny",
        "level": "novice",
        "type": "magic"
      },
      {
        "item": "Antitoxin (vial)",
        "effects": "cure poison from target or advantage on saving throws against poison for 1 hour.",
        "cost": "50 GP",
        "storeTypes": [
          "potion store"
        ],
        "rarity": "common",
        "size": "small",
        "level": "novice",
        "type": "normal"
      },
    ],
  },
  {
    shop: '',
    storeType: "potion store",
    shopDetails: 'Herb`s Herbs.',
    owner: 'Herb Fenroot',
    ownerDetails: 'Outdoor and Herb enthusiast',
    locations: ['Baldurs Gate'],
    inventory: [
      {
        "item": "Health Potion",
        "details": "Potion, varies You regain hit points when you drink this potion.",
        "effects": "",
        "cost": "50 GP",
        "manaColors": [
          ""
        ],
        "storeTypes": [
          "general store",
          "potion store"
        ],
        "rarity": "common",
        "size": "tiny",
        "level": "novice",
        "type": "magic"
      },
    ],
  },
];
