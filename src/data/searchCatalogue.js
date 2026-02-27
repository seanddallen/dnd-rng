export const SEARCH_CATALOGUE = {
  grapple: {
    type: 'Mechanics',
    text: 'Use at least one free hand to seize a target. On success, the target becomes grappled and its speed is 0 until the grapple ends.',
  },
  shove: {
    type: 'Mechanics',
    text: 'Force a creature back or knock it prone with a contested check. On success, push target 5 feet away or make it prone.',
  },
  opportunity_attack: {
    type: 'Mechanics',
    text: 'Reaction. Make one melee attack when a hostile creature leaves your melee reach.',
  },
  concentration: {
    type: 'Mechanics',
    text: 'Maintain ongoing magical effects while focusing. Taking damage may force a Constitution save to keep the spell active.',
  },
  deathtouch: {
    type: 'Mechanics',
    text: 'When you hit a creature with CR lower than your level, it must succeed a Constitution save or drop to 0 HP.',
  },
  defender: {
    type: 'Mechanics',
    text: 'A creature with Defender cannot take the Attack Action.',
  },
  double_strike: {
    type: 'Mechanics',
    text: 'Whenever you take the Attack Action, you make one extra basic weapon attack.',
  },
  enchantment: {
    type: 'Mechanics',
    text: 'Any spell lasting more than 1 round, or lasting for encounter if not specified. Only one instance of an enchantment may be cast at a time.',
  },
  enhance: {
    type: 'Mechanics',
    text: 'Roll enhancement/ability dice.',
  },
  exile: {
    type: 'Mechanics',
    text: 'Target is removed from the battlefield. May take a final action in response.',
  },
  first_strike: {
    type: 'Mechanics',
    text: 'Once per round, when a creature makes its first attack against you, you may take Attack First before that attack resolves.',
  },
  flying: {
    type: 'Mechanics',
    text: 'Gain a fly speed equal to your walking speed. You must end your turn on a solid surface unless you can hover.',
  },
  fortify: {
    type: 'Mechanics',
    text: 'roll +AC/+RC dice.',
  },
  haste: {
    type: 'Mechanics',
    text: 'you may take an additional action and have advantage on initiative.',
  },
  hexproof: {
    type: 'Mechanics',
    text: 'cannot be affected by negative conditions or curses.',
  },
  immunity: {
    type: 'Mechanics',
    text: 'no magic damage/effects (from magic spells).',
  },
  lifelink: {
    type: 'Mechanics',
    text: 'Whenever you deal damage, you heal for the same amount.',
  },
  menace: {
    type: 'Mechanics',
    text: 'Attack targets two adjacent creatures.',
  },
  protection: {
    type: 'Mechanics',
    text: 'no physical damage/effects (from attacks or might spells).',
  },
  reach: {
    type: 'Mechanics',
    text: 'Can melee attack creatures at 15ft range.',
  },
  recharge: {
    type: 'Mechanics',
    text: 'Cannot be cast again until it is recharged. Roll d6 and must land on ML of spell to recharge. Any rest recharges all spells.',
  },
  regeneration: {
    type: 'Mechanics',
    text: 'next time reduced to 0 reduced to 1 instead.',
  },
  resistance: {
    type: 'Mechanics',
    text: 'half damage, but can still be affected by the spell’s non-damage effects.',
  },
  sacrifice: {
    type: 'Mechanics',
    text: 'Lose a resource (item, HP, MP, summon, etc.) to trigger an effect.',
  },
  strengthen: {
    type: 'Mechanics',
    text: 'target rolls +atk/+dmg dice.',
  },
  taunt: {
    type: 'Mechanics',
    text: 'creatures all drawn to attack you.',
  },
  trample: {
    type: 'Mechanics',
    text: 'May apply all damage from your attack to any number of creatures within 5ft, including any excess upon death.',
  },
  vigilance: {
    type: 'Mechanics',
    text: 'Reaction. May make an opportunity attack.',
  },
  vulnerability: {
    type: 'Mechanics',
    text: 'target takes double damage.',
  },
  weaken: {
    type: 'Mechanics',
    text: 'target rolls -atk/-dmg dice.',
  },
  blinded: {
    type: 'Conditions',
    text: 'You can’t see and automatically fail any ability check that requires sight. Attack rolls against you have Advantage, and your attack rolls have Disadvantage.',
  },
  burning: {
    type: 'Conditions',
    text: 'Take 1d4 Fire damage at the start of each turn. As an action, you can extinguish fire on yourself by giving yourself the Prone condition and rolling on the ground. The fire also goes out if it is doused, submerged, or suffocated.',
  },
  charmed: {
    type: 'Conditions',
    text: 'You can’t attack the charmer or target the charmer with damaging abilities or magical effects. The charmer has Advantage on any ability check to interact with you socially.',
  },
  deafened: {
    type: 'Conditions',
    text: 'You can’t hear and automatically fail any ability check that requires hearing.',
  },
  exhaustion: {
    type: 'Conditions',
    text: 'Cumulative condition of exhaustion levels. You die if your Exhaustion level is 6. For each level, -2 on all rolls and -5 movement. Short rest removes 1 Exhaustion. Long rest removes 2 Exhaustion.',
  },
  frightened: {
    type: 'Conditions',
    text: 'You have Disadvantage on ability checks and attack rolls while the source of fear is within line of sight. You can’t willingly move closer to the source of fear.',
  },
  grappled: {
    type: 'Conditions',
    text: 'Your Speed is 0 and can’t increase. You have Disadvantage on attack rolls against any target other than the grappler. Can be moved half the speed of target who you are grappled by.',
  },
  incapacitated: {
    type: 'Conditions',
    text: 'You can’t take any action, Bonus Action, or Reaction. You can’t speak. Disadvantage on initiative.',
  },
  invisible: {
    type: 'Conditions',
    text: 'If you’re Invisible when you roll Initiative, you have Advantage on the roll. You aren’t affected by any effect that requires its target to be seen unless the effect’s creator can somehow see you. Any equipment you are wearing or carrying is also concealed. Attack rolls against you have Disadvantage, and your attack rolls have Advantage (unless the creature can see you)',
  },
  paralyzed: {
    type: 'Conditions',
    text: 'Incapacitated. Your Speed is 0 and can’t increase. You automatically fail Strength and Dexterity saving throws. Attack rolls against you have Advantage. Any attack roll that hits you is a Critical Hit if the attacker is within 5 feet of you.',
  },
  petrified: {
    type: 'Conditions',
    text: 'You are transformed, along with any nonmagical objects you are wearing and carrying, into a solid inanimate substance. Your weight increases by a factor of ten, and you cease aging. Incapacitated. Your Speed is 0 and can’t increase. Attack rolls against you have Advantage. You automatically fail Strength and Dexterity saving throws. You have Resistance to all damage. You have Immunity to the Poisoned condition.',
  },
  poisoned: {
    type: 'Conditions',
    text: 'Ability Checks and Attacks Affected. You have Disadvantage on attack rolls and ability checks.',
  },
  prone: {
    type: 'Conditions',
    text: 'Only movement options are to crawl or to spend half your speed to stand up. If your Speed is 0, you can’t stand. You have Disadvantage on attack rolls. An attack roll against you has Advantage within 5 feet, otherwise it has Disadvantage.',
  },
  restrained: {
    type: 'Conditions',
    text: 'Your Speed is 0 and can’t increase. Attack rolls against you have Advantage, and your attack rolls have Disadvantage. You have Disadvantage on Dexterity saving throws.',
  },
  stunned: {
    type: 'Conditions',
    text: 'Incapacitated. Automatically fail Strength and Dexterity saving throws. Attack rolls against you have Advantage.',
  },
  suffocation: {
    type: 'Conditions',
    text: 'A creature can hold its breath for a number of minutes equal to 1 plus its Constitution modifier (minimum of 30 seconds) before suffocation begins. When a creature runs out of breath or is choking, it gains 1 Exhaustion level at the end of each of its turns. When a creature can breathe again, it removes all levels of Exhaustion it gained from suffocating.',
  },
  unconscious: {
    type: 'Conditions',
    text: 'You have the Incapacitated and Prone conditions, and you drop whatever you’re holding. When this condition ends, you remain Prone. Your Speed is 0 and can’t increase. Attack rolls against you have Advantage. You automatically fail Strength and Dexterity saving throws. Any attack roll that hits you counts as 1 failed death saving throw. You’re unaware of your surroundings.',
  },
  bright_light: {
    type: 'Mechanics',
    text: 'Bright Light lets most creatures see normally. torches, lanterns, fires, and other sources of illumination within a specific radius.',
  },
  dim_light: {
    type: 'Mechanics',
    text: 'Dim Light: creates a Lightly Obscured area. An area of Dim Light is usually a boundary between Bright Light and surrounding',
  },
  darkness: {
    type: 'Mechanics',
    text: 'Darkness creates a Heavily Obscured area. Characters face Darkness outdoors at night, within an unlit dungeon, or in an area of magical Darkness.',
  },
  lightly_obscured_area: {
    type: 'Mechanics',
    text: 'Lightly Obscured area: such as an area with Dim Light, patchy fog, or moderate foliage. you have Disadvantage on Wisdom (Perception) checks that rely on sight.',
  },
  heavily_obscured_area: {
    type: 'Mechanics',
    text: 'Heavily Obscured area: such as an area with Darkness, heavy fog, or dense foliage—is opaque. You have the Blinded condition when trying to see something there.',
  },
  darkvision: {
    type: 'Mechanics',
    text: 'Darkvision: Can see in Dim Light within a specified range as if it were Bright Light and in Darkness within that range as if it were Dim Light. You discern colors in that Darkness only as shades of gray',
  },
  blindsight: {
    type: 'Mechanics',
    text: 'Blindsight: If you have Blindsight, you can see within a specific range without relying on physical sight. Within that range, you can see anything that isn’t behind Full Cover even if you have the Blinded condition or are in Darkness.Moreover, in that range, you can see something that has the Invisible condition.',
  },
  truesight: {
    type: 'Mechanics',
    text: 'Truesight: Your vision is enhanced within a specified range. Within that range, your vision pierces through the following: 1) Darkness. You can see in normal and magical Darkness. Invisibility. You see creatures and objects that have the Invisible condition. 2) Visual Illusions. Visual illusions appear transparent to you, automatically succeed on saving throws against them. 3) Transformations. You discern the true form of any creature or object you see that has been transformed by magic. 4) Ethereal Plane. You see into the Ethereal Plane.',
  },
  half_cover: {
    type: 'Mechanics',
    text: 'Half Cover: A target with half cover has a +2 bonus to AC and Dexterity saving throws. A target has half cover if an obstacle blocks at least half of its body.',
  },
  full_cover: {
    type: 'Mechanics',
    text: 'Full Cover: A target with total cover can\'t be targeted directly by an attack or a spell. Some spells can reach such a target by including it in an area of effect. A target has total cover if it is completely concealed by an obstacle.',
  },
  inspiration: {
    type: 'Mechanics',
    text: 'Inspiration: gain advantage on one roll (Player Choice), gain 2MP when used.',
  },
};
