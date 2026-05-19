import { BadgeCheck, Car, Settings, ShieldCheck } from "lucide-react";
import styles from "../home-page.module.css";

export default function BenefitsSection() {
  const items = [
    { icon: Car, title: "Handpicked", subtitle: "Quality cars" },
    { icon: ShieldCheck, title: "Fair Prices", subtitle: "Honest deals" },
    { icon: BadgeCheck, title: "Full Transparency", subtitle: "No surprises" },
    { icon: Settings, title: "After-Sale Support", subtitle: "We’re here for you" },
  ];

  return <section className={styles.benefits}>{items.map(({ icon: Icon, title, subtitle }) => <div key={title}><Icon /><p><strong>{title}</strong><span>{subtitle}</span></p></div>)}</section>;
}
