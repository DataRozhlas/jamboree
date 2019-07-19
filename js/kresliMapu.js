import Highcharts from 'highcharts/highmaps';
import map from '@highcharts/map-collection/custom/world-palestine.geo.json';

export const kresliMapu = data => {
    Highcharts.mapChart('mapa', {
      chart: {
          map: 'custom/world-palestine'
      },
  
      title: {
          text: 'Highmaps basic demo'
      },
  
      subtitle: {
          text: 'Source map: <a href="http://code.highcharts.com/mapdata/custom/world-palestine-highres.js">World with Palestine areas, high resolution</a>'
      },
  
      mapNavigation: {
          enabled: true,
          buttonOptions: {
              verticalAlign: 'bottom'
          }
      },
  
      colorAxis: {
          min: 0
      },
  
      series: [{
          data: data,
          name: 'Random data',
          states: {
              hover: {
                  color: '#BADA55'
              }
          },
          dataLabels: {
              enabled: true,
              format: '{point.name}'
          }
      }]
  });
  };