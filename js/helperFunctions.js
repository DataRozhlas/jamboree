export const desetinnaCarka = cislo => cislo.toString().replace('.', ',');

export const zlidstiCislo = (cislo) => {
  if (cislo > 999999) {
    if (window.innerWidth < 700) { return desetinnaCarka(`${(cislo / 1000000).toFixed(2)} mil.`); }
    return desetinnaCarka(`${(cislo / 1000000).toFixed(2)} milionu`);
  } else if (cislo > 999) {
    if (window.innerWidth < 700) { return desetinnaCarka(`${(cislo / 1000).toFixed(2)} tis.`); }
    return desetinnaCarka(`${(cislo / 1000).toFixed(2)} tisíce`);
  }
  return desetinnaCarka(cislo);
};

export const vypisOrganizace = (vybranaData) => {
  let vysledek = '';
  for (let i = 0; i < vybranaData.length; i++) {
    vysledek += vybranaData[i].organizace;
    if (vybranaData.length > 1 && i < vybranaData.length - 1) {
      vysledek += ', ';
    }
  }
  return vysledek;
};

export const zjistiRokScitani = (vybranaData) => {
  let vysledek = vybranaData.map(x => x.rokScitani);
  vysledek = vysledek.filter(x => x !== undefined);
  vysledek = Math.max(vysledek);
  if (isNaN(vysledek)) vysledek = vybranaData[0].rokScitani;
  return vysledek;
};

export const formatNumber = num => desetinnaCarka(num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '));

export const celkemSkautu = (vybranaData, polozka) => (
  vybranaData.reduce((acc, curr) => {
    if (!curr[polozka]) return acc + 0;
    return acc + curr[polozka];
  }, 0)
);
