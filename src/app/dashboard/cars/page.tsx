import { getCars } from "@/lib/supabase/cars";
import CarsManager from "../_components/cars-manager";

export default async function CarsPage() {
  const cars = await getCars();

  return <CarsManager cars={cars} />;
}
