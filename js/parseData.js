const fs = require('fs');
const readXlsxFile = require('read-excel-file/node');

const schema = {
    'Countries::Country name option 1 E' : {
        prop : 'stat',
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

readXlsxFile('../data/data.xlsx', { schema }).then((rows , errors) => {
    console.log(errors);
    fs.writeFileSync('../data/data.json', JSON.stringify(rows));
});