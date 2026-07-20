import Image from "next/image";
import Link from "next/link";
import styles from "../home-page.module.css";
import { shopBrands } from "../data";

export function ShopByBrandSection() {
  return (
    <section className={styles.stockPreview}>
      <div className={styles.sectionHead}>
        <div>
          <p className={styles.redLabel}>Vårt lager</p>
          <h2>Aktuella bilar ska alltid vara nära till hands.</h2>
          <p className={styles.sectionLead}>
            Här kan fem bilar ur vårt egna lager lyftas fram. Märkeskorten leder
            vidare till modellguiderna tills live-lagret kopplas in.
          </p>
        </div>
        <Link href="/stock">Visa hela lagret ›</Link>
      </div>
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