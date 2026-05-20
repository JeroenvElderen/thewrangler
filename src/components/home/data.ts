import { BadgeCheck, Car, Settings, ShieldCheck, Star } from "lucide-react";
import type { FeaturedCar, ShopType, StatItem } from "./types";

export const featuredCars: FeaturedCar[] = [
  { name: "2021 Ford F-150", trim: "Lariat 5.0 V8", price: "589 000 kr", meta: "18 000 km / Automatisk", image: "/car1.png" },
  { name: "2020 Dodge Challenger", trim: "SRT Hellcat", price: "899 000 kr", meta: "12 500 km / Automatisk", image: "/car2.png" },
  { name: "2019 Chevrolet", trim: "Camaro SS", price: "499 000 kr", meta: "22 000 km / Automatisk", image: "/car3.png" },
  { name: "2021 Jeep Grand", trim: "Cherokee SRT", price: "699 000 kr", meta: "15 000 km / Automatisk", image: "/car5.png" },
];

export const shopTypes: ShopType[] = [
  { title: "Muskelbilar", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop", icon: Car },
  { title: "Pickupbilar", image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1600&auto=format&fit=crop", icon: BadgeCheck },
  { title: "SUV:ar", image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1600&auto=format&fit=crop", icon: ShieldCheck },
  { title: "Klassiker", image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=1600&auto=format&fit=crop", icon: Settings },
];

export const stats: StatItem[] = [
  { icon: Car, value: "500+", label: "Importerade bilar" },
  { icon: Settings, value: "10+", label: "Års erfarenhet" },
  { icon: Star, value: "100%", label: "Passion" },
  { icon: ShieldCheck, value: "0", label: "Kompromisser" },
];