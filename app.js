'use strict';

const thinkers = [
  {id:'bronowski',i:'JB',name:'Jacob Bronowski',years:'1908–1974',role:'Mathematician · humanist · science communicator',q:'Knowledge is not a loose-leaf notebook of facts. Above all, it is a responsibility for the integrity of what we are—above all, of what we are as ethical creatures.',kind:'quote',book:'The Ascent of Man',year:'1973',tags:['evidence','ethics'],url:'https://www.organism.earth/library/document/ascent-of-man-13'},
  {id:'carson',i:'RC',name:'Rachel Carson',years:'1907–1964',role:'Marine biologist · writer',q:'In nature nothing exists alone.',kind:'quote',book:'Silent Spring',year:'1962',tags:['evidence','ecology','conservation','ethics'],url:'https://www.rachelcarson.org/silent-spring'},
  {id:'goodall',i:'JG',name:'Jane Goodall',years:'1934–2025',role:'Primatologist · conservationist',q:'What you do makes a difference and you have to decide what kind of difference you want to make.',kind:'quote',book:'Reason for Hope',year:'1999',tags:['conservation','ethics','evidence'],url:'https://janegoodall.org/'},
  {id:'leopold',i:'AL',name:'Aldo Leopold',years:'1887–1948',role:'Ecologist · forester · conservationist',q:'A thing is right when it tends to preserve the integrity, stability and beauty of the biotic community.',kind:'quote',book:'A Sand County Almanac',year:'1949',tags:['ecology','ethics','conservation'],url:'https://www.aldoleopold.org/'},
  {id:'sagan',i:'CS',name:'Carl Sagan',years:'1934–1996',role:'Astronomer · planetary scientist · communicator',q:"Preserve and cherish the pale blue dot, the only home we've ever known.",kind:'quote',book:'Pale Blue Dot',year:'1994',tags:['ethics','evidence'],url:'https://www.planetary.org/worlds/pale-blue-dot'},
  {id:'wilson',i:'EW',name:'E. O. Wilson',years:'1929–2021',role:'Biologist · biodiversity theorist',q:'The crucial factor in the life and death of species is the amount of suitable habitat left to them.',kind:'quote',book:'Half-Earth',year:'2016',tags:['ecology','conservation','evidence'],url:'https://eowilsonfoundation.org/'},
  {id:'darwin',i:'CD',name:'Charles Darwin',years:'1809–1882',role:'Naturalist · evolutionary biologist',q:'There is grandeur in this view of life… endless forms most beautiful and most wonderful have been, and are being, evolved.',kind:'quote',book:'On the Origin of Species',year:'1859',tags:['evidence','ecology'],url:'https://darwin-online.org.uk/'},
  {id:'earle',i:'SE',name:'Sylvia Earle',years:'1935–',role:'Marine biologist · oceanographer · explorer',q:'The question is not whether we can make a difference. It is whether we will.',kind:'quote',book:'The World Is Blue',year:'2009',tags:['conservation','ecology','ethics'],url:'https://mission-blue.org/'},
  {id:'maathai',i:'WM',name:'Wangari Maathai',years:'1940–2011',role:'Biologist · environmental leader · Nobel laureate',q:'Ecological restoration and civic dignity can reinforce one another when communities become the agents of repair.',kind:'summary',book:'Replenishing the Earth',year:'2010',tags:['conservation','ethics','ecology'],url:'https://www.greenbeltmovement.org/wangari-maathai/'},
  {id:'moore',i:'JM',name:'J. Howard Moore',years:'1862–1912',role:'Zoologist · educator · philosopher',q:'Evolutionary kinship challenges us to ask whether ethical concern should stop at the boundary of our own species.',kind:'summary',book:'The Universal Kinship',year:'1906',tags:['ethics','evidence'],url:'https://archive.org/details/universalkinship00moor'},
  {id:'commoner',i:'BC',name:'Barry Commoner',years:'1917–2012',role:'Biologist · ecologist · public scientist',q:'Everything is connected to everything else.',kind:'quote',book:'The Closing Circle',year:'1971',tags:['ecology','evidence','ethics'],url:'https://archive.org/search?query=Barry+Commoner+The+Closing+Circle'},
  {id:'attenborough',i:'DA',name:'David Attenborough',years:'1926–',role:'Natural historian · broadcaster',q:'A witness to biodiversity loss can also be a witness for restoration: the future depends on what people choose to value and protect.',kind:'summary',book:'A Life on Our Planet',year:'2020',tags:['conservation','ecology','ethics'],url:'https://www.wwf.org.uk/updates/david-attenborough-life-our-planet'}
];

const books = [
 ['On the Origin of Species','Charles Darwin','1859','Evolution','Common descent and natural selection place humanity within the tree of life.'],
 ['The Universal Kinship','J. Howard Moore','1906','Ethics','An early argument that evolutionary continuity has ethical consequences.'],
 ['A Sand County Almanac','Aldo Leopold','1949','Land ethic','Humans as members of a biotic community.'],
 ['Silent Spring','Rachel Carson','1962','Evidence','Public-interest science tracing interventions through living systems.'],
 ['The Closing Circle','Barry Commoner','1971','Systems','Ecology as a discipline of connected consequences.'],
 ['The Ascent of Man','Jacob Bronowski','1973','Integrity','A history of knowledge ending with responsibility and ethical integrity.'],
 ['Cosmos','Carl Sagan','1980','Perspective','Scientific wonder joined to skepticism and planetary humility.'],
 ['The Diversity of Life','E. O. Wilson','1992','Biodiversity','A portrait of living diversity and extinction pressures.'],
 ['Pale Blue Dot','Carl Sagan','1994','Planetary ethic','Cosmic perspective turned into an argument for care.'],
 ['Reason for Hope','Jane Goodall','1999','Agency','A life in science framed around moral choice and practical hope.'],
 ['The World Is Blue','Sylvia Earle','2009','Oceans','The scientific and moral case for ocean protection.'],
 ['Replenishing the Earth','Wangari Maathai','2010','Restoration','Ecology, civic responsibility and community restoration.'],
 ['Half-Earth','E. O. Wilson','2016','Habitat','A provocative proposal to retain habitat for the rest of life.'],
 ['A Life on Our Planet','David Attenborough','2020','Witness','A witness statement and restoration vision.'],
 ['The Book of Hope','Jane Goodall & Douglas Abrams','2021','Hope','Hope treated as disciplined agency rather than passive optimism.']
];

const drivers = [
 {n:'01',t:'Land & sea-use change',lead:'When forests, grasslands, wetlands, rivers, reefs or coasts are converted or fragmented, species lose the places and relationships that sustain them.',c:'Conversion + fragmentation',m:'Habitat shrinks, isolates or degrades',r:'Populations decline; ecological networks break',a:['Protect high-value habitat','Restore degraded ecosystems','Design wildlife corridors','Avoid critical breeding areas']},
 {n:'02',t:'Direct exploitation',lead:'Harvesting, hunting, logging and fishing can exceed the capacity of populations and ecosystems to replenish themselves.',c:'Unsustainable extraction',m:'Mortality exceeds replacement',r:'Population collapse + food-web effects',a:['Science-based harvest limits','Enforcement against illegal trade','Community co-management','Bycatch reduction']},
 {n:'03',t:'Climate change',lead:'Temperature, rainfall, ocean chemistry and extreme events are shifting faster than many species can move, adapt or recover.',c:'Greenhouse-gas emissions',m:'Ranges, seasons and habitats shift',r:'Mismatches + compounded extinction risk',a:['Rapid emissions reduction','Protect climate refugia','Connected landscapes','Adaptive monitoring']},
 {n:'04',t:'Pollution',lead:'Chemicals, nutrients, plastics, noise and light can alter physiology, behavior, reproduction and whole ecological communities.',c:'Toxic + disruptive inputs',m:'Exposure accumulates or changes habitat quality',r:'Sublethal harm, mortality, ecosystem change',a:['Prevent at source','Safer chemistry','Long-term biomonitoring','Polluter accountability']},
 {n:'05',t:'Invasive alien species',lead:'Introduced organisms can become invasive when they outcompete, prey on, infect or transform ecosystems that did not evolve with them.',c:'Human-mediated introductions',m:'Competition, predation, disease',r:'Native decline + ecosystem reorganization',a:['Biosecurity & prevention','Early detection','Rapid response','Long-term control']}
];

const species = [
 ['🪽','Birds','Great Indian Bustard','Infrastructure planning, open-grassland habitat and species recovery are inseparable.'],
 ['🐬','Freshwater','River dolphins','River flow, fishing practices, pollution and connectivity converge on one species.'],
 ['🪸','Marine systems','Coral reefs','Warming, acidification, pollution and overuse can compound rather than act alone.'],
 ['🐝','Invertebrates','Pollinators','Tiny organisms can support enormous food systems.'],
 ['🐘','Large mammals','Asian elephants','Conservation depends on habitat connectivity and coexistence.'],
 ['🦈','Oceans','Sharks & rays','Slow life histories make some populations especially vulnerable to overexploitation.'],
 ['🦋','Insects','Migratory butterflies','Protection can require connected habitats across jurisdictions.'],
 ['🌱','Plants','Native flora','Plants structure habitats and relationships; conservation is not only about charismatic animals.']
];

const cases = [
 {label:'Pesticide',meta:'AGRICULTURE × POLLINATORS',title:'A pesticide boosts crop yield—but field reports suggest pollinator harm.',text:'Evidence is concerning but incomplete. Farmers face pest losses now, while pollinator decline could be long-lived and difficult to reverse.',o:[['Expand use immediately while waiting for more studies.',38,'Fast action, weak precaution. Uncertainty is treated as permission even though ecological harm may be hard to reverse.',[45,35,25,35,45,25]],['Run targeted trials, restrict high-risk uses, monitor exposure and publish results.',88,'Strong integrity profile: learning and precaution are designed together.',[94,90,84,82,91,87]],['Ban every pesticide in the category regardless of mechanism or evidence.',55,'High caution but low discrimination. Integrity also requires distinguishing hazard, exposure, dose and alternatives.',[52,58,78,60,64,72]]]},
 {label:'Habitat road',meta:'INFRASTRUCTURE × CONNECTIVITY',title:'A proposed road cuts through a wildlife movement corridor.',text:'The project brings economic benefits, but fragmentation could isolate populations and increase collisions for decades.',o:[['Approve the shortest route; add warning signs after construction.',31,'Low reversibility and weak system thinking.',[55,50,18,24,42,22]],['Compare alternative routes, model movement, require crossings and long-term monitoring.',91,'Evidence becomes design. The corridor is treated as ecological infrastructure.',[95,86,80,97,90,95]],['Reject all transport development near any wildlife habitat.',61,'Protective but too categorical; integrity requires comparing real alternatives and impacts.',[60,62,82,76,58,80]]]},
 {label:'Wildlife disease',meta:'DISEASE × UNCERTAINTY',title:'A disease threatens an endangered population; intervention could also disrupt its ecosystem.',text:'Doing nothing has risk. Acting has risk. The ethical challenge is to make both visible rather than pretending one option is neutral.',o:[['Intervene immediately at full scale using the first plausible treatment.',44,'Urgency matters, but full-scale action without staged learning can convert uncertainty into uncontrolled risk.',[48,34,32,42,48,61]],['Use adaptive management: pilot, predefine stop rules, monitor non-target effects, then scale.',94,'High-integrity conservation: action and learning are designed together.',[96,96,92,92,93,95]],['Do nothing until scientists are completely certain.',47,'Waiting for certainty can itself create irreversible consequences.',[61,46,40,44,65,36]]]},
 {label:'Genetic rescue',meta:'GENOMICS × CONSERVATION',title:'A tiny population has severe inbreeding. Genetic rescue may improve fitness but changes its gene pool.',text:'The question is not simply natural versus unnatural. It is which intervention best preserves evolutionary potential under transparent evidence-based criteria.',o:[['Reject genetic intervention because any human involvement is unnatural.',49,'This confuses a value judgment with a scientific one.',[42,55,62,66,65,51]],['Use genomic and demographic evidence, compare donor populations, stage the intervention and monitor outcomes.',92,'Explicit hypotheses, staged action and long-term monitoring create a strong integrity profile.',[97,89,78,90,90,96]],['Introduce many unrelated individuals immediately to maximize diversity.',58,'More diversity is not automatically better; local adaptation and disease risk matter.',[61,45,54,52,60,77]]]}
];

const timeline = [
 ['1859','Common descent','Darwin makes kinship across life a scientific framework.','Origin of Species'],
 ['1906','Ethical kinship','Moore asks what evolutionary continuity means for our treatment of other animals.','The Universal Kinship'],
 ['1949','The land ethic','Leopold puts soils, waters, plants and animals inside a community of concern.','A Sand County Almanac'],
 ['1962','Ecological consequence','Carson traces human chemical choices through ecosystems.','Silent Spring'],
 ['1971','Systems ecology','Commoner popularizes ecological connectedness.','The Closing Circle'],
 ['1973','Knowledge + integrity','Bronowski makes ethical responsibility part of what knowledge demands.','The Ascent of Man'],
 ['1994','Planetary humility','Sagan turns a distant image of Earth into a case for care.','Pale Blue Dot'],
 ['2016','Habitat at scale','Wilson argues for planetary-scale habitat protection.','Half-Earth'],
 ['Now','Evidence → stewardship','The next chapter belongs to anyone connecting rigorous knowledge with life-preserving decisions.','Your move']
];

const sources = [
 ['Jacob Bronowski','The Ascent of Man transcript','https://www.organism.earth/library/document/ascent-of-man-13'],['Rachel Carson','Rachel Carson site','https://www.rachelcarson.org/silent-spring'],['Jane Goodall','Jane Goodall Institute','https://janegoodall.org/'],['Aldo Leopold','Aldo Leopold Foundation','https://www.aldoleopold.org/'],['Charles Darwin','Darwin Online','https://darwin-online.org.uk/'],['Carl Sagan','Planetary Society','https://www.planetary.org/worlds/pale-blue-dot'],['E. O. Wilson','E.O. Wilson Biodiversity Foundation','https://eowilsonfoundation.org/'],['Sylvia Earle','Mission Blue','https://mission-blue.org/'],['Wangari Maathai','Green Belt Movement','https://www.greenbeltmovement.org/wangari-maathai/'],['J. Howard Moore','Public-domain text','https://archive.org/details/universalkinship00moor'],['Biodiversity drivers','IPBES Global Assessment','https://www.ipbes.net/global-assessment'],['Biodiversity conservation','IUCN','https://iucn.org/our-work/biodiversity']
];

const $ = (selector) => document.querySelector(selector);
const esc = (value) => String(value).replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
let activeFilter = 'all';
let searchTerm = '';
let activeCase = 0;

function renderThinkers() {
  const list = thinkers.filter((t) => {
    const themeMatch = activeFilter === 'all' || t.tags.includes(activeFilter);
    const textMatch = `${t.name} ${t.role} ${t.q} ${t.book}`.toLowerCase().includes(searchTerm);
    return themeMatch && textMatch;
  });
  $('#thinkerGrid').innerHTML = list.length ? list.map((t) => `<article class="card"><div class="initials">${t.i}</div><div class="meta">${t.years}</div><h3>${esc(t.name)}</h3><div class="role">${esc(t.role)}</div><p class="saying ${t.kind === 'summary' ? 'summary' : ''}">${t.kind === 'quote' ? '“' : ''}${esc(t.q)}${t.kind === 'quote' ? '”' : ''}</p><div class="cardfoot"><div><small>${t.kind === 'summary' ? 'Editorial synthesis' : 'Read next'}</small><strong>${esc(t.book)} · ${t.year}</strong></div><a class="src" target="_blank" rel="noopener" href="${t.url}">SOURCE ↗</a></div></article>`).join('') : '<div class="loading">No matches. Try another term.</div>';
}

function renderBooks() { $('#bookshelf').innerHTML = books.map((b) => `<article class="book"><div class="year">${b[2]}</div><h3>${esc(b[0])}</h3><div class="author">${esc(b[1])}</div><p>${esc(b[4])}</p><b>${esc(b[3])}</b></article>`).join(''); }

function renderDriver(index = 0) {
  $('#driverList').innerHTML = drivers.map((d, n) => `<button class="driverbtn ${n === index ? 'active' : ''}" data-driver="${n}"><strong>${esc(d.t)}</strong><span>${d.n}</span></button>`).join('');
  const d = drivers[index];
  $('#driverDetail').innerHTML = `<div class="eyebrow">DIRECT DRIVER ${d.n}</div><h3>${esc(d.t)}</h3><p class="dlead">${esc(d.lead)}</p><div class="flow"><div><span>Pressure</span><strong>${esc(d.c)}</strong></div><div><span>Mechanism</span><strong>${esc(d.m)}</strong></div><div><span>Result</span><strong>${esc(d.r)}</strong></div></div><div class="responses">${d.a.map((x) => `<div>↗ ${esc(x)}</div>`).join('')}</div>`;
}

function renderSpecies() { $('#speciesGrid').innerHTML = species.map((s) => `<article><div class="emoji">${s[0]}</div><small>${esc(s[1])}</small><strong>${esc(s[2])}</strong><p>${esc(s[3])}</p></article>`).join(''); }

function renderCase(index) {
  activeCase = index;
  $('#tabs').innerHTML = cases.map((c, n) => `<button class="tab ${n === index ? 'active' : ''}" data-case="${n}"><span>CASE ${String(n + 1).padStart(2,'0')}</span><b>${esc(c.label)}</b></button>`).join('');
  const c = cases[index];
  $('#scenarioMeta').textContent = c.meta;
  $('#scenarioTitle').textContent = c.title;
  $('#scenarioText').textContent = c.text;
  $('#options').innerHTML = c.o.map((o, n) => `<button class="opt" data-opt="${n}">${String.fromCharCode(65+n)} · ${esc(o[0])}</button>`).join('');
  $('#analysis').innerHTML = '<div class="placeholder"><b>Choose an action.</b>Then examine it through the Integrity Compass.</div>';
}

function renderTimeline() { $('#timeline').innerHTML = timeline.map((t) => `<article class="time"><div class="year">${t[0]}</div><h3>${esc(t[1])}</h3><p>${esc(t[2])}</p><div class="meta">${esc(t[3])}</div></article>`).join(''); }
function renderSources() { $('#sources').innerHTML = sources.map((s) => `<div class="source"><div><strong>${esc(s[0])}</strong><span>${esc(s[1])}</span></div><a href="${s[2]}" target="_blank" rel="noopener">OPEN ↗</a></div>`).join(''); }

function updateCommitState() {
  const yes = localStorage.getItem('ethical-ascent-charter') === 'yes';
  $('#commitBtn').textContent = yes ? 'Charter committed ✓' : 'I commit to the charter';
  $('#commitStatus').textContent = yes ? 'Stored on this device only.' : '';
}

function showIdea() {
  const t = thinkers[Math.floor(Math.random() * thinkers.length)];
  $('#modalKicker').textContent = t.kind === 'quote' ? `${t.book} · ${t.year}` : `EDITORIAL SYNTHESIS · ${t.book}`;
  $('#modalQuote').textContent = `${t.kind === 'quote' ? '“' : ''}${t.q}${t.kind === 'quote' ? '”' : ''}`;
  $('#modalPerson').textContent = `${t.name} · ${t.role}`;
  $('#modal').hidden = false;
  $('#modal').setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}
function closeIdea() { $('#modal').hidden = true; $('#modal').setAttribute('aria-hidden','true'); document.body.style.overflow = ''; }

function boot() {
  renderThinkers(); renderBooks(); renderDriver(0); renderSpecies(); renderCase(0); renderTimeline(); renderSources(); updateCommitState();
  $('#search').addEventListener('input', (e) => { searchTerm = e.target.value.toLowerCase().trim(); renderThinkers(); });
  $('#chips').addEventListener('click', (e) => { const b = e.target.closest('[data-filter]'); if (!b) return; activeFilter = b.dataset.filter; document.querySelectorAll('.chip').forEach((x) => x.classList.toggle('active', x === b)); renderThinkers(); });
  $('#driverList').addEventListener('click', (e) => { const b = e.target.closest('[data-driver]'); if (b) renderDriver(Number(b.dataset.driver)); });
  $('#tabs').addEventListener('click', (e) => { const b = e.target.closest('[data-case]'); if (b) renderCase(Number(b.dataset.case)); });
  $('#options').addEventListener('click', (e) => {
    const b = e.target.closest('[data-opt]'); if (!b) return;
    document.querySelectorAll('.opt').forEach((x) => x.classList.toggle('selected', x === b));
    const o = cases[activeCase].o[Number(b.dataset.opt)];
    const names = ['Evidence','Uncertainty','Reversibility','Interdepend.','Transparency','Future life'];
    $('#analysis').innerHTML = `<div class="score">${o[1]}<span style="font:500 9px var(--mono);color:var(--faint)">/100</span></div><p class="asum">${esc(o[2])}</p>${o[3].map((v,n) => `<div class="lens"><span>${names[n]}</span><div class="track"><i style="width:${v}%"></i></div><b>${v}</b></div>`).join('')}<p style="font-size:8px;color:var(--faint);margin-top:15px">Teaching heuristic, not a scientific risk calculator.</p>`;
  });
  $('#commitBtn').addEventListener('click', () => { localStorage.setItem('ethical-ascent-charter','yes'); updateCommitState(); });
  $('#randomBtn').addEventListener('click', showIdea); $('#anotherBtn').addEventListener('click', showIdea); $('#close').addEventListener('click', closeIdea);
  $('#modal').addEventListener('click', (e) => { if (e.target.id === 'modal') closeIdea(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !$('#modal').hidden) closeIdea(); });
  $('#menuBtn').addEventListener('click', () => { const menu = $('#mobileMenu'); const open = !menu.hidden; menu.hidden = open; $('#menuBtn').setAttribute('aria-expanded', String(!open)); });
  $('#mobileMenu').addEventListener('click', (e) => { if (e.target.tagName === 'A') { $('#mobileMenu').hidden = true; $('#menuBtn').setAttribute('aria-expanded','false'); } });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
