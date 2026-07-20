import Image from "next/image";
import Link from "next/link";
import { Copy, Edit3, Trash2, TrendingUp } from "lucide-react";
import type { Car } from "@/data/cars";
import styles from "../dashboard.module.css";

type CarsSectionProps = {
  cars: Car[];
  variant?: "table" | "top-performing";
  title?: string;
  limit?: number;
};

export default function CarsSection({
  cars,
  variant = "table",
  title = "Car Listings",
  limit,
}: CarsSectionProps) {
  const visibleCars = typeof limit === "number" ? cars.slice(0, limit) : cars;

  if (variant === "top-performing") {
    return (
      <article className={styles.card}>
        <div className={styles.cardHeader}>
          <h2>{title}</h2>
          <TrendingUp size={17} />
        </div>
        {visibleCars.map((car) => (
          <div className={styles.miniCar} key={car.id}>
            <Image src={car.image} alt="" width={54} height={34} />
            <span>{car.title}</span>
            <em>{car.views.toLocaleString()} views</em>
          </div>
        ))}
        <Link className={styles.link} href="/dashboard/cars">
          View all cars →
        </Link>
      </article>
    );
  }

  return (
    <article className={styles.tableCard}>
      <div className={styles.cardHeader}>
        <h2>{title}</h2>
        <div className={styles.filters}>
          <input placeholder="Search cars..." />
          <button>All Makes</button>
          <button>All Models</button>
          <button>All Years</button>
          <button>All Status</button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {visibleCars.map((car) => (
            <tr key={car.id}>
              <td><Image src={car.image} alt="" width={56} height={36} /></td>
              <td>{car.title}</td>
              <td>{car.make}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>{car.price}</td>
              <td><span className={car.status === "Draft" ? styles.draft : styles.published}>{car.status}</span></td>
              <td><Edit3 size={14} /><Copy size={14} /><Trash2 size={14} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
}