const desetinnaCarka = cislo => cislo.toString().replace('.', ',');

export const zlidstiCislo = (cislo) => {
  if (cislo > 999999999) {
    if (window.innerWidth < 700) { return desetinnaCarka(`${(cislo / 1000000000).toFixed(2)} mld.`); }
    return desetinnaCarka(`${(cislo / 1000000000).toFixed(2)} miliardy`);
  } if (cislo > 999999) {
    if (window.innerWidth < 700) { return desetinnaCarka(`${(cislo / 1000000).toFixed(2)} mil.`); }
    return desetinnaCarka(`${(cislo / 1000000).toFixed(2)} milionů`);
  } if (cislo > 999) {
    if (window.innerWidth < 700) { return desetinnaCarka(`${(cislo / 1000).toFixed(2)} tis.`); }
    return desetinnaCarka(`${(cislo / 1000).toFixed(2)} tisíc`);
  } return desetinnaCarka(cislo);
};
