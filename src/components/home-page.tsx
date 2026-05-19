import styles from "./home/home-page.module.css";
import {
  AboutSection,
  BenefitsSection,
  FeaturedCarsSection,
  HeroSection,
  HomeFooter,
  HomeHeader,
  NewsletterSection,
  ShopByTypeSection,
} from "./home/sections";

export default function HomePage() {
  return (
    <main className={styles.site}>
      <HomeHeader />
      <HeroSection />
      <BenefitsSection />
      <FeaturedCarsSection />
      <AboutSection />
      <ShopByTypeSection />
      <NewsletterSection />
      <HomeFooter />
    </main>
  );
}