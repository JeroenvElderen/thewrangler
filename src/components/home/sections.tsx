import Image from "next/image";
import {
  BadgeCheck,
  Car,
  Mail,
  MapPin,
  Phone,
  Settings,
  ShieldCheck,
} from "lucide-react";
import styles from "./home-page.module.css";
import SiteHeader from "../site-header";
import { featuredCars, shopTypes, stats } from "./data";

export function HomeHeader() {
  return <SiteHeader />;
}

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <Image
        src="/header.png"
        alt="Dodge ram with Swedish and an American flag"
        fill
        priority
      />
      <div className={styles.heroContent}>
        <p className={styles.kicker}>
          ★ Premium American cars, imported to Sweden
        </p>
        <h1>
          American Power.<span>Swedish Roads.</span>
        </h1>
        <p className={styles.heroText}>
          We import and sell high-quality American cars and trucks — built for
          performance, made to stand out.
        </p>
        <div className={styles.heroButtons}>
          <a className={`${styles.btn} ${styles.red}`}>View Cars</a>
          <a className={`${styles.btn} ${styles.outline}`}>Our Story</a>
        </div>
      </div>
    </section>
  );
}

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

export function FeaturedCarsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHead}>
        <h2>Featured Cars</h2>
        <a>View All Cars ›</a>
      </div>
      <div className={styles.carGrid}>
        {featuredCars.map((car) => (
          <article className={styles.carCard} key={car.name}>
            <div className={styles.carImage}>
              <Image src={car.image} alt={car.name} fill />
            </div>
            <div className={styles.carInfo}>
              <h3>{car.name}</h3>
              <h4>{car.trim}</h4>
              <strong>{car.price}</strong>
              <p>{car.meta}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className={styles.aboutStrip}>
      <div>
        <p className={styles.redLabel}>The Wrangler</p>
        <h2>More Than Just A Car Dealer</h2>
        <p>
          We’re passionate about American cars. From classic legends to modern
          performance machines — we bring you the best, carefully selected and
          delivered with pride.
        </p>
        <a className={`${styles.btn} ${styles.outline}`}>About Us</a>
      </div>
      <div className={styles.stats}>
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label}>
            <Icon />
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ShopByTypeSection() {
  return (
    <section className={styles.section}>
      <h2>Shop By Type</h2>
      <div className={styles.typeGrid}>
        {shopTypes.map((item) => {
          const Icon = item.icon;
          return (
            <article className={styles.typeCard} key={item.title}>
              <Image src={item.image} alt={item.title} fill />
              <div>
                <Icon />
                <h3>{item.title}</h3>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function NewsletterSection() {
  return (
    <section className={styles.newsletter}>
      <Image
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop"
        alt="Mustang desert road"
        fill
      />
      <div>
        <p className={styles.redLabel}>Stay Updated</p>
        <h2>Get New Cars & Offers</h2>
        <p>
          Subscribe to our newsletter and be the first to know about new
          arrivals and exclusive offers.
        </p>
        <form>
          <input placeholder="Your email address" />
          <button>Subscribe</button>
        </form>
      </div>
    </section>
  );
}

export function HomeFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <span>The</span>
        <strong>Wrangler</strong>
        <em>American Cars</em>
      </div>
      <div>
        <h4>Quick Links</h4>
        <a>Cars</a>
        <a>About Us</a>
        <a>Services</a>
        <a>Financing</a>
        <a>Contact</a>
      </div>
      <div>
        <h4>Services</h4>
        <a>Import</a>
        <a>Sales</a>
        <a>Financing</a>
        <a>Delivery</a>
        <a>Warranty</a>
      </div>
      <div>
        <h4>Contact Us</h4>
        <p>
          <Phone size={14} /> +46 70 123 45 67
        </p>
        <p>
          <Mail size={14} /> info@thewrangler.se
        </p>
        <p>
          <MapPin size={14} /> Stockholm, Sweden
        </p>
      </div>
    </footer>
  );
}
