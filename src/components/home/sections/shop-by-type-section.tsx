import Image from "next/image";
import styles from "../home-page.module.css";
import { shopTypes } from "../data";

export function ShopByTypeSection() {
  return (
    <section className={styles.section}>
      <h2>Shop By Type</h2>
      <div className={styles.typeGrid}>
        {shopTypes.map((item) => {
          const Icon = item.icon;
          return (
            <article className={styles.typeCard} key={item.title}>
              <Image src={item.image} alt={item.title} fill />
              <div>
                <Icon />
                <h3>{item.title}</h3>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}