import { BadgeCheck, Car, Settings, ShieldCheck } from "lucide-react";
import styles from "../home-page.module.css";

export function BenefitsSection() {
  return (
    <section className={styles.benefits}>
      <div>
        <Car />
        <p>
          <strong>Handplockade</strong>
          <span>Kvalitetsbilar</span>
        </p>
      </div>
      <div>
        <ShieldCheck />
        <p>
          <strong>Rättvisa priser</strong>
          <span>Ärliga erbjudanden</span>
        </p>
      </div>
      <div>
        <BadgeCheck />
        <p>
          <strong>Full transparens</strong>
          <span>Inga överraskningar</span>
        </p>
      </div>
      <div>
        <Settings />
        <p>
          <strong>Support efter försäljning</strong>
          <span>Vi finns här för dig</span>
        </p>
      </div>
    </section>
  );
}