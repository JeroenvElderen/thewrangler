import {
  BadgeCheck,
  Car,
  Gauge,
  Mountain,
  Settings,
  ShieldCheck,
  Star,
  Truck,
} from "lucide-react";
import type { FeaturedCar, ShopBrand, StatItem } from "./types";

export const featuredCars: FeaturedCar[] = [
  { name: "Chevrolet Silverado", trim: "Full-size pickup", price: "Modelguide", meta: "Läs om versioner och utrustning", image: "/chevy.png", href: "/cars/chevrolet-silverado-lt" },
  { name: "GMC Sierra", trim: "Premium pickup", price: "Modelguide", meta: "Läs om versioner och utrustning", image: "/gmc.png", href: "/cars/gmc-sierra-1500-pro" },
  { name: "RAM 1500", trim: "Komfort och kraft", price: "Modelguide", meta: "Läs om versioner och utrustning", image: "/dodge1.png", href: "/cars/ram-1500-laramie" },
  { name: "Jeep Wrangler", trim: "Ikonisk 4x4", price: "Modelguide", meta: "Läs om versioner och utrustning", image: "/car1.png", href: "/cars/jeep-wrangler-sahara" },
  { name: "Ford F-150", trim: "Amerikansk klassiker", price: "Modelguide", meta: "Läs om versioner och utrustning", image: "/ford1.png", href: "/cars/ford-f-150-lariat" },
];

export const shopBrands: ShopBrand[] = [
  {
    title: "RAM",
    image: "/dodge5.png",
    icon: Truck,
    href: "/cars?brand=RAM",
  },
  {
    title: "Chevrolet",
    image: "/chevy.png",
    icon: Gauge,
    href: "/cars?brand=Chevrolet",
  },
  {
    title: "Jeep",
    image: "/car1.png",
    icon: Mountain,
    href: "/cars?brand=Jeep",
  },
  {
    title: "Ford",
    image: "/ford.png",
    icon: Car,
    href: "/cars?brand=Ford",
  },
  {
    title: "GMC",
    image: "/gmc.png",
    icon: BadgeCheck,
    href: "/cars?brand=GMC",
  },
];

export const stats: StatItem[] = [
  { icon: Car, value: "500+", label: "Levererade USA-bilar" },
  { icon: Settings, value: "10+", label: "År av erfarenhet" },
  { icon: Star, value: "4.9/5", label: "Kundnöjdhet" },
  { icon: ShieldCheck, value: "100%", label: "Fokus på kvalitet" },
];