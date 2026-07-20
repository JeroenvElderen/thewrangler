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
  { year: 2022, name: "Ford F-150", trim: "Lariat 4x4 SuperCrew", price: "€59,950", mileage: "45,000 KM", fuel: "Bensin", image: "/ford1.png", badge: "Redo nu", location: "Stockholm" },
  { year: 2021, name: "RAM 1500", trim: "Limited Crew Cab", price: "€67,500", mileage: "38,600 KM", fuel: "Bensin", image: "/dodge1.png", badge: "Premium-spec", location: "Strängnäs" },
  { year: 2023, name: "Chevrolet Silverado", trim: "1500 LTZ Z71", price: "€62,900", mileage: "22,800 KM", fuel: "Diesel", image: "/chevy.png", badge: "Låg mil", location: "Stockholm" },
  { year: 2022, name: "GMC Sierra 1500", trim: "AT4 Crew Cab", price: "€63,250", mileage: "29,100 KM", fuel: "Diesel", image: "/gmc.png", badge: "Kontrollerad", location: "Strängnäs" },
  { year: 2021, name: "Dodge RAM 2500", trim: "Laramie 4x4", price: "€58,950", mileage: "61,000 KM", fuel: "Diesel", image: "/dodge2.png", badge: "Dragklar", location: "Stockholm" },
  { year: 2020, name: "Ford F-150 Raptor", trim: "SuperCrew 4x4", price: "€74,900", mileage: "36,400 KM", fuel: "Bensin", image: "/dodge3.png", badge: "Prestanda", location: "Strängnäs" },
  { year: 2019, name: "Jeep Gladiator", trim: "Rubicon 4x4", price: "€49,950", mileage: "47,200 KM", fuel: "Bensin", image: "/dodge4.png", badge: "Offroad", location: "Stockholm" },
  { year: 2022, name: "Tesla Model Y", trim: "Long Range AWD", price: "€44,900", mileage: "28,000 KM", fuel: "El", image: "/car1.png", badge: "El", location: "Strängnäs" },
  { year: 2021, name: "Ford Explorer", trim: "Platinum AWD", price: "€36,900", mileage: "52,000 KM", fuel: "Bensin", image: "/car2.png", badge: "Familje-SUV", location: "Stockholm" },
  { year: 2020, name: "Chevrolet Tahoe", trim: "Premier AWD", price: "€64,900", mileage: "71,000 KM", fuel: "Bensin", image: "/car3.png", badge: "Sju säten", location: "Strängnäs" },
  { year: 2021, name: "Cadillac Escalade", trim: "Premium Lyx", price: "€89,900", mileage: "39,500 KM", fuel: "Bensin", image: "/car4.png", badge: "Lyx", location: "Stockholm" },
  { year: 2020, name: "Ford Mustang GT", trim: "5.0L V8", price: "€38,500", mileage: "33,700 KM", fuel: "Bensin", image: "/car5.png", badge: "V8", location: "Strängnäs" },
];

const filters = [
  "Alla märken",
  "Alla modeller",
  "Alla karosstyper",
  "Alla drivmedel",
  "€10,000 - €80,000+",
  "2015 - 2024",
  "0 - 200,000+ KM",
];

export default function StockPage() {
  return (
    <main className={styles.site}>
      <SiteHeader />
      <section className={styles.content}>
        <div className={styles.sectionIntro}>
          <div>
            <p className={styles.kicker}>/ Tillgängliga bilar</p>
            <h2>
              Handplockade <span>amerikanska bilar.</span>
            </h2>
          </div>
          <p>
            Varje bil presenteras tydligt med bild, specifikation och nästa steg så
            att lagret är enkelt att överblicka.
          </p>
        </div>

        <div className={styles.toolbar}>
          <span>
            <strong>{stockVehicles.length}</strong> bilar i lager
          </span>
          <button className={styles.sortButton} type="button">
            Nyast först
          </button>
        </div>

        <div className={styles.layout}>
          <aside className={styles.filters} aria-label="Lagerfilter">
            <div className={styles.filtersHead}>
              <span>
                <SlidersHorizontal aria-hidden="true" />
                <h2>Filter</h2>
              </span>
              <button type="button">Rensa</button>
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
              Visa resultat
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
                      Kontakta oss <ArrowRight aria-hidden="true" />
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
          <p className={styles.kicker}>/ Inbyte eller import</p>
          <h3>Vill du byta in eller beställa något särskilt?</h3>
          <p>
            Vi kan värdera din nuvarande bil, hitta rätt amerikansk import och ordna
            leverans i hela Sverige.
          </p>
        </div>
        <Link href="/contact" className={styles.tradeButton}>
          Värdera min bil <ArrowRight aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
