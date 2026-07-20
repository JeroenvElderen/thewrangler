import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import styles from "../home-page.module.css";

export function NewsletterSection() {
  return (
    <section className={styles.contactStrip}>
      <Image src="/dodge5.png" alt="Amerikansk pickup i showroom-miljö" fill />
      <div className={styles.contactOverlay} />
      <div className={styles.contactCopy}>
        <p className={styles.redLabel}>Kontakta oss</p>
        <h2>Strängnäs, Sverige</h2>
        <p>Redo att prata amerikansk bil, lager eller service? Hör av dig så hjälper vi dig vidare.</p>
      </div>
      <div className={styles.contactCards}>
        <a href="tel:+46767742502"><Phone aria-hidden="true" /><span>+46 76 774 25 02</span></a>
        <a href="mailto:info@thewrangler.se"><Mail aria-hidden="true" /><span>info@thewrangler.se</span></a>
        <Link href="/contact"><MapPin aria-hidden="true" /><span>Boka besök eller service</span></Link>
      </div>
    </section>
  );
}