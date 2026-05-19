import Image from "next/image";
import { featuredCars } from "../data";
import styles from "../home-page.module.css";

export default function FeaturedCarsSection() {
  return <section className={styles.section}><div className={styles.sectionHead}><h2>Featured Cars</h2><a>View All Cars ›</a></div><div className={styles.carGrid}>{featuredCars.map((car) => <article className={styles.carCard} key={car.name}><div className={styles.carImage}><Image src={car.image} alt={car.name} fill /></div><div className={styles.carInfo}><h3>{car.name}</h3><h4>{car.trim}</h4><strong>{car.price}</strong><p>{car.meta}</p></div></article>)}</div></section>;
}
