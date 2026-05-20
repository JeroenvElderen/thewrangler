import Image from "next/image";
import styles from "../home-page.module.css";
import { featuredCars } from "../data";

export function FeaturedCarsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHead}>
        <h2>Utvalda bilar</h2>
        <a>Visa alla bilar ›</a>
      </div>
      <div className={styles.carGrid}>
        {featuredCars.map((car) => (
          <article className={styles.carCard} key={car.name}>
            <div className={styles.carImage}>
              <Image src={car.image} alt={car.name} fill />
            </div>
            <div className={styles.carInfo}>
              <h3>{car.name}</h3>
              <h4>{car.trim}</h4>
              <strong>{car.price}</strong>
              <p>{car.meta}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}