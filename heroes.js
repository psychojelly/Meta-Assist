// Overwatch 2 Hero Data with Counter Matchups, Synergies & Tips
// Portraits from Blizzard's official CDN via OverFast API
const HEROES = {
  // ==================== TANKS ====================
  "D.Va": {
    role: "Tank",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/df5a5532862d9292634fb3dc0e51a4705aa601de65e5e815513ccc663d84de56.png",
    counters: ["Pharah", "Echo", "Bastion", "Torbjörn", "Ashe"],
    counteredBy: ["Zarya", "Symmetra", "Mei", "Reaper", "Roadhog"],
    synergies: ["Genji", "Tracer", "Ana", "Kiriko"],
    tip: "Use Defense Matrix to eat key abilities like Anti-Nade, Moira Orb, and Grav. Save boosters to peel for your supports."
  },
  "Doomfist": {
    role: "Tank",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ff5c54f43ad253c7faeda9c4ed31d42582ea6b19205d197866f3dd0c0aa14c16.png",
    counters: ["Widowmaker", "Ana", "Zenyatta", "Hanzo", "Ashe"],
    counteredBy: ["Sombra", "Roadhog", "Orisa", "Cassidy", "Brigitte"],
    synergies: ["Kiriko", "Sombra", "Tracer", "Lúcio"],
    tip: "Play around corners and use Meteor Strike as an escape when low. Punch into walls for the extra damage on squishies."
  },
  "Junker Queen": {
    role: "Tank",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/06eeecb359f311f43a8f5121d4f9f3a93c565d70b30e94ef543c05596c9a39dc.png",
    counters: ["Winston", "Wrecking Ball", "Tracer", "Genji", "Lúcio"],
    counteredBy: ["Ana", "Roadhog", "Reaper", "Bastion", "Zenyatta"],
    synergies: ["Lúcio", "Kiriko", "Genji", "Reaper"],
    tip: "Her bleed heals her team through Commanding Shout. Speed boost with Lúcio lets you run down enemies. Anti-nade shuts down all her self-heal."
  },
  "Mauga": {
    role: "Tank",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/33d39bb439c08975197fc52eff4874716839711b5356c4fdc174f9c24bac1d0e.png",
    counters: ["Winston", "Wrecking Ball", "Genji", "Tracer", "Lúcio"],
    counteredBy: ["Ana", "Zenyatta", "Bastion", "Reaper", "Roadhog"],
    synergies: ["Baptiste", "Kiriko", "Junkrat", "Lúcio"],
    tip: "Mauga feeds a LOT of ult charge. Pick fights you can win quickly. Ana's Anti-Nade completely shuts you down — play corners to avoid it."
  },
  "Orisa": {
    role: "Tank",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a73958a28551f5254f3ab3f97c5f5f8d698a95c0b6a515d1a2b1caac169205a6.png",
    counters: ["Doomfist", "Wrecking Ball", "Reinhardt", "Roadhog", "Genji"],
    counteredBy: ["Bastion", "Reaper", "Junkrat", "Sigma", "Ana"],
    synergies: ["Bastion", "Torbjörn", "Baptiste", "Mercy"],
    tip: "Fortify cleanses Anti-Nade and most CC. Javelin Spin absorbs and pushes — great for dealing with Rein charges or Doom punches."
  },
  "Ramattra": {
    role: "Tank",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ddef7c9fb8ce4256e8508196b486f81950efe7aaa6cf27fec4668beb4cd15774.png",
    counters: ["Reinhardt", "Sigma", "Genji", "Tracer", "Brigitte"],
    counteredBy: ["Bastion", "Reaper", "Zarya", "Ana", "Zenyatta"],
    synergies: ["Junkrat", "Lúcio", "Ana", "Mei"],
    tip: "Switch between forms based on the fight. Nemesis for brawling in close, Staff for poking at range. Annihilation + Lúcio speed is devastating."
  },
  "Reinhardt": {
    role: "Tank",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/551fbe070c16fdfcc17f7f1de63af22c53e7d2f1340fc2f3172441504527bc4e.png",
    counters: ["Winston", "Wrecking Ball", "Genji", "Tracer", "Reaper"],
    counteredBy: ["Pharah", "Bastion", "Junkrat", "Orisa", "Ramattra"],
    synergies: ["Lúcio", "Ana", "Zarya", "Bastion"],
    tip: "Don't just hold shield — swing. Lúcio speed boost lets you close the gap. Save Earthshatter for when enemy abilities are on cooldown."
  },
  "Roadhog": {
    role: "Tank",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/89ddf07e4b619ed96169042e296a1b8856d102746f35add88284b44a9a5a6a03.png",
    counters: ["Doomfist", "D.Va", "Wrecking Ball", "Tracer", "Echo"],
    counteredBy: ["Ana", "Reaper", "Bastion", "Zarya", "Orisa"],
    synergies: ["Zenyatta", "Ana", "Junkrat", "Cassidy"],
    tip: "Hook combos are your bread and butter: Hook → Shoot → Melee. You feed tons of ult charge, so play near cover and use Take A Breather wisely."
  },
  "Sigma": {
    role: "Tank",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a4c032fa466c9a6d9c6974747635d7ef910027f91cd58892af0c899db565f92d.png",
    counters: ["Pharah", "Echo", "Junkrat", "Bastion", "Torbjörn"],
    counteredBy: ["Doomfist", "Reaper", "Sombra", "Symmetra", "Ramattra"],
    synergies: ["Baptiste", "Cassidy", "Hanzo", "Ana"],
    tip: "Kinetic Grasp eats projectiles and converts to shield. Use Accretion to cancel enemy ults like Moira's Coalescence or Hog's Whole Hog."
  },
  "Winston": {
    role: "Tank",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/46a10db3aa908c590ddc4e7606376a88143d1f1306ecfbea043263040f9529a5.png",
    counters: ["Widowmaker", "Hanzo", "Ana", "Zenyatta", "Genji"],
    counteredBy: ["Reaper", "Bastion", "Roadhog", "Junker Queen", "Mei"],
    synergies: ["D.Va", "Tracer", "Genji", "Kiriko"],
    tip: "Classic dive tank. Jump on backline supports, drop bubble to split them from their team, jump out when bubble fades. Primal Rage is for stalling or boops."
  },
  "Wrecking Ball": {
    role: "Tank",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/9ef1d58867136e0b26f928d896000b9dab216118f6e2f59e53f2e975e1e27afa.png",
    counters: ["Widowmaker", "Ana", "Zenyatta", "Hanzo", "Torbjörn"],
    counteredBy: ["Sombra", "Roadhog", "Mei", "Cassidy", "Brigitte"],
    synergies: ["Tracer", "Genji", "Sombra", "Kiriko"],
    tip: "Disrupt and distract, don't brawl. Slam in, use Adaptive Shield, roll out. Minefield zones enemies off the point during overtime."
  },
  "Zarya": {
    role: "Tank",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/9b6f63cc66ddf9d5e0862173c733cc0d2e574c5c89357798d91b93b2f95a7080.png",
    counters: ["D.Va", "Roadhog", "Sigma", "Genji", "Doomfist"],
    counteredBy: ["Pharah", "Echo", "Bastion", "Reaper", "Zenyatta"],
    synergies: ["Hanzo", "Genji", "Tracer", "Reinhardt"],
    tip: "Bubble aggressively to build charge. High energy Zarya is one of the scariest heroes in the game. Grav combos with Hanzo Dragon, Genji Blade, or just raw beam damage."
  },
  "Hazard": {
    role: "Tank",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ca48b96dbae6ea7f58ce8a5e73513c8c62b1685bdbf258020fb78bb21a008b5f.png",
    counters: ["Reinhardt", "Roadhog", "Genji", "Tracer", "Reaper"],
    counteredBy: ["Pharah", "Echo", "Bastion", "Widowmaker", "Ana"],
    synergies: ["Lúcio", "Ana", "Junkrat", "Mei"],
    tip: "His wall abilities control space — use them to cut off enemy rotations and isolate targets. Struggles against airborne heroes."
  },

  // ==================== DPS ====================
  "Ashe": {
    role: "DPS",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4076bbaa2eb52a0bfe612434071e56e7702d5454473dbbea2f9e392a9d997a94.png",
    counters: ["Pharah", "Echo", "Mercy", "Torbjörn", "Junkrat"],
    counteredBy: ["D.Va", "Winston", "Genji", "Doomfist", "Sombra"],
    synergies: ["Mercy", "Ana", "Bob", "Baptiste"],
    tip: "Mercy damage-boosted Dynamite burns the entire team. Coach Gun to high ground and hold angles. B.O.B. is basically a 6th player — use him to contest point."
  },
  "Bastion": {
    role: "DPS",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4ede795c2a681aaccfa72d0c901cba0cb8a2c292fd6a97b2ba9faed161c2d184.png",
    counters: ["Reinhardt", "Orisa", "Roadhog", "Ramattra", "Torbjörn"],
    counteredBy: ["Genji", "Sombra", "Widowmaker", "Hanzo", "Sigma"],
    synergies: ["Orisa", "Baptiste", "Mercy", "Sigma"],
    tip: "Don't stay in one position too long — reposition after getting value. Pair with Baptiste's Immortality Field and Amplification Matrix for devastating damage."
  },
  "Cassidy": {
    role: "DPS",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/9240cd64cc8ef58df9acbf55204ab1b5d8578f743fda5931f0dbccbd75ab841b.png",
    counters: ["Tracer", "Genji", "Doomfist", "Wrecking Ball", "Sombra"],
    counteredBy: ["Widowmaker", "Pharah", "Hanzo", "Sigma", "D.Va"],
    synergies: ["Ana", "Zenyatta", "Roadhog", "Sigma"],
    tip: "Magnetic Grenade is your anti-flanker tool. Stay with your supports and peel for them. Deadeye zones enemies or secures kills on low HP targets."
  },
  "Echo": {
    role: "DPS",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d4f2d5b0c2b7e82d61353186c5f23152ccba9d3569b50839aa580dca3e9114ba.png",
    counters: ["Reinhardt", "Zarya", "Torbjörn", "Bastion", "Mercy"],
    counteredBy: ["D.Va", "Sigma", "Widowmaker", "Cassidy", "Soldier: 76"],
    synergies: ["Winston", "Mercy", "Zarya", "Lúcio"],
    tip: "Sticky Bombs + Beam combo deletes tanks below half HP. Duplicate the enemy tank for a second ult charge in a single fight."
  },
  "Genji": {
    role: "DPS",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/156b12c20b1aea872c1eeb5bb37a7de1047b2ab30ecefd0663a8925badde1ea8.png",
    counters: ["Bastion", "Widowmaker", "Ana", "Zenyatta", "Hanzo"],
    counteredBy: ["Winston", "Mei", "Moira", "Brigitte", "Symmetra"],
    synergies: ["Ana", "Zarya", "Winston", "Mercy"],
    tip: "Nanoblade (Nano Boost + Dragonblade) is one of the strongest ult combos in the game. Dash resets on kill — chain them in Blade for team wipes."
  },
  "Hanzo": {
    role: "DPS",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/78b61c3e806fb26b02b8980fba62189155074fc15bd865b0883268e546030be5.png",
    counters: ["Bastion", "Torbjörn", "Orisa", "Reinhardt", "Sigma"],
    counteredBy: ["Winston", "D.Va", "Genji", "Doomfist", "Tracer"],
    synergies: ["Zarya", "Mei", "Sigma", "Ana"],
    tip: "Dragonstrike + Graviton Surge is a classic team wipe combo. Use Sonic Arrow to track flankers. Storm Arrows shred tanks at close range."
  },
  "Junkrat": {
    role: "DPS",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7660b9fc6f25f30858fdd8797fe0d52b2306f1e78fef99843f58a274e69af046.png",
    counters: ["Reinhardt", "Orisa", "Symmetra", "Torbjörn", "Bastion"],
    counteredBy: ["Pharah", "Echo", "Widowmaker", "Hanzo", "Sigma"],
    synergies: ["Ramattra", "Roadhog", "Orisa", "Ana"],
    tip: "Spam chokes and break shields. Use Concussion Mine for mobility or to boop enemies into your team. RIP-Tire from unexpected angles for maximum value."
  },
  "Mei": {
    role: "DPS",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4a55ced3bd597fb08e0fde9dc007f8543ac616ba98ca3db9b0e4d871a8ae17f8.png",
    counters: ["D.Va", "Winston", "Wrecking Ball", "Doomfist", "Genji"],
    counteredBy: ["Pharah", "Widowmaker", "Junkrat", "Echo", "Hanzo"],
    synergies: ["Reinhardt", "Hanzo", "Ramattra", "Lúcio"],
    tip: "Ice Wall can split the enemy team in half — wall off their tank and kill the backline. Blizzard + Dragonstrike or Shatter is devastating."
  },
  "Pharah": {
    role: "DPS",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/60ac2d5de4a6d34644d8872233da402f1436c87f804bb11a21661bb30bf4a51f.png",
    counters: ["Reinhardt", "Junkrat", "Mei", "Symmetra", "Torbjörn"],
    counteredBy: ["D.Va", "Widowmaker", "Cassidy", "Soldier: 76", "Ashe"],
    synergies: ["Mercy", "Juno", "Zenyatta", "Echo"],
    tip: "Pharmercy (Pharah + Mercy pocket) is one of the oldest and most effective combos. If they don't have strong hitscan, you dominate the sky."
  },
  "Reaper": {
    role: "DPS",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/dc6ff07ac790c00dc95a40882449617bb6e0e38906b353a630cffe0c815270a9.png",
    counters: ["Winston", "Roadhog", "Reinhardt", "Zarya", "Sigma"],
    counteredBy: ["Pharah", "Widowmaker", "Cassidy", "Hanzo", "Ana"],
    synergies: ["Lúcio", "Ana", "Zarya", "Moira"],
    tip: "The ultimate tank buster. Use Shadow Step to get behind, Wraith Form to escape. Death Blossom from above or around corners. Pairs great with Lúcio speed."
  },
  "Sojourn": {
    role: "DPS",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/82b8c1b8765dcb9a0ba16e343c3516bf324c771ac81e9878473280216e70a889.png",
    counters: ["Pharah", "Echo", "Tracer", "Genji", "Mercy"],
    counteredBy: ["D.Va", "Winston", "Sombra", "Doomfist", "Widowmaker"],
    synergies: ["Zenyatta", "Mercy", "Ana", "Sigma"],
    tip: "Charge your railgun on tanks for easy energy, then one-shot squishies with charged right-click. Slide gives great mobility for repositioning."
  },
  "Soldier: 76": {
    role: "DPS",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/c93b5f0a528c40473188f77cc2a267aee7d5b6cf5c9e104105d634b4388674e2.png",
    counters: ["Pharah", "Echo", "Mercy", "Torbjörn", "Bastion"],
    counteredBy: ["D.Va", "Genji", "Sombra", "Doomfist", "Widowmaker"],
    synergies: ["Ana", "Baptiste", "Mercy", "Sigma"],
    tip: "Self-sufficient DPS — Biotic Field keeps you alive. Sprint to high ground and hold it. Visor pairs well with Nano Boost for guaranteed kills."
  },
  "Sombra": {
    role: "DPS",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/47727b02a16e3bd7b2447d86ae1edf11587bc320b2aecb4f2f16a7ca4ad4e8a0.png",
    counters: ["Doomfist", "Wrecking Ball", "Sigma", "Tracer", "Bastion"],
    counteredBy: ["Cassidy", "Torbjörn", "Mei", "Brigitte", "Moira"],
    synergies: ["Winston", "D.Va", "Genji", "Tracer"],
    tip: "Hack disables abilities for 1.5s and reveals the target. EMP combo with dive heroes for team wipes. Call out hacked health packs and targets."
  },
  "Symmetra": {
    role: "DPS",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ebec57e8bd68b3d4383edfeb34f8f52dd0b94a6467d594c2fee722e8a97c32aa.png",
    counters: ["D.Va", "Sigma", "Reinhardt", "Genji", "Wrecking Ball"],
    counteredBy: ["Pharah", "Widowmaker", "Junkrat", "Hanzo", "Echo"],
    synergies: ["Reinhardt", "Mei", "Torbjörn", "Brigitte"],
    tip: "Turrets slow enemies and melt flankers. Teleporter enables creative team flanks or fast rotations. Charged beam at max level does devastating damage."
  },
  "Torbjörn": {
    role: "DPS",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ce17118cedc29b0d2ac1e059666bed36b9531c85079b0b894bb402d12c917ba9.png",
    counters: ["Tracer", "Genji", "Sombra", "Wrecking Ball", "D.Va"],
    counteredBy: ["Pharah", "Junkrat", "Widowmaker", "Hanzo", "Echo"],
    synergies: ["Orisa", "Symmetra", "Brigitte", "Baptiste"],
    tip: "Turret is your anti-flanker alarm system. Overcharge gives you Overload damage. Place turret where it covers your backline, not on the frontline where it gets destroyed."
  },
  "Tracer": {
    role: "DPS",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4504f6f15cb3feaa92ecd38e01dcf751cb5abdac2e0bb52d0555727e53277502.png",
    counters: ["Widowmaker", "Ana", "Zenyatta", "Hanzo", "Mercy"],
    counteredBy: ["Cassidy", "Torbjörn", "Brigitte", "Moira", "Winston"],
    synergies: ["Winston", "D.Va", "Zenyatta", "Kiriko"],
    tip: "Blink behind, one-clip, Recall out. Pulse Bomb sticks on tanks easily. Play with your dive tank and focus the same targets. Track enemy cooldowns before engaging."
  },
  "Venture": {
    role: "DPS",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/dcab9123f5f55df22e54d4e797de43c71b917e0149dd059a7fd6136f48464cd0.png",
    counters: ["Widowmaker", "Ana", "Zenyatta", "Hanzo", "Ashe"],
    counteredBy: ["Cassidy", "Roadhog", "Mei", "Brigitte", "Sombra"],
    synergies: ["Winston", "Kiriko", "Lúcio", "Sombra"],
    tip: "Burrow makes you invulnerable and reloads — use it to dodge key abilities. Pop up behind the backline for burst damage, then escape underground."
  },
  "Widowmaker": {
    role: "DPS",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/6e4702b45f196aaf51555cf57327322721f45458b17f5f0643ed008a88378259.png",
    counters: ["Pharah", "Echo", "Bastion", "Torbjörn", "Mercy"],
    counteredBy: ["Winston", "D.Va", "Genji", "Tracer", "Doomfist"],
    synergies: ["Mercy", "Ana", "Sigma", "Hanzo"],
    tip: "One pick wins the fight. Position on off-angles where divers can't easily reach you. Mercy damage boost means 300 damage headshots. Venom Mine is your flanker alarm."
  },

  // ==================== SUPPORT ====================
  "Ana": {
    role: "Support",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/985b06beae46b7ba3ca87d1512d0fc62ca7f206ceca58ef16fc44d43a1cc84ed.png",
    counters: ["Roadhog", "Junker Queen", "Mauga", "Pharah", "Bastion"],
    counteredBy: ["Winston", "D.Va", "Genji", "Tracer", "Sombra"],
    synergies: ["Genji", "Reinhardt", "Soldier: 76", "Reaper"],
    tip: "Anti-Nade is the best non-ult ability in the game. Nano Boost wins team fights — combo with Blade, Visor, or an aggressive Rein. Sleep Dart cancels every ult in the game."
  },
  "Baptiste": {
    role: "Support",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d4e6f1ca45d9f88fa89260787397f141a6f007b14e5b26698883b6a17bab9680.png",
    counters: ["Pharah", "Echo", "Bastion", "Junkrat", "Roadhog"],
    counteredBy: ["Sombra", "Genji", "Tracer", "Doomfist", "Winston"],
    synergies: ["Bastion", "Sigma", "Soldier: 76", "Sojourn"],
    tip: "Immortality Field saves teams from ults — hide it behind cover. Amplification Matrix doubles all damage and healing through it. Great with hitscan DPS."
  },
  "Brigitte": {
    role: "Support",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/795fba91376d87d441a7f359ae12a3175dfa95825ccc4414cc6b95b129fc4cb0.png",
    counters: ["Tracer", "Genji", "Doomfist", "Wrecking Ball", "Sombra"],
    counteredBy: ["Pharah", "Echo", "Junkrat", "Bastion", "Reaper"],
    synergies: ["Tracer", "Genji", "Ashe", "Cassidy"],
    tip: "The anti-dive support. Shield Bash and Whip Shot peel flankers off your co-support. Rally gives everyone armor — use it proactively, not reactively."
  },
  "Illari": {
    role: "Support",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ce42d1455e03e79f321345fea84b27a8918b5db8bd7ab9b2ca9e569606ede9e4.png",
    counters: ["Pharah", "Echo", "Mercy", "Tracer", "Genji"],
    counteredBy: ["Widowmaker", "Hanzo", "Sombra", "D.Va", "Winston"],
    synergies: ["Sigma", "Cassidy", "Bastion", "Reinhardt"],
    tip: "Healing Pylon does the healing, you do the damage. Place pylon out of enemy sightlines. Her rifle hits like a truck — play her like a DPS who heals."
  },
  "Juno": {
    role: "Support",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/c0167d251e57b0aa2b1e16c37d87f0e7c77263db9dd0503d77b5f2589bf3e4a0.png",
    counters: ["Pharah", "Echo", "Tracer", "Genji", "Mercy"],
    counteredBy: ["Winston", "D.Va", "Sombra", "Doomfist", "Widowmaker"],
    synergies: ["Pharah", "Echo", "Soldier: 76", "Ashe"],
    tip: "Orbital Ray speed and damage boost can swing any fight. Her mobility lets her play aggressive angles. Great at enabling aerial DPS heroes."
  },
  "Kiriko": {
    role: "Support",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/408603fe037e8576078eaac5eab2fb251489ced4003b11f5f522776d43d0b83d.png",
    counters: ["Ana", "Reinhardt", "Zarya", "Roadhog", "Mei"],
    counteredBy: ["Winston", "D.Va", "Tracer", "Sombra", "Widowmaker"],
    synergies: ["Genji", "Winston", "Doomfist", "Tracer"],
    tip: "Suzu cleanses Anti-Nade, Dynamite, and most debuffs — save it. Swift Step to teleport to diving teammates. Kitsune Rush speed + attack speed wins fights instantly."
  },
  "Lifeweaver": {
    role: "Support",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3376515cebed0904012e67e956f6d1b9c12e03da642845eeaf787b7e4c7b339d.png",
    counters: ["Roadhog", "Reinhardt", "Wrecking Ball", "Doomfist", "Junkrat"],
    counteredBy: ["Sombra", "Widowmaker", "Tracer", "Genji", "Winston"],
    synergies: ["Bastion", "Roadhog", "Reinhardt", "Sigma"],
    tip: "Life Grip saves teammates from hooks, charges, and ults. Petal Platform creates instant high ground. Tree of Life is one of the best defensive ults."
  },
  "Lúcio": {
    role: "Support",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/040bb13f5123ab93faad2f95627ba184608aef4b2469a4d3003859c7087df044.png",
    counters: ["Reinhardt", "Symmetra", "Torbjörn", "Mei", "Sigma"],
    counteredBy: ["Sombra", "Pharah", "Echo", "Widowmaker", "Cassidy"],
    synergies: ["Reinhardt", "Reaper", "Junker Queen", "Ramattra"],
    tip: "Speed boost is more valuable than healing in most fights. Amp speed to engage or disengage. Sound Barrier counters grav combos and big ults. Wall ride to survive."
  },
  "Mercy": {
    role: "Support",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3bfb8bd8ec827e53d870f1238ab73d8aa1f5dbfbcfaaf7f96ffcd35b5c6102ab.png",
    counters: ["Pharah", "Echo", "Ashe", "Sojourn", "Bastion"],
    counteredBy: ["Widowmaker", "Sombra", "Tracer", "Genji", "Winston"],
    synergies: ["Pharah", "Ashe", "Widowmaker", "Sojourn"],
    tip: "Damage boost > healing in most cases. Boosted Pharah rockets, Ashe Dynamite, and Widow shots are devastating. Resurrect behind cover, never in the open."
  },
  "Moira": {
    role: "Support",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f48f8485056d5d00dad195859188d23e50f7126b8b08b5646f46ef1b42f5e1de.png",
    counters: ["Genji", "Tracer", "Sombra", "Wrecking Ball", "Doomfist"],
    counteredBy: ["Ana", "Pharah", "Widowmaker", "Cassidy", "Bastion"],
    synergies: ["Reinhardt", "Ramattra", "Reaper", "Lúcio"],
    tip: "Fade makes you nearly unkillable. Damage orb to finish low enemies, healing orb for sustain. Coalescence heals AND damages — aim through your team at the enemy."
  },
  "Zenyatta": {
    role: "Support",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7d1546b1541a8afc39353f9337a408d6275a141b0432b7e560ef61579996b0fc.png",
    counters: ["Roadhog", "Zarya", "Mauga", "Reinhardt", "Ramattra"],
    counteredBy: ["Winston", "Tracer", "Genji", "Sombra", "Doomfist"],
    synergies: ["Tracer", "Genji", "Sojourn", "Winston"],
    tip: "Discord Orb + call out = instant focus fire kills. Transcendence counters Grav combos, Blade, and sustained damage ults. Kick does 45 damage — use it on flankers."
  }
};

// ==================== POWER COMBOS ====================
const POWER_COMBOS = [
  {
    name: "Nanoblade",
    heroes: ["Ana", "Genji"],
    description: "Nano Boost + Dragonblade. Each slash does 90 damage boosted — one dash + slash kills any 200 HP hero. The most feared DPS ult combo in Overwatch.",
    tier: "S"
  },
  {
    name: "Pharmercy",
    heroes: ["Pharah", "Mercy"],
    description: "Mercy damage boosts and heals Pharah in the air. Without strong hitscan, this duo is almost impossible to deal with. Forces enemy to swap.",
    tier: "S"
  },
  {
    name: "Grav Dragon",
    heroes: ["Zarya", "Hanzo"],
    description: "Graviton Surge + Dragonstrike. Enemies trapped in grav take full Dragonstrike damage. One of the most reliable team wipe combos in the game.",
    tier: "S"
  },
  {
    name: "Nano Rein",
    heroes: ["Ana", "Reinhardt"],
    description: "Nano Boosted Reinhardt with Lúcio speed is a freight train. Swinging for 112 damage per hit with 50% damage reduction. Terrifying in brawl comps.",
    tier: "A"
  },
  {
    name: "Nano Visor",
    heroes: ["Ana", "Soldier: 76"],
    description: "Nano Boost + Tactical Visor. Auto-aim with 50% damage boost melts the entire team. Reliable and consistent value every time.",
    tier: "A"
  },
  {
    name: "Dive Combo",
    heroes: ["Winston", "Tracer"],
    description: "Winston jumps the backline, Tracer follows up. Combined damage instantly kills supports. Add D.Va for full dive pressure.",
    tier: "S"
  },
  {
    name: "Grav Blade",
    heroes: ["Zarya", "Genji"],
    description: "Graviton Surge holds enemies still for Dragonblade slashes. Even without Nano, Blade + Grav is a near-guaranteed team wipe.",
    tier: "A"
  },
  {
    name: "Speed Brawl",
    heroes: ["Lúcio", "Reinhardt"],
    description: "Lúcio speed boost lets Reinhardt close the gap and swing. Combined with Amp It Up speed, enemies can't escape the hammer.",
    tier: "A"
  },
  {
    name: "Discord Dive",
    heroes: ["Zenyatta", "Winston"],
    description: "Discord Orb + Winston dive. The 25% damage increase means the jump + zap + melee combo deletes squishies even faster.",
    tier: "A"
  },
  {
    name: "Blizzard Shatter",
    heroes: ["Mei", "Reinhardt"],
    description: "Blizzard slows and freezes enemies, setting up a free Earthshatter on the entire team. Devastating area denial combo.",
    tier: "A"
  },
  {
    name: "Kitsune Blade",
    heroes: ["Kiriko", "Genji"],
    description: "Kitsune Rush + Dragonblade. The attack speed and movement speed buff makes Blade nearly impossible to react to. Even without Nano.",
    tier: "A"
  },
  {
    name: "Wall Combo",
    heroes: ["Mei", "Hanzo"],
    description: "Mei Ice Wall lifts enemies into the air, Hanzo picks them off as easy targets. Also combos with Mei Wall + Dragonstrike.",
    tier: "B"
  },
  {
    name: "Bubble Beam",
    heroes: ["Zarya", "Tracer"],
    description: "Zarya bubbles Tracer as she dives in, giving Tracer survivability and Zarya free charge. Tracer can play hyper-aggressively.",
    tier: "A"
  },
  {
    name: "Anti + Burst",
    heroes: ["Ana", "Junkrat"],
    description: "Ana Anti-Nade on a group followed by Junkrat spam. Enemies can't heal through the damage. Works with any burst DPS.",
    tier: "B"
  },
  {
    name: "Bap Window + Hitscan",
    heroes: ["Baptiste", "Sojourn"],
    description: "Amplification Matrix doubles Sojourn's railgun damage — one-shots anyone through the window. Works with Soldier, Ashe, or Bastion too.",
    tier: "A"
  },
  {
    name: "Death Blossom + Grav",
    heroes: ["Reaper", "Zarya"],
    description: "Graviton Surge holds the team while Reaper ults in their face. Massive close-range damage with lifesteal keeps Reaper alive.",
    tier: "A"
  },
  {
    name: "EMP + Follow Up",
    heroes: ["Sombra", "Genji"],
    description: "EMP removes all shields and abilities, then Genji Blade cleans up. Hacked enemies with no cooldowns can't fight back.",
    tier: "A"
  },
  {
    name: "Nano Blossom",
    heroes: ["Ana", "Reaper"],
    description: "Nano Boost + Death Blossom. 50% damage boost + 50% damage reduction means Reaper deals devastating damage while being very hard to kill.",
    tier: "A"
  }
];

// ==================== META TIPS ====================
const META_TIPS = [
  {
    category: "Team Comp",
    tips: [
      "Standard comp is 1 Tank, 2 DPS, 2 Supports. Flex within that based on what the team needs.",
      "If you're running dive (Winston/D.Va), your DPS should be mobile — Tracer, Genji, Sombra.",
      "Brawl comps want to fight close: Reinhardt, Reaper, Mei, Lúcio, Moira/Ana.",
      "Poke comps want distance: Sigma, Hanzo, Soldier, Ana, Baptiste.",
      "If a comp isn't working after 1-2 fights, swap. Don't wait until overtime."
    ]
  },
  {
    category: "Ult Economy",
    tips: [
      "Don't stack defensive ults. If Lúcio uses Sound Barrier, Zen shouldn't Transcendence on the same fight.",
      "Dry push (no ults) occasionally to bait out enemy defensive ults, then push with your own.",
      "Track enemy ults mentally. If Ana hasn't used Nano in a while, she has it — play safe.",
      "Combo ults for maximum value: offensive ult + setup ult > using them separately."
    ]
  },
  {
    category: "Counter-Swapping",
    tips: [
      "If a Pharah is destroying your team and nobody can hit her, someone MUST swap to hitscan.",
      "Against heavy dive, one of your supports should go Brigitte or Moira for self-peel.",
      "Reaper or Bastion force enemy tanks to swap. If their tank is carrying, consider these picks.",
      "Sombra hard-counters any hero that relies on abilities: Doom, Ball, Tracer, Sigma."
    ]
  },
  {
    category: "Positioning",
    tips: [
      "High ground wins fights. If you can take it, take it. If the enemy has it, contest it.",
      "Supports should be the last to die. Position behind your tank, near cover, with an escape route.",
      "Don't chase kills past the choke. It's usually a trap. Let them come to you.",
      "Off-angles (attacking from a different direction than your team) create crossfires that are very hard to deal with."
    ]
  }
];

// Role colors for UI
const ROLE_COLORS = {
  Tank: { primary: "#5B8FD4", dark: "#3a6bb5", light: "#7daae0" },
  DPS: { primary: "#E25757", dark: "#c43c3c", light: "#ea7a7a" },
  Support: { primary: "#5EBD56", dark: "#43a33b", light: "#7ecd78" }
};

function getHeroNames() {
  return Object.keys(HEROES);
}

function getHeroesByRole(role) {
  return Object.entries(HEROES)
    .filter(([_, data]) => data.role === role)
    .map(([name, _]) => name);
}

// Find combos involving a specific hero
function getCombosForHero(heroName) {
  return POWER_COMBOS.filter(c => c.heroes.includes(heroName));
}

// Find combos possible with a set of heroes
function getCombosForTeam(teamHeroes) {
  return POWER_COMBOS.filter(c =>
    c.heroes.every(h => teamHeroes.includes(h))
  );
}

// Find combos partially available (at least one hero on team)
function getPartialCombos(teamHeroes) {
  return POWER_COMBOS
    .filter(c => c.heroes.some(h => teamHeroes.includes(h)) && !c.heroes.every(h => teamHeroes.includes(h)))
    .map(c => ({
      ...c,
      have: c.heroes.filter(h => teamHeroes.includes(h)),
      need: c.heroes.filter(h => !teamHeroes.includes(h))
    }));
}

function analyzeEnemyTeam(enemyHeroes) {
  const counterScores = {};

  for (const [heroName, heroData] of Object.entries(HEROES)) {
    if (enemyHeroes.includes(heroName)) continue;

    let score = 0;
    let strongAgainst = [];
    let weakAgainst = [];

    for (const enemy of enemyHeroes) {
      const enemyData = HEROES[enemy];
      if (!enemyData) continue;

      if (heroData.counters.includes(enemy)) {
        score += 2;
        strongAgainst.push(enemy);
      }
      if (heroData.counteredBy.includes(enemy)) {
        score -= 2;
        weakAgainst.push(enemy);
      }
      if (enemyData.counteredBy.includes(heroName)) {
        score += 1;
      }
      if (enemyData.counters.includes(heroName)) {
        score -= 1;
      }
    }

    counterScores[heroName] = { score, strongAgainst, weakAgainst, role: heroData.role };
  }

  return counterScores;
}

function analyzeYourTeam(teamHeroes) {
  const vulnerabilities = {};

  for (const [threatName, threatData] of Object.entries(HEROES)) {
    if (teamHeroes.includes(threatName)) continue;

    let threatScore = 0;
    let strongAgainst = [];
    let weakAgainst = [];

    for (const ally of teamHeroes) {
      const allyData = HEROES[ally];
      if (!allyData) continue;

      if (threatData.counters.includes(ally)) {
        threatScore += 2;
        strongAgainst.push(ally);
      }
      if (threatData.counteredBy.includes(ally)) {
        threatScore -= 2;
        weakAgainst.push(ally);
      }
      if (allyData.counteredBy.includes(threatName)) {
        threatScore += 1;
      }
      if (allyData.counters.includes(threatName)) {
        threatScore -= 1;
      }
    }

    vulnerabilities[threatName] = { threatScore, strongAgainst, weakAgainst, role: threatData.role };
  }

  return vulnerabilities;
}
