import styles from "./home/home-page.module.css";
import { BenefitsSection, FeaturedCarsSection, HeroSection } from "./home/sections";

export default function HomePage() {
  return (
    <main className={styles.site}>
      <HeroSection />
      <BenefitsSection />
      <FeaturedCarsSection />
    </main>
  );
}
