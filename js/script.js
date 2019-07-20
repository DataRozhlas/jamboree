import "./byeie"; // loučíme se s IE
import { sectiSkauty } from './helperFunctions'
import { kresliMapu } from './kresliMapu'


fetch('https://data.irozhlas.cz/jamboree/data/data.json')
  .then(response => response.json()) // nebo .text(), když to není json
  .then(data => {
    // připrav data, podle kterých se vybarví mapa
    const unikatniKody = [...new Set(data.map(x => x.kod))];
    const skautiVZemich = []; 
    unikatniKody.forEach(kod => {
      const soucet = data
        .filter(x => x.kod === kod)
        .reduce((acc, curr) => {
          if (!curr.celkem) return acc + 0;
          return acc + curr.celkem;
        }, 0);
      skautiVZemich.push({ kod: kod, value: soucet });      
    });
    console.log(skautiVZemich);
    kresliMapu(skautiVZemich);    
  });
