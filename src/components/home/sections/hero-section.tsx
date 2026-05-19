import Image from "next/image";
import styles from "../home-page.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <Image src="/header.png" alt="Dodge ram with Swedish and an American flag" fill priority />
      <div className={styles.heroContent}>
        <p className={styles.kicker}>★ Premium American cars, imported to Sweden</p>
        <h1>American Power.<span>Swedish Roads.</span></h1>
        <p className={styles.heroText}>We import and sell high-quality American cars and trucks — built for performance, made to stand out.</p>
      </div>
    </section>
  );
}
