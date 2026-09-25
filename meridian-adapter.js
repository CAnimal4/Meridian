/* Meridian AP Human Geography curriculum adapter.
 * Source set: Meridian/assets/canvas-ap-human-geo.
 */
(() => {
  'use strict';
  window.LearningAppShared?.registerUpdate({id:'meridian-aphg-unit2-5-6-2026-09',app:'meridian',title:'New: AP Human Geo 2.5 and 2.6',copy:'Explore the demographic transition model and Malthusian theory with new source-based practice.',tourSteps:[{title:'Open Modules',copy:'Find Demographic Transition Model and Malthusian Theory under Unit 2.',target:'modules'},{title:'Practice the ideas',copy:'Use short questions to check the DTM, population growth, carrying capacity, and critiques.',target:'practice'}]});

  const FOUNDATION = { brand: 'Meridian', context: 'AP Human Geo', title: 'Meridian — AP Human Geography', accent: '#8b6a4a' };
  const MODULES = [
    { key: 'aphg-1-1', group: 'unit-1', section: '1.1', name: 'Introduction to Maps', sources: ['1-1-lecture-slides.pdf', 'unit-1-lecture-notes-packet.pdf'] },
    { key: 'aphg-1-2-1-3', group: 'unit-1', section: '1.2-1.3', name: 'Geographic Data', sources: ['1-2-1-3-lecture-slides.pdf', 'unit-1-lecture-notes-packet.pdf'] },
    { key: 'aphg-1-4', group: 'unit-1', section: '1.4', name: 'Spatial Concepts', sources: ['1-4-lecture-slides.pdf'] },
    { key: 'aphg-1-5', group: 'unit-1', section: '1.5', name: 'Human-Environment Interaction', sources: ['1-5-lecture-slides.pdf'] },
    { key: 'aphg-1-7', group: 'unit-1', section: '1.7', name: 'Regional Analysis', sources: ['1-7-lecture-slides.pdf'] },
    { key: 'aphg-2-1', group: 'unit-2', section: '2.1', name: 'Population Distribution and Density', sources: ['2-1-lecture-slides.pdf'] },
    { key: 'aphg-2-2', group: 'unit-2', section: '2.2', name: 'Consequences of Population Distribution', sources: ['2-2-lecture-slides.pdf'] },
    { key: 'aphg-2-4', group: 'unit-2', section: '2.4', name: 'Population Dynamics', sources: ['2-4-lecture-slides.pdf'] },
    { key: 'aphg-2-5', group: 'unit-2', section: '2.5', name: 'Demographic Transition Model', sources: ['2-5-demographic-transition-model.pdf'] },
    { key: 'aphg-2-6', group: 'unit-2', section: '2.6', name: 'Malthusian Theory', sources: ['2-6-malthusian-theory.pdf'] },
    { key: 'aphg-frq', group: 'reference', section: 'FRQ', name: 'Free Response Workshop', sources: ['frq-workshop-slides.pdf'] }
  ];
  const byKey = Object.fromEntries(MODULES.map((module) => [module.key, module]));
  const normalize = (value) => String(value ?? '').normalize('NFKC').toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9.%/\-\s]/g, ' ').replace(/\s+/g, ' ').trim();
  const answers = (values) => new Set(values.map(normalize).filter(Boolean));
  const q = (id, prompt, expected, aliases = [], explanation = 'Review the linked Canvas source for this section.') => ({ id, mode: 'text', prompt, expectedDisplay: expected, acceptable: answers([expected, ...aliases]), explanation });
  const mcq = (id, prompt, expected, options, explanation) => ({ id, mode: 'mcq', prompt, expectedDisplay: expected, options, correctIndex: options.indexOf(expected), acceptable: answers([expected]), explanation: explanation || 'Use the definition from the linked Canvas source.' });

  const QUESTIONS = {
    'aphg-1-1': [mcq('map-reference', 'Which map type is designed to show general locations and features?', 'reference map', ['reference map', 'thematic map', 'cartogram', 'isoline']), mcq('map-thematic', 'Which map type communicates a specific spatial pattern or variable?', 'thematic map', ['reference map', 'thematic map', 'political map', 'road map']), q('map-clustering', 'What is the spatial pattern called when features are located close together?', 'clustering', ['clustered distribution', 'a clustered pattern']), q('map-dispersal', 'What is the spatial pattern called when features are spread far apart?', 'dispersal', ['distribution', 'dispersed distribution']), q('map-projection', 'Map projections inevitably distort which four spatial relationships?', 'shape, area, distance, and direction', ['shape area distance direction']), q('map-selective', 'Why are all maps selective?', 'They cannot show every detail of a place', ['maps cannot show every detail', 'every map leaves out some information', 'maps omit details to serve a purpose'])],
    'aphg-1-2-1-3': [mcq('data-fieldwork', 'What is fieldwork or field observation?', 'Physically visiting a location and recording firsthand information', ['Analyzing only satellite images','Physically visiting a location and recording firsthand information','Projecting Earth onto a flat map','Counting population from a census']), q('data-gis', 'What does GIS stand for?', 'geographic information system', ['geographic information systems']), q('data-remote', 'What technology gathers information about places from a distance?', 'remote sensing'), q('data-census', 'Which source named in the lesson counts and describes a population?', 'census data', ['census']), q('data-interview', 'Which is an example of a personal or recorded account that can provide spatial information?', 'personal interviews', ['field observations', 'media reports', 'travel narratives', 'policy documents', 'landscape analysis', 'photographic interpretation']), q('data-decisions', 'According to the slides, geospatial data support decisions by whom and at what scales?', 'individuals, businesses, organizations, and governments at all scales', ['personal, business and organizational, and governmental decision-making at every scale'])],
    'aphg-1-4': [mcq('space-place', 'What concept refers to the physical and human characteristics of a location?', 'place', ['place','space','scale','region']), q('absolute-location', 'What type of location uses a precise position such as latitude and longitude?', 'absolute location'), q('relative-location', 'What type of location describes a place in relation to other places?', 'relative location'), q('distance-decay', 'What concept describes interaction decreasing as distance increases?', 'distance decay'), q('time-space', 'What process makes places seem closer because communication and transportation become faster?', 'time-space compression'), q('flows', 'What term describes the movement of people, goods, information, or ideas?', 'flows')],
    'aphg-1-5': [mcq('hei-determinism', 'Which theory claims the physical environment directly determines human behavior?', 'environmental determinism', ['environmental determinism','possibilism','cultural ecology','distance decay']), q('hei-possibilism', 'Which theory says the environment sets limits while people adapt to or modify it?', 'possibilism'), q('hei-interaction', 'Human-environment interaction studies the relationship between what?', 'human societies and the natural environment'), q('hei-evolution', 'Which sequence shows how the lesson says theories of human-environment interaction changed?', 'environmental determinism to possibilism'), q('hei-adaptation', 'Which example from the slides shows people adapting farming to steep terrain?', 'Inca terrace farming'), q('hei-caution', 'Why should we avoid saying nature alone determines how societies develop?', 'People make choices and adapt in different ways', ['humans make choices and adapt', 'people adapt to the same environment in different ways'])],
    'aphg-1-7': [mcq('region-formal', 'Which region is defined by one or more measurable, shared characteristics?', 'formal region', ['formal region','functional region','perceptual region','vernacular region']), mcq('region-functional', 'Which region is organized around a node or focal point?', 'functional region', ['formal region','functional region','perceptual region','vernacular region']), mcq('region-perceptual', 'Which region is based on people’s feelings or perceptions?', 'perceptual region', ['formal region','functional region','perceptual region','uniform region']), q('region-boundary', 'Which set of terms describes regional boundaries in the lesson?', 'transitional, contested, and overlapping'), q('region-scale', 'Which scales does the lesson name for regional analysis?', 'local, national, and global', ['local national global']), q('region-unifying', 'What is the basis geographers use to define a region?', 'one or more unifying characteristics or patterns of activity', ['unifying characteristics or patterns of activity', 'shared characteristics or patterns of activity'])],
    'aphg-2-1': [q('pop-distribution', 'What does population distribution describe?', 'Where people are located across space'), q('pop-factors', 'Which is a physical factor that can influence population distribution?', 'climate', ['landforms', 'water bodies']), mcq('pop-arithmetic', 'What density measure divides total population by total land area?', 'arithmetic density', ['arithmetic density','physiological density','agricultural density','population distribution']), q('pop-physiological', 'Which density measure compares total population with arable land?', 'physiological density'), q('pop-agricultural', 'Which density measure compares the number of farmers with arable land?', 'agricultural density'), q('pop-scale', 'Why does scale matter when analyzing population distribution?', 'Patterns and influential factors can vary at different scales', ['the factors and patterns can change at different scales', 'patterns vary by scale', 'patterns differ from local to national scales'])],
    'aphg-2-2': [q('pop-services', 'Which is one service the slides say population density can affect?', 'medical care', ['services such as medical care', 'health care']), q('pop-environment', 'Population density can affect environmental conditions and the availability of what?', 'natural resources'), mcq('pop-carrying', 'What term describes the number of people an environment can support?', 'carrying capacity', ['population distribution','arithmetic density','carrying capacity','rate of natural increase']), q('pop-political', 'Which political outcome can be affected by population distribution?', 'representation in government', ['political processes']), q('pop-density-tradeoff', 'Which statement best describes both a benefit and a challenge of high population density?', 'Clustered populations can receive services more efficiently, while high density can increase pressure on land and resources', ['Clustered populations can receive services more efficiently, while high density can increase pressure on land and resources']), q('pop-context', 'Why should geographers consider local context when evaluating density?', 'The effects depend on a place’s resources, infrastructure, and environment')],
    'aphg-2-4': [q('dyn-fertility', 'Which demographic factor refers to births in a population?', 'fertility', ['mortality', 'migration']), mcq('dyn-rni', 'Which measure tracks births minus deaths without including migration?', 'rate of natural increase', ['total fertility rate','rate of natural increase','doubling time','net migration']), q('dyn-doubling', 'What does population doubling time measure?', 'How long it takes a population to double'), q('dyn-migration', 'What demographic process moves people between places?', 'migration'), q('dyn-growth', 'If fertility stays high and other factors remain similar, what generally happens to population size?', 'growth'), q('dyn-decline', 'High mortality or sustained out-migration can contribute to population what?', 'decline')],
    'aphg-2-5': [q('dtm-purpose', 'What does the demographic transition model help geographers analyze and predict?', 'population growth and decline through changes in births, deaths, and natural increase', ['population change through births deaths and natural increase']), q('dtm-stage2-deaths', 'Which changes help explain the fall in death rates during Stage 2?', 'improved nutrition, sanitation, and medicine', ['improvements in nutrition sanitation and medicine', 'better nutrition sanitation and medical care']), mcq('dtm-stage2-growth', 'What happens to natural increase in Stage 2?', 'rapid growth', ['rapid growth','negative growth','stable low growth','immediate population decline']), q('dtm-stage3-births', 'Which change in Stage 3 can reduce the need for child labor and contribute to lower birth rates?', 'urbanization', ['urbanization reduces the need for child labor', 'increased healthcare', 'female employment and education', 'smaller living spaces']), q('dtm-stage4', 'In Stage 4, natural increase falls and then does what?', 'stabilizes at low growth', ['stabilizes']), q('dtm-stage5', 'What is the typical natural increase in Stage 5?', 'negative or very low', ['very low or negative', 'near zero or negative']), q('dtm-etm', 'What does the epidemiological transition model describe?', 'changing disease patterns and life expectancy as countries develop', ['predictable disease stages and life expectancy as countries develop']), q('dtm-fertility', 'According to the slides, how have education and access to health care and contraception affected fertility rates?', 'they have reduced fertility rates in most parts of the world', ['reduced fertility rates'])],
    'aphg-2-6': [q('malthus-carrying-capacity', 'What is carrying capacity?', 'the amount of population a location can support without harming the environment', ['population a location can support without environmental harm']), mcq('malthus-claim', 'Malthus argued population grows how, compared with food output?', 'population grows exponentially while food output grows arithmetically', ['both grow at the same rate','population grows arithmetically while food output grows exponentially','population grows exponentially while food output grows arithmetically','food output always exceeds population growth']), q('malthus-crisis', 'What did Malthus predict would result when population outpaced food production?', 'food shortage and famine', ['famine']), q('malthus-contraception', 'Which factor from the slides has slowed population growth and challenged Malthus?', 'contraceptives', ['education and advancement of women']), q('malthus-farming', 'Which is one farming improvement listed in the slides that increased food-production efficiency?', 'mechanized farming', ['hybrid seeds', 'chemical fertilizers']), q('malthus-technology', 'What did refrigeration in transport help accomplish?', 'preserve food and deliver it to a wider range of consumers', ['preserve food during transport']), q('boserup-claim', 'According to Boserup, what can population growth encourage?', 'new technologies that increase food production', ['increased food production through new technologies']), q('neo-malthusian', 'What is a central Neo-Malthusian concern?', 'finite natural resources and environmental sustainability', ['strain on natural resources', 'overconsumption'])],
    'aphg-frq': [q('frq-meaning', 'What does FRQ stand for in the workshop?', 'free response question'), q('frq-time', 'How much total time does the workshop recommend for three FRQs?', '75 minutes', ['75 min', '1 hour 15 minutes', '25 minutes per question']), q('frq-questions', 'How many FRQ questions does the workshop’s 2024 exam slide list?', '3', ['three']), q('frq-evidence', 'Which examples does the workshop list as possible FRQ stimuli?', 'maps, graphs, charts, and photographs', ['multiple sources of data', 'maps graphs charts photographs', 'maps, graphs, charts, photographs, or other stimuli']), q('frq-demand', 'As the parts of an FRQ progress, how do the demands usually change?', 'They become more demanding', ['the demands increase', 'they get progressively harder', 'increasingly demanding']), q('frq-start', 'According to the workshop, what should you do before drafting FRQ answers?', 'Skim the FRQs and make an outline', ['skim then outline', 'skim the questions and outline your answers', 'make an outline after skimming the FRQs'])]
  };

  // Every choice set is written for its prompt. Never borrow distractors from
  // unrelated questions: those produced confusing options and could imply a
  // second plausible answer.
  const REVIEWED_OPTIONS = {
    'map-reference':['reference map','thematic map','cartogram','isoline'],
    'map-thematic':['thematic map','reference map','political map','road map'],
    'map-clustering':['clustering','dispersal','elevation','absolute direction'],
    'map-dispersal':['dispersal','clustering','elevation','absolute direction'],
    'map-projection':['shape, area, distance, and direction','shape, area, distance, and elevation','area, distance, direction, and location','shape, location, scale, and elevation'],
    'map-selective':['They cannot show every detail of a place','They only show absolute location','They never represent spatial patterns','They all preserve shape, area, distance, and direction'],
    'data-fieldwork':['Physically visiting a location and recording firsthand information','Using sensors on satellites to collect images','Combining digital map layers in a computer','Receiving location signals from satellites'],
    'data-gis':['geographic information system','global positioning system','geographic image survey','general information service'],
    'data-remote':['remote sensing','fieldwork','GIS','GPS'],
    'data-census':['census data','satellite imagery','GPS coordinates','a thematic map'],
    'data-interview':['personal interviews','remote sensing','GIS','GPS'],
    'data-decisions':['individuals, businesses, organizations, and governments at all scales','governments only, and only at the national scale','businesses only, and only at the local scale','individuals only, and only at the global scale'],
    'space-place':['place','space','scale','region'],
    'absolute-location':['absolute location','relative location','distance decay','time-space compression'],
    'relative-location':['relative location','absolute location','distance decay','time-space compression'],
    'distance-decay':['distance decay','time-space compression','relative location','flow'],
    'time-space':['time-space compression','distance decay','absolute location','place'],
    'flows':['flows','distance decay','place','scale'],
    'hei-determinism':['environmental determinism','possibilism','cultural ecology','distance decay'],
    'hei-possibilism':['possibilism','environmental determinism','cultural ecology','time-space compression'],
    'hei-interaction':['human societies and the natural environment','human societies and map projections','people and absolute locations','regions and map scales'],
    'hei-evolution':['environmental determinism to possibilism','possibilism to environmental determinism','cultural ecology to distance decay','place to relative location'],
    'hei-adaptation':['Inca terrace farming','remote sensing from satellites','using GPS to find absolute location','drawing a reference map'],
    'hei-caution':['People make choices and adapt in different ways','The same climate always creates the same culture','The physical environment completely controls every outcome','Technology has no effect on how people adapt'],
    'region-formal':['formal region','functional region','perceptual region','vernacular region'],
    'region-functional':['functional region','formal region','perceptual region','vernacular region'],
    'region-perceptual':['perceptual region','formal region','functional region','uniform region'],
    'region-boundary':['transitional, contested, and overlapping','fixed, uncontested, and non-overlapping','measurable, permanent, and uniform','centralized, connected, and hierarchical'],
    'region-scale':['local, national, and global','absolute, relative, and functional','formal, perceptual, and thematic','urban, rural, and suburban'],
    'region-unifying':['one or more unifying characteristics or patterns of activity','only political borders','only physical landforms','a single central node in every case'],
    'pop-distribution':['Where people are located across space','The total population divided by total land area','The number of farmers divided by arable land','The population divided by arable land'],
    'pop-factors':['climate','political stability','job opportunities','cultural identity'],
    'pop-arithmetic':['arithmetic density','physiological density','agricultural density','rate of natural increase'],
    'pop-physiological':['physiological density','arithmetic density','agricultural density','population growth rate'],
    'pop-agricultural':['agricultural density','arithmetic density','physiological density','population growth rate'],
    'pop-scale':['Patterns and influential factors can vary at different scales','Population patterns never change with scale','Density measures do not use land area','Scale only affects map colors'],
    'pop-services':['medical care','natural increase','arable land','migration'],
    'pop-environment':['natural resources','political representation','relative location','birth rates'],
    'pop-carrying':['carrying capacity','arithmetic density','rate of natural increase','population distribution'],
    'pop-political':['representation in government','carrying capacity','medical care','food production'],
    'pop-density-tradeoff':['Clustered populations can receive services more efficiently, while high density can increase pressure on land and resources','High density always makes services harder to provide and reduces all resource use','Low density guarantees equal access to services and eliminates environmental impacts','Population density affects only the number of electoral districts'],
    'pop-context':['The effects depend on a place’s resources, infrastructure, and environment','The same density has identical effects everywhere','Only population size matters, not local conditions','Infrastructure and resources do not affect density outcomes'],
    'dyn-fertility':['fertility','mortality','migration','population density'],
    'dyn-rni':['rate of natural increase','total fertility rate','doubling time','net migration'],
    'dyn-doubling':['How long it takes a population to double','How many births occur per 1,000 people each year','How many people move into a country','The average number of children per woman'],
    'dyn-migration':['migration','fertility','mortality','doubling time'],
    'dyn-growth':['growth','decline','no change under all circumstances','a change in population distribution only'],
    'dyn-decline':['decline','growth','time-space compression','carrying capacity'],
    'dtm-purpose':['population growth and decline through changes in births, deaths, and natural increase','the movement of people between countries','how map projections distort spatial relationships','how food production changes with technology'],
    'dtm-stage2-deaths':['improved nutrition, sanitation, and medicine','a sudden fall in fertility and birth rates','increased migration out of the country','a decline in access to health care'],
    'dtm-stage2-growth':['rapid growth','negative growth','stable low growth','immediate population decline'],
    'dtm-stage3-births':['urbanization','improved nutrition','receding infectious disease','increased life expectancy'],
    'dtm-stage4':['stabilizes at low growth','increases rapidly','becomes strongly negative immediately','returns to Stage 1 levels'],
    'dtm-stage5':['negative or very low','rapidly increasing','high and stable','the same as Stage 2'],
    'dtm-etm':['changing disease patterns and life expectancy as countries develop','how population is distributed across land','how fertility changes with migration','how food production changes with population'],
    'dtm-fertility':['they have reduced fertility rates in most parts of the world','they have increased fertility rates everywhere','they have had no effect on fertility rates','they have affected only mortality, not fertility'],
    'malthus-carrying-capacity':['the amount of population a location can support without harming the environment','the number of births per 1,000 people in a year','the number of years required for population to double','the number of farmers divided by arable land'],
    'malthus-claim':['population grows exponentially while food output grows arithmetically','population grows arithmetically while food output grows exponentially','both population and food output grow at the same rate','food output always grows faster than population'],
    'malthus-crisis':['food shortage and famine','lower death rates and rapid growth','food surpluses in every region','increased migration without food shortages'],
    'malthus-contraception':['contraceptives','mechanized farming','refrigerated transport','chemical fertilizers'],
    'malthus-farming':['mechanized farming','contraceptives','refrigerated transport','remote sensing'],
    'malthus-technology':['preserve food and deliver it to a wider range of consumers','increase the amount of arable land','reduce population growth directly','replace the need for transportation'],
    'boserup-claim':['new technologies that increase food production','food output must grow arithmetically','population growth always causes famine','carrying capacity never changes'],
    'neo-malthusian':['finite natural resources and environmental sustainability','the idea that all resources are unlimited','the claim that migration determines fertility','the use of maps to show population density'],
    'frq-meaning':['free response question','field research question','formal reasoning question','fixed response question'],
    'frq-time':['75 minutes','25 minutes total','three hours','90 minutes'],
    'frq-questions':['3','1','2','5'],
    'frq-evidence':['maps, graphs, charts, and photographs','only written passages','only census tables','only political maps'],
    'frq-demand':['They become more demanding','They become easier with each part','They stay identical throughout','They stop requiring evidence'],
    'frq-start':['Skim the FRQs and make an outline','Write full answers before reading all prompts','Skip the command words','Start with the longest answer without planning']
  };
  for (const item of Object.values(QUESTIONS).flat()) {
    const options = REVIEWED_OPTIONS[item.id];
    if (!options) continue;
    const correctAnswer = options.find((option) => normalize(option) === normalize(item.expectedDisplay));
    if (!correctAnswer) continue;
    const rotation = [...item.id].reduce((sum, char) => sum + char.charCodeAt(0), 0) % options.length;
    const orderedOptions = [...options.slice(rotation), ...options.slice(0, rotation)];
    const correctIndex = orderedOptions.indexOf(correctAnswer);
    if (correctIndex < 0) continue;
    item.mode = 'mcq';
    item.options = orderedOptions;
    item.correctIndex = correctIndex;
    item.acceptable = answers([item.expectedDisplay]);
  }

  const PREF_COOKIE = 'meridian_aphg_preferences_v1';
  const readPrefs = () => { try { const item = document.cookie.split('; ').find((part) => part.startsWith(`${PREF_COOKIE}=`)); return item ? JSON.parse(decodeURIComponent(item.slice(PREF_COOKIE.length + 1))) : {}; } catch (_) { return {}; } };
  const writePrefs = (value) => { try { document.cookie = `${PREF_COOKIE}=${encodeURIComponent(JSON.stringify(value))}; max-age=31536000; path=/; SameSite=Lax`; } catch (_) {} };

  function applyLabels() {
    document.title = FOUNDATION.title;
    document.documentElement.style.setProperty('--accent', FOUNDATION.accent);
    document.querySelectorAll('#brandName, .app-switcher-menu a.is-current span').forEach((node) => { node.textContent = FOUNDATION.brand; });
    ['subtitle', 'headerLevel', 'classSwitcherLabel'].forEach((id) => { const node = document.getElementById(id); if (node) node.textContent = FOUNDATION.context; });
    const home = document.querySelector('#homeCard h1'); if (home) home.textContent = 'Understand the world through place.';
    const intro = document.querySelector('#homeCard .home-intro'); if (intro) intro.textContent = 'Meridian is the focused AP Human Geography study space. Choose a section, then build a clearer picture of the world.';
    ['.dashboard-switcher', '.level-switch', '#spanish2Panel', '#practiceBehaviorSettings', '#accentToolbar', '#activeModuleChip'].forEach((selector) => document.querySelectorAll(selector).forEach((node) => { node.hidden = true; }));
    const settings = document.getElementById('moduleSettingsSection'); if (settings && !settings.querySelector('[data-meridian-settings]')) settings.innerHTML = '<summary>AP Human Geography modules</summary><div class="accordion-inner" data-meridian-settings></div>';
    const enter = document.getElementById('enterPracticeBtn'); if (enter) { enter.textContent = 'Enter AP Human Geography session →'; enter.disabled = false; enter.setAttribute('aria-label', 'Enter AP Human Geography session'); }
  }

  function renderSettings(app) {
    const section = document.querySelector('#moduleSettingsSection [data-meridian-settings]'); if (!section) return;
    const prefs = readPrefs(); const saved = prefs.modules || {};
    const groups = [['unit-1', 'Unit 1 Thinking Geographically'], ['unit-2', 'Unit 2 Population'], ['reference', 'Reference and FRQ']];
    section.innerHTML = groups.map(([group, label]) => `<details class="module-group"${prefs.groups?.[group] !== false ? ' open' : ''}><summary>${label}</summary><div class="module-group-content">${MODULES.filter((m) => m.group === group).map((m) => `<div class="toggle"><div><div class="label">${m.section} ${m.name}</div><div class="desc">${m.sources.length} Canvas source${m.sources.length === 1 ? '' : 's'} · ${(QUESTIONS[m.key] || []).length} questions</div></div><label><input type="checkbox" data-meridian-module="${m.key}" aria-label="Toggle ${m.name}"${saved[m.key] === true ? ' checked' : ''}><span class="switch" aria-hidden="true"></span></label></div>`).join('')}</div></details>`).join('');
    section.querySelectorAll('[data-meridian-module]').forEach((box) => box.addEventListener('change', () => { const modules = Object.fromEntries([...section.querySelectorAll('[data-meridian-module]')].map((item) => [item.dataset.meridianModule, item.checked])); writePrefs({ ...readPrefs(), modules }); app.updateHomeSummary(); app.saveSoon?.(); }));
    section.querySelectorAll('details.module-group').forEach((group) => group.addEventListener('toggle', () => { const title = group.querySelector('summary')?.textContent || ''; const key = title.startsWith('Unit 1') ? 'unit-1' : title.startsWith('Unit 2') ? 'unit-2' : 'reference'; writePrefs({ ...readPrefs(), groups: { ...readPrefs().groups, [key]: group.open } }); }));
  }

  document.addEventListener('DOMContentLoaded', () => setTimeout(() => {
    const app = window.SpanishPracticeApp; if (!app) return;
    window.MeridianApp = app;
    app.updateDocumentTitle = () => { document.title = FOUNDATION.title; };
    app.getEnabledModules = () => { const prefs = readPrefs(); return MODULES.filter((m) => prefs.modules?.[m.key] === true && (QUESTIONS[m.key] || []).length).map((m) => m.key); };
    app.isModulePracticeEnabled = (key) => app.getEnabledModules().includes(key);
    app.getModuleCounts = (key) => { const total = (QUESTIONS[key] || []).length; const hidden = app.state?.hiddenItems || {}; return { total, available: (QUESTIONS[key] || []).filter((item) => !hidden[item.id]).length }; };
    app.generateQuestion = (key) => { const pool = (QUESTIONS[key] || []).filter((item) => !app.state?.hiddenItems?.[item.id]); if (!pool.length) return null; return { ...pool[Math.floor(Math.random() * pool.length)], module: key }; };
    app.updateHomeSummary = () => { const node = document.getElementById('homeModuleSummary'); if (node) { const enabled = app.getEnabledModules(); node.textContent = enabled.length ? enabled.map((key) => byKey[key].name).join(', ') : 'No AP Human Geography modules selected yet.'; } };
    const normalizeMeridianHistoryLabels = () => document.querySelectorAll('.session-history-main strong').forEach((node) => { node.textContent = 'AP Human Geo'; });
    const originalRender = app.renderQuestion.bind(app); app.renderQuestion = (question, options) => { originalRender(question, options); const title = document.getElementById('qaTitle'); if (title && question) title.textContent = byKey[question.module]?.name || 'AP Human Geography'; const input = document.getElementById('answerInput'); if (input) { const spanish = /Translate (to|into) Spanish|Write .* in Spanish|Spanish .* phrase/i.test(question?.prompt || ''); const phrase = /phrase|sentence|translate/i.test(question?.prompt || ''); const instruction = spanish ? (phrase ? 'Write your answer in Spanish...' : 'Type the Spanish term...') : 'Type your answer...'; input.placeholder = instruction; input.setAttribute('aria-label', instruction.replace(/\.\.\.$/,'')); } };
    app.refreshSettingsUI = () => { applyLabels(); renderSettings(app); app.updateHomeSummary(); app.renderSessionHistory?.(); normalizeMeridianHistoryLabels(); };
    app.runAutomatedChecks = () => { const questions = Object.values(QUESTIONS).flat(); const results = [{ ok: document.getElementById('brandName')?.textContent === FOUNDATION.brand, label: 'Meridian branding is installed' }, { ok: MODULES.length === 11, label: 'Eleven Canvas-derived modules are registered' }, { ok: MODULES.every((m) => m.sources.length > 0), label: 'Every module retains source references' }, { ok: Object.values(QUESTIONS).every((pool) => pool.length >= 6), label: 'Every module has a varied question bank' }, { ok: questions.every((question) => question.mode === 'mcq'), label: 'All prompts have answer choices, including FRQ workshop checks' }, { ok: questions.every((question) => question.options?.length === 4 && question.options[question.correctIndex] === question.expectedDisplay && new Set(question.options.map(normalize)).size === question.options.length), label: 'All choice sets have one keyed answer and distinct options' }, { ok: !!document.getElementById('libraryOverlay'), label: 'Meridian Library is available' }]; const output = document.getElementById('checksOutput'); if (output) output.innerHTML = `${results.map((item) => `${item.ok ? '✓' : '✗'} ${item.label}`).join('<br>')}<br><small>Summary: ${results.filter((item) => item.ok).length}/${results.length} passed</small>`; return { pass: results.filter((item) => item.ok).length, total: results.length, results }; };
    try { app.setLevel?.('spanish1', { historyMode: 'replace' }); } catch (_) {}
    applyLabels(); app.refreshSettingsUI();
    window.setTimeout(() => { applyLabels(); renderSettings(app); app.updateHomeSummary(); app.renderSessionHistory?.(); normalizeMeridianHistoryLabels(); }, 80);
  }, 0));
})();
