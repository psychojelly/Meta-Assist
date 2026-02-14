// Overwatch 2 Hero Data with Counter Matchups
const HEROES = {
  // ==================== TANKS ====================
  "D.Va": {
    role: "Tank",
    img: "dva",
    counters: ["Pharah", "Echo", "Bastion", "Torbjörn", "Ashe"],
    counteredBy: ["Zarya", "Symmetra", "Mei", "Reaper", "Roadhog"]
  },
  "Doomfist": {
    role: "Tank",
    img: "doomfist",
    counters: ["Widowmaker", "Ana", "Zenyatta", "Hanzo", "Ashe"],
    counteredBy: ["Sombra", "Roadhog", "Orisa", "Cassidy", "Brigitte"]
  },
  "Junker Queen": {
    role: "Tank",
    img: "junker-queen",
    counters: ["Winston", "Wrecking Ball", "Tracer", "Genji", "Lúcio"],
    counteredBy: ["Ana", "Roadhog", "Reaper", "Bastion", "Zenyatta"]
  },
  "Mauga": {
    role: "Tank",
    img: "mauga",
    counters: ["Winston", "Wrecking Ball", "Genji", "Tracer", "Lúcio"],
    counteredBy: ["Ana", "Zenyatta", "Bastion", "Reaper", "Roadhog"]
  },
  "Orisa": {
    role: "Tank",
    img: "orisa",
    counters: ["Doomfist", "Wrecking Ball", "Reinhardt", "Roadhog", "Genji"],
    counteredBy: ["Bastion", "Reaper", "Junkrat", "Sigma", "Ana"]
  },
  "Ramattra": {
    role: "Tank",
    img: "ramattra",
    counters: ["Reinhardt", "Sigma", "Genji", "Tracer", "Brigitte"],
    counteredBy: ["Bastion", "Reaper", "Zarya", "Ana", "Zenyatta"]
  },
  "Reinhardt": {
    role: "Tank",
    img: "reinhardt",
    counters: ["Winston", "Wrecking Ball", "Genji", "Tracer", "Reaper"],
    counteredBy: ["Pharah", "Bastion", "Junkrat", "Orisa", "Ramattra"]
  },
  "Roadhog": {
    role: "Tank",
    img: "roadhog",
    counters: ["Doomfist", "D.Va", "Wrecking Ball", "Tracer", "Echo"],
    counteredBy: ["Ana", "Reaper", "Bastion", "Zarya", "Orisa"]
  },
  "Sigma": {
    role: "Tank",
    img: "sigma",
    counters: ["Pharah", "Echo", "Junkrat", "Bastion", "Torbjörn"],
    counteredBy: ["Doomfist", "Reaper", "Sombra", "Symmetra", "Ramattra"]
  },
  "Winston": {
    role: "Tank",
    img: "winston",
    counters: ["Widowmaker", "Hanzo", "Ana", "Zenyatta", "Genji"],
    counteredBy: ["Reaper", "Bastion", "Roadhog", "Junker Queen", "Mei"]
  },
  "Wrecking Ball": {
    role: "Tank",
    img: "wrecking-ball",
    counters: ["Widowmaker", "Ana", "Zenyatta", "Hanzo", "Torbjörn"],
    counteredBy: ["Sombra", "Roadhog", "Mei", "Cassidy", "Brigitte"]
  },
  "Zarya": {
    role: "Tank",
    img: "zarya",
    counters: ["D.Va", "Roadhog", "Sigma", "Genji", "Doomfist"],
    counteredBy: ["Pharah", "Echo", "Bastion", "Reaper", "Zenyatta"]
  },
  "Hazard": {
    role: "Tank",
    img: "hazard",
    counters: ["Reinhardt", "Roadhog", "Genji", "Tracer", "Reaper"],
    counteredBy: ["Pharah", "Echo", "Bastion", "Widowmaker", "Ana"]
  },

  // ==================== DPS ====================
  "Ashe": {
    role: "DPS",
    img: "ashe",
    counters: ["Pharah", "Echo", "Mercy", "Torbjörn", "Junkrat"],
    counteredBy: ["D.Va", "Winston", "Genji", "Doomfist", "Sombra"]
  },
  "Bastion": {
    role: "DPS",
    img: "bastion",
    counters: ["Reinhardt", "Orisa", "Roadhog", "Ramattra", "Torbjörn"],
    counteredBy: ["Genji", "Sombra", "Widowmaker", "Hanzo", "Sigma"]
  },
  "Cassidy": {
    role: "DPS",
    img: "cassidy",
    counters: ["Tracer", "Genji", "Doomfist", "Wrecking Ball", "Sombra"],
    counteredBy: ["Widowmaker", "Pharah", "Hanzo", "Sigma", "D.Va"]
  },
  "Echo": {
    role: "DPS",
    img: "echo",
    counters: ["Reinhardt", "Zarya", "Torbjörn", "Bastion", "Mercy"],
    counteredBy: ["D.Va", "Sigma", "Widowmaker", "Cassidy", "Soldier: 76"]
  },
  "Genji": {
    role: "DPS",
    img: "genji",
    counters: ["Bastion", "Widowmaker", "Ana", "Zenyatta", "Hanzo"],
    counteredBy: ["Winston", "Mei", "Moira", "Brigitte", "Symmetra"]
  },
  "Hanzo": {
    role: "DPS",
    img: "hanzo",
    counters: ["Bastion", "Torbjörn", "Orisa", "Reinhardt", "Sigma"],
    counteredBy: ["Winston", "D.Va", "Genji", "Doomfist", "Tracer"]
  },
  "Junkrat": {
    role: "DPS",
    img: "junkrat",
    counters: ["Reinhardt", "Orisa", "Symmetra", "Torbjörn", "Bastion"],
    counteredBy: ["Pharah", "Echo", "Widowmaker", "Hanzo", "Sigma"]
  },
  "Mei": {
    role: "DPS",
    img: "mei",
    counters: ["D.Va", "Winston", "Wrecking Ball", "Doomfist", "Genji"],
    counteredBy: ["Pharah", "Widowmaker", "Junkrat", "Echo", "Hanzo"]
  },
  "Pharah": {
    role: "DPS",
    img: "pharah",
    counters: ["Reinhardt", "Junkrat", "Mei", "Symmetra", "Torbjörn"],
    counteredBy: ["D.Va", "Widowmaker", "Cassidy", "Soldier: 76", "Ashe"]
  },
  "Reaper": {
    role: "DPS",
    img: "reaper",
    counters: ["Winston", "Roadhog", "Reinhardt", "Zarya", "Sigma"],
    counteredBy: ["Pharah", "Widowmaker", "Cassidy", "Hanzo", "Ana"]
  },
  "Sojourn": {
    role: "DPS",
    img: "sojourn",
    counters: ["Pharah", "Echo", "Tracer", "Genji", "Mercy"],
    counteredBy: ["D.Va", "Winston", "Sombra", "Doomfist", "Widowmaker"]
  },
  "Soldier: 76": {
    role: "DPS",
    img: "soldier-76",
    counters: ["Pharah", "Echo", "Mercy", "Torbjörn", "Bastion"],
    counteredBy: ["D.Va", "Genji", "Sombra", "Doomfist", "Widowmaker"]
  },
  "Sombra": {
    role: "DPS",
    img: "sombra",
    counters: ["Doomfist", "Wrecking Ball", "Sigma", "Tracer", "Bastion"],
    counteredBy: ["Cassidy", "Torbjörn", "Mei", "Brigitte", "Moira"]
  },
  "Symmetra": {
    role: "DPS",
    img: "symmetra",
    counters: ["D.Va", "Sigma", "Reinhardt", "Genji", "Wrecking Ball"],
    counteredBy: ["Pharah", "Widowmaker", "Junkrat", "Hanzo", "Echo"]
  },
  "Torbjörn": {
    role: "DPS",
    img: "torbjorn",
    counters: ["Tracer", "Genji", "Sombra", "Wrecking Ball", "D.Va"],
    counteredBy: ["Pharah", "Junkrat", "Widowmaker", "Hanzo", "Echo"]
  },
  "Tracer": {
    role: "DPS",
    img: "tracer",
    counters: ["Widowmaker", "Ana", "Zenyatta", "Hanzo", "Mercy"],
    counteredBy: ["Cassidy", "Torbjörn", "Brigitte", "Moira", "Winston"]
  },
  "Venture": {
    role: "DPS",
    img: "venture",
    counters: ["Widowmaker", "Ana", "Zenyatta", "Hanzo", "Ashe"],
    counteredBy: ["Cassidy", "Roadhog", "Mei", "Brigitte", "Sombra"]
  },
  "Widowmaker": {
    role: "DPS",
    img: "widowmaker",
    counters: ["Pharah", "Echo", "Bastion", "Torbjörn", "Mercy"],
    counteredBy: ["Winston", "D.Va", "Genji", "Tracer", "Doomfist"]
  },

  // ==================== SUPPORT ====================
  "Ana": {
    role: "Support",
    img: "ana",
    counters: ["Roadhog", "Junker Queen", "Mauga", "Pharah", "Bastion"],
    counteredBy: ["Winston", "D.Va", "Genji", "Tracer", "Sombra"]
  },
  "Baptiste": {
    role: "Support",
    img: "baptiste",
    counters: ["Pharah", "Echo", "Bastion", "Junkrat", "Roadhog"],
    counteredBy: ["Sombra", "Genji", "Tracer", "Doomfist", "Winston"]
  },
  "Brigitte": {
    role: "Support",
    img: "brigitte",
    counters: ["Tracer", "Genji", "Doomfist", "Wrecking Ball", "Sombra"],
    counteredBy: ["Pharah", "Echo", "Junkrat", "Bastion", "Reaper"]
  },
  "Illari": {
    role: "Support",
    img: "illari",
    counters: ["Pharah", "Echo", "Mercy", "Tracer", "Genji"],
    counteredBy: ["Widowmaker", "Hanzo", "Sombra", "D.Va", "Winston"]
  },
  "Juno": {
    role: "Support",
    img: "juno",
    counters: ["Pharah", "Echo", "Tracer", "Genji", "Mercy"],
    counteredBy: ["Winston", "D.Va", "Sombra", "Doomfist", "Widowmaker"]
  },
  "Kiriko": {
    role: "Support",
    img: "kiriko",
    counters: ["Ana", "Reinhardt", "Zarya", "Roadhog", "Mei"],
    counteredBy: ["Winston", "D.Va", "Tracer", "Sombra", "Widowmaker"]
  },
  "Lifeweaver": {
    role: "Support",
    img: "lifeweaver",
    counters: ["Roadhog", "Reinhardt", "Wrecking Ball", "Doomfist", "Junkrat"],
    counteredBy: ["Sombra", "Widowmaker", "Tracer", "Genji", "Winston"]
  },
  "Lúcio": {
    role: "Support",
    img: "lucio",
    counters: ["Reinhardt", "Symmetra", "Torbjörn", "Mei", "Sigma"],
    counteredBy: ["Sombra", "Pharah", "Echo", "Widowmaker", "Cassidy"]
  },
  "Mercy": {
    role: "Support",
    img: "mercy",
    counters: ["Pharah", "Echo", "Ashe", "Sojourn", "Bastion"],
    counteredBy: ["Widowmaker", "Sombra", "Tracer", "Genji", "Winston"]
  },
  "Moira": {
    role: "Support",
    img: "moira",
    counters: ["Genji", "Tracer", "Sombra", "Wrecking Ball", "Doomfist"],
    counteredBy: ["Ana", "Pharah", "Widowmaker", "Cassidy", "Bastion"]
  },
  "Zenyatta": {
    role: "Support",
    img: "zenyatta",
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

  // For each possible hero pick
  for (const [heroName, heroData] of Object.entries(HEROES)) {
    if (enemyHeroes.includes(heroName)) continue; // Skip heroes already on enemy team

    let score = 0;
    let strongAgainst = [];
    let weakAgainst = [];

    for (const enemy of enemyHeroes) {
      const enemyData = HEROES[enemy];
      if (!enemyData) continue;

      // This hero counters an enemy
      if (heroData.counters.includes(enemy)) {
        score += 2;
        strongAgainst.push(enemy);
      }

      // This hero is countered by an enemy
      if (heroData.counteredBy.includes(enemy)) {
        score -= 2;
        weakAgainst.push(enemy);
      }

      // The enemy is countered by this hero (reverse check)
      if (enemyData.counteredBy.includes(heroName)) {
        score += 1;
      }

      // The enemy counters this hero (reverse check)
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

      // Threat counters our ally
      if (threatData.counters.includes(ally)) {
        threatScore += 2;
        strongAgainst.push(ally);
      }

      // Threat is countered by our ally
      if (threatData.counteredBy.includes(ally)) {
        threatScore -= 2;
        weakAgainst.push(ally);
      }

      // Our ally is countered by the threat
      if (allyData.counteredBy.includes(threatName)) {
        threatScore += 1;
      }

      // Our ally counters the threat
      if (allyData.counters.includes(threatName)) {
        threatScore -= 1;
      }
    }

    vulnerabilities[threatName] = { threatScore, strongAgainst, weakAgainst, role: threatData.role };
  }

  return vulnerabilities;
}
