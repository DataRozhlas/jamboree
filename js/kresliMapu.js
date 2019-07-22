import Highcharts from 'highcharts/highmaps';
import map from '@highcharts/map-collection/custom/world-palestine-highres.geo.json';
import {
  zlidstiCislo, vypisOrganizace, zjistiRokScitani, formatNumber, celkemSkautu, desetinnaCarka 
} from './helperFunctions';

export const kresliMapu = (data, zdrojovaData) => {
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
      text: 'Země jsou vybarvené podle počtu členů Světové organizace skautského hnutí na základě posledního dostupného sčítání'
    },
    tooltip: {
      formatter: function () {
        return `<strong>${this.point.options.name}:</strong> celkem ${zlidstiCislo(this.point.options.value)} skautů <br> <em>kliknutím zobrazíte podrobnosti</em>`;
      }
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
          click: function info() {
            const informace = document.querySelector('#informace');
            const vybranaData = zdrojovaData.filter(x => x.kod === this.kod);
            informace.innerHTML = '';
            informace.innerHTML += `<h2>${this.options.name}</h2>`;
            informace.innerHTML += `<span>${vypisOrganizace(vybranaData)}</span></br>`;
            informace.innerHTML += `<strong>Celkem členů (${zjistiRokScitani(vybranaData)}):</strong> ${formatNumber(this.options.value)}</br>`;
            if (celkemSkautu(vybranaData, 'celkemMinule') !== this.options.value) {
              informace.innerHTML += `to je o ${desetinnaCarka(Math.abs(((this.options.value / celkemSkautu(vybranaData, 'celkemMinule') * 100) - 100).toFixed(2)))} % ${this.options.value > celkemSkautu(vybranaData, 'celkemMinule') ? 'víc' : 'míň'} než při předchozím sčítání</br>`
            }
            const skautido14 = celkemSkautu(vybranaData, 'benjaminciKluci') + celkemSkautu(vybranaData, 'vlcata') + celkemSkautu(vybranaData, 'skauti') + celkemSkautu(vybranaData, 'starsiSkauti');
            const skautkydo14 = celkemSkautu(vybranaData, 'benjaminciHolky') + celkemSkautu(vybranaData, 'svetlusky') + celkemSkautu(vybranaData, 'skautky') + celkemSkautu(vybranaData, 'starsiSkautky');
            if (vybranaData[0].popm) {
              informace.innerHTML += `Benjamínci, vlčata a skauti tvoří <strong>${desetinnaCarka((skautido14 / vybranaData[0].popm * 100).toFixed(2))} % populace chlapců </strong> do 14 let.</br>`
            }
            if (vybranaData[0].popm) {
              informace.innerHTML += `Benjamínci holky, světlušky a skautky tvoří <strong>${desetinnaCarka((skautkydo14 / vybranaData[0].popf * 100).toFixed(2))} % populace dívek </strong> do 14 let.`
            }
          }
        },
      }
    }]
  });
};

export default kresliMapu;
