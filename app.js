// ===== APP STATE =====
const state = {
  selectedHero: null,
  enemyTeam: [],
  yourTeam: [],
  maxTeamSize: 5
};

// Helper: get portrait img tag for a hero
function heroImg(name, size) {
  const hero = HEROES[name];
  if (!hero) return '';
  return `<img class="hero-portrait" src="${hero.portrait}" alt="${name}" width="${size}" height="${size}">`;
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  renderHeroGrid('tab1-hero-grid', handleTab1HeroClick);
  renderHeroGrid('tab2-hero-grid', handleTab2HeroClick);
  renderHeroGrid('tab3-hero-grid', handleTab3HeroClick);

  document.getElementById('clear-enemy').addEventListener('click', () => {
    state.enemyTeam = [];
    refreshTab2();
  });

  document.getElementById('clear-your').addEventListener('click', () => {
    state.yourTeam = [];
    refreshTab3();
  });
});

// ===== TAB SWITCHING =====
function initTabs() {
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      document.getElementById(target).classList.add('active');
    });
  });
}

// ===== RENDER HERO GRID =====
function renderHeroGrid(containerId, clickHandler) {
  const container = document.getElementById(containerId);
  const roles = ['Tank', 'DPS', 'Support'];

  roles.forEach(role => {
    const section = document.createElement('div');
    section.className = 'role-section';

    const label = document.createElement('div');
    label.className = `role-label ${role.toLowerCase()}`;
    label.textContent = role;
    section.appendChild(label);

    const grid = document.createElement('div');
    grid.className = 'hero-grid';

    getHeroesByRole(role).forEach(heroName => {
      const hero = HEROES[heroName];
      const btn = document.createElement('button');
      btn.className = 'hero-btn';
      btn.dataset.hero = heroName;
      btn.innerHTML = `<img class="hero-portrait" src="${hero.portrait}" alt="${heroName}" width="32" height="32">${heroName}`;
      btn.addEventListener('click', () => clickHandler(heroName, btn));
      grid.appendChild(btn);
    });

    section.appendChild(grid);
    container.appendChild(section);
  });
}

// ===== TAB 1: HERO INFO =====
function handleTab1HeroClick(heroName, btn) {
  const grid = document.getElementById('tab1-hero-grid');
  grid.querySelectorAll('.hero-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');

  state.selectedHero = heroName;
  renderHeroInfo(heroName);
}

function renderHeroInfo(heroName) {
  const hero = HEROES[heroName];
  const container = document.getElementById('hero-info-results');

  if (!hero) {
    container.innerHTML = '<p class="results-empty">Select a hero above to view their matchups.</p>';
    return;
  }

  const roleClass = hero.role.toLowerCase();

  let html = `
    <div class="selected-hero-header">
      <img class="hero-portrait-lg" src="${hero.portrait}" alt="${heroName}" width="64" height="64">
      <div>
        <div class="hero-name">${heroName}</div>
      </div>
      <span class="hero-role role-tag ${roleClass}">${hero.role}</span>
    </div>
    <div class="hero-info-container">
      <div class="info-card">
        <h3><span class="strong">&#9650;</span> Strong Against</h3>
        <div class="matchup-list">
          ${hero.counters.map(name => {
            const target = HEROES[name];
            const tRole = target ? target.role.toLowerCase() : '';
            return `<div class="matchup-item strong">
              ${heroImg(name, 28)}
              <span class="role-tag ${tRole}">${target ? target.role : ''}</span>
              ${name}
            </div>`;
          }).join('')}
        </div>
      </div>
      <div class="info-card">
        <h3><span class="weak">&#9660;</span> Weak Against</h3>
        <div class="matchup-list">
          ${hero.counteredBy.map(name => {
            const target = HEROES[name];
            const tRole = target ? target.role.toLowerCase() : '';
            return `<div class="matchup-item weak">
              ${heroImg(name, 28)}
              <span class="role-tag ${tRole}">${target ? target.role : ''}</span>
              ${name}
            </div>`;
          }).join('')}
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;
}

// ===== TAB 2: ENEMY TEAM COUNTER =====
function handleTab2HeroClick(heroName, btn) {
  const idx = state.enemyTeam.indexOf(heroName);
  if (idx > -1) {
    state.enemyTeam.splice(idx, 1);
  } else if (state.enemyTeam.length < state.maxTeamSize) {
    state.enemyTeam.push(heroName);
  }
  refreshTab2();
}

function refreshTab2() {
  const grid = document.getElementById('tab2-hero-grid');
  grid.querySelectorAll('.hero-btn').forEach(btn => {
    btn.classList.toggle('selected', state.enemyTeam.includes(btn.dataset.hero));
  });

  renderTeamSlots('enemy-team-slots', state.enemyTeam, (heroName) => {
    state.enemyTeam = state.enemyTeam.filter(h => h !== heroName);
    refreshTab2();
  });

  const resultsEl = document.getElementById('counter-results');

  if (state.enemyTeam.length === 0) {
    resultsEl.innerHTML = '<p class="results-empty">Select enemy heroes to see the best counter-picks for your team.</p>';
    return;
  }

  const scores = analyzeEnemyTeam(state.enemyTeam);
  const sorted = Object.entries(scores)
    .sort(([, a], [, b]) => b.score - a.score);

  const topPicks = sorted.filter(([, d]) => d.score > 0).slice(0, 15);

  if (topPicks.length === 0) {
    resultsEl.innerHTML = '<p class="results-empty">No strong counter-picks found. Try selecting more enemy heroes.</p>';
    return;
  }

  const grouped = { Tank: [], DPS: [], Support: [] };
  topPicks.forEach(([name, data]) => {
    grouped[data.role].push({ name, ...data });
  });

  let html = '<div class="scroll-results">';

  for (const [role, heroes] of Object.entries(grouped)) {
    if (heroes.length === 0) continue;
    html += `
      <div class="result-group">
        <div class="result-group-title">${role} Picks</div>
        ${heroes.map(h => `
          <div class="result-item">
            ${heroImg(h.name, 28)}
            <span class="result-hero-name">${h.name}</span>
            <span class="result-matchups">
              ${h.strongAgainst.map(e => `<span class="result-matchup-tag strong">beats ${e}</span>`).join('')}
              ${h.weakAgainst.map(e => `<span class="result-matchup-tag weak">weak vs ${e}</span>`).join('')}
            </span>
            <span class="result-score ${h.score > 0 ? 'positive' : h.score < 0 ? 'negative' : 'neutral'}">
              ${h.score > 0 ? '+' : ''}${h.score}
            </span>
          </div>
        `).join('')}
      </div>
    `;
  }

  html += '</div>';
  resultsEl.innerHTML = html;
}

// ===== TAB 3: YOUR TEAM VULNERABILITIES =====
function handleTab3HeroClick(heroName, btn) {
  const idx = state.yourTeam.indexOf(heroName);
  if (idx > -1) {
    state.yourTeam.splice(idx, 1);
  } else if (state.yourTeam.length < state.maxTeamSize) {
    state.yourTeam.push(heroName);
  }
  refreshTab3();
}

function refreshTab3() {
  const grid = document.getElementById('tab3-hero-grid');
  grid.querySelectorAll('.hero-btn').forEach(btn => {
    btn.classList.toggle('selected', state.yourTeam.includes(btn.dataset.hero));
  });

  renderTeamSlots('your-team-slots', state.yourTeam, (heroName) => {
    state.yourTeam = state.yourTeam.filter(h => h !== heroName);
    refreshTab3();
  });

  const resultsEl = document.getElementById('vulnerability-results');

  if (state.yourTeam.length === 0) {
    resultsEl.innerHTML = '<p class="results-empty">Select your team\'s heroes to see what you\'re vulnerable to.</p>';
    return;
  }

  const vulns = analyzeYourTeam(state.yourTeam);
  const sorted = Object.entries(vulns)
    .sort(([, a], [, b]) => b.threatScore - a.threatScore);

  const threats = sorted.filter(([, d]) => d.threatScore > 0).slice(0, 15);

  if (threats.length === 0) {
    resultsEl.innerHTML = '<p class="results-empty">Your team looks solid! No major threats detected.</p>';
    return;
  }

  let html = '<div class="scroll-results">';

  const high = threats.filter(([, d]) => d.threatScore >= 4);
  const medium = threats.filter(([, d]) => d.threatScore >= 2 && d.threatScore < 4);
  const low = threats.filter(([, d]) => d.threatScore >= 1 && d.threatScore < 2);

  if (high.length > 0) html += renderThreatGroup('High Threat - Watch Out', high, 'high');
  if (medium.length > 0) html += renderThreatGroup('Moderate Threat', medium, 'medium');
  if (low.length > 0) html += renderThreatGroup('Low Threat', low, 'low');

  html += '</div>';
  resultsEl.innerHTML = html;
}

function renderThreatGroup(title, threats, level) {
  return `
    <div class="result-group">
      <div class="result-group-title">${title}</div>
      ${threats.map(([name, data]) => {
        const hero = HEROES[name];
        const roleClass = hero ? hero.role.toLowerCase() : '';
        return `
          <div class="threat-item ${level}">
            ${heroImg(name, 28)}
            <span class="result-hero-name">${name}</span>
            <span class="threat-targets">
              ${data.strongAgainst.length > 0 ? 'counters: ' + data.strongAgainst.join(', ') : ''}
            </span>
            <span class="threat-level ${level}">${level}</span>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// ===== SHARED: TEAM SLOTS =====
function renderTeamSlots(containerId, team, removeCallback) {
  const container = document.getElementById(containerId);

  if (team.length === 0) {
    container.className = 'team-slots';
    container.innerHTML = '<span class="placeholder">Click heroes below to add them (max 5)</span>';
    return;
  }

  container.className = 'team-slots has-heroes';
  container.innerHTML = team.map(heroName => {
    const hero = HEROES[heroName];
    const roleClass = hero ? hero.role.toLowerCase() : '';
    return `
      <div class="team-slot ${roleClass}" data-hero="${heroName}">
        <img class="hero-portrait" src="${hero.portrait}" alt="${heroName}" width="24" height="24">
        ${heroName}
        <span class="remove">&times;</span>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.team-slot').forEach(slot => {
    slot.addEventListener('click', () => removeCallback(slot.dataset.hero));
  });
}
