import type { LucideIcon } from "lucide-react";

export type FeaturedCar = {
  name: string;
  trim: string;
  price: string;
  meta: string;
  image: string;
};

export type ShopBrand = {
  title: string;
  image: string;
  icon: LucideIcon;
  href: string;
};

export type StatItem = {
  label: string;
  value: string;
  icon: LucideIcon;
};