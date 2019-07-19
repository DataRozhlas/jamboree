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
    'Organisations::Organization Name EN' : {
        prop : 'organizace',
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

const slovnicek = [{"stat":"Algeria","cs":"Alžírsko"},
{"stat":"Angola","cs":"Angola"},
{"stat":"Argentina","cs":"Argentina"},
{"stat":"Armenia","cs":"Arménie"},
{"stat":"Netherlands","cs":"Nizozemí"},
{"stat":"Australia","cs":"Austrálie"},
{"stat":"Austria","cs":"Rakousko"},
{"stat":"Azerbaijan","cs":"Ázerbajdžán"},
{"stat":"The Bahamas","cs":"Bahamy"},
{"stat":"Bahrain","cs":"Bahrain"},
{"stat":"Bangladesh","cs":"Bangladéš"},
{"stat":"Barbados","cs":"Barbados"},
{"stat":"Belarus","cs":"Bělorusko"},
{"stat":"Belgium","cs":"Belgie"},
{"stat":"Belize","cs":"Belize"},
{"stat":"Benin","cs":"Benin"},
{"stat":"Bhutan","cs":"Bhútán"},
{"stat":"Bolivia","cs":"Bolívie"},
{"stat":"Bosnia and Herzegovina","cs":"Bosna a Hercegovina"},
{"stat":"Botswana","cs":"Botswana"},
{"stat":"Brazil","cs":"Brazílie"},
{"stat":"Brunei","cs":"Brunej"},
{"stat":"Bulgaria","cs":"Bulharsko"},
{"stat":"Burkina Faso","cs":"Burkina Faso"},
{"stat":"Burundi","cs":"Burundi"},
{"stat":"Cape Verde","cs":"Kapverdy"},
{"stat":"Cambodia","cs":"Kambodža"},
{"stat":"Cameroon","cs":"Kamerun"},
{"stat":"Canada","cs":"Kanada"},
{"stat":"Chad","cs":"Čad"},
{"stat":"Chile","cs":"Chile"},
{"stat":"China","cs":"Čína"},
{"stat":"Colombia","cs":"Kolumbie"},
{"stat":"Comoros","cs":"Komory"},
{"stat":"Democratic Republic of the Congo","cs":"Demokratická republika Kongo"},
{"stat":"Costa Rica","cs":"Kostarika"},
{"stat":"Ivory Coast","cs":"Pobřeží slonoviny"},
{"stat":"Croatia","cs":"Chorvatsko"},
{"stat":"Cyprus","cs":"Kypr"},
{"stat":"Czech Republic","cs":"Česká republika"},
{"stat":"Denmark","cs":"Dánsko"},
{"stat":"Dominica","cs":"Dominika"},
{"stat":"Dominican Republic","cs":"Dominikánská republika"},
{"stat":"Ecuador","cs":"Ekvádor"},
{"stat":"Egypt","cs":"Egypt"},
{"stat":"El Salvador","cs":"El Salvador"},
{"stat":"Estonia","cs":"Estonsko"},
{"stat":"Ethiopia","cs":"Etiopie"},
{"stat":"Fiji","cs":"Fiji"},
{"stat":"Finland","cs":"Finsko"},
{"stat":"France","cs":"Francie"},
{"stat":"Gabon","cs":"Gabon"},
{"stat":"Gambia","cs":"Gambie"},
{"stat":"Georgia","cs":"Gruzie"},
{"stat":"Germany","cs":"Německo"},
{"stat":"Ghana","cs":"Ghana"},
{"stat":"Greece","cs":"Řecko"},
{"stat":"Grenada","cs":"Grenada"},
{"stat":"Guatemala","cs":"Guatemala"},
{"stat":"Guinea","cs":"Guinea"},
{"stat":"Guinea Bissau","cs":"Guinea Bissau"},
{"stat":"Guyana","cs":"Guyana"},
{"stat":"Haiti","cs":"Haiti"},
{"stat":"Honduras","cs":"Honduras"},
{"stat":"Hungary","cs":"Maďarsko"},
{"stat":"Iceland","cs":"Island"},
{"stat":"India","cs":"Indie"},
{"stat":"Indonesia","cs":"Indonésie"},
{"stat":"Iraq","cs":"Irák"},
{"stat":"Ireland","cs":"Irsko"},
{"stat":"Israel","cs":"Izrael"},
{"stat":"Italy","cs":"Itálie"},
{"stat":"Jamaica","cs":"Jamajka"},
{"stat":"Japan","cs":"Japonsko"},
{"stat":"Jordan","cs":"Jordánsko"},
{"stat":"Kazakhstan","cs":"Kazachstán"},
{"stat":"Kenya","cs":"Keňa"},
{"stat":"Kiribati","cs":"Kiribati"},
{"stat":"South Korea","cs":"Jižní Korea"},
{"stat":"Kuwait","cs":"Kuvajt"},
{"stat":"Latvia","cs":"Lotyšsko"},
{"stat":"Lebanon","cs":"Libanon"},
{"stat":"Lesotho","cs":"Lesotho"},
{"stat":"Liberia","cs":"Libérie"},
{"stat":"Libya","cs":"Libye"},
{"stat":"Liechtenstein","cs":"Lichtenštejnsko"},
{"stat":"Lithuania","cs":"Litva"},
{"stat":"Luxembourg","cs":"Lucembursko"},
{"stat":"Macedonia","cs":"Makedonie"},
{"stat":"Madagascar","cs":"Madagaskar"},
{"stat":"Malawi","cs":"Malawi"},
{"stat":"Malaysia","cs":"Malajsie"},
{"stat":"Maldives","cs":"Maledivy"},
{"stat":"Malta","cs":"Malta"},
{"stat":"Mauritania","cs":"Mauritánie"},
{"stat":"Mauritius","cs":"Mauricius"},
{"stat":"Mexico","cs":"Mexiko"},
{"stat":"Moldova","cs":"Moldavsko"},
{"stat":"Monaco","cs":"Monako"},
{"stat":"Mongolia","cs":"Mongolsko"},
{"stat":"Montenegro","cs":"Černá Hora"},
{"stat":"Morocco","cs":"Maroko"},
{"stat":"Mozambique","cs":"Mosambik"},
{"stat":"Myanmar","cs":"Myanmar"},
{"stat":"Namibia","cs":"Namibie"},
{"stat":"Nepal","cs":"Nepál"},
{"stat":"New Zealand","cs":"Nový Zéland"},
{"stat":"Nicaragua","cs":"Nikaragua"},
{"stat":"Niger","cs":"Niger"},
{"stat":"Nigeria","cs":"Nigérie"},
{"stat":"Norway","cs":"Norsko"},
{"stat":"Oman","cs":"Omán"},
{"stat":"Pakistan","cs":"Pákistán"},
{"stat":"West Bank","cs":"Palestina"},
{"stat":"Panama","cs":"Panama"},
{"stat":"Papua New Guinea","cs":"Papua-Nová Guinea"},
{"stat":"Paraguay","cs":"Paraguay"},
{"stat":"Peru","cs":"Peru"},
{"stat":"Philippines","cs":"Filipíny"},
{"stat":"Poland","cs":"Polsko"},
{"stat":"Portugal","cs":"Portugalsko"},
{"stat":"Qatar","cs":"Katar"},
{"stat":"Romania","cs":"Rumunsko"},
{"stat":"Russia","cs":"Rusko"},
{"stat":"Rwanda","cs":"Rwanda"},
{"stat":"Saint Lucia","cs":"Svatá Lucie"},
{"stat":"Saint Vincent and the Grenadines","cs":"Svatý Vincenc a Grenadiny"},
{"stat":"San Marino","cs":"San Marino"},
{"stat":"Sao Tome and Principe","cs":"Svatý Tomáš a Princův ostrov"},
{"stat":"Saudi Arabia","cs":"Saudská arábie"},
{"stat":"Senegal","cs":"Senegal"},
{"stat":"Republic of Serbia","cs":"Srbsko"},
{"stat":"Seychelles","cs":"Seychely"},
{"stat":"Sierra Leone","cs":"Sierra Leone"},
{"stat":"Singapore","cs":"Singapur"},
{"stat":"Slovakia","cs":"Slovensko"},
{"stat":"Slovenia","cs":"Slovinsko"},
{"stat":"South Africa","cs":"Jižní Afrika"},
{"stat":"South Sudan","cs":"Jižní Súdán"},
{"stat":"Spain","cs":"Španělsko"},
{"stat":"Sri Lanka","cs":"Srí Lanka"},
{"stat":"Sudan","cs":"Súdán"},
{"stat":"Suriname","cs":"Surinam"},
{"stat":"Swaziland","cs":"Svazijsko"},
{"stat":"Sweden","cs":"Švédsko"},
{"stat":"Switzerland","cs":"Švýcarsko"},
{"stat":"Syria","cs":"Sýrie"},
{"stat":"Tajikistan","cs":"Tádžikistán"},
{"stat":"United Republic of Tanzania","cs":"Tanzánie"},
{"stat":"Thailand","cs":"Thajsko"},
{"stat":"East Timor","cs":"Východní Timor"},
{"stat":"Togo","cs":"Togo"},
{"stat":"Trinidad and Tobago","cs":"Trinidad a Tobago"},
{"stat":"Tunisia","cs":"Tunisko"},
{"stat":"Turkey","cs":"Turecko"},
{"stat":"Uganda","cs":"Uganda"},
{"stat":"Ukraine","cs":"Ukrajina"},
{"stat":"United Arab Emirates","cs":"Spojené arabské emiráty"},
{"stat":"United Kingdom","cs":"Spojené království"},
{"stat":"United States of America","cs":"Spojené státy americké"},
{"stat":"Uruguay","cs":"Uruguay"},
{"stat":"Venezuela","cs":"Venezuela"},
{"stat":"Yemen","cs":"Jemen"},
{"stat":"Zambia","cs":"Zambie"},
{"stat":"Zimbabwe","cs":"Zimbabwe"}];

const mapa = JSON.parse(fs.readFileSync('../node_modules/@highcharts/map-collection/custom/world-palestine.geo.json'));

const jeStatvgeoJSON = staty => {
    const nazvyStatuvMape = [];
    mapa.features.forEach(stat => nazvyStatuvMape.push(stat.properties.name));
    staty.forEach(i => {
        if (!nazvyStatuvMape.includes(i.stat)) {console.log(i.stat)};
    });
};

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
        if (i.stat === 'Scouts of China') {i.stat = 'China'};        
    })        
};

readXlsxFile('../data/data.xlsx', { schema }).then((rows , errors) => {
    console.log(errors);
    sjednotStaty(rows.rows);
    jeStatvgeoJSON(rows.rows);
    const output = rows.rows.map(i => {
        const preklad = slovnicek.find(j => j.stat === i.stat);
        const kod = mapa.features.find(k => k.properties.name === i.stat);
        return ({...i, cs: preklad.cs, kod: kod.properties['iso-a3']});
    });
    fs.writeFileSync('../data/data.json', JSON.stringify(output));
});