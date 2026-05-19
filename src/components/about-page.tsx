import styles from "./about-page.module.css";
import { AboutHeroSection, TeamSection } from "./about/sections";

export default function AboutPage() {
  return (
    <main className={styles.aboutSite}>
      <AboutHeroSection />
      <TeamSection />
    </main>
  );
}
