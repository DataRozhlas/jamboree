import "./byeie"; // loučíme se s IE
import Highcharts from 'highcharts/highmaps';
import map from '@highcharts/map-collection/custom/world-palestine.geo.json';

fetch('https://data.irozhlas.cz/jamboree/data/data.json')
  .then(response => response.json()) // nebo .text(), když to není json
  .then(data => {
    console.log(Highcharts, map);
  });
