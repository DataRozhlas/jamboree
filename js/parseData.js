const fs = require('fs');
const readXlsxFile = require('read-excel-file/node');

const schema = {
    'Countries::Country name option 1 E' : {
        prop : 'stat',
        type : String 
    },
    'Countries::WOSM region E' : {
        prop : 'region',
        type : String 
    },
    'Year of Census in NSO' : {
        prop : 'rokScitani',
        type : Number
    },
    'PreCubsFE' : {
        prop : 'benjaminciHolky',
        type : Number
    },
    'PreCubsMA' : {
        prop : 'benjaminciKluci',
        type : Number
    },
    'CubsFE' : {
        prop : 'svetlusky',
        type : Number
    },
    'CubsMA' : {
        prop : 'vlcata',
        type : Number
    },
    'ScoutsFE' : {
        prop : 'skautky',
        type : Number
    },
    'ScoutsMA' : {
        prop : 'skauti',
        type : Number
    },
    'SeniorFE' : {
        prop : 'starsiSkautky',
        type : Number
    },
    'SeniorMA' : {
        prop : 'starsiSkauti',
        type : Number
    },
    'RoversFE' : {
        prop : 'roveriHolky',
        type : Number
    },
    'RoversMA' : {
        prop : 'roveriKluci',
        type : Number
    },
    'VolunteerFE' : {
        prop : 'dobrovolnice',
        type : Number
    },
    'VolunteerMA' : {
        prop : 'dobrovolnici',
        type : Number
    },
    'ProfFE' : {
        prop : 'zamestnankyne',
        type : Number
    },
    'ProfMA' : {
        prop : 'zamestnanci',
        type : Number
    },
    'OtherFE' : {
        prop : 'jine',
        type : Number
    },
    'OtherMA' : {
        prop : 'jini',
        type : Number
    },
    'TOTWOSM' : {
        prop : 'celkem',
        type : Number
    },
    'Previous Year of Census' : {
        prop : 'rokMinulehoScitani',
        type : Number
    },
    'Previous Year of Census' : {
        prop : 'rokMinulehoScitani',
        type : Number
    },
    'PREVTOTWOSM' : {
        prop : 'celkemMinule',
        type : Number
    },    
};

const jeStatvgeoJSON = staty => {
    const mapa = JSON.parse(fs.readFileSync('../node_modules/@highcharts/map-collection/custom/world-palestine.geo.json'));
    const nazvyStatuvMape = [];
    mapa.features.forEach(stat => nazvyStatuvMape.push(stat.properties.name));
    staty.forEach(i => {
        if (!nazvyStatuvMape.includes(i.stat)) {console.log(i.stat)};
    });
}

const sjednotStaty = staty => {
    staty.forEach(i => {
        if (i.stat === 'Aruba') {i.stat = 'Netherlands'};
        if (i.stat === 'Bahamas') {i.stat = 'The Bahamas'};
        if (i.stat === 'Plurinational State of Bolivia') {i.stat = 'Bolivia'};
        if (i.stat === 'Brunei Darussalam') {i.stat = 'Brunei'};
        if (i.stat === 'Cabo Verde') {i.stat = 'Cape Verde'};
        if (i.stat === 'Democratic Republic of The Congo') {i.stat = 'Democratic Republic of the Congo'};
        if (i.stat === 'Côte d’Ivoire') {i.stat = 'Ivory Coast'};
        if (i.stat === 'Curaçao') {i.stat = 'Netherlands'};
        if (i.stat === 'Guinea-Bissau') {i.stat = 'Guinea Bissau'};
        if (i.stat === 'Hong Kong') {i.stat = 'China'};
        if (i.stat === 'Republic of Korea') {i.stat = 'South Korea'};
        if (i.stat === 'Macao') {i.stat = 'China'};
        if (i.stat === 'The former Yugoslav Republic of Macedonia') {i.stat = 'Macedonia'};
        if (i.stat === 'Republic of Moldova') {i.stat = 'Moldova'};
        if (i.stat === 'State of Palestine') {i.stat = 'West Bank'};
        if (i.stat === 'Russian Federation') {i.stat = 'Russia'};
        if (i.stat === 'Sao Tomé and Principe') {i.stat = 'Sao Tome and Principe'};
        if (i.stat === 'Serbia') {i.stat = 'Republic of Serbia'};
        if (i.stat === 'Syrian Arab Republic') {i.stat = 'Syria'};
        if (i.stat === 'Timor-Leste') {i.stat = 'East Timor'};
        if (i.stat === 'Bolivarian Republic of Venezuela') {i.stat = 'Venezuela'};        
    })        
}

readXlsxFile('../data/data.xlsx', { schema }).then((rows , errors) => {
    console.log(errors);
    sjednotStaty(rows.rows);
    jeStatvgeoJSON(rows.rows);
    fs.writeFileSync('../data/data.json', JSON.stringify(rows.rows));
});