import "./byeie"; // loučíme se s IE
import { sectiSkauty } from './helperFunctions'
import { kresliMapu } from './kresliMapu'


fetch('https://data.irozhlas.cz/jamboree/data/data.json')
  .then(response => response.json()) // nebo .text(), když to není json
  .then(data => {
    const unikatniKody = [...new Set(data.map(x => x.kod))];
    unikatniKody.forEach(kod => {
      console.log(data.filter(x => x.kod === kod));
    });
    kresliMapu();
    
  });
