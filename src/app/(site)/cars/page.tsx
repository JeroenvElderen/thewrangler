import type { Metadata } from "next";
import CarModelsPage from "@/components/car-models-page";
import { carBrandFilters, carModelFamilies } from "@/data/car-models";

export const metadata: Metadata = {
  title: "Cars & Models | The Wrangler",
  description:
    "Explore The Wrangler's informative model guides and compare trims by brand.",
};

type CarsPageProps = {
  searchParams: Promise<{ brand?: string | string[] }>;
};

function getInitialBrand(brand: string | string[] | undefined) {
  const requestedBrand = Array.isArray(brand) ? brand[0] : brand;

  if (requestedBrand && carBrandFilters.includes(requestedBrand)) {
    return requestedBrand;
  }

  return "All";
}

export default async function CarsPage({ searchParams }: CarsPageProps) {
  const { brand } = await searchParams;
  const initialBrand = getInitialBrand(brand);

  return (
    <CarModelsPage
      key={initialBrand}
      families={carModelFamilies}
      initialBrand={initialBrand}
    />
  );
}