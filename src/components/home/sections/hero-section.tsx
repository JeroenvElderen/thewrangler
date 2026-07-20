import Image from "next/image";
import Link from "next/link";
import styles from "../home-page.module.css";

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <Image
        src="/gmc-header.png"
        alt="GMC pickup framför stadssilhuett"
        fill
        priority
      />
      <div className={styles.heroContent}>
        <p className={styles.kicker}>★ Premium amerikanska bilar, importerade till Sverige</p>
        <h1>
          <span className={styles.headlineLineWhite}>Inte bara ett showroom</span>
          <span className={styles.headlineLine}>en destination.</span>
        </h1>
        <p className={styles.heroText}>
          Välkommen till en av de mest exklusiva destinationerna för amerikanska bilar
          och pickuper. Hos oss står inte den snabba affären i fokus, utan personlig
          service, förtroende och en upplevelse i en klass för sig. Ta plats, koppla
          av med en förstklassig kopp kaffe och upptäck i lugn och ro din nästa
          amerikanska drömbil.
        </p>
        <div className={styles.heroTrustRow}>
          <span>Verifierad historik</span>
          <span>Premium-spec</span>
          <span>Leverans i hela Sverige</span>
        </div>
        <div className={styles.heroButtons}>
          <Link href="/stock" className={`${styles.btn} ${styles.red}`}>Visa bilar</Link>
          <Link href="/contact?subject=service" className={`${styles.btn} ${styles.outline}`}>Boka service</Link>
        </div>
      </div>
      <aside className={styles.authorizedPanel} aria-label="Auktoriserad återförsäljare">
        <p>Auktoriserad återförsäljare</p>
        <div>
          <span className={styles.brandLogoMark}>
            <Image
              src="/GMC-Logo.svg"
              alt="GMC"
              width={150}
              height={34}
              className={styles.brandLogoImage}
            />
          </span>
          <span className={styles.brandLogoMark}>
            <Image
              src="/chevrolet_logo.svg"
              alt="Chevrolet"
              width={210}
              height={98}
              className={styles.brandLogoImage}
            />
          </span>
        </div>
      </aside>
    </section>
  );
}