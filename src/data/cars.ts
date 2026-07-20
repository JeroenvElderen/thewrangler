export type CarStatus = "Draft" | "Published" | "Archived";

export type Car = {
  id: string;
  slug: string;
  title: string;
  make: string;
  model: string;
  year: number;
  price: string;
  priceAmount: number;
  currency: "EUR" | "SEK" | "USD";
  status: CarStatus;
  image: string;
  trim?: string;
  mileageKm?: number;
  fuelType?: string;
  transmission?: string;
  drivetrain?: string;
  exteriorColor?: string;
  interiorColor?: string;
  location?: string;
  badge?: string;
  views: number;
  isFeatured: boolean;
};

export const cars: Car[] = [
  {
    id: "jeep-wrangler-rubicon-2021",
    slug: "jeep-wrangler-rubicon-2021",
    title: "Jeep Wrangler Rubicon 2021",
    make: "Jeep",
    model: "Wrangler",
    year: 2021,
    price: "€54,950",
    priceAmount: 54950,
    currency: "EUR",
    status: "Published",
    image: "/car1.png",
    trim: "Rubicon 4x4",
    mileageKm: 47200,
    fuelType: "Bensin",
    location: "Stockholm",
    badge: "Offroad",
    views: 2153,
    isFeatured: true,
  },
  {
    id: "jeep-wrangler-sahara-2022",
    slug: "jeep-wrangler-sahara-2022",
    title: "Jeep Wrangler Sahara 2022",
    make: "Jeep",
    model: "Wrangler",
    year: 2022,
    price: "€49,950",
    priceAmount: 49950,
    currency: "EUR",
    status: "Published",
    image: "/car2.png",
    trim: "Sahara Unlimited",
    mileageKm: 38600,
    fuelType: "Bensin",
    location: "Strängnäs",
    badge: "Redo nu",
    views: 1882,
    isFeatured: true,
  },
  {
    id: "jeep-gladiator-rubicon-2021",
    slug: "jeep-gladiator-rubicon-2021",
    title: "Jeep Gladiator Rubicon 2021",
    make: "Jeep",
    model: "Gladiator",
    year: 2021,
    price: "€57,950",
    priceAmount: 57950,
    currency: "EUR",
    status: "Published",
    image: "/car3.png",
    trim: "Rubicon Pickup",
    mileageKm: 45100,
    fuelType: "Bensin",
    location: "Stockholm",
    badge: "Premium-spec",
    views: 1611,
    isFeatured: true,
  },
  {
    id: "jeep-wrangler-sport-2020",
    slug: "jeep-wrangler-sport-2020",
    title: "Jeep Wrangler Sport 2020",
    make: "Jeep",
    model: "Wrangler",
    year: 2020,
    price: "€38,950",
    priceAmount: 38950,
    currency: "EUR",
    status: "Draft",
    image: "/car4.png",
    trim: "Sport 4x4",
    mileageKm: 61000,
    fuelType: "Bensin",
    location: "Stockholm",
    badge: "Kommer snart",
    views: 1340,
    isFeatured: false,
  },
  {
    id: "jeep-wrangler-unlimited-2021",
    slug: "jeep-wrangler-unlimited-2021",
    title: "Jeep Wrangler Unlimited 2021",
    make: "Jeep",
    model: "Wrangler",
    year: 2021,
    price: "€47,950",
    priceAmount: 47950,
    currency: "EUR",
    status: "Published",
    image: "/car5.png",
    trim: "Unlimited 4-door",
    mileageKm: 52800,
    fuelType: "Bensin",
    location: "Strängnäs",
    badge: "Familje-SUV",
    views: 1069,
    isFeatured: false,
  },
  {
    id: "jeep-gladiator-overland-2022",
    slug: "jeep-gladiator-overland-2022",
    title: "Jeep Gladiator Overland 2022",
    make: "Jeep",
    model: "Gladiator",
    year: 2022,
    price: "€58,950",
    priceAmount: 58950,
    currency: "EUR",
    status: "Draft",
    image: "/car1.png",
    trim: "Overland Pickup",
    mileageKm: 29100,
    fuelType: "Bensin",
    location: "Strängnäs",
    badge: "Dragklar",
    views: 798,
    isFeatured: false,
  },
];