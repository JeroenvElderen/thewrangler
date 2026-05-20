import { BadgeCheck, Car, Settings, ShieldCheck } from "lucide-react";
import styles from "../home-page.module.css";

export function BenefitsSection() {
  return (
    <section className={styles.benefits}>
      <div>
        <Car />
        <p>
          <strong>Handpicked</strong>
          <span>Quality cars</span>
        </p>
      </div>
      <div>
        <ShieldCheck />
        <p>
          <strong>Fair Prices</strong>
          <span>Honest deals</span>
        </p>
      </div>
      <div>
        <BadgeCheck />
        <p>
          <strong>Full Transparency</strong>
          <span>No surprises</span>
        </p>
      </div>
      <div>
        <Settings />
        <p>
          <strong>After-Sale Support</strong>
          <span>We’re here for you</span>
        </p>
      </div>
    </section>
  );
}