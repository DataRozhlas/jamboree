import Highcharts from 'highcharts/highmaps';
import map from '@highcharts/map-collection/custom/world-palestine.geo.json';

export const kresliMapu = data => {
    Highcharts.mapChart('mapa', {
      
      title: {
          text: 'Highmaps basic demo'
      },
  
      subtitle: {
          text: 'podtit'
      },
  
      mapNavigation: {
          enabled: true,
          buttonOptions: {
              verticalAlign: 'bottom'
          }
      },
  
      colorAxis: {
          min: 1,
          max: 22000000,
          type: 'logarithmic',
      },
  
      series: [{
          mapData: map,
          joinBy: ['iso-a3', 'kod'],
          data: data,
          borderColor: 'black',
          borderWidth: 0.2,
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