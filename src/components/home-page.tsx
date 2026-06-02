import styles from "./home/home-page.module.css";
import {
  AboutSection,
  BenefitsSection,
  FeaturedCarsSection,
  HeroSection,
  HomeFooter,
  HomeHeader,
  NewsletterSection,
  ShopByBrandSection,
} from "./home/sections";

export default function HomePage() {
  return (
    <main className={styles.site}>
      <HomeHeader />
      <HeroSection />
      <BenefitsSection />
      <FeaturedCarsSection />
      <AboutSection />
      <ShopByBrandSection />
      <NewsletterSection />
      <HomeFooter />
    </main>
  );
}