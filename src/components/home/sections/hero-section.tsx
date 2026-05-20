import Image from "next/image";
import styles from "../home-page.module.css";

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <Image
        src="/header.png"
        alt="Dodge Ram med svensk och amerikansk flagga"
        fill
        priority
      />
      <div className={styles.heroContent}>
        <p className={styles.kicker}>★ Premium amerikanska bilar, importerade till Sverige</p>
        <h1>
          <span className={styles.noWrap}>American Power.</span>
          <span>Svenska vägar.</span>
        </h1>
        <p className={styles.heroText}>
          Vi importerar och säljer högkvalitativa amerikanska bilar och pickuper —
          byggda för prestanda och för att sticka ut.
        </p>
        <div className={styles.heroButtons}>
          <a className={`${styles.btn} ${styles.red}`}>Visa bilar</a>
          <a className={`${styles.btn} ${styles.outline}`}>Vår historia</a>
        </div>
      </div>
    </section>
  );
}