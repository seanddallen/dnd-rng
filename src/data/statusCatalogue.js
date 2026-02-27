export const STATUS_CATALOGUE = [
  {
    name: 'Blinded',
    effect: 'Can’t see, auto-fails sight checks, attacks against it have advantage, its attacks have disadvantage.',
    status: 'negative',
  },
  {
    name: 'Charmed',
    effect: 'Can’t attack the charmer; charmer has advantage on social checks against it.',
    status: 'negative',
  },
  {
    name: 'Deafened',
    effect: 'Can’t hear and auto-fails hearing-based checks.',
    status: 'negative',
  },
  {
    name: 'Frightened',
    effect: 'Disadvantage on checks/attacks while source is in sight; can’t willingly move closer.',
    status: 'negative',
  },
  {
    name: 'Grappled',
    effect: 'Speed becomes 0; ends if grappler is incapacitated or target is removed.',
    status: 'negative',
  },
  {
    name: 'Incapacitated',
    effect: 'Can’t take actions or reactions.',
    status: 'negative',
  },
  {
    name: 'Invisible',
    effect: 'Can’t be seen without special sense; attacks against it have disadvantage, its attacks have advantage.',
    status: 'positive',
  },
  {
    name: 'Paralyzed',
    effect: 'Incapacitated, can’t move/speak, auto-fails STR/DEX saves, attacks have advantage, melee hits are crits.',
    status: 'negative',
  },
  {
    name: 'Poisoned',
    effect: 'Disadvantage on attacks and ability checks.',
    status: 'negative',
  },
  {
    name: 'Prone',
    effect: 'Crawl only unless standing; attacks have disadvantage, melee attacks against it have advantage.',
    status: 'negative',
  },
  {
    name: 'Restrained',
    effect: 'Speed 0, attacks against it have advantage, its attacks and DEX saves have disadvantage.',
    status: 'negative',
  },
  {
    name: 'Stunned',
    effect: 'Incapacitated, can’t move, fails STR/DEX saves, attacks against it have advantage.',
    status: 'negative',
  },
  {
    name: 'Unconscious',
    effect: 'Incapacitated, can’t move/speak, unaware, drops held items, prone, auto-fails STR/DEX saves.',
    status: 'negative',
  },
  {
    name: 'Deathtouch',
    effect: 'When you hit a creature with CR lower than your level, it must succeed a Constitution save or drop to 0 HP.',
    status: 'positive',
  },
  {
    name: 'Defender',
    effect: 'A creature with Defender cannot take the Attack Action.',
    status: 'negative',
  },
  {
    name: 'Double Strike',
    effect: 'Whenever you take the Attack Action, you make one extra basic weapon attack.',
    status: 'positive',
  },
  {
    name: 'Enhance',
    effect: 'Roll enhancement/ability dice.',
    status: 'positive',
  },
  {
    name: 'Exile',
    effect: 'Target is removed from the battlefield. May take a final action in response.',
    status: 'negative',
  },
  {
    name: 'First Strike',
    effect: 'Once per round, when a creature makes its first attack against you, you may take Attack First before that attack resolves.',
    status: 'positive',
  },
  {
    name: 'Flying',
    effect: 'Gain a fly speed equal to your walking speed. You must end your turn on a solid surface unless you can hover.',
    status: 'positive',
  },
  {
    name: 'Fortify',
    effect: 'roll +AC/+RC dice.',
    status: 'positive',
  },
  {
    name: 'Haste',
    effect: 'you may take an additional action and have advantage on initiative.',
    status: 'positive',
  },
  {
    name: 'Hexproof',
    effect: 'cannot be affected by negative conditions or curses.',
    status: 'positive',
  },
  {
    name: 'Immunity',
    effect: 'no magic damage/effects (from magic spells).',
    status: 'positive',
  },
  {
    name: 'Lifelink',
    effect: 'Whenever you deal damage, you heal for the same amount.',
    status: 'positive',
  },
  {
    name: 'Menace',
    effect: 'Attack targets two adjacent creatures.',
    status: 'positive',
  },
  {
    name: 'Protection',
    effect: 'no physical damage/effects (from attacks or might spells).',
    status: 'positive',
  },
  {
    name: 'Reach',
    effect: 'Can melee attack creatures at 15ft range.',
    status: 'positive',
  },
  {
    name: 'Recharge',
    effect: 'Cannot be cast again until it is recharged. Roll d6 and must land on ML of spell to recharge. Any rest recharges all spells.',
    status: 'negative',
  },
  {
    name: 'Regeneration',
    effect: 'next time reduced to 0 reduced to 1 instead.',
    status: 'positive',
  },
  {
    name: 'Resistance',
    effect: 'half damage, but can still be affected by the spell’s non-damage effects.',
    status: 'positive',
  },
  {
    name: 'Sacrifice',
    effect: 'Lose a resource (item, HP, MP, summon, etc.) to trigger an effect.',
    status: 'positive',
  },
  {
    name: 'Strengthen',
    effect: 'target rolls +atk/+dmg dice.',
    status: 'positive',
  },
  {
    name: 'Taunt',
    effect: 'creatures all drawn to attack you.',
    status: 'positive',
  },
  {
    name: 'Trample',
    effect: 'May apply all damage from your attack to any number of creatures within 5ft, including any excess upon death.',
    status: 'positive',
  },
  {
    name: 'Vigilance',
    effect: 'Reaction. May make an opportunity attack.',
    status: 'positive',
  },
  {
    name: 'Vulnerability',
    effect: 'target takes double damage.',
    status: 'negative',
  },
  {
    name: 'Weaken',
    effect: 'target rolls -atk/-dmg dice.',
    status: 'negative',
  },
];
