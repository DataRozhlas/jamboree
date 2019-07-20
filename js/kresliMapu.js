import Highcharts from 'highcharts/highmaps';
import map from '@highcharts/map-collection/custom/world-palestine-highres.geo.json';

export const kresliMapu = data => {
    Highcharts.setOptions({
        lang: {
          decimalPoint: ',',
          numericSymbols: [' tis', ' mil', 'mld', 'T', 'P', 'E'],
        },
      });
    
    Highcharts.mapChart('mapa', {      
      title: {
          text: 'Kde je nejvíc registrovaných skautů?'
      },
      subtitle: {
          text: 'Země jsou vybarvené podle počtu členů Světové organizace skautského hnutí podle posledního dostupného sčítání'
      },
      credits: {
        text: 'Zdroje dat: Světová organizace skautského hnutí, Junák - český skaut, Světová banka, Natural Earth',
        mapText: '',
      },
      mapNavigation: {
          enabled: true,
          buttonOptions: {
              verticalAlign: 'bottom'
          }
      },
      legend: {
        title: {
            text: 'Počet skautů při posledním sčítání'
        }
      },
      colorAxis: {
          type: 'logarithmic',
          gridLineWidth: 2,
          gridLineColor: 'white',
          minorTickInterval: 1,          
          minorGridLineColor: 'white',
          tickLength: 0,
      },
      
      series: [{
          mapData: map,
          joinBy: ['iso-a3', 'kod'],
          data: data,
          borderColor: 'black',
          borderWidth: 0.2,
          name: 'Počet skautů',
          states: {
              hover: {
                  color: '#BADA55'
              }
          },
          dataLabels: {
              enabled: true,
              format: '{point.options.name}'
          },
          point: {
              events: {
                  click: function() {console.log(this)}
              },
          }
      }]
  });
};