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
  { name: "2021 Ford F-150", trim: "Lariat 5.0 V8", price: "589 000 kr", meta: "18 000 km / Automatisk", image: "/car1.png" },
  { name: "2020 Dodge Challenger", trim: "SRT Hellcat", price: "899 000 kr", meta: "12 500 km / Automatisk", image: "/car2.png" },
  { name: "2019 Chevrolet", trim: "Camaro SS", price: "499 000 kr", meta: "22 000 km / Automatisk", image: "/car3.png" },
  { name: "2021 Jeep Grand", trim: "Cherokee SRT", price: "699 000 kr", meta: "15 000 km / Automatisk", image: "/car5.png" },
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