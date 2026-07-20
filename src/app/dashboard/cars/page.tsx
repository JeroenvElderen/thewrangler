import { Plus } from "lucide-react";

import styles from "../dashboard.module.css";
import { cars } from "@/data/cars";
import CarsSection from "../_components/cars-section";

export default function CarsPage() {
  return (
    <>
      <div className={styles.heroPanel}><div><p className={styles.eyebrow}>Inventory CMS</p><h1>Cars</h1><p>Manage all cars, add new listings, or edit existing vehicles.</p></div><button className={styles.primary}><Plus size={15} /> Add New Car</button></div>
      <CarsSection cars={cars} />
    </>
  );
}
