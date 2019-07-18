import "./byeie"; // loučíme se s IE
import Highmaps from 'highcharts/highmaps';

fetch('https://data.irozhlas.cz/jamboree/data/data.json')
  .then(response => response.json()) // nebo .text(), když to není json
  .then(data => {
    console.log(data);
  });
