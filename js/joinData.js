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

readXlsxFile('../data/pop014male.xlsx', { schema }).then((males , errors) => {
    console.log(errors);
    readXlsxFile('../data/pop014female.xlsx', { schema }).then((females , errors) => {
        console.log(errors);
        const output = data.map(i => {
            let chlapci = males.rows.find(j => {
                if (i.kod === 'WEB') return j.code === 'PSE'; 
                return j.code === i.kod;
            });
            chlapci = chlapci.pop014 ? chlapci.pop014 : null; 
            let divky = females.rows.find(j => {
                if (i.kod === 'WEB') return j.code === 'PSE'; 
                return j.code === i.kod;
            });
            divky = divky.pop014 ? divky.pop014 : null;
            return ({...i, popm: chlapci, popf: divky});
        });
        fs.writeFileSync('../data/data.json', JSON.stringify(output));
    });    
});