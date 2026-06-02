import Image from "next/image";
import Link from "next/link";
import styles from "../home-page.module.css";
import { shopBrands } from "../data";

export function ShopByBrandSection() {
  return (
    <section className={styles.section}>
      <h2>Handla efter märke</h2>
      <div className={styles.typeGrid}>
        {shopBrands.map((item) => {
          const Icon = item.icon;
          return (
            <Link className={styles.typeCard} href={item.href} key={item.title}>
              <Image src={item.image} alt={item.title} fill />
              <div>
                <Icon aria-hidden="true" />
                <h3>{item.title}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}