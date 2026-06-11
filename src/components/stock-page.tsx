import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Gauge, MapPin, ShieldCheck, SlidersHorizontal, Sparkles } from "lucide-react";
import SiteHeader from "./site-header";
import styles from "./stock-page.module.css";

type StockVehicle = {
  year: number;
  name: string;
  trim: string;
  price: string;
  mileage: string;
  fuel: string;
  image: string;
  badge: string;
  location: string;
};

const stockVehicles: StockVehicle[] = [
  { year: 2022, name: "Ford F-150", trim: "Lariat 4x4 SuperCrew", price: "€59,950", mileage: "45,000 KM", fuel: "Petrol", image: "/ford1.png", badge: "Ready now", location: "Stockholm" },
  { year: 2021, name: "RAM 1500", trim: "Limited Crew Cab", price: "€67,500", mileage: "38,600 KM", fuel: "Petrol", image: "/dodge1.png", badge: "Premium spec", location: "Strängnäs" },
  { year: 2023, name: "Chevrolet Silverado", trim: "1500 LTZ Z71", price: "€62,900", mileage: "22,800 KM", fuel: "Diesel", image: "/chevy.png", badge: "Low mileage", location: "Stockholm" },
  { year: 2022, name: "GMC Sierra 1500", trim: "AT4 Crew Cab", price: "€63,250", mileage: "29,100 KM", fuel: "Diesel", image: "/gmc.png", badge: "Inspected", location: "Strängnäs" },
  { year: 2021, name: "Dodge RAM 2500", trim: "Laramie 4x4", price: "€58,950", mileage: "61,000 KM", fuel: "Diesel", image: "/dodge2.png", badge: "Tow ready", location: "Stockholm" },
  { year: 2020, name: "Ford F-150 Raptor", trim: "SuperCrew 4x4", price: "€74,900", mileage: "36,400 KM", fuel: "Petrol", image: "/dodge3.png", badge: "Performance", location: "Strängnäs" },
  { year: 2019, name: "Jeep Gladiator", trim: "Rubicon 4x4", price: "€49,950", mileage: "47,200 KM", fuel: "Petrol", image: "/dodge4.png", badge: "Off-road", location: "Stockholm" },
  { year: 2022, name: "Tesla Model Y", trim: "Long Range AWD", price: "€44,900", mileage: "28,000 KM", fuel: "Electric", image: "/car1.png", badge: "Electric", location: "Strängnäs" },
  { year: 2021, name: "Ford Explorer", trim: "Platinum AWD", price: "€36,900", mileage: "52,000 KM", fuel: "Petrol", image: "/car2.png", badge: "Family SUV", location: "Stockholm" },
  { year: 2020, name: "Chevrolet Tahoe", trim: "Premier AWD", price: "€64,900", mileage: "71,000 KM", fuel: "Petrol", image: "/car3.png", badge: "Seven seats", location: "Strängnäs" },
  { year: 2021, name: "Cadillac Escalade", trim: "Premium Luxury", price: "€89,900", mileage: "39,500 KM", fuel: "Petrol", image: "/car4.png", badge: "Luxury", location: "Stockholm" },
  { year: 2020, name: "Ford Mustang GT", trim: "5.0L V8", price: "€38,500", mileage: "33,700 KM", fuel: "Petrol", image: "/car5.png", badge: "V8", location: "Strängnäs" },
];

const filters = [
  "All Makes",
  "All Models",
  "All Body Types",
  "All Fuel Types",
  "€10,000 - €80,000+",
  "2015 - 2024",
  "0 - 200,000+ KM",
];

const highlights = ["Verified history", "Swedish delivery", "Trade-ins welcome"];

export default function StockPage() {
  return (
    <main className={styles.site}>
      <SiteHeader />
      <section className={styles.hero}>
        <Image
          src="/gmc-header.png"
          alt="American pickup outside The Wrangler showroom"
          fill
          priority
          className={styles.heroImage}
          sizes="100vw"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.kicker}>/ Inventory</p>
          <h1>
            Premium stock.<span>Ready for Swedish roads.</span>
          </h1>
          <p className={styles.lead}>
            Browse inspected American trucks, SUVs and performance cars selected with
            the same premium Wrangler feel you see across the showroom.
          </p>
          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.primaryButton}>
              Book a viewing <ArrowRight aria-hidden="true" />
            </Link>
            <Link href="/cars" className={styles.secondaryButton}>
              Model guides
            </Link>
          </div>
          <div className={styles.heroStats}>
            {highlights.map((highlight) => (
              <span key={highlight}>{highlight}</span>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.sectionIntro}>
          <div>
            <p className={styles.kicker}>/ Available vehicles</p>
            <h2>
              Handpicked <span>American metal.</span>
            </h2>
          </div>
          <p>
            Every listing is presented in a cleaner showroom-style card so the
            vehicle, specification and next step stay easy to scan.
          </p>
        </div>

        <div className={styles.toolbar}>
          <span>
            <strong>{stockVehicles.length}</strong> vehicles found
          </span>
          <button className={styles.sortButton} type="button">
            Newest first
          </button>
        </div>

        <div className={styles.layout}>
          <aside className={styles.filters} aria-label="Inventory filters">
            <div className={styles.filtersHead}>
              <span>
                <SlidersHorizontal aria-hidden="true" />
                <h2>Filters</h2>
              </span>
              <button type="button">Clear all</button>
            </div>
            {filters.map((item) => (
              <label key={item} className={styles.filterField}>
                <span>{item}</span>
                <select aria-label={item} defaultValue={item}>
                  <option>{item}</option>
                </select>
              </label>
            ))}
            <button className={styles.applyButton} type="button">
              Apply filters
            </button>
          </aside>

          <div className={styles.resultsColumn}>
            <div className={styles.grid}>
              {stockVehicles.map((vehicle) => (
                <article key={`${vehicle.name}-${vehicle.year}`} className={styles.card}>
                  <div className={styles.imageWrap}>
                    <Image
                      src={vehicle.image}
                      alt={`${vehicle.year} ${vehicle.name}`}
                      fill
                      sizes="(max-width: 700px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <span className={styles.tag}>{vehicle.badge}</span>
                    <span className={styles.year}>{vehicle.year}</span>
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.cardTitleRow}>
                      <h3>{vehicle.name}</h3>
                      <p className={styles.price}>{vehicle.price}</p>
                    </div>
                    <p className={styles.subtitle}>{vehicle.trim}</p>
                    <div className={styles.metaGrid}>
                      <span>
                        <Gauge aria-hidden="true" />
                        {vehicle.mileage}
                      </span>
                      <span>
                        <Sparkles aria-hidden="true" />
                        {vehicle.fuel}
                      </span>
                      <span>
                        <MapPin aria-hidden="true" />
                        {vehicle.location}
                      </span>
                    </div>
                    <Link href="/contact" className={styles.cardLink}>
                      Enquire now <ArrowRight aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            <div className={styles.pagination} aria-label="Pagination">
              <span className={styles.activePage}>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>…</span>
              <span>8</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.tradeIn}>
        <div className={styles.tradeIcon}>
          <ShieldCheck aria-hidden="true" />
        </div>
        <div>
          <p className={styles.kicker}>/ Upgrade support</p>
          <h3>Trade-in or order something specific?</h3>
          <p>
            We can value your current vehicle, source a custom American import
            and arrange delivery anywhere in Sweden.
          </p>
        </div>
        <Link href="/contact" className={styles.tradeButton}>
          Value my trade-in <ArrowRight aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
