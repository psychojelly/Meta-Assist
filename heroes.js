// Overwatch 2 Hero Data with Counter Matchups
// Portraits from Blizzard's official CDN via OverFast API
const HEROES = {
  // ==================== TANKS ====================
  "D.Va": {
    role: "Tank",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/df5a5532862d9292634fb3dc0e51a4705aa601de65e5e815513ccc663d84de56.png",
    counters: ["Pharah", "Echo", "Bastion", "Torbjörn", "Ashe"],
    counteredBy: ["Zarya", "Symmetra", "Mei", "Reaper", "Roadhog"]
  },
  "Doomfist": {
    role: "Tank",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ff5c54f43ad253c7faeda9c4ed31d42582ea6b19205d197866f3dd0c0aa14c16.png",
    counters: ["Widowmaker", "Ana", "Zenyatta", "Hanzo", "Ashe"],
    counteredBy: ["Sombra", "Roadhog", "Orisa", "Cassidy", "Brigitte"]
  },
  "Junker Queen": {
    role: "Tank",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/06eeecb359f311f43a8f5121d4f9f3a93c565d70b30e94ef543c05596c9a39dc.png",
    counters: ["Winston", "Wrecking Ball", "Tracer", "Genji", "Lúcio"],
    counteredBy: ["Ana", "Roadhog", "Reaper", "Bastion", "Zenyatta"]
  },
  "Mauga": {
    role: "Tank",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/33d39bb439c08975197fc52eff4874716839711b5356c4fdc174f9c24bac1d0e.png",
    counters: ["Winston", "Wrecking Ball", "Genji", "Tracer", "Lúcio"],
    counteredBy: ["Ana", "Zenyatta", "Bastion", "Reaper", "Roadhog"]
  },
  "Orisa": {
    role: "Tank",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a73958a28551f5254f3ab3f97c5f5f8d698a95c0b6a515d1a2b1caac169205a6.png",
    counters: ["Doomfist", "Wrecking Ball", "Reinhardt", "Roadhog", "Genji"],
    counteredBy: ["Bastion", "Reaper", "Junkrat", "Sigma", "Ana"]
  },
  "Ramattra": {
    role: "Tank",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ddef7c9fb8ce4256e8508196b486f81950efe7aaa6cf27fec4668beb4cd15774.png",
    counters: ["Reinhardt", "Sigma", "Genji", "Tracer", "Brigitte"],
    counteredBy: ["Bastion", "Reaper", "Zarya", "Ana", "Zenyatta"]
  },
  "Reinhardt": {
    role: "Tank",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/551fbe070c16fdfcc17f7f1de63af22c53e7d2f1340fc2f3172441504527bc4e.png",
    counters: ["Winston", "Wrecking Ball", "Genji", "Tracer", "Reaper"],
    counteredBy: ["Pharah", "Bastion", "Junkrat", "Orisa", "Ramattra"]
  },
  "Roadhog": {
    role: "Tank",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/89ddf07e4b619ed96169042e296a1b8856d102746f35add88284b44a9a5a6a03.png",
    counters: ["Doomfist", "D.Va", "Wrecking Ball", "Tracer", "Echo"],
    counteredBy: ["Ana", "Reaper", "Bastion", "Zarya", "Orisa"]
  },
  "Sigma": {
    role: "Tank",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a4c032fa466c9a6d9c6974747635d7ef910027f91cd58892af0c899db565f92d.png",
    counters: ["Pharah", "Echo", "Junkrat", "Bastion", "Torbjörn"],
    counteredBy: ["Doomfist", "Reaper", "Sombra", "Symmetra", "Ramattra"]
  },
  "Winston": {
    role: "Tank",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/46a10db3aa908c590ddc4e7606376a88143d1f1306ecfbea043263040f9529a5.png",
    counters: ["Widowmaker", "Hanzo", "Ana", "Zenyatta", "Genji"],
    counteredBy: ["Reaper", "Bastion", "Roadhog", "Junker Queen", "Mei"]
  },
  "Wrecking Ball": {
    role: "Tank",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/9ef1d58867136e0b26f928d896000b9dab216118f6e2f59e53f2e975e1e27afa.png",
    counters: ["Widowmaker", "Ana", "Zenyatta", "Hanzo", "Torbjörn"],
    counteredBy: ["Sombra", "Roadhog", "Mei", "Cassidy", "Brigitte"]
  },
  "Zarya": {
    role: "Tank",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/9b6f63cc66ddf9d5e0862173c733cc0d2e574c5c89357798d91b93b2f95a7080.png",
    counters: ["D.Va", "Roadhog", "Sigma", "Genji", "Doomfist"],
    counteredBy: ["Pharah", "Echo", "Bastion", "Reaper", "Zenyatta"]
  },
  "Hazard": {
    role: "Tank",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ca48b96dbae6ea7f58ce8a5e73513c8c62b1685bdbf258020fb78bb21a008b5f.png",
    counters: ["Reinhardt", "Roadhog", "Genji", "Tracer", "Reaper"],
    counteredBy: ["Pharah", "Echo", "Bastion", "Widowmaker", "Ana"]
  },

  // ==================== DPS ====================
  "Ashe": {
    role: "DPS",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4076bbaa2eb52a0bfe612434071e56e7702d5454473dbbea2f9e392a9d997a94.png",
    counters: ["Pharah", "Echo", "Mercy", "Torbjörn", "Junkrat"],
    counteredBy: ["D.Va", "Winston", "Genji", "Doomfist", "Sombra"]
  },
  "Bastion": {
    role: "DPS",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4ede795c2a681aaccfa72d0c901cba0cb8a2c292fd6a97b2ba9faed161c2d184.png",
    counters: ["Reinhardt", "Orisa", "Roadhog", "Ramattra", "Torbjörn"],
    counteredBy: ["Genji", "Sombra", "Widowmaker", "Hanzo", "Sigma"]
  },
  "Cassidy": {
    role: "DPS",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/9240cd64cc8ef58df9acbf55204ab1b5d8578f743fda5931f0dbccbd75ab841b.png",
    counters: ["Tracer", "Genji", "Doomfist", "Wrecking Ball", "Sombra"],
    counteredBy: ["Widowmaker", "Pharah", "Hanzo", "Sigma", "D.Va"]
  },
  "Echo": {
    role: "DPS",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d4f2d5b0c2b7e82d61353186c5f23152ccba9d3569b50839aa580dca3e9114ba.png",
    counters: ["Reinhardt", "Zarya", "Torbjörn", "Bastion", "Mercy"],
    counteredBy: ["D.Va", "Sigma", "Widowmaker", "Cassidy", "Soldier: 76"]
  },
  "Genji": {
    role: "DPS",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/156b12c20b1aea872c1eeb5bb37a7de1047b2ab30ecefd0663a8925badde1ea8.png",
    counters: ["Bastion", "Widowmaker", "Ana", "Zenyatta", "Hanzo"],
    counteredBy: ["Winston", "Mei", "Moira", "Brigitte", "Symmetra"]
  },
  "Hanzo": {
    role: "DPS",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/78b61c3e806fb26b02b8980fba62189155074fc15bd865b0883268e546030be5.png",
    counters: ["Bastion", "Torbjörn", "Orisa", "Reinhardt", "Sigma"],
    counteredBy: ["Winston", "D.Va", "Genji", "Doomfist", "Tracer"]
  },
  "Junkrat": {
    role: "DPS",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7660b9fc6f25f30858fdd8797fe0d52b2306f1e78fef99843f58a274e69af046.png",
    counters: ["Reinhardt", "Orisa", "Symmetra", "Torbjörn", "Bastion"],
    counteredBy: ["Pharah", "Echo", "Widowmaker", "Hanzo", "Sigma"]
  },
  "Mei": {
    role: "DPS",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4a55ced3bd597fb08e0fde9dc007f8543ac616ba98ca3db9b0e4d871a8ae17f8.png",
    counters: ["D.Va", "Winston", "Wrecking Ball", "Doomfist", "Genji"],
    counteredBy: ["Pharah", "Widowmaker", "Junkrat", "Echo", "Hanzo"]
  },
  "Pharah": {
    role: "DPS",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/60ac2d5de4a6d34644d8872233da402f1436c87f804bb11a21661bb30bf4a51f.png",
    counters: ["Reinhardt", "Junkrat", "Mei", "Symmetra", "Torbjörn"],
    counteredBy: ["D.Va", "Widowmaker", "Cassidy", "Soldier: 76", "Ashe"]
  },
  "Reaper": {
    role: "DPS",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/dc6ff07ac790c00dc95a40882449617bb6e0e38906b353a630cffe0c815270a9.png",
    counters: ["Winston", "Roadhog", "Reinhardt", "Zarya", "Sigma"],
    counteredBy: ["Pharah", "Widowmaker", "Cassidy", "Hanzo", "Ana"]
  },
  "Sojourn": {
    role: "DPS",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/82b8c1b8765dcb9a0ba16e343c3516bf324c771ac81e9878473280216e70a889.png",
    counters: ["Pharah", "Echo", "Tracer", "Genji", "Mercy"],
    counteredBy: ["D.Va", "Winston", "Sombra", "Doomfist", "Widowmaker"]
  },
  "Soldier: 76": {
    role: "DPS",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/c93b5f0a528c40473188f77cc2a267aee7d5b6cf5c9e104105d634b4388674e2.png",
    counters: ["Pharah", "Echo", "Mercy", "Torbjörn", "Bastion"],
    counteredBy: ["D.Va", "Genji", "Sombra", "Doomfist", "Widowmaker"]
  },
  "Sombra": {
    role: "DPS",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/47727b02a16e3bd7b2447d86ae1edf11587bc320b2aecb4f2f16a7ca4ad4e8a0.png",
    counters: ["Doomfist", "Wrecking Ball", "Sigma", "Tracer", "Bastion"],
    counteredBy: ["Cassidy", "Torbjörn", "Mei", "Brigitte", "Moira"]
  },
  "Symmetra": {
    role: "DPS",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ebec57e8bd68b3d4383edfeb34f8f52dd0b94a6467d594c2fee722e8a97c32aa.png",
    counters: ["D.Va", "Sigma", "Reinhardt", "Genji", "Wrecking Ball"],
    counteredBy: ["Pharah", "Widowmaker", "Junkrat", "Hanzo", "Echo"]
  },
  "Torbjörn": {
    role: "DPS",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ce17118cedc29b0d2ac1e059666bed36b9531c85079b0b894bb402d12c917ba9.png",
    counters: ["Tracer", "Genji", "Sombra", "Wrecking Ball", "D.Va"],
    counteredBy: ["Pharah", "Junkrat", "Widowmaker", "Hanzo", "Echo"]
  },
  "Tracer": {
    role: "DPS",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4504f6f15cb3feaa92ecd38e01dcf751cb5abdac2e0bb52d0555727e53277502.png",
    counters: ["Widowmaker", "Ana", "Zenyatta", "Hanzo", "Mercy"],
    counteredBy: ["Cassidy", "Torbjörn", "Brigitte", "Moira", "Winston"]
  },
  "Venture": {
    role: "DPS",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/dcab9123f5f55df22e54d4e797de43c71b917e0149dd059a7fd6136f48464cd0.png",
    counters: ["Widowmaker", "Ana", "Zenyatta", "Hanzo", "Ashe"],
    counteredBy: ["Cassidy", "Roadhog", "Mei", "Brigitte", "Sombra"]
  },
  "Widowmaker": {
    role: "DPS",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/6e4702b45f196aaf51555cf57327322721f45458b17f5f0643ed008a88378259.png",
    counters: ["Pharah", "Echo", "Bastion", "Torbjörn", "Mercy"],
    counteredBy: ["Winston", "D.Va", "Genji", "Tracer", "Doomfist"]
  },

  // ==================== SUPPORT ====================
  "Ana": {
    role: "Support",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/985b06beae46b7ba3ca87d1512d0fc62ca7f206ceca58ef16fc44d43a1cc84ed.png",
    counters: ["Roadhog", "Junker Queen", "Mauga", "Pharah", "Bastion"],
    counteredBy: ["Winston", "D.Va", "Genji", "Tracer", "Sombra"]
  },
  "Baptiste": {
    role: "Support",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d4e6f1ca45d9f88fa89260787397f141a6f007b14e5b26698883b6a17bab9680.png",
    counters: ["Pharah", "Echo", "Bastion", "Junkrat", "Roadhog"],
    counteredBy: ["Sombra", "Genji", "Tracer", "Doomfist", "Winston"]
  },
  "Brigitte": {
    role: "Support",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/795fba91376d87d441a7f359ae12a3175dfa95825ccc4414cc6b95b129fc4cb0.png",
    counters: ["Tracer", "Genji", "Doomfist", "Wrecking Ball", "Sombra"],
    counteredBy: ["Pharah", "Echo", "Junkrat", "Bastion", "Reaper"]
  },
  "Illari": {
    role: "Support",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ce42d1455e03e79f321345fea84b27a8918b5db8bd7ab9b2ca9e569606ede9e4.png",
    counters: ["Pharah", "Echo", "Mercy", "Tracer", "Genji"],
    counteredBy: ["Widowmaker", "Hanzo", "Sombra", "D.Va", "Winston"]
  },
  "Juno": {
    role: "Support",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/c0167d251e57b0aa2b1e16c37d87f0e7c77263db9dd0503d77b5f2589bf3e4a0.png",
    counters: ["Pharah", "Echo", "Tracer", "Genji", "Mercy"],
    counteredBy: ["Winston", "D.Va", "Sombra", "Doomfist", "Widowmaker"]
  },
  "Kiriko": {
    role: "Support",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/408603fe037e8576078eaac5eab2fb251489ced4003b11f5f522776d43d0b83d.png",
    counters: ["Ana", "Reinhardt", "Zarya", "Roadhog", "Mei"],
    counteredBy: ["Winston", "D.Va", "Tracer", "Sombra", "Widowmaker"]
  },
  "Lifeweaver": {
    role: "Support",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3376515cebed0904012e67e956f6d1b9c12e03da642845eeaf787b7e4c7b339d.png",
    counters: ["Roadhog", "Reinhardt", "Wrecking Ball", "Doomfist", "Junkrat"],
    counteredBy: ["Sombra", "Widowmaker", "Tracer", "Genji", "Winston"]
  },
  "Lúcio": {
    role: "Support",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/040bb13f5123ab93faad2f95627ba184608aef4b2469a4d3003859c7087df044.png",
    counters: ["Reinhardt", "Symmetra", "Torbjörn", "Mei", "Sigma"],
    counteredBy: ["Sombra", "Pharah", "Echo", "Widowmaker", "Cassidy"]
  },
  "Mercy": {
    role: "Support",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3bfb8bd8ec827e53d870f1238ab73d8aa1f5dbfbcfaaf7f96ffcd35b5c6102ab.png",
    counters: ["Pharah", "Echo", "Ashe", "Sojourn", "Bastion"],
    counteredBy: ["Widowmaker", "Sombra", "Tracer", "Genji", "Winston"]
  },
  "Moira": {
    role: "Support",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f48f8485056d5d00dad195859188d23e50f7126b8b08b5646f46ef1b42f5e1de.png",
    counters: ["Genji", "Tracer", "Sombra", "Wrecking Ball", "Doomfist"],
    counteredBy: ["Ana", "Pharah", "Widowmaker", "Cassidy", "Bastion"]
  },
  "Zenyatta": {
    role: "Support",
    portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7d1546b1541a8afc39353f9337a408d6275a141b0432b7e560ef61579996b0fc.png",
    counters: ["Roadhog", "Zarya", "Mauga", "Reinhardt", "Ramattra"],
    counteredBy: ["Winston", "Tracer", "Genji", "Sombra", "Doomfist"]
  }
};

// Role colors for UI
const ROLE_COLORS = {
  Tank: { primary: "#5B8FD4", dark: "#3a6bb5", light: "#7daae0" },
  DPS: { primary: "#E25757", dark: "#c43c3c", light: "#ea7a7a" },
  Support: { primary: "#5EBD56", dark: "#43a33b", light: "#7ecd78" }
};

// Get all hero names
function getHeroNames() {
  return Object.keys(HEROES);
}

// Get heroes by role
function getHeroesByRole(role) {
  return Object.entries(HEROES)
    .filter(([_, data]) => data.role === role)
    .map(([name, _]) => name);
}

// Analyze enemy team to find best counter-picks
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

// Analyze your team's vulnerabilities
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
