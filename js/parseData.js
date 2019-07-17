const readXlsxFile = require('read-excel-file/node');

const schema = {
    'Countries::Country name option 1 E' : {
        prop : 'stat',
        type : String 
    }
};

console.log( {schema} );

readXlsxFile('../data/data.xlsx', { schema }).then((rows) => {
    console.log(rows);
});