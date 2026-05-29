import type { Metadata } from "next";
import CarModelsPage from "@/components/car-models-page";
import { carModelFamilies } from "@/data/car-models";

export const metadata: Metadata = {
  title: "Cars & Models | The Wrangler",
  description:
    "Explore The Wrangler's informative model guides and compare trims by brand.",
};

export default function CarsPage() {
  return <CarModelsPage families={carModelFamilies} />;
}