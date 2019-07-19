// připojit v JSONu ke každé zemi data o populaci

const fs = require('fs');
const readXlsxFile = require('read-excel-file/node');

const data = JSON.parse(fs.readFileSync('../data/data.json'));

const schema = {
    'Country Name' : {
        prop : 'stat',
        type : String 
    },
    'Country Code' : {
        prop : 'code',
        type : String 
    },
    '2017' : {
        prop : 'pop014',
        type : Number
    },    
};

readXlsxFile('../data/pop014male.xlsx', { schema }).then((rows , errors) => {
    console.log(errors);
    console.log(rows.rows);
});