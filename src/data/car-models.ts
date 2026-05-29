import { jeepWranglerPages } from "./jeep-wrangler-pages";
import type { RamInfoPage } from "./ram-1500-pages";
import { ram1500Pages } from "./ram-1500-pages";
import { silveradoPages } from "./silverado-pages";
import { gmcSierra1500Pages } from "./gmc-sierra-1500-pages";
import { fordF150Pages } from "./ford-f150-pages";

export type CarModelFamily = {
  brand: string;
  model: string;
  eyebrow: string;
  headline: string;
  description: string;
  image: string;
  accentImage: string;
  strengths: string[];
  pages: RamInfoPage[];
};

export const carModelFamilies: CarModelFamily[] = [
  {
    brand: "RAM",
    model: "RAM 1500",
    eyebrow: "Full-size pickup",
    headline: "Choose your RAM 1500 model",
    description:
      "En premium pickup-serie med stark dragkraft, hög komfort och flera utrustningsnivåer för arbete, vardag och långresor.",
    image: "/dodge5.png",
    accentImage: "/dodge2.png",
    strengths: ["Upp till ca 5,7 ton dragkapacitet", "HEMI V8 och effektiva V6-alternativ", "Bred trimstege från arbete till lyx"],
    pages: ram1500Pages,
  },
  {
    brand: "Chevrolet",
    model: "Chevrolet Silverado 1500",
    eyebrow: "Amerikansk arbetskapacitet",
    headline: "Explore Silverado trims",
    description:
      "Silverado 1500 kombinerar robust konstruktion, modern teknik och praktisk kapacitet i en tydlig modellstege.",
    image: "/chevy.png",
    accentImage: "/chevrolet.png",
    strengths: ["Stark full-size pickup-känsla", "Praktiska arbets- och familjeversioner", "Premiumval som LTZ och High Country"],
    pages: silveradoPages,
  },
  {
    brand: "Jeep",
    model: "Jeep Wrangler",
    eyebrow: "Offroad & 4x4",
    headline: "Find your Wrangler trim",
    description:
      "Wrangler är byggd för förare som vill ha ikonisk 4x4-känsla, terrängförmåga och val mellan ren funktion och premiumkomfort.",
    image: "/car1.png",
    accentImage: "/car2.png",
    strengths: ["4x4-fokus i hela serien", "Avtagbart tak och dörrar", "Rubicon och Willys för extra offroad"],
    pages: jeepWranglerPages,
  },
  {
  brand: "Ford",
  model: "Ford F-150",
  eyebrow: "Amerikansk full-size pickup",
  headline: "Explore Ford F-150 trims",
  description:
    "F-150 erbjuder en bred modellstege från arbetsinriktade versioner till premium- och offroadmodeller med stark dragkapacitet, modern teknik och hög flexibilitet.",
  image: "/ford-f150.png",
  accentImage: "/ford-f150-accent.png",
  strengths: [
    "Upp till ca 6 ton dragkapacitet",
    "EcoBoost, V8 och Hybrid-alternativ",
    "Trimnivåer från STX till Raptor och Platinum",
  ],
  pages: fordF150Pages,
},
{
  brand: "GMC",
  model: "GMC Sierra 1500",
  eyebrow: "Premium full-size pickup",
  headline: "Explore Sierra trims",
  description:
    "GMC Sierra 1500 kombinerar arbetskapacitet, komfort och premiumkänsla med modeller för både arbete, vardag, offroad och lyx.",
  image: "/gmc-sierra.png",
  accentImage: "/gmc-sierra-accent.png",
  strengths: [
    "Upp till ca 5,5 ton dragkapacitet",
    "TurboMax, V8 och Duramax Diesel",
    "Pro, AT4, Denali och Denali Ultimate",
  ],
  pages: gmcSierra1500Pages,
},
];

export const carBrandFilters = ["All", ...carModelFamilies.map((family) => family.brand)];