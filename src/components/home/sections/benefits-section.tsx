import { BadgeCheck, Car, Settings, ShieldCheck } from "lucide-react";
import styles from "../home-page.module.css";

export function BenefitsSection() {
  return (
    <section className={styles.benefits}>
      <div>
        <Car />
        <p>
          <strong>Handplockat premiumurval</strong>
          <span>Endast modeller vi själva står bakom</span>
        </p>
      </div>
      <div>
        <ShieldCheck />
        <p>
          <strong>Trygg affär</strong>
          <span>Tydliga villkor och transparent process</span>
        </p>
      </div>
      <div>
        <BadgeCheck />
        <p>
          <strong>Dokumenterad kvalitet</strong>
          <span>Historik, skick och specifikation i fokus</span>
        </p>
      </div>
      <div>
        <Settings />
        <p>
          <strong>Personlig service</strong>
          <span>Rådgivning före, under och efter köp</span>
        </p>
      </div>
    </section>
  );
}