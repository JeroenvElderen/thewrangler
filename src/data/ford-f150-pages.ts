import type { RamInfoPage } from "./ram-1500-pages";

const sharedImages = {
  heroTruck: "/ford.png",
  gallery: "/ford1.png",
  cta: "/ford.png",
};

function fordPage({
  slug,
  trim,
  headline,
  intro,
  whatParagraphs,
  bullets,
  closing,
  performanceIntro,
  engines,
  capacity,
  advantages,
  conclusion,
  equipment,
  ctaTitle,
  ctaText,
}: {
  slug: string;
  trim: string;
  headline: string;
  intro: string;
  whatParagraphs: string[];
  bullets: string[];
  closing: string;
  performanceIntro: string;
  engines: string[];
  capacity: string[];
  advantages: string[];
  conclusion: string;
  equipment: Array<{ title: string; items: string[] }>;
  ctaTitle: string;
  ctaText: string;
}): RamInfoPage {
  return {
    slug,
    model: "Ford F-150",
    trim,
    headline,
    intro,
    whatTitle: `Vad är Ford F-150 ${trim}?`,
    whatParagraphs,
    whatBullets: bullets,
    whatClosing: closing,
    performanceIntro,
    performanceGroups: [
      { title: "Motorer och effekt", items: engines },
      { title: "Kapacitet", items: capacity },
      { title: "Praktiska fördelar", items: advantages },
    ],
    conclusion,
    equipmentTitle: `Standardutrustning för Ford F-150 ${trim}`,
    equipmentGroups: [
      {
        icon: "gauge",
        title: "Motor och prestanda",
        items: equipment[0].items,
      },
      {
        icon: "cpu",
        title: "Teknik & infotainment",
        items: equipment[1].items,
      },
      {
        icon: "armchair",
        title: "Interiör & komfort",
        items: equipment[2].items,
      },
      {
        icon: "shield",
        title: "Säkerhet & förarassistans",
        items: equipment[3].items,
      },
      {
        icon: "truck",
        title: "Exteriör & praktiska funktioner",
        items: equipment[4].items,
      },
    ],
    equipmentNote: `Detta är standardutrustningen för F-150 ${trim} – specifikationer kan variera beroende på årsmodell och marknad.`,
    ctaTitle,
    ctaText,
    images: sharedImages,
  };
}

export const fordF150Pages: RamInfoPage[] = [
  fordPage({
    slug: "ford-f-150-stx",
    trim: "STX",
    headline: "Enkel sportstyling med praktisk fullstor kapacitet",
    intro:
      "Ford F-150 STX är en instegs-/mellannivå i F-150-serien som kombinerar en enkel och funktionell arbetsplattform med mer sportig styling än basmodellerna.",
    whatParagraphs: [
      "Ford F-150 STX placerar sig ovanför basmodellen XL och fokuserar på ett renare, mer street-inspirerat uttryck med svarta detaljer.",
      "Den behåller samma robusta F-150-grund och arbetskapacitet, men ger bilen en tydligare design utan att gå upp i lyx- eller offroadpaket.",
    ],
    bullets: [
      "Sportigare styling än XL",
      "Praktisk fullstor pickupplattform",
      "Modern teknik utan onödig komplexitet",
      "Passar både arbete och vardagskörning",
    ],
    closing:
      "STX är ett visuellt starkare men fortfarande enkelt och praktiskt F-150-val.",
    performanceIntro:
      "Ford F-150 STX erbjuds med flera motoralternativ beroende på konfiguration.",
    engines: [
      "2,7L EcoBoost V6 – ca 325 hk, vanlig och effektiv standardmotor",
      "5,0L V8 Ti-VCT – ca 400 hk, tillval med klassisk V8-karaktär",
      "3,5L EcoBoost V6 – ca 400+ hk, tillval för högre dragkapacitet och prestanda",
    ],
    capacity: [
      "Dragkapacitet: upp till ca 3,5–6,0 ton beroende på motor och specifikation",
      "Lastkapacitet: upp till ca 700–1 000 kg beroende på konfiguration",
    ],
    advantages: [
      "Bakhjulsdrift eller 4x4 beroende på val",
      "Stark aluminiumkaross för lägre vikt",
      "Stor och flexibel flakyta",
      "Balanserad setup för både arbete och vardag",
    ],
    conclusion:
      "En enkel men modern pickup som erbjuder stark prestanda och sportig styling utan att bli överutrustad.",
    equipment: [
      {
        title: "Motor och prestanda",
        items: [
          "2,7L EcoBoost V6 med ca 325 hk",
          "10-stegad automatisk växellåda",
          "Bakhjulsdrift (4x4 som tillval)",
          "Väg- och arbetsinriktad körkalibrering",
        ],
      },
      {
        title: "Teknik & infotainment",
        items: [
          "8-tums infotainmentsystem med pekskärm",
          "Apple CarPlay & Android Auto",
          "Digital instrumentpanel i basversion",
          "USB-portar och grundläggande uppkoppling",
        ],
      },
      {
        title: "Interiör & komfort",
        items: [
          "Slitstarka tygsäten",
          "Enkel men funktionell interiör",
          "Manuell eller enkel klimatanläggning beroende på konfiguration",
          "40/20/40-bänk fram i vissa utföranden",
        ],
      },
      {
        title: "Säkerhet & förarassistans",
        items: [
          "Backkamera",
          "Ford Co-Pilot360 med grundläggande assistanssystem",
          "Stabilitets- och antisladdsystem",
          "Grundläggande förarassistans",
        ],
      },
      {
        title: "Exteriör & praktiska funktioner",
        items: [
          "Svarta STX-exteriördetaljer",
          "17–18-tums fälgar beroende på paket",
          "Sportigare styling än XL",
          "Uppvärmda ytterbackspeglar",
          "Robust och funktionellt flak",
        ],
      },
    ],
    ctaTitle: "Fullstor kapacitet med sportigare attityd.",
    ctaText:
      "Ford F-150 STX passar dig som vill ha en enkel och funktionell pickup med tydligare design än basmodellen.",
  }),
  fordPage({
    slug: "ford-f-150-xlt",
    trim: "XLT",
    headline: "Balanserad fullstor pickup med komfort och teknik",
    intro:
      "Ford F-150 XLT är en välutrustad mellannivå som kombinerar arbetskapacitet med modern komfort och mer avancerad teknik.",
    whatParagraphs: [
      "Ford F-150 XLT placerar sig ovanför XL och fokuserar på balansen mellan funktion, komfort och teknik.",
      "Den erbjuder mer standardutrustning, modernare interiör och fler valmöjligheter för motorer och drivlina, samtidigt som F-150:s arbetskapacitet behålls.",
    ],
    bullets: [
      "Populär allroundnivå",
      "Mer komfort än XL",
      "Flera motor- och drivlineval",
      "Lika användbar till arbete som vardag",
    ],
    closing:
      "XLT är ett flexibelt val för förare som vill ha mer utrustning utan att gå upp i lyxsegmentet.",
    performanceIntro:
      "Ford F-150 XLT erbjuds med flera motoralternativ beroende på konfiguration.",
    engines: [
      "2,7L EcoBoost V6 – ca 325 hk",
      "5,0L V8 – ca 400 hk",
      "3,5L EcoBoost V6 – ca 400 hk",
      "3,5L PowerBoost Full Hybrid – upp till ca 430 hk i vissa konfigurationer",
    ],
    capacity: [
      "Dragkapacitet: upp till ca 5,8–6,0 ton beroende på motor och utrustning",
      "Lastkapacitet: upp till ca 700–1 600 kg beroende på konfiguration",
    ],
    advantages: [
      "Finns med 4x4 eller bakhjulsdrift",
      "Stor och flexibel flaklösning i flera längder",
      "Balanserad fjädring för både last och komfort",
      "Hög anpassningsgrad för arbete och privat bruk",
    ],
    conclusion:
      "En av de mest allround-inriktade versionerna i F-150-serien med stark prestanda, modern teknik och vardagsvänlig komfort.",
    equipment: [
      {
        title: "Motor och prestanda",
        items: [
          "2,7L EcoBoost V6 med ca 325 hk",
          "10-stegad automatisk växellåda",
          "Bakhjulsdrift (4x4 som tillval)",
          "Balanserad körinställning för arbete och vardag",
        ],
      },
      {
        title: "Teknik & infotainment",
        items: [
          "12-tums infotainmentsystem beroende på paket",
          "Digital instrumentpanel",
          "Apple CarPlay & Android Auto",
          "Ford SYNC infotainmentsystem",
        ],
      },
      {
        title: "Interiör & komfort",
        items: [
          "Tygsäten med bättre komfort än basmodellen",
          "Mer påkostad interiör än XL",
          "40/20/40-bänk eller individuella säten",
          "Fler komfort- och arbetsfunktioner än instegsnivån",
        ],
      },
      {
        title: "Säkerhet & förarassistans",
        items: [
          "Ford Co-Pilot360 förarassistanssystem",
          "Backkamera",
          "Filhållningsassistans och kollisionsvarning",
          "Stabilitets- och antisladdsystem",
        ],
      },
      {
        title: "Exteriör & praktiska funktioner",
        items: [
          "17–18-tums aluminiumfälgar beroende på paket",
          "Mer krom- och designinslag än XL",
          "Uppvärmda ytterbackspeglar",
          "Robust och funktionellt flak",
          "Praktisk men modern design",
        ],
      },
    ],
    ctaTitle: "Arbetskapacitet, komfort och teknik i balans.",
    ctaText:
      "Ford F-150 XLT är ett tryggt val för dig som vill ha en pickup som fungerar lika bra på jobbet som i vardagen.",
  }),
  fordPage({
    slug: "ford-f-150-platinum",
    trim: "Platinum",
    headline: "Premiumkomfort med kraftfull prestanda",
    intro:
      "Ford F-150 Platinum är en lyxinriktad version som kombinerar hög komfort, avancerad teknik och stark dragkapacitet.",
    whatParagraphs: [
      "Ford F-150 Platinum är en av de mer exklusiva utrustningsnivåerna i F-150-serien, placerad ovanför XLT och Lariat.",
      "Fokus ligger på komfort, tyst kupé, premium-material och avancerade förarassistanssystem utan att tappa pickupens arbetskapacitet.",
    ],
    bullets: [
      "Premiuminriktad interiör",
      "Avancerad teknik och assistans",
      "Stark drag- och lastkapacitet",
      "Särskilt lämpad för vardag och långresor",
    ],
    closing:
      "Platinum är för dig som vill ha F-150-kapacitet med en tydligt lyxigare upplevelse.",
    performanceIntro:
      "Ford F-150 Platinum erbjuds med kraftfulla och komfortanpassade motoralternativ.",
    engines: [
      "3,5L EcoBoost V6 – ca 400 hk",
      "3,5L PowerBoost Full Hybrid V6 – ca 430 hk",
    ],
    capacity: [
      "Dragkapacitet: upp till ca 5,8–6,0 ton beroende på konfiguration",
      "Lastkapacitet: upp till ca 900–1 000 kg beroende på utrustning",
    ],
    advantages: [
      "4x4 som tillval eller standard beroende på specifikation",
      "Komfortoptimerad fjädring för långkörning",
      "Stabil körkänsla vid tung last och släp",
      "Avancerade körlägen för varierande vägförhållanden",
    ],
    conclusion:
      "En lyxig men kapabel pickup som kombinerar premiumkomfort med seriös fullstor truck-prestanda.",
    equipment: [
      {
        title: "Motor och prestanda",
        items: [
          "3,5L EcoBoost V6 med ca 400 hk",
          "10-stegad automatisk växellåda",
          "Bakhjulsdrift eller 4x4 beroende på konfiguration",
          "Optimerad för komfort och dragkapacitet",
        ],
      },
      {
        title: "Teknik & infotainment",
        items: [
          "Stort infotainmentsystem upp till ca 12 tum beroende på modellår",
          "Digital instrumentpanel",
          "Apple CarPlay & Android Auto",
          "Premium ljudsystem",
          "Uppkopplade tjänster och navigation",
        ],
      },
      {
        title: "Interiör & komfort",
        items: [
          "Läderklädsel",
          "Ventilerade och uppvärmda säten",
          "Elektriskt justerbara säten med minne",
          "Uppvärmd ratt",
          "Trezons klimatanläggning",
          "Mycket hög ljudkomfort",
        ],
      },
      {
        title: "Säkerhet & förarassistans",
        items: [
          "Ford Co-Pilot360 assistanssystem",
          "360-graders kamera",
          "Adaptiv farthållare",
          "Filhållningsassistans och kollisionsvarning",
          "Parkeringssensorer runtom",
        ],
      },
      {
        title: "Exteriör & praktiska funktioner",
        items: [
          "20-tums aluminiumfälgar",
          "Krom- och premiumdetaljer",
          "Elektriskt justerbara speglar",
          "Integrerad dragutrustning",
          "Lyxig men funktionell design",
        ],
      },
    ],
    ctaTitle: "Premiumkänsla utan att ge upp pickupkapacitet.",
    ctaText:
      "Ford F-150 Platinum prioriterar komfort, teknik och förfining men behåller den praktiska kärnan i en fullstor pickup.",
  }),
  fordPage({
    slug: "ford-f-150-lariat",
    trim: "Lariat",
    headline: "Balans mellan premiumkomfort och arbetskapacitet",
    intro:
      "Ford F-150 Lariat är en välutrustad mellanhög trimnivå som kombinerar modern teknik, hög komfort och stark prestanda.",
    whatParagraphs: [
      "Ford F-150 Lariat placerar sig mellan XLT och Platinum och är en av de mest populära utrustningsnivåerna i F-150-sortimentet.",
      "Den erbjuder en tydlig uppgradering i materialval, teknik och komfort, samtidigt som full arbetskapacitet och flexibilitet behålls.",
    ],
    bullets: [
      "Mer premiumkänsla än XLT",
      "Modern teknik och bättre material",
      "Full arbetskapacitet",
      "Allroundval för arbete, vardag och långresor",
    ],
    closing:
      "Lariat är en allround-premiumpickup för förare som vill ha både funktion och komfort.",
    performanceIntro:
      "Ford F-150 Lariat erbjuds med flera etablerade motoralternativ.",
    engines: [
      "2,7L EcoBoost V6 – ca 325 hk",
      "5,0L V8 – ca 400 hk",
      "3,5L EcoBoost V6 – ca 400 hk",
      "3,5L PowerBoost Full Hybrid – upp till ca 430 hk",
    ],
    capacity: [
      "Dragkapacitet: upp till ca 5,8–6,0 ton beroende på konfiguration",
      "Lastkapacitet: upp till ca 700–1 000 kg beroende på specifikation",
    ],
    advantages: [
      "Finns med 4x4 eller bakhjulsdrift",
      "Balanserad fjädring för komfort och last",
      "Hög flexibilitet mellan arbete och privat bruk",
      "Avancerade körlägen beroende på drivlina",
    ],
    conclusion:
      "En mångsidig F-150 som kombinerar stark prestanda med modern komfort och teknik.",
    equipment: [
      {
        title: "Motor och prestanda",
        items: [
          "2,7L EcoBoost V6 med ca 325 hk",
          "10-stegad automatisk växellåda",
          "Bakhjulsdrift eller 4x4 beroende på konfiguration",
          "Balanserad inställning för både arbete och komfort",
        ],
      },
      {
        title: "Teknik & infotainment",
        items: [
          "12-tums infotainmentsystem med pekskärm",
          "Digital instrumentpanel",
          "Apple CarPlay & Android Auto",
          "Uppkopplade tjänster och navigation",
          "Förbättrat ljudsystem",
        ],
      },
      {
        title: "Interiör & komfort",
        items: [
          "Läderklädsel",
          "Elektriskt justerbara säten med minne",
          "Uppvärmda säten och ratt",
          "Förbättrad ljudisolering",
          "Två- eller trezons klimatanläggning beroende på konfiguration",
        ],
      },
      {
        title: "Säkerhet & förarassistans",
        items: [
          "Ford Co-Pilot360 assistanssystem",
          "Backkamera",
          "Parkeringssensorer",
          "Adaptiv farthållare",
          "Filhållningsassistans och kollisionsvarning",
        ],
      },
      {
        title: "Exteriör & praktiska funktioner",
        items: [
          "18–20-tums aluminiumfälgar",
          "Krom- eller mörka designinslag beroende på paket",
          "Elektriskt justerbara speglar",
          "Robust men mer premiuminriktad styling",
          "Funktionell men uppgraderad flakdesign",
        ],
      },
    ],
    ctaTitle: "Premiumbalans för arbete och vardag.",
    ctaText:
      "Ford F-150 Lariat är valet för dig som vill ha mer komfort och teknik utan att lämna F-150:s praktiska styrka.",
  }),
  fordPage({
    slug: "ford-f-150-tremor",
    trim: "Tremor",
    headline: "Offroadkapacitet med balans mellan arbete och terräng",
    intro:
      "Ford F-150 Tremor är en offroadinriktad version som placerar sig mellan vanliga arbetsmodeller och de mer extrema Raptor-varianterna.",
    whatParagraphs: [
      "Ford F-150 Tremor fokuserar på förbättrad terrängkörning utan att bli en ren high-performance offroadtruck.",
      "Den har fabriksanpassad fjädring, terrängdäck och offroadkalibrering för förare som behöver arbetsduglig kapacitet även på svårare underlag.",
    ],
    bullets: [
      "Fabriksbyggd offroadinriktning",
      "4x4 och terrängkalibrering",
      "Bättre markfrigång och grepp",
      "Fortfarande användbar som arbetsbil",
    ],
    closing:
      "Tremor är byggd för skogsvägar, grus, snö och ojämnt underlag utan att ge upp vardagsanvändning.",
    performanceIntro:
      "Ford F-150 Tremor erbjuds med starka motoralternativ och offroadfokus.",
    engines: [
      "3,5L EcoBoost V6 – ca 400 hk",
      "5,0L V8 – ca 400 hk, tillval med klassisk V8-karaktär",
    ],
    capacity: [
      "Dragkapacitet: upp till ca 5,5–6,0 ton beroende på konfiguration",
      "Lastkapacitet: upp till ca 700–900 kg beroende på specifikation",
    ],
    advantages: [
      "4x4 som standard med offroad-kalibrering",
      "Förstärkt fjädring och högre markfrigång",
      "Terrängdäck för bättre grepp",
      "Optimerad för både arbete och offroadkörning",
    ],
    conclusion:
      "En robust och mångsidig pickup som kombinerar seriös terrängkapacitet med full arbetsförmåga.",
    equipment: [
      {
        title: "Motor och prestanda",
        items: [
          "3,5L EcoBoost V6 med ca 400 hk",
          "10-stegad automatisk växellåda",
          "4x4 som standard",
          "Offroadkalibrerad drivlina med körlägen för terräng",
        ],
      },
      {
        title: "Teknik & infotainment",
        items: [
          "12-tums infotainmentsystem med pekskärm",
          "Digital instrumentpanel",
          "Apple CarPlay & Android Auto",
          "Offroad-specifika kördata och information",
        ],
      },
      {
        title: "Interiör & komfort",
        items: [
          "Tyg- eller delvis uppgraderade säten beroende på paket",
          "Robust interiör med fokus på funktion",
          "Förbättrad klimatkontroll",
          "Multifunktionsratt och farthållare",
        ],
      },
      {
        title: "Säkerhet & förarassistans",
        items: [
          "Ford Co-Pilot360 assistanssystem",
          "Backkamera",
          "Hill descent control",
          "Stabilitets- och antisladdsystem",
        ],
      },
      {
        title: "Exteriör & praktiska funktioner",
        items: [
          "Tremor-specifika designdetaljer",
          "Offroaddäck och unika fälgar",
          "Högre markfrigång än standard F-150",
          "Uppvärmda ytterbackspeglar",
          "Robust flak med lastförankring",
        ],
      },
    ],
    ctaTitle: "Arbetsbil och offroadmaskin i samma paket.",
    ctaText:
      "Ford F-150 Tremor är byggd för dig som behöver grepp, kapacitet och mångsidighet även när vägen tar slut.",
  }),
  fordPage({
    slug: "ford-f-150-raptor",
    trim: "Raptor",
    headline: "Extrem offroadprestanda med fullstor truckkraft",
    intro:
      "Ford F-150 Raptor är den mest extrema offroadversionen i F-150-serien, byggd för hög hastighet i terräng, hopp, sand och teknisk offroadkörning.",
    whatParagraphs: [
      "Ford F-150 Raptor är toppmodellen när det gäller offroadprestanda i F-150-serien.",
      "Den skiljer sig från andra trims genom förstärkt ram, specialutvecklad fjädring och bredare spårvidd optimerad för hög fart i terräng.",
    ],
    bullets: [
      "Racinginspirerad fjädring",
      "Bredare kaross och spårvidd",
      "Extrem terrängkapacitet",
      "Prioriterar fart och kontroll före traditionell arbetsinriktning",
    ],
    closing:
      "Raptor riktar sig till förare som prioriterar extrem offroadkörning men fortfarande vill ha praktisk pickupkapacitet.",
    performanceIntro:
      "Ford F-150 Raptor erbjuds med högpresterande motoralternativ.",
    engines: [
      "3,5L EcoBoost High Output V6 – ca 450 hk",
      "5,2L Supercharged V8 (Raptor R) – ca 700+ hk",
    ],
    capacity: [
      "Dragkapacitet: upp till ca 3,5–4,5 ton beroende på konfiguration",
      "Lastkapacitet: ca 600–800 kg beroende på utförande",
      "Extrem offroadkapacitet med hög markfrigång och lång fjädringsväg",
    ],
    advantages: [
      "Bred spårvidd och förstärkt chassi",
      "Fox Racing-dämpare för högfartsoffroad",
      "Offroad-däck som standard",
      "Terränglägen för sand, sten och lera",
    ],
    conclusion:
      "En högpresterande offroadpickup som prioriterar fart, kontroll och terrängkapacitet över traditionell arbetsfunktion.",
    equipment: [
      {
        title: "Motor och prestanda",
        items: [
          "3,5L EcoBoost High Output V6 med ca 450 hk",
          "10-stegad automatisk växellåda",
          "4x4 som standard",
          "Offroad-optimerad drivlina med avancerade körlägen",
        ],
      },
      {
        title: "Teknik & infotainment",
        items: [
          "12-tums infotainmentsystem med pekskärm",
          "Digital instrumentpanel",
          "Apple CarPlay & Android Auto",
          "Offroad-specifik realtidsdata för lutning, dämpning och körlägen",
        ],
      },
      {
        title: "Interiör & komfort",
        items: [
          "Sportstolar med förstärkt sidostöd",
          "Tåliga men uppgraderade material",
          "Förbättrad klimatkontroll",
          "Multifunktionsratt med offroadkontroller",
        ],
      },
      {
        title: "Säkerhet & förarassistans",
        items: [
          "Ford Co-Pilot360 assistanssystem",
          "360-graders kamera beroende på paket",
          "Hill descent control",
          "Stabilitets- och antisladdsystem",
        ],
      },
      {
        title: "Exteriör & praktiska funktioner",
        items: [
          "Bred kaross med Raptor-design",
          "Fox Racing-dämpare",
          "Offroad-hjul och terrängdäck",
          "Förstärkt underrede",
          "Aggressiv styling med funktionellt syfte",
        ],
      },
    ],
    ctaTitle: "Extrem offroadprestanda direkt från fabrik.",
    ctaText:
      "Ford F-150 Raptor är för dig som vill ha en av världens mest kapabla fabriksbyggda performance-pickuper.",
  }),
];

export function getFordF150Page(slug: string) {
  return fordF150Pages.find((page) => page.slug === slug);
}