export type RamEquipmentIcon = "gauge" | "cpu" | "armchair" | "shield" | "truck";

export type RamEquipmentGroup = {
  icon: RamEquipmentIcon;
  title: string;
  items: string[];
  note?: string;
};

export type RamInfoPage = {
  slug: string;
  model: string;
  trim: string;
  headline: string;
  intro: string;
  whatTitle: string;
  whatParagraphs: string[];
  whatBullets: string[];
  whatClosing: string;
  performanceIntro: string;
  performanceGroups: Array<{ title: string; items: string[] }>;
  conclusion: string;
  equipmentTitle: string;
  equipmentGroups: RamEquipmentGroup[];
  equipmentNote: string;
  ctaTitle: string;
  ctaText: string;
  images: {
    heroTruck: string;
    gallery: string;
    cta: string;
  };
};

const sharedImages = {
  heroTruck: "/dodge1.png",
  gallery: "/dodge2.png",
  cta: "/dodge5.png",
};

const commonSafety = [
  "Backkamera",
  "Parkeringssensorer fram och bak",
  "Adaptiv farthållare",
  "Filhållningsassistans & filvarning",
  "Dödavinkelövervakning",
];

export const ram1500Pages: RamInfoPage[] = [
  {
    slug: "ram-1500-tradesman",
    model: "RAM 1500",
    trim: "Tradesman",
    headline: "Det smarta valet för arbete och värde",
    intro:
      "RAM 1500 Tradesman är pickupen för den som sätter tillförlitlighet, kraft och funktionalitet före lyx. Det här är ingen truck för att visa upp sig, utan för människor som varje dag måste kunna lita på sitt fordon — oavsett om det är på byggarbetsplatsen, på väg till kunder eller under tunga transportuppdrag.",
    whatTitle: "Vad är RAM 1500 Tradesman?",
    whatParagraphs: [
      "Tradesman är instegsmodellen av RAM 1500, utformad med ett tydligt fokus: maximal funktionalitet till ett konkurrenskraftigt pris.",
      "Där andra versioner satsar på lyx och teknik väljer Tradesman medvetet enkelhet, hållbarhet och användarvänlighet. Tänk på:",
    ],
    whatBullets: [
      "Robusta material (vinyl- eller tygklädsel)",
      "Enkel men pålitlig teknik",
      "Stålfälgar och praktisk finish",
      "Fokus på arbetskapacitet istället för lyxfunktioner",
    ],
    whatClosing: "Detta gör den idealisk för yrkesverksamma som verkligen använder sin truck.",
    performanceIntro:
      "RAM 1500 Tradesman levererar den kraft som krävs för tungt arbete, även under skandinaviska förhållanden.",
    performanceGroups: [
      {
        title: "Motorer och effekt",
        items: [
          "3,6L Pentastar V6 (305 hk) – effektiv och lämplig för daglig användning",
          "5,7L HEMI V8 (395 hk) – maximal kraft för tung belastning",
        ],
      },
      {
        title: "Kapacitet",
        items: ["Dragkapacitet: upp till ca 5,2–5,7 ton", "Lastkapacitet: upp till ca 1 000 kg"],
      },
      {
        title: "Praktiska fördelar",
        items: [
          "Tillgänglig med 4x4 (avgörande för snö och ojämna vägar)",
          "Stor flak för verktyg och material",
          "Rymlig kupé för flera passagerare",
        ],
      },
    ],
    conclusion:
      "En pickup som presterar utan problem i snö, lera, arbetsmiljöer och över långa avstånd.",
    equipmentTitle: "Standardutrustningslista för Tradesman",
    equipmentGroups: [
      {
        icon: "gauge",
        title: "Motor och prestanda",
        items: [
          "3,6L V6-motor (ca 305 hk) med mildhybridsystem",
          "8-stegad automatisk växellåda",
          "Bakhjulsdrift (4x4 som tillval)",
          "Hög lastkapacitet (ca 1 000+ kg beroende på konfiguration)",
        ],
        note: "Viktigt: även basversionen är tillräckligt kraftfull för professionellt bruk.",
      },
      {
        icon: "cpu",
        title: "Teknik & infotainment",
        items: [
          "8,4-tums infotainmentsystem med pekskärm",
          "Apple CarPlay & Android Auto",
          "AM/FM-radio + 6 högtalare",
          "USB-anslutningar och mediastyrning",
        ],
      },
      {
        icon: "armchair",
        title: "Interiör & komfort",
        items: [
          "Vinyl- eller tygklädsel (slitstark och praktisk)",
          "40/20/40-säte (upp till 6 sittplatser)",
          "Luftkonditionering (enkelzon)",
          "Keyless entry & start",
          "Farthållare med reglage på ratten",
          "Manuell luftkonditionering",
        ],
      },
      { icon: "shield", title: "Säkerhet & förarassistans", items: commonSafety },
      {
        icon: "truck",
        title: "Exteriör & praktiska funktioner",
        items: ["18-tums stålfälgar", "Uppvärmda ytterbackspeglar", "Reservhjul under bilen"],
      },
    ],
    equipmentNote:
      "Detta är endast standardutrustningen för Tradesman – många utföranden har dock fler funktioner än de som anges ovan.",
    ctaTitle: "Byggd för att jobba. Byggd för att hålla.",
    ctaText:
      "RAM 1500 Tradesman är valet för dig som behöver en pålitlig partner i vardagen. Inga kompromisser på det som räknas – kraft, kapacitet och tillförlitlighet.",
    images: sharedImages,
  },
  {
    slug: "ram-1500-big-horn",
    model: "RAM 1500",
    trim: "Big Horn",
    headline: "Den perfekta balansen mellan komfort och kapacitet",
    intro:
      "RAM 1500 Big Horn är pickupen för den som vill ha mer än bara rå styrka. Den kombinerar robust prestanda med extra komfort och modern teknik, vilket gör den lika lämpad för arbete som för längre resor. Med sin uppgraderade interiör och smarta infotainmentsystem erbjuder Big Horn en bekväm och mångsidig körupplevelse – utan att kompromissa med funktionalitet.",
    whatTitle: "Vad är RAM 1500 Big Horn?",
    whatParagraphs: [
      "Big Horn är en utrustningsnivå av RAM 1500, utformad med ett tydligt fokus: en stark kombination av komfort, design och funktionalitet.",
      "Denna version riktar sig till förare som vill ha en pickup som förenar kraft, användarvänlighet och moderna funktioner. Big Horn erbjuder en balanserad körupplevelse och passar för många olika användningsområden. Till exempel:",
    ],
    whatBullets: [
      "Bekväm interiör med slitstarka tygklädslar",
      "Modern teknik som Apple CarPlay och Android Auto",
      "Stilrena kromdetaljer och ett välvårdat yttre",
      "Större fälgar för ett kraftfullt utseende",
      "Praktiska funktioner som underlättar vardagsanvändning",
    ],
    whatClosing:
      "Detta gör den idealisk för förare som söker en mångsidig pickup som passar både för arbete och privat bruk.",
    performanceIntro:
      "RAM 1500 Big Horn levererar en stark kombination av kraft, komfort och kapacitet, anpassad för både arbete och vardagskörning i varierande förhållanden.",
    performanceGroups: [
      {
        title: "Motorer och effekt",
        items: [
          "3,6L V6 eTorque (305 hk) – effektiv och välbalanserad för daglig användning",
          "5,7L HEMI V8 (395 hk) – hög dragkraft och extra prestanda vid tyngre belastning",
        ],
      },
      {
        title: "Kapacitet",
        items: [
          "Dragkapacitet: upp till ca 5,2–5,7 ton (beroende på konfiguration)",
          "Lastkapacitet: upp till ca 1 000 kg",
        ],
      },
      {
        title: "Praktiska fördelar",
        items: [
          "Finns med 4x4 – stabil prestanda på snö, grus och ojämna vägar",
          "Förbättrad komfort i kupén med mer genomarbetad interiör",
          "Modern infotainment med Apple CarPlay och Android Auto",
          "Rymligt flak för verktyg, material och fritidsutrustning",
          "Bekväm kupé för både förare och passagerare",
        ],
      },
    ],
    conclusion:
      "En pickup som kombinerar styrka och komfort, och som fungerar lika bra i arbetsmiljöer som för daglig körning och längre resor.",
    equipmentTitle: "Standardutrustningslista för RAM 1500 Big Horn",
    equipmentGroups: [
      {
        icon: "gauge",
        title: "Motor och prestanda",
        items: [
          "3,6L V6-motor (ca 305 hk) med mildhybridsystem",
          "8-stegad automatisk växellåda",
          "Bakhjulsdrift (4x4 som tillval)",
          "Hög lastkapacitet (ca 1 000+ kg beroende på konfiguration)",
        ],
        note:
          "Viktigt: Big Horn kombinerar robust prestanda med extra komfort och är väl anpassad för både arbete och vardagskörning.",
      },
      {
        icon: "cpu",
        title: "Teknik & infotainment",
        items: [
          "8,4-tums infotainmentsystem med pekskärm",
          "Apple CarPlay & Android Auto",
          "AM/FM-radio + 6 högtalare",
          "USB-anslutningar och mediastyrning",
          "Förbättrade användargränssnitt och snabbare systemrespons",
        ],
      },
      {
        icon: "armchair",
        title: "Interiör & komfort",
        items: [
          "Uppgraderad tygklädsel med mer komfortfokus",
          "40/20/40-säte (upp till 6 sittplatser)",
          "Luftkonditionering (enkelzon)",
          "Keyless entry & start",
          "Farthållare med reglage på ratten",
          "Extra förvaringslösningar och förbättrad interiörfinish",
        ],
      },
      { icon: "shield", title: "Säkerhet & förarassistans", items: commonSafety },
      {
        icon: "truck",
        title: "Exteriör & praktiska funktioner",
        items: [
          "18-tums aluminium- eller designfälgar (beroende på konfiguration)",
          "Uppvärmda ytterbackspeglar",
          "Mer genomarbetad exteriördesign med chrome accenter",
          "Reservhjul monterat under bilen",
        ],
      },
    ],
    equipmentNote:
      "Big Horn bygger vidare på RAM 1500-grunden med mer komfort, stark vardagsfunktion och ett mer genomarbetat uttryck.",
    ctaTitle: "Komfort när du vill. Kapacitet när du behöver.",
    ctaText:
      "RAM 1500 Big Horn är ett starkt val för dig som vill kombinera arbetskapacitet med en bekvämare och mer mångsidig vardagsbil.",
    images: { heroTruck: "/dodge3.png", gallery: "/dodge4.png", cta: "/dodge5.png" },
  },
  {
    slug: "ram-1500-laramie",
    model: "RAM 1500",
    trim: "Laramie",
    headline: "Den ultimata kombinationen av lyx och prestanda",
    intro:
      "RAM 1500 Laramie är pickupen för den som vill ta steget upp i komfort utan att ge avkall på styrka. Den förenar kraftfull prestanda med en exklusiv interiör och avancerad teknik, vilket gör den perfekt för både arbete och vardag. Med sina premium-material, uppgraderade ljudsystem och intuitiva infotainmentlösningar levererar Laramie en förstklassig körupplevelse – där varje detalj är utformad för maximal komfort och funktionalitet.",
    whatTitle: "Vad är RAM 1500 Laramie?",
    whatParagraphs: [
      "Laramie är en högre utrustningsnivå av RAM 1500, utvecklad med ett tydligt fokus: att kombinera premiumkomfort med kraftfull prestanda och avancerad teknik.",
      "Denna version riktar sig till förare som vill ha en pickup som erbjuder en mer exklusiv känsla, utan att kompromissa med funktionalitet och styrka. Laramie levererar en sofistikerad körupplevelse och passar både för arbete och längre resor med hög komfort. Till exempel:",
    ],
    whatBullets: [
      "Lyxig interiör med läderklädda säten och högkvalitativa material",
      "Avancerad teknik som Apple CarPlay, Android Auto och större infotainmentskärm",
      "Eleganta kromdetaljer och en mer premiuminriktad design",
      "Större och mer exklusiva fälgar för ett kraftfullt och stilrent utseende",
      "Komfortfunktioner som uppvärmda och ventilerade säten",
    ],
    whatClosing:
      "Detta gör den idealisk för förare som söker en pickup med extra allt – perfekt för både arbete och privat bruk, men med en tydlig premiumkänsla.",
    performanceIntro:
      "RAM 1500 Laramie levererar imponerande kraft kombinerat med hög komfort – perfekt anpassad för både krävande arbete och nordiska förhållanden.",
    performanceGroups: [
      {
        title: "Motorer och effekt",
        items: [
          "3,6L V6 (305 hk) – balanserad prestanda med fokus på effektivitet och vardagskörning",
          "5,7L HEMI V8 (395 hk) – kraftfull motor för tunga laster och maximal dragstyrka",
        ],
      },
      {
        title: "Kapacitet",
        items: [
          "Dragkapacitet: upp till ca 5,2–5,7 ton",
          "Lastkapacitet: upp till ca 800–900 kg (med fokus på komfortutrustning)",
        ],
      },
      {
        title: "Praktiska fördelar",
        items: [
          "Tillgänglig med 4x4 (optimalt för snö, is och ojämna vägar)",
          "Stor flak med smarta förvaringslösningar",
          "Lyxig och rymlig kupé med premiumkomfort för alla passagerare",
        ],
      },
    ],
    conclusion:
      "En pickup som kombinerar kraft och lyx – lika kapabel i tuffa arbetsmiljöer som bekväm under långa resor.",
    equipmentTitle: "Standardutrustningslista för RAM 1500 Laramie",
    equipmentGroups: [
      {
        icon: "gauge",
        title: "Motor och prestanda",
        items: [
          "5,7L V8 HEMI-motor (ca 395 hk) med mildhybridsystem (eTorque)",
          "8-stegad automatisk växellåda",
          "Bakhjulsdrift (4x4 som tillval)",
          "Hög drag- och lastkapacitet beroende på konfiguration",
        ],
        note:
          "Viktigt: Laramie kombinerar kraftfull prestanda med hög komfort och en mer premiuminriktad körupplevelse – perfekt för både arbete och längre resor.",
      },
      {
        icon: "cpu",
        title: "Teknik & infotainment",
        items: [
          "Större infotainmentsystem (ofta 8,4” eller 12” pekskärm)",
          "Apple CarPlay & Android Auto",
          "Premium ljudsystem (t.ex. Alpine)",
          "Flera USB-anslutningar och avancerad mediastyrning",
          "Snabbare systemrespons och förbättrat användargränssnitt",
        ],
      },
      {
        icon: "armchair",
        title: "Interiör & komfort",
        items: [
          "Läderklädsel och uppgraderade materialval",
          "Eljusterbara framstolar (ofta med minnesfunktion)",
          "Uppvärmda och ventilerade framstolar",
          "Tvåzons klimatanläggning",
          "Keyless entry & start",
          "Multifunktionsratt och förbättrad interiörfinish",
        ],
      },
      { icon: "shield", title: "Säkerhet & förarassistans", items: [...commonSafety, "Automatisk nödbromsning"] },
      {
        icon: "truck",
        title: "Exteriör & praktiska funktioner",
        items: [
          "18- eller 20-tums aluminiumfälgar (beroende på konfiguration)",
          "Kromdetaljer och mer exklusiv exteriördesign",
          "Uppvärmda ytterbackspeglar",
          "Flakbelysning och praktiska lastlösningar",
          "Reservhjul monterat under bilen",
        ],
      },
    ],
    equipmentNote:
      "Laramie är framtagen för dig som vill ha RAM 1500-kapacitet med tydlig premiumkomfort och mer avancerad teknik.",
    ctaTitle: "Premiumkomfort utan att kompromissa med kraft.",
    ctaText:
      "RAM 1500 Laramie ger en exklusiv känsla i varje detalj, samtidigt som den behåller den robusta styrka som gör RAM till en arbetspartner.",
    images: { heroTruck: "/dodge5.png", gallery: "/dodge1.png", cta: "/dodge5.png" },
  },
  {
    slug: "ram-1500-rebel",
    model: "RAM 1500",
    trim: "Rebel",
    headline: "Den perfekta balansen mellan kraft och terrängkapacitet",
    intro:
      "RAM 1500 Rebel är pickupen för den som söker äventyr utan att kompromissa med komfort. Den kombinerar imponerande prestanda med en robust design och avancerad teknik, vilket gör den idealisk för både tuff terräng och daglig körning. Med sin offroad-anpassade fjädring, distinkta styling och moderna infotainmentsystem levererar Rebel en dynamisk körupplevelse – där varje detalj är byggd för att klara utmaningar med stil och kontroll.",
    whatTitle: "Vad är RAM 1500 Rebel?",
    whatParagraphs: [
      "Rebel är en mer terränginriktad version av RAM 1500, utvecklad med ett tydligt fokus: att leverera maximal kapacitet utanför vägen i kombination med modern teknik och komfort.",
      "Denna version riktar sig till förare som vill ha en pickup som klarar tuffa miljöer och utmanande underlag, utan att ge avkall på körkomfort och funktionalitet. Rebel erbjuder en kraftfull och självsäker körupplevelse och passar lika bra för äventyr som för vardaglig användning. Till exempel:",
    ],
    whatBullets: [
      "Offroad-anpassad fjädring och upphöjd markfrigång",
      "Robust design med aggressiv front och skyddande detaljer",
      "Avancerad teknik som Apple CarPlay, Android Auto och intuitivt infotainmentsystem",
      "Terrängdäck och slitstarka fälgar för bättre grepp i svår terräng",
      "Funktionella interiördetaljer med fokus på hållbarhet och komfort",
    ],
    whatClosing:
      "Detta gör den idealisk för förare som söker en pickup byggd för äventyr – perfekt för både arbete och fritid, med tydligt fokus på terrängprestanda.",
    performanceIntro:
      "RAM 1500 Rebel levererar imponerande terrängkapacitet kombinerat med modern komfort – perfekt anpassad för både äventyr och krävande förhållanden.",
    performanceGroups: [
      {
        title: "Motorer och effekt",
        items: [
          "3,6L V6 (305 hk) – balanserad prestanda med fokus på effektivitet och smidig körning",
          "5,7L HEMI V8 (395 hk) – kraftfull motor för tuff terräng och hög dragkapacitet",
        ],
      },
      {
        title: "Kapacitet",
        items: [
          "Dragkapacitet: upp till ca 5,0–5,7 ton",
          "Lastkapacitet: upp till ca 700–800 kg (anpassad för offroad-prestanda)",
        ],
      },
      {
        title: "Praktiska fördelar",
        items: [
          "Tillgänglig med 4x4 och terränganpassade körlägen (optimalt för lera, sand och snö)",
          "Offroad-fjädring med högre markfrigång för bättre framkomlighet",
          "Robust flak med slitstarka material och smarta förvaringslösningar",
          "Bekväm och funktionell kupé med fokus på hållbarhet och stöd vid tuff körning",
        ],
      },
    ],
    conclusion:
      "En pickup som kombinerar styrka och terrängprestanda – lika kapabel utanför vägen som bekväm i vardagen.",
    equipmentTitle: "Standardutrustningslista för RAM 1500 Rebel",
    equipmentGroups: [
      {
        icon: "gauge",
        title: "Motor och prestanda",
        items: [
          "5,7L V8 HEMI-motor (ca 395 hk) med mildhybridsystem (eTorque)",
          "8-stegad automatisk växellåda",
          "4x4 fyrhjulsdrift (standard)",
          "Terränganpassad fjädring och förbättrad markfrigång",
        ],
        note:
          "Viktigt: Rebel fokuserar på terrängkapacitet och robust prestanda – samtidigt som den erbjuder god komfort och modern teknik för både vardag och äventyr.",
      },
      {
        icon: "cpu",
        title: "Teknik & infotainment",
        items: [
          "Infotainmentsystem (ofta 8,4” eller 12” pekskärm)",
          "Apple CarPlay & Android Auto",
          "Ljudsystem med hög kvalitet (t.ex. Alpine)",
          "Flera USB-anslutningar och smart mediastyrning",
          "Användarvänligt gränssnitt anpassat för både stad och terräng",
        ],
      },
      {
        icon: "armchair",
        title: "Interiör & komfort",
        items: [
          "Slitstarka material med sportig Rebel-design",
          "Komfortabla framstolar (ofta eljusterbara)",
          "Uppvärmda framstolar och ratt",
          "Tvåzons klimatanläggning",
          "Keyless entry & start",
          "Multifunktionsratt och robust interiörfinish",
        ],
      },
      {
        icon: "shield",
        title: "Säkerhet & förarassistans",
        items: ["Backkamera", "Parkeringssensorer", "Adaptiv farthållare", "Filhållningsassistans & filvarning", "Dödavinkelövervakning", "Automatisk nödbromsning"],
      },
      {
        icon: "truck",
        title: "Exteriör & praktiska funktioner",
        items: [
          "18-tums offroad-fälgar med terrängdäck",
          "Aggressiv frontdesign med Rebel-specifika detaljer",
          "Skyddsplåtar och terränganpassade komponenter",
          "Uppvärmda ytterbackspeglar",
          "Flakbelysning och praktiska lastlösningar",
          "Reservhjul monterat under bilen",
        ],
      },
    ],
    equipmentNote:
      "Rebel är utrustad för dig som vill lämna asfalten utan att lämna komforten bakom dig.",
    ctaTitle: "Byggd för äventyr. Redo för vardagen.",
    ctaText:
      "RAM 1500 Rebel kombinerar robust terrängkapacitet med modern komfort, vilket gör den lika självklar i skogen som på landsvägen.",
    images: { heroTruck: "/dodge2.png", gallery: "/dodge3.png", cta: "/dodge5.png" },
  },
  {
    slug: "ram-1500-sport",
    model: "Ram 1500",
    trim: "Sport",
    headline: "Den perfekta balansen mellan prestanda och sportig elegans",
    intro:
      "RAM 1500 Sport erbjuder en mer vägorienterad och stilren körupplevelse utan att kompromissa med kraft och komfort. Med sportig design, karossfärgade detaljer och modern teknik är den idealisk för både daglig körning och längre resor. Tack vare sitt väganpassade chassi och avancerade infotainmentsystem levererar den en smidig och responsiv körupplevelse med fokus på komfort och kontroll.",
    whatTitle: "Vad är Ram 1500 Sport?",
    whatParagraphs: [
      "Sport är en mer vägorienterad version av RAM 1500, utvecklad med ett tydligt fokus: att leverera en dynamisk körupplevelse i kombination med modern teknik och hög komfort.",
      "Denna version riktar sig till förare som vill ha en pickup med sportig design och smidiga köregenskaper, utan att ge avkall på styrka och funktionalitet. Sport erbjuder en responsiv och stilren körupplevelse och passar lika bra för stadskörning som för längre resor. Till exempel:",
    ],
    whatBullets: [
      "Sportig design med karossfärgade detaljer och distinkt front",
      "Väganpassat chassi för förbättrad komfort och stabilitet",
      "Avancerad teknik som Apple CarPlay, Android Auto och intuitivt infotainmentsystem",
      "Stiliga fälgar och landsvägsanpassade däck för bättre väggrepp",
      "Komfortabel interiör med fokus på premiumkänsla och användarvänlighet",
    ],
    whatClosing:
      "Detta gör den idealisk för förare som söker en pickup med sportig karaktär – perfekt för både vardag och fritid, med tydligt fokus på körkomfort och design.",
    performanceIntro:
      "Ram 1500 Sport levererar starka vägprestanda kombinerat med modern komfort – perfekt anpassad för både daglig körning och längre resor.",
    performanceGroups: [
      {
        title: "Motorer och effekt",
        items: [
          "3,6L V6 (305 hk) – balanserad prestanda med fokus på effektivitet och smidig körning",
          "5,7L HEMI V8 (395 hk) – kraftfull motor för snabb acceleration och hög dragkapacitet",
        ],
      },
      {
        title: "Kapacitet",
        items: [
          "Dragkapacitet: upp till ca 5,0–5,7 ton",
          "Lastkapacitet: upp till ca 800–900 kg (optimerad för vägprestanda och komfort)",
        ],
      },
      {
        title: "Praktiska fördelar",
        items: [
          "Tillgänglig med 4x4 och körlägen anpassade för olika vägförhållanden",
          "Väganpassad fjädring för förbättrad komfort och stabilitet",
          "Stilrent flak med slitstarka material och smarta förvaringslösningar",
          "Komfortabel och modern kupé med fokus på teknik och användarvänlighet",
        ],
      },
    ],
    conclusion:
      "En pickup som kombinerar styrka och sportig körkänsla – lika bekväm på vägen som kapabel i vardagen.",
    equipmentTitle: "Standardutrustningslista för Ram 1500 Sport",
    equipmentGroups: [
      {
        icon: "gauge",
        title: "Motor och prestanda",
        items: [
          "3,6L V6-motor (ca 305 hk) med fokus på effektivitet och smidig körning",
          "5,7L V8 HEMI-motor (ca 395 hk) för kraftfull acceleration och hög prestanda",
          "8-stegad automatisk växellåda",
          "Tillgänglig med 4x4 fyrhjulsdrift",
          "Väganpassad fjädring för ökad komfort och stabilitet",
        ],
        note:
          "Viktigt: Sport fokuserar på vägprestanda och en dynamisk körupplevelse – samtidigt som den erbjuder hög komfort och modern teknik för både vardag och längre resor.",
      },
      {
        icon: "cpu",
        title: "Teknik & infotainment",
        items: [
          "Infotainmentsystem (ofta 8,4” eller 12” pekskärm)",
          "Apple CarPlay & Android Auto",
          "Ljudsystem med hög kvalitet (t.ex. Alpine)",
          "Flera USB-anslutningar och smart mediastyrning",
          "Användarvänligt gränssnitt anpassat för daglig körning",
        ],
      },
      {
        icon: "armchair",
        title: "Interiör & komfort",
        items: [
          "Sportig interiör med premiumkänsla och stilrena detaljer",
          "Komfortabla framstolar (ofta eljusterbara)",
          "Uppvärmda framstolar och ratt",
          "Tvåzons klimatanläggning",
          "Keyless entry & start",
          "Multifunktionsratt och modern interiörfinish",
        ],
      },
      {
        icon: "shield",
        title: "Säkerhet & förarassistans",
        items: ["Backkamera", "Parkeringssensorer", "Adaptiv farthållare", "Filhållningsassistans & filvarning", "Dödavinkelövervakning", "Automatisk nödbromsning"],
      },
      {
        icon: "truck",
        title: "Exteriör & praktiska funktioner",
        items: [
          "20-tums sportfälgar med landsvägsanpassade däck",
          "Karossfärgade stötfångare och sportig frontdesign",
          "Uppvärmda ytterbackspeglar",
          "Flakbelysning och praktiska lastlösningar",
          "Stiliga detaljer med fokus på design och funktion",
          "Reservhjul monterat under bilen",
        ],
      },
    ],
    equipmentNote:
      "Sport är framtagen för förare som vill ha RAM-kapacitet i ett mer vägorienterat och stilrent paket.",
    ctaTitle: "Sportig elegans med RAM-kraft.",
    ctaText:
      "Ram 1500 Sport är valet för dig som vill ha stark prestanda, vägsäker komfort och en mer dynamisk design.",
    images: { heroTruck: "/dodge4.png", gallery: "/dodge5.png", cta: "/dodge5.png" },
  },
  {
    slug: "ram-1500-limited",
    model: "Ram 1500",
    trim: "Limited",
    headline: "Den perfekta balansen mellan lyx och kraftfull prestanda",
    intro:
      "RAM 1500 Limited erbjuder en exklusiv och komfortfokuserad körupplevelse utan att kompromissa med styrka och kapacitet. Med premiumdesign, högkvalitativa material och avancerad teknik är den idealisk för både daglig körning och långa resor i maximal komfort. Tack vare sin sofistikerade fjädring, lyxiga interiör och toppmoderna infotainmentsystem levererar den en tyst, smidig och kontrollerad körupplevelse med tydligt fokus på komfort, teknik och elegans.",
    whatTitle: "Vad är Ram 1500 Limited?",
    whatParagraphs: [
      "Limited är en mer lyxinriktad version av RAM 1500, utvecklad med ett tydligt fokus: att leverera maximal komfort i kombination med avancerad teknik och kraftfull prestanda.",
      "Denna version riktar sig till förare som vill ha en pickup med exklusiv design och förstklassig körupplevelse, utan att ge avkall på styrka och funktionalitet. Limited erbjuder en tyst, smidig och sofistikerad körupplevelse och passar lika bra för vardaglig körning som för längre resor i högsta komfort. Till exempel:",
    ],
    whatBullets: [
      "Exklusiv design med kromdetaljer och premiumfinish",
      "Luftfjädring för överlägsen komfort och justerbar körhöjd",
      "Avancerad teknik som Apple CarPlay, Android Auto och stort infotainmentsystem",
      "Stora premiumfälgar och landsvägsanpassade däck för optimal stabilitet",
      "Lyxig interiör med läderklädsel, högkvalitativa material och fokus på komfort",
    ],
    whatClosing:
      "Detta gör den idealisk för förare som söker en pickup med lyxig karaktär – perfekt för både vardag och fritid, med tydligt fokus på komfort, teknik och elegans.",
    performanceIntro:
      "Ram 1500 Limited levererar kraftfull prestanda kombinerat med förstklassig komfort – perfekt anpassad för både daglig körning och långa resor i lyx.",
    performanceGroups: [
      {
        title: "Motorer och effekt",
        items: [
          "3,6L V6 (305 hk) – balanserad prestanda med fokus på effektivitet och smidig körning",
          "5,7L HEMI V8 (395 hk) – kraftfull motor för hög prestanda och imponerande dragkapacitet",
        ],
      },
      {
        title: "Kapacitet",
        items: [
          "Dragkapacitet: upp till ca 5,0–5,7 ton",
          "Lastkapacitet: upp till ca 700–800 kg (optimerad för komfort och premiumkörning)",
        ],
      },
      {
        title: "Praktiska fördelar",
        items: [
          "Tillgänglig med 4x4 och körlägen anpassade för olika vägförhållanden",
          "Luftfjädring för överlägsen komfort och justerbar körhöjd",
          "Exklusivt flak med slitstarka material och smarta förvaringslösningar",
          "Lyxig och tyst kupé med fokus på komfort, teknik och högkvalitativa material",
        ],
      },
    ],
    conclusion:
      "En pickup som kombinerar styrka och lyx – lika bekväm på vägen som imponerande i vardagen.",
    equipmentTitle: "Standardutrustningslista för Ram 1500 Limited",
    equipmentGroups: [
      {
        icon: "gauge",
        title: "Motor och prestanda",
        items: [
          "3,6L V6-motor (ca 305 hk) med fokus på effektivitet och smidig körning",
          "5,7L V8 HEMI-motor (ca 395 hk) för kraftfull och jämn prestanda",
          "8-stegad automatisk växellåda",
          "Tillgänglig med 4x4 fyrhjulsdrift",
          "Luftfjädring för optimal komfort och justerbar körhöjd",
        ],
        note:
          "Viktigt: Limited fokuserar på maximal komfort och en exklusiv körupplevelse – samtidigt som den erbjuder hög prestanda och avancerad teknik för både vardag och långa resor.",
      },
      {
        icon: "cpu",
        title: "Teknik & infotainment",
        items: [
          "Infotainmentsystem (ofta 12” pekskärm)",
          "Apple CarPlay & Android Auto",
          "Premium ljudsystem (t.ex. Harman Kardon)",
          "Flera USB-anslutningar och avancerad mediastyrning",
          "Användarvänligt och högupplöst gränssnitt",
        ],
      },
      {
        icon: "armchair",
        title: "Interiör & komfort",
        items: [
          "Lyxig interiör med läderklädsel och exklusiva material",
          "Eljusterbara framstolar med minnesfunktion",
          "Uppvärmda och ventilerade framstolar samt uppvärmd ratt",
          "Tvåzons klimatanläggning",
          "Keyless entry & start",
          "Multifunktionsratt och premium interiörfinish",
        ],
      },
      {
        icon: "shield",
        title: "Säkerhet & förarassistans",
        items: ["Backkamera", "Parkeringssensorer", "Adaptiv farthållare", "Filhållningsassistans & filvarning", "Dödavinkelövervakning", "Automatisk nödbromsning"],
      },
      {
        icon: "truck",
        title: "Exteriör & praktiska funktioner",
        items: [
          "20- eller 22-tums premiumfälgar med landsvägsdäck",
          "Kromdetaljer och exklusiv frontdesign",
          "Uppvärmda och eljusterbara ytterbackspeglar",
          "Flakbelysning och smarta lastlösningar",
          "Elegant design med fokus på detaljer och finish",
          "Reservhjul monterat under bilen",
        ],
      },
    ],
    equipmentNote:
      "Limited lyfter RAM 1500 till en mer exklusiv nivå med tydligt fokus på komfort, teknik och detaljer.",
    ctaTitle: "Lyx, tystnad och kraft i samma pickup.",
    ctaText:
      "Ram 1500 Limited är för dig som vill ha maximal komfort och premiumkänsla utan att lämna RAM-styrkan bakom dig.",
    images: { heroTruck: "/dodge1.png", gallery: "/dodge5.png", cta: "/dodge5.png" },
  },
  {
    slug: "ram-1500-longhorn",
    model: "RAM 1500",
    trim: "Longhorn",
    headline: "Western-luxe med kraftfull arbetskapacitet",
    intro:
      "RAM 1500 Longhorn är en premiuminriktad trim i RAM 1500-serien som kombinerar klassisk amerikansk “western luxury”-design med stark dragkapacitet och modern teknik. Den är byggd för förare som vill ha en lyxigare pickup med tydlig karaktär, utan att förlora den robusta arbetsförmågan.",
    whatTitle: "Vad är RAM 1500 Longhorn?",
    whatParagraphs: [
      "RAM 1500 Longhorn är en av de mest karaktärsfulla utrustningsnivåerna i RAM 1500-sortimentet, placerad ovanför Tradesman, Big Horn och Laramie i känsla och materialval.",
      "Den kännetecknas av exklusiva interiörmaterial som läder och träinspirerade detaljer, samt en design som hämtar inspiration från amerikansk ranch- och westernstil.",
    ],
    whatBullets: [
      "Premium läderklädsel med westerninspirerade detaljer",
      "Trä- och metallinlägg i interiören",
      "Krom- och premiumdetaljer på utsidan",
      "Mycket hög komfortnivå även vid tung last",
      "Unik stil med stark vardags- och arbetskapacitet",
    ],
    whatClosing:
      "Den riktar sig till förare som vill ha en lyxig pickup med unik stil och stark vardags- och arbetskapacitet.",
    performanceIntro:
      "RAM 1500 Longhorn erbjuds med flera motoralternativ beroende på marknad och kombinerar premiumkomfort med robust kapacitet.",
    performanceGroups: [
      {
        title: "Motorer och effekt",
        items: [
          "3,6L Pentastar V6 eTorque – ca 305 hk, effektiv och balanserad standardmotor",
          "5,7L HEMI V8 eTorque – ca 395 hk, klassisk V8 med stark dragkraft och karaktär",
          "3,0L EcoDiesel V6 – ca 260 hk, högt vridmoment och effektiv långkörning",
        ],
      },
      {
        title: "Kapacitet",
        items: [
          "Dragkapacitet: upp till ca 5,5 ton beroende på konfiguration",
          "Lastkapacitet: upp till ca 800–900 kg",
          "Luftfjädring (tillval) för bättre komfort och nivåreglering",
        ],
      },
      {
        title: "Praktiska fördelar",
        items: [
          "Finns med 4x4 och avancerade körlägen",
          "Mycket hög komfortnivå även vid tung last",
          "Stabil och tyst körning på motorväg",
          "Balanserad fjädring för både arbete och långresor",
        ],
      },
    ],
    conclusion:
      "En lyxig men kapabel pickup som kombinerar klassisk V8-känsla, modern teknik och en unik premiumdesign inspirerad av amerikansk westernstil.",
    equipmentTitle: "Standardutrustning för RAM 1500 Longhorn",
    equipmentGroups: [
      {
        icon: "gauge",
        title: "Motor och prestanda",
        items: [
          "3,6L V6 eTorque med ca 305 hk (V8 och diesel som tillval beroende på marknad)",
          "8-stegad automatisk växellåda",
          "Bakhjulsdrift eller 4x4 beroende på konfiguration",
          "Komfort- och dragoptimerad körkalibrering",
        ],
      },
      {
        icon: "cpu",
        title: "Teknik & infotainment",
        items: [
          "12-tums infotainmentsystem med pekskärm",
          "Digital förardisplay",
          "Apple CarPlay & Android Auto",
          "Navigation och uppkopplade tjänster",
          "Premium ljudsystem",
        ],
      },
      {
        icon: "armchair",
        title: "Interiör & komfort",
        items: [
          "Premium läderklädsel med westerninspirerade detaljer",
          "Trä- och metallinlägg i interiören",
          "Ventilerade och uppvärmda säten",
          "Uppvärmd ratt",
          "Två- eller trezons klimatanläggning beroende på specifikation",
          "Mycket hög material- och ljudkvalitet",
        ],
      },
      {
        icon: "shield",
        title: "Säkerhet & förarassistans",
        items: ["Backkamera", "Parkeringssensorer fram och bak", "Adaptiv farthållare", "Filhållningsassistans och kollisionsvarning", "Avancerade säkerhetssystem"],
      },
      {
        icon: "truck",
        title: "Exteriör & praktiska funktioner",
        items: [
          "20-tums fälgar beroende på paket",
          "Krom- och premiumdetaljer",
          "Elektriskt justerbara speglar",
          "Robust men elegant flakdesign",
          "Longhorn-specifik styling med lyxdetaljer",
        ],
      },
    ],
    equipmentNote:
      "RAM 1500 Longhorn är en premium pickup som kombinerar lyx, komfort och stark arbetskapacitet, med en tydlig westerninspirerad design som gör den unik i segmentet.",
    ctaTitle: "Western-luxe med verklig arbetskapacitet.",
    ctaText:
      "RAM 1500 Longhorn är för dig som vill ha en pickup med unik karaktär, exklusiv komfort och den robusta kapacitet som RAM är känt för.",
    images: { heroTruck: "/dodge5.png", gallery: "/dodge2.png", cta: "/dodge5.png" },
  },
];

export function getRam1500Page(slug: string) {
  return ram1500Pages.find((page) => page.slug === slug);
}