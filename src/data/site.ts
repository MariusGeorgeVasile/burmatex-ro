// Central configuration. Change contact details here; they propagate across the site.
export const site = {
  name: "Burmatex România",
  domain: "https://burmatex.ro",
  email: "office@insightfloor.ro",
  // Leave empty to hide the phone across the site.
  phone: "+40728082778",
  phoneDisplay: "0728.082.778",
  address: "",
  showroomNote: "Mostre și consultanță, cu programare",
  manufacturerUrl: "https://www.burmatex.co.uk",
  dealer: {
    name: "InsightFLOOR",
    url: "https://insightfloor.ro",
    statement: "Mocheta Burmatex® este distribuită în România prin InsightFLOOR, dealer oficial Burmatex®.",
  },
};

export const sources = {
  history: "https://www.burmatex.co.uk/history/",
  about: "https://www.burmatex.co.uk/about-us/",
  principles: "https://www.burmatex.co.uk/sustainability-principles/",
  carbon: "https://www.burmatex.co.uk/journey-to-net-zero/",
  takeBack: "https://www.burmatex.co.uk/take-back-service/",
  epd: "https://www.burmatex.co.uk/epd-environmental-product-declaration/",
  downloads: "https://www.burmatex.co.uk/downloads/",
  technical: "https://www.burmatex.co.uk/technical/",
};

export const regions = [
  { name: "București – Ilfov", counties: ["București", "Ilfov"] },
  { name: "Muntenia", counties: ["Argeș", "Călărași", "Dâmbovița", "Giurgiu", "Ialomița", "Prahova", "Teleorman", "Buzău", "Brăila"] },
  { name: "Oltenia", counties: ["Dolj", "Gorj", "Mehedinți", "Olt", "Vâlcea"] },
  { name: "Dobrogea", counties: ["Constanța", "Tulcea"] },
  { name: "Moldova", counties: ["Bacău", "Botoșani", "Galați", "Iași", "Neamț", "Suceava", "Vaslui", "Vrancea"] },
  { name: "Transilvania", counties: ["Alba", "Bistrița-Năsăud", "Brașov", "Cluj", "Covasna", "Harghita", "Hunedoara", "Mureș", "Sălaj", "Sibiu"] },
  { name: "Banat", counties: ["Arad", "Caraș-Severin", "Timiș"] },
  { name: "Crișana – Maramureș", counties: ["Bihor", "Maramureș", "Satu Mare"] },
] as const;

export const counties = regions.flatMap(region => region.counties).sort((a, b) => a.localeCompare(b, "ro"));

export const sectors = [
  ["Birouri", "Dale modulare pentru zone open-space, săli de ședință și circulații."],
  ["Școli și grădinițe", "Fibră presată și dale robuste, ușor de înlocuit punctual."],
  ["Universități și cămine", "Trafic intens, întreținere previzibilă, buget controlat."],
  ["Clădiri publice", "Documentație tehnică și de mediu pentru caiete de sarcini."],
  ["Hoteluri și agrement", "Culoare și textură pentru spații cu trafic continuu."],
  ["Retail", "Zone de intrare, showroom-uri și spații comerciale."],
  ["Rezidențial", "Dale și lamele pentru locuințe, mansarde și birouri acasă."],
  ["Intrări în clădiri", "Covoare de intrare care opresc murdăria la ușă."],
  ["Industrie și producție", "Fibră presată în dale și rulou, covoare de intrare și dale barieră pentru birourile, vestiarele, cantinele și coridoarele din fabrici și uzine."],
] as const;
