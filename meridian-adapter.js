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
  const frq = (id, prompt, rubric, modelResponse) => ({ id, mode: 'frq', prompt, expectedDisplay: modelResponse, acceptable: new Set(), rubric, explanation: 'Write a complete response. After submitting, use the practice rubric and example response to revise your thinking.' });
  const scoreFrq = (question, response) => {
    const text = normalize(response);
    const results = (question.rubric || []).map((criterion) => {
      let matched = false;
      if (criterion.any) matched = criterion.any.some((term) => text.includes(normalize(term)));
      if (criterion.groups) matched = criterion.groups.every((group) => group.some((term) => text.includes(normalize(term))));
      if (criterion.termGroups) matched = criterion.termGroups.filter((group) => group.some((term) => text.includes(normalize(term)))).length >= (criterion.minMatches || 1);
      return { ...criterion, matched };
    });
    return { results, earned: results.reduce((sum, item) => sum + (item.matched ? item.points || 1 : 0), 0), possible: results.reduce((sum, item) => sum + (item.points || 1), 0) };
  };

  const QUESTIONS = {
    'aphg-1-1': [mcq('map-reference', 'Which map type is designed to show general locations and features?', 'reference map', ['reference map', 'thematic map', 'cartogram', 'isoline']), mcq('map-thematic', 'Which map type communicates a specific spatial pattern or variable?', 'thematic map', ['reference map', 'thematic map', 'political map', 'road map']), q('map-clustering', 'What is the spatial pattern called when features are located close together?', 'clustering', ['clustered distribution', 'a clustered pattern']), q('map-dispersal', 'What is the spatial pattern called when features are spread far apart?', 'dispersal', ['distribution', 'dispersed distribution']), q('map-projection', 'Map projections inevitably distort which four spatial relationships?', 'shape, area, distance, and direction', ['shape area distance direction']), q('map-selective', 'Why are all maps selective?', 'They cannot show every detail of a place', ['maps cannot show every detail', 'every map leaves out some information', 'maps omit details to serve a purpose'])],
    'aphg-1-2-1-3': [mcq('data-fieldwork', 'What is fieldwork or field observation?', 'Physically visiting a location and recording firsthand information', ['Analyzing only satellite images','Physically visiting a location and recording firsthand information','Projecting Earth onto a flat map','Counting population from a census']), q('data-gis', 'What does GIS stand for?', 'geographic information system', ['geographic information systems']), q('data-remote', 'What technology gathers information about places from a distance?', 'remote sensing'), q('data-census', 'Which source named in the lesson counts and describes a population?', 'census data', ['census']), q('data-interview', 'Which is an example of a personal or recorded account that can provide spatial information?', 'personal interviews', ['field observations', 'media reports', 'travel narratives', 'policy documents', 'landscape analysis', 'photographic interpretation']), q('data-decisions', 'According to the slides, geospatial data support decisions by whom and at what scales?', 'individuals, businesses, organizations, and governments at all scales', ['personal, business and organizational, and governmental decision-making at every scale'])],
    'aphg-1-4': [mcq('space-place', 'What concept refers to the physical and human characteristics of a location?', 'place', ['place','space','scale','region']), q('absolute-location', 'What type of location uses a precise position such as latitude and longitude?', 'absolute location'), q('relative-location', 'What type of location describes a place in relation to other places?', 'relative location'), q('distance-decay', 'What concept describes interaction decreasing as distance increases?', 'distance decay'), q('time-space', 'What process makes places seem closer because communication and transportation become faster?', 'time-space compression'), q('flows', 'What term describes the movement of people, goods, information, or ideas?', 'flows')],
    'aphg-1-5': [mcq('hei-determinism', 'A writer claims that a hot climate inevitably makes every society develop the same traits. Which perspective does this claim reflect?', 'environmental determinism', ['environmental determinism','possibilism','cultural ecology','distance decay']), mcq('hei-possibilism', 'Farmers build terraces on steep slopes to create usable fields. Which perspective best explains people adapting to environmental limits?', 'possibilism', ['possibilism','environmental determinism','time-space compression','distance decay']), q('hei-interaction', 'Human-environment interaction studies the relationship between what?', 'human societies and the natural environment'), mcq('hei-evolution', 'Which claim best reflects the shift from environmental determinism toward possibilism?', 'The environment creates limits, but people make choices about how to adapt', ['The environment creates limits, but people make choices about how to adapt','The physical environment determines every cultural outcome','Human societies develop independently of the natural environment','People can remove all environmental limits through technology']), mcq('hei-adaptation', 'Steep mountain slopes leave little flat farmland. Which response is a well-known example of adapting agriculture to that terrain?', 'Building terraces into the slopes', ['Building terraces into the slopes','Replacing farming with map projections','Moving all farms to deserts','Using latitude and longitude to increase soil fertility']), q('hei-caution', 'Why should we avoid saying nature alone determines how societies develop?', 'People make choices and adapt in different ways', ['humans make choices and adapt', 'people adapt to the same environment in different ways'])],
    'aphg-1-7': [mcq('region-formal', 'A country groups counties by the same official language. Which region type is this?', 'formal region', ['formal region','functional region','perceptual region','vernacular region']), mcq('region-functional', 'People across a metro area commute to the same central city for work. Which region type is organized around that node?', 'functional region', ['formal region','functional region','perceptual region','vernacular region']), mcq('region-perceptual', 'Residents describe an area as “the Midwest,” although its boundaries are not officially fixed. Which region type is this?', 'perceptual region', ['formal region','functional region','perceptual region','uniform region']), mcq('region-boundary', 'Two neighboring areas share some cultural traits, residents disagree about where one region ends, and the transition is gradual. How might a geographer describe the boundaries?', 'They can be transitional, contested, and overlapping', ['They can be transitional, contested, and overlapping','They are always fixed and uncontested','They must follow physical barriers','They cannot overlap']), mcq('region-scale', 'A geographer compares neighborhood patterns, national migration trends, and global flows. Which idea is being applied?', 'Analyzing regions and patterns at multiple scales', ['Analyzing regions and patterns at multiple scales','Using only absolute location','Treating every region as a formal region','Ignoring local context']), q('region-unifying', 'What is the basis geographers use to define a region?', 'one or more unifying characteristics or patterns of activity', ['unifying characteristics or patterns of activity', 'shared characteristics or patterns of activity'])],
    'aphg-2-1': [mcq('pop-distribution', 'A dot map shows most people clustered along the coast, with few inland. Which geographic idea is the map describing?', 'population distribution', ['population distribution','arithmetic density','rate of natural increase','carrying capacity']), mcq('pop-factors', 'A settlement is concentrated in a river valley while nearby desert and high mountains have few residents. Which physical conditions best help explain the pattern?', 'Reliable water and easier terrain support settlement; deserts and steep highlands make it harder', ['Reliable water and easier terrain support settlement; deserts and steep highlands make it harder','Latitude alone determines where people live','Population distribution is unrelated to physical geography','The pattern can only be explained by birth rates']), mcq('pop-arithmetic', 'Country A has 24 million people and 120,000 km² of total land. What is its arithmetic density?', '200 people per km²', ['200 people per km²','800 people per km²','20 farmers per km²','0.2 people per km²']), mcq('pop-physiological', 'Country A has 24 million people and 30,000 km² of arable land. What is its physiological density?', '800 people per km² of arable land', ['800 people per km² of arable land','200 people per km² of total land','20 farmers per km² of arable land','1,250 people per km²']), mcq('pop-agricultural', 'Country A has 600,000 farmers and 30,000 km² of arable land. What is its agricultural density?', '20 farmers per km² of arable land', ['20 farmers per km² of arable land','800 people per km² of arable land','200 people per km² of total land','0.05 farmers per km²']), mcq('pop-scale', 'A national map shows a broad coastal population cluster, but a city map reveals dense neighborhoods beside a transit hub. What does this illustrate?', 'Population patterns can look different at different scales', ['Population patterns can look different at different scales','Population density is identical everywhere','Only national-scale patterns matter','Scale changes the number of people but not their distribution'])],
    'aphg-2-2': [q('pop-services', 'Which is one service the slides say population density can affect?', 'medical care', ['services such as medical care', 'health care']), q('pop-environment', 'Population density can affect environmental conditions and the availability of what?', 'natural resources'), mcq('pop-carrying', 'What term describes the number of people an environment can support?', 'carrying capacity', ['population distribution','arithmetic density','carrying capacity','rate of natural increase']), q('pop-political', 'Which political outcome can be affected by population distribution?', 'representation in government', ['political processes']), q('pop-density-tradeoff', 'Which statement best describes both a benefit and a challenge of high population density?', 'Clustered populations can receive services more efficiently, while high density can increase pressure on land and resources', ['Clustered populations can receive services more efficiently, while high density can increase pressure on land and resources']), q('pop-context', 'Why should geographers consider local context when evaluating density?', 'The effects depend on a place’s resources, infrastructure, and environment')],
    'aphg-2-4': [q('dyn-fertility', 'Which demographic factor refers to births in a population?', 'fertility', ['mortality', 'migration']), mcq('dyn-rni', 'Which measure tracks births minus deaths without including migration?', 'rate of natural increase', ['total fertility rate','rate of natural increase','doubling time','net migration']), q('dyn-doubling', 'What does population doubling time measure?', 'How long it takes a population to double'), q('dyn-migration', 'What demographic process moves people between places?', 'migration'), q('dyn-growth', 'If fertility stays high and other factors remain similar, what generally happens to population size?', 'growth'), q('dyn-decline', 'High mortality or sustained out-migration can contribute to population what?', 'decline')],
    'aphg-2-5': [q('dtm-purpose', 'What does the demographic transition model help geographers analyze and predict?', 'population growth and decline through changes in births, deaths, and natural increase', ['population change through births deaths and natural increase']), mcq('dtm-stage2-deaths', 'A country improves clean water, vaccination, and food access. Death rates fall while birth rates remain high. What change does this help explain?', 'Rapid natural increase during Stage 2', ['Rapid natural increase during Stage 2','A sudden fall in fertility during Stage 2','Population decline from negative natural increase','A transition directly to Stage 5']), mcq('dtm-stage2-growth', 'What happens to natural increase in Stage 2?', 'rapid growth', ['rapid growth','negative growth','stable low growth','immediate population decline']), mcq('dtm-stage3-births', 'As a country urbanizes, children become less economically necessary to households and education expands. What demographic change may follow?', 'Birth rates decline', ['Birth rates decline','Death rates rise immediately','Migration stops','Population distribution becomes uniform']), q('dtm-stage4', 'In Stage 4, natural increase falls and then does what?', 'stabilizes at low growth', ['stabilizes']), q('dtm-stage5', 'What is the typical natural increase in Stage 5?', 'negative or very low', ['very low or negative', 'near zero or negative']), q('dtm-etm', 'What does the epidemiological transition model describe?', 'changing disease patterns and life expectancy as countries develop', ['predictable disease stages and life expectancy as countries develop']), mcq('dtm-fertility', 'A country expands girls’ education and access to contraception while fertility falls. Which explanation best fits the lesson?', 'Education and contraception can contribute to lower fertility', ['Education and contraception can contribute to lower fertility','These changes increase fertility everywhere','These changes affect mortality only','These changes have no relationship to fertility'])],
    'aphg-2-6': [mcq('malthus-carrying-capacity', 'A region’s water and soil can support about 5 million people without lasting environmental damage. What concept does this describe?', 'carrying capacity', ['carrying capacity','arithmetic density','rate of natural increase','population distribution']), mcq('malthus-claim', 'Malthus argued population grows how, compared with food output?', 'population grows exponentially while food output grows arithmetically', ['both grow at the same rate','population grows arithmetically while food output grows exponentially','population grows exponentially while food output grows arithmetically','food output always exceeds population growth']), mcq('malthus-crisis', 'In Malthus’s argument, what could happen if population grows faster than food production for a long period?', 'Food shortages and famine', ['Food shortages and famine','Food surpluses in every region','Natural increase immediately becomes zero','All migration stops']), q('malthus-contraception', 'Which factor from the slides has slowed population growth and challenged Malthus?', 'contraceptives', ['education and advancement of women']), q('malthus-farming', 'Which is one farming improvement listed in the slides that increased food-production efficiency?', 'mechanized farming', ['hybrid seeds', 'chemical fertilizers']), q('malthus-technology', 'What did refrigeration in transport help accomplish?', 'preserve food and deliver it to a wider range of consumers', ['preserve food during transport']), mcq('boserup-claim', 'When population pressure increases demand for food, what would Boserup predict people may do?', 'Develop technologies and farming methods that increase food production', ['Develop technologies and farming methods that increase food production','Food output must remain fixed','Population growth always ends in famine','Carrying capacity can never change']), q('neo-malthusian', 'What is a central Neo-Malthusian concern?', 'finite natural resources and environmental sustainability', ['strain on natural resources', 'overconsumption'])],
    'aphg-frq': [
      frq('frq-china-population-map', `<p><strong>Stimulus:</strong> Use the China population and topography map from the workshop. Each dot represents 1 million people. The map labels the Gobi and Taklamakan deserts, Tibetan Plateau, Himalayas, major rivers, and Pacific coast. The dots are much denser in eastern China than in the western highlands and deserts.</p><figure class="meridian-frq-stimulus"><a href="assets/canvas-ap-human-geo/rendered/frq-workshop-page-19.png" target="_blank" rel="noreferrer"><img src="assets/canvas-ap-human-geo/rendered/frq-workshop-page-19.png" alt="Workshop stimulus map of China showing population dots, major rivers, deserts, the Tibetan Plateau, Himalayas, and Pacific coast"></a><figcaption>Source: APHG FRQ Workshop, slide 19. Select the map to open it full size.</figcaption></figure><p><strong>A.</strong> Identify what each point symbol represents.</p><p><strong>B.</strong> Identify two topographic features shown.</p><p><strong>C.</strong> Describe two ways topography affects the population pattern shown.</p><p><strong>D.</strong> Explain one way natural-resource availability can affect population distribution.</p><p>Write a response for all four parts. Use complete, specific statements.</p>`, [
        { label:'A: Interprets the point symbol as one million people', any:['one million people','1 million people','million people per dot','each dot represents a million','each point represents a million'], points:1 },
        { label:'B: Names two mapped features', termGroups:[['gobi desert'],['taklamakan desert'],['tibetan plateau'],['himalayas','himalaya'],['major rivers','river'],['pacific coast']], minMatches:2, points:1 },
        { label:'C: Connects difficult terrain to lower settlement or population density', groups:[['desert','mountain','himalaya','tibetan plateau','highland','steep terrain'],['sparse','few people','fewer settlements','less populated','lower population','difficult to farm','hard to build','discourage settlement','hard to travel']], points:1 },
        { label:'C: Connects favorable terrain or river access to denser settlement', groups:[['river','coast','plain','flat land','fertile land','lowland','water access'],['dense','denser','more people','higher population','settlement','farming','transport','trade']], points:1 },
        { label:'D: Explains how a natural resource can attract or support population', groups:[['water','fertile soil','arable land','minerals','natural resources','energy'],['attract','support','settle','jobs','farming','livelihood','access']], points:1 }
      ], 'Each dot represents one million people. The map shows dense population in eastern China and sparse population across much of the west. Deserts, high mountains, and the Tibetan Plateau make farming, travel, and construction more difficult, so they support fewer settlements. River valleys and coastal lowlands provide water, flatter land, and routes for farming and trade, which support denser populations. Natural resources such as water, fertile soil, or minerals can attract people by supporting livelihoods and jobs.'),
      frq('frq-density-calculations', `<p><strong>Stimulus:</strong> Country A has 24 million people, 120,000 km² of total land, 30,000 km² of arable land, and 600,000 farmers.</p><p><strong>A.</strong> Calculate Country A’s arithmetic density.</p><p><strong>B.</strong> Calculate its physiological density.</p><p><strong>C.</strong> Calculate its agricultural density.</p><p><strong>D.</strong> Compare the arithmetic and physiological densities. What does the difference suggest about population pressure on arable land?</p><p>Show each calculation and include units.</p>`, [
        { label:'A: Arithmetic density is 200 people per km² of total land', any:['200'], points:1 },
        { label:'B: Physiological density is 800 people per km² of arable land', any:['800'], points:1 },
        { label:'C: Agricultural density is 20 farmers per km² of arable land', any:['20'], points:1 },
        { label:'D: Recognizes physiological density is four times arithmetic density', groups:[['four times','4 times','800 compared with 200','fourfold','higher than arithmetic density'],['arable land','farmable land','cultivable land','available farmland','land available for farming','per arable']], points:1 }
      ], 'A. Arithmetic density = 24,000,000 ÷ 120,000 = 200 people per km² of total land. B. Physiological density = 24,000,000 ÷ 30,000 = 800 people per km² of arable land. C. Agricultural density = 600,000 ÷ 30,000 = 20 farmers per km² of arable land. D. Physiological density is four times arithmetic density, so population is much more concentrated relative to the land available for farming.'),
      frq('frq-dtm-transition', `<p><strong>Stimulus:</strong> Country B improves access to clean water, vaccination, and food distribution. Its death rate falls while its birth rate remains high. Later, urbanization expands, education becomes more accessible, and fertility declines.</p><p><strong>A.</strong> Identify the demographic-transition stage that best fits the first period.</p><p><strong>B.</strong> Explain why population grows rapidly in that period.</p><p><strong>C.</strong> Explain one way urbanization or expanded education can contribute to lower fertility in the later period.</p><p><strong>D.</strong> Identify the later stage that best fits a continuing decline in birth rates while death rates remain low.</p><p>Use the demographic terms in your response and explain the relationships.</p>`, [
        { label:'A: Identifies Stage 2 for falling deaths and high births', any:['stage 2','stage two'], points:1 },
        { label:'B: Explains that lower mortality with high fertility raises natural increase', groups:[['death rate','mortality','deaths'],['birth rate','fertility','births'],['natural increase','population grows','rapid growth','more births than deaths']], points:1 },
        { label:'C: Connects urbanization or education to lower fertility', groups:[['urbanization','education','schooling','urban'],['lower fertility','fewer children','birth rate falls','smaller families','less need for child labor','need for child labor','family planning']], points:1 },
        { label:'D: Identifies Stage 3 as birth rates decline and death rates stay low', groups:[['stage 3','stage three'],['birth rate falls','declining births','death rates remain low','low death rate']], points:1 }
      ], 'A. The first period is Stage 2. B. Better water, vaccination, and food reduce mortality, while fertility and birth rates remain high. More births than deaths create a high rate of natural increase and rapid population growth. C. Urbanization can reduce the economic need for child labor, and expanded education can increase access to opportunities and family planning; these changes can contribute to lower fertility. D. The later period best fits Stage 3, when birth rates decline while death rates remain low.')
    ]
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
    'hei-possibilism':['possibilism','environmental determinism','time-space compression','distance decay'],
    'hei-interaction':['human societies and the natural environment','human societies and map projections','people and absolute locations','regions and map scales'],
    'hei-evolution':['The environment creates limits, but people make choices about how to adapt','The physical environment determines every cultural outcome','Human societies develop independently of the natural environment','People can remove all environmental limits through technology'],
    'hei-adaptation':['Building terraces into the slopes','Replacing farming with map projections','Moving all farms to deserts','Using latitude and longitude to increase soil fertility'],
    'hei-caution':['People make choices and adapt in different ways','The same climate always creates the same culture','The physical environment completely controls every outcome','Technology has no effect on how people adapt'],
    'region-formal':['formal region','functional region','perceptual region','vernacular region'],
    'region-functional':['functional region','formal region','perceptual region','vernacular region'],
    'region-perceptual':['perceptual region','formal region','functional region','uniform region'],
    'region-boundary':['They can be transitional, contested, and overlapping','They are always fixed and uncontested','They must follow physical barriers','They cannot overlap'],
    'region-scale':['Analyzing regions and patterns at multiple scales','Using only absolute location','Treating every region as a formal region','Ignoring local context'],
    'region-unifying':['one or more unifying characteristics or patterns of activity','only political borders','only physical landforms','a single central node in every case'],
    'pop-distribution':['population distribution','arithmetic density','rate of natural increase','carrying capacity'],
    'pop-factors':['Reliable water and easier terrain support settlement; deserts and steep highlands make it harder','Latitude alone determines where people live','Population distribution is unrelated to physical geography','The pattern can only be explained by birth rates'],
    'pop-arithmetic':['200 people per km²','800 people per km²','20 farmers per km²','0.2 people per km²'],
    'pop-physiological':['800 people per km² of arable land','200 people per km² of total land','20 farmers per km² of arable land','1,250 people per km²'],
    'pop-agricultural':['20 farmers per km² of arable land','800 people per km² of arable land','200 people per km² of total land','0.05 farmers per km²'],
    'pop-scale':['Population patterns can look different at different scales','Population density is identical everywhere','Only national-scale patterns matter','Scale changes the number of people but not their distribution'],
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
    'dtm-stage2-deaths':['Rapid natural increase during Stage 2','A sudden fall in fertility during Stage 2','Population decline from negative natural increase','A transition directly to Stage 5'],
    'dtm-stage2-growth':['rapid growth','negative growth','stable low growth','immediate population decline'],
    'dtm-stage3-births':['Birth rates decline','Death rates rise immediately','Migration stops','Population distribution becomes uniform'],
    'dtm-stage4':['stabilizes at low growth','increases rapidly','becomes strongly negative immediately','returns to Stage 1 levels'],
    'dtm-stage5':['negative or very low','rapidly increasing','high and stable','the same as Stage 2'],
    'dtm-etm':['changing disease patterns and life expectancy as countries develop','how population is distributed across land','how fertility changes with migration','how food production changes with population'],
    'dtm-fertility':['Education and contraception can contribute to lower fertility','These changes increase fertility everywhere','These changes affect mortality only','These changes have no relationship to fertility'],
    'malthus-carrying-capacity':['carrying capacity','arithmetic density','rate of natural increase','population distribution'],
    'malthus-claim':['population grows exponentially while food output grows arithmetically','population grows arithmetically while food output grows exponentially','both population and food output grow at the same rate','food output always grows faster than population'],
    'malthus-crisis':['Food shortages and famine','Food surpluses in every region','Natural increase immediately becomes zero','All migration stops'],
    'malthus-contraception':['contraceptives','mechanized farming','refrigerated transport','chemical fertilizers'],
    'malthus-farming':['mechanized farming','contraceptives','refrigerated transport','remote sensing'],
    'malthus-technology':['preserve food and deliver it to a wider range of consumers','increase the amount of arable land','reduce population growth directly','replace the need for transportation'],
    'boserup-claim':['Develop technologies and farming methods that increase food production','Food output must remain fixed','Population growth always ends in famine','Carrying capacity can never change'],
    'neo-malthusian':['finite natural resources and environmental sustainability','the idea that all resources are unlimited','the claim that migration determines fertility','the use of maps to show population density'],
    'frq-meaning':['free response question','field research question','formal reasoning question','fixed response question'],
    'frq-time':['75 minutes','25 minutes total','three hours','90 minutes'],
    'frq-questions':['3','1','2','5'],
    'frq-evidence':['maps, graphs, charts, and photographs','only written passages','only census tables','only political maps'],
    'frq-demand':['They become more demanding','They become easier with each part','They stay identical throughout','They stop requiring evidence'],
    'frq-start':['Skim the FRQs and make an outline','Write full answers before reading all prompts','Skip the command words','Start with the longest answer without planning']
  };
  for (const item of Object.values(QUESTIONS).flat()) {
    if (item.mode === 'frq') continue;
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
    const originalRender = app.renderQuestion.bind(app);
    app.renderQuestion = (question, options) => {
      originalRender(question, options);
      const title = document.getElementById('qaTitle');
      if (title && question) title.textContent = byKey[question.module]?.name || 'AP Human Geography';
      const input = document.getElementById('answerInput');
      const toolbar = document.getElementById('accentToolbar');
      const inputRow = input?.parentElement;
      let response = document.getElementById('frqResponse');
      if (question?.mode === 'frq' && input && inputRow) {
        input.hidden = true;
        if (toolbar) toolbar.hidden = true;
        if (!response) {
          response = document.createElement('textarea');
          response.id = 'frqResponse';
          response.className = 'meridian-frq-response';
          response.rows = 11;
          response.maxLength = 12000;
          response.setAttribute('aria-label', 'Your written FRQ response');
          response.placeholder = 'Write your response to every part here…';
          inputRow.appendChild(response);
        }
        response.value = '';
        response.hidden = false;
        response.focus();
        let review = document.getElementById('frqReview');
        if (!review) {
          review = document.createElement('section');
          review.id = 'frqReview';
          review.className = 'meridian-frq-review';
          document.getElementById('feedback')?.insertAdjacentElement('afterend', review);
        }
        review.hidden = true;
        review.replaceChildren();
      } else {
        if (response) response.hidden = true;
        if (input) input.hidden = false;
        if (toolbar) toolbar.hidden = false;
        if (input) {
          const spanish = /Translate (to|into) Spanish|Write .* in Spanish|Spanish .* phrase/i.test(question?.prompt || '');
          const phrase = /phrase|sentence|translate/i.test(question?.prompt || '');
          const instruction = spanish ? (phrase ? 'Write your answer in Spanish...' : 'Type the Spanish term...') : 'Type your answer...';
          input.placeholder = instruction;
          input.setAttribute('aria-label', instruction.replace(/\.\.\.$/,''));
        }
      }
    };
    const canAdvance = app.canAdvanceFromCurrentQuestion.bind(app);
    app.canAdvanceFromCurrentQuestion = () => app.currentQuestion?.mode === 'frq' ? !!app.answered : canAdvance();
    const originalSubmit = app.submitAnswer.bind(app);
    app.submitAnswer = () => {
      const question = app.currentQuestion;
      if (question?.mode !== 'frq') return originalSubmit();
      if (app.answered) return app.setFeedback('This response is already recorded. Choose Next when you are ready.', 'neutral');
      const response = document.getElementById('frqResponse')?.value.trim() || '';
      if (!response) return app.setFeedback('Write a response to the prompt before submitting.', 'neutral');
      const { results, earned, possible } = scoreFrq(question, response);
      const review = document.getElementById('frqReview');
      const list = results.map((item) => `<li class="${item.matched ? 'met' : 'missing'}"><span aria-hidden="true">${item.matched ? '✓' : '○'}</span> ${item.label}</li>`).join('');
      review.innerHTML = `<h3>Practice rubric: ${earned}/${possible} points matched</h3><p>Keyword checks are a study aid, not an official AP score. Review each criterion and compare your reasoning with the example. You can revise and submit again before continuing.</p><ul>${list}</ul><details open><summary>Example response</summary><p>${question.expectedDisplay}</p></details><button type="button" class="btn primary" id="frqContinue">Continue after review</button>`;
      review.hidden = false;
      app.setFeedback(earned === possible ? `All ${possible} practice-rubric points were identified. Review the example response before continuing.` : `${earned} of ${possible} practice-rubric points were identified. Review the missing ideas and revise if needed.`, earned === possible ? 'good' : 'neutral');
      review.querySelector('#frqContinue').addEventListener('click', () => {
        if (app.answered) return;
        const complete = earned === possible;
        app.bumpStats(question.id, complete);
        app.adjustItemScore(question.id, complete);
        app.recordSessionAnswer(complete);
        app.answered = true;
        app.sessionQuestionRecorded = true;
        app.$.nextQBtn.disabled = false;
        app.saveSoon();
        app.setFeedback('Response recorded. Press Next when you are ready.', 'neutral');
      });
    };
    app.refreshSettingsUI = () => { applyLabels(); renderSettings(app); app.updateHomeSummary(); app.renderSessionHistory?.(); normalizeMeridianHistoryLabels(); };
    app.runAutomatedChecks = () => { const questions = Object.values(QUESTIONS).flat(); const frqs = QUESTIONS['aphg-frq'] || []; const mcqs = questions.filter((question) => question.mode === 'mcq'); const results = [{ ok: document.getElementById('brandName')?.textContent === FOUNDATION.brand, label: 'Meridian branding is installed' }, { ok: MODULES.length === 11, label: 'Eleven Canvas-derived modules are registered' }, { ok: MODULES.every((m) => m.sources.length > 0), label: 'Every module retains source references' }, { ok: Object.entries(QUESTIONS).every(([key, pool]) => pool.length >= (key === 'aphg-frq' ? 3 : 6)), label: 'Every module has a varied question bank' }, { ok: mcqs.length + frqs.length === questions.length && frqs.length >= 3 && frqs.every((question) => question.rubric?.length >= 4 && question.expectedDisplay?.length > 100), label: 'FRQ workshop provides complete written-response practice with rubrics and examples' }, { ok: frqs.every((question) => scoreFrq(question, question.expectedDisplay).earned === scoreFrq(question, question.expectedDisplay).possible), label: 'Each FRQ example response meets its own practice rubric' }, { ok: mcqs.every((question) => question.options?.length === 4 && question.options[question.correctIndex] === question.expectedDisplay && new Set(question.options.map(normalize)).size === question.options.length), label: 'All multiple-choice items have one keyed answer and distinct options' }, { ok: !!document.getElementById('libraryOverlay'), label: 'Meridian Library is available' }]; const output = document.getElementById('checksOutput'); if (output) output.innerHTML = `${results.map((item) => `${item.ok ? '✓' : '✗'} ${item.label}`).join('<br>')}<br><small>Summary: ${results.filter((item) => item.ok).length}/${results.length} passed</small>`; return { pass: results.filter((item) => item.ok).length, total: results.length, results }; };
    try { app.setLevel?.('spanish1', { historyMode: 'replace' }); } catch (_) {}
    applyLabels(); app.refreshSettingsUI();
    window.setTimeout(() => { applyLabels(); renderSettings(app); app.updateHomeSummary(); app.renderSessionHistory?.(); normalizeMeridianHistoryLabels(); }, 80);
  }, 0));
})();
