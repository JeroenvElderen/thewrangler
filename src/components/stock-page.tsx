import Image from "next/image";
import SiteHeader from "./site-header";
import styles from "./stock-page.module.css";
import { HomeFooter } from "./home/sections/home-footer";

type StockVehicle = {
  year: number;
  name: string;
  trim: string;
  price: string;
  mileage: string;
  fuel: string;
  image: string;
};

const stockVehicles: StockVehicle[] = [
  { year: 2022, name: "Ford F-150", trim: "Lariat 4x4 SuperCrew", price: "€59,950", mileage: "45,000 KM", fuel: "Petrol", image: "/ford1.png" },
  { year: 2021, name: "RAM 1500", trim: "Limited Crew Cab", price: "€67,500", mileage: "38,600 KM", fuel: "Petrol", image: "/dodge1.png" },
  { year: 2023, name: "Chevrolet Silverado", trim: "1500 LTZ Z71", price: "€62,900", mileage: "22,800 KM", fuel: "Diesel", image: "/chevy.png" },
  { year: 2022, name: "GMC Sierra 1500", trim: "AT4 Crew Cab", price: "€63,250", mileage: "29,100 KM", fuel: "Diesel", image: "/gmc.png" },
  { year: 2021, name: "Dodge RAM 2500", trim: "Laramie 4x4", price: "€58,950", mileage: "61,000 KM", fuel: "Diesel", image: "/dodge2.png" },
  { year: 2020, name: "Ford F-150 Raptor", trim: "SuperCrew 4x4", price: "€74,900", mileage: "36,400 KM", fuel: "Petrol", image: "/dodge3.png" },
  { year: 2019, name: "Jeep Gladiator", trim: "Rubicon 4x4", price: "€49,950", mileage: "47,200 KM", fuel: "Petrol", image: "/dodge4.png" },
  { year: 2022, name: "Tesla Model Y", trim: "Long Range AWD", price: "€44,900", mileage: "28,000 KM", fuel: "Electric", image: "/car1.png" },
  { year: 2021, name: "Ford Explorer", trim: "Platinum AWD", price: "€36,900", mileage: "52,000 KM", fuel: "Petrol", image: "/car2.png" },
  { year: 2020, name: "Chevrolet Tahoe", trim: "Premier AWD", price: "€64,900", mileage: "71,000 KM", fuel: "Petrol", image: "/car3.png" },
  { year: 2021, name: "Cadillac Escalade", trim: "Premium Luxury", price: "€89,900", mileage: "39,500 KM", fuel: "Petrol", image: "/car4.png" },
  { year: 2020, name: "Ford Mustang GT", trim: "5.0L V8", price: "€38,500", mileage: "33,700 KM", fuel: "Petrol", image: "/car5.png" },
];

export default function StockPage() {
  return (
    <main className={styles.site}>
      <SiteHeader />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.kicker}>/ Cars</p>
          <h1>
            Inventory<span>.</span>
          </h1>
          <p>
            Browse our handpicked selection of premium American trucks and cars.
            Built for performance. Chosen for quality.
          </p>
        </div>
      </section> 

      <section className={styles.content}>
        <div className={styles.toolbar}>
          <span>
            <strong>{stockVehicles.length}</strong> vehicles found
          </span>
          <button className={styles.sortButton}>Newest first</button>
        </div>

        <div className={styles.layout}>
          <aside className={styles.filters}>
            <div className={styles.filtersHead}>
              <h2>Filters</h2>
              <button>Clear all</button>
            </div>
            {[
              "All Makes",
              "All Models",
              "All Body Types",
              "All Fuel Types",
              "€10,000 - €80,000+",
              "2015 - 2024",
              "0 - 200,000+ KM",
            ].map((item) => (
              <label key={item} className={styles.filterField}>
                <span>{item}</span>
                <select aria-label={item}>
                  <option>{item}</option>
                </select>
              </label>
            ))}
            <button className={styles.applyButton}>Apply filters</button>
          </aside>

          <div>
            <div className={styles.grid}>
              {stockVehicles.map((vehicle) => (
                <article key={`${vehicle.name}-${vehicle.year}`} className={styles.card}>
                  <div className={styles.imageWrap}>
                    <span className={styles.tag}>{vehicle.year}</span>
                    <Image src={vehicle.image} alt={vehicle.name} fill sizes="(max-width: 768px) 100vw, 25vw" />
                  </div>
                  <div className={styles.cardBody}>
                    <h3>{vehicle.name}</h3>
                    <p className={styles.subtitle}>{vehicle.trim}</p>
                    <p className={styles.price}>{vehicle.price}</p>
                    <p className={styles.meta}>
                      {vehicle.mileage} · {vehicle.fuel}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <div className={styles.pagination}>1 2 3 4 … 8</div>
          </div>
        </div>
      </section>

      <section className={styles.tradeIn}>
        <div>
          <h3>Trade-in or upgrade?</h3>
          <p>We offer competitive trade-in prices and can help find your next vehicle.</p>
        </div>
        <button>Value my trade-in</button>
      </section>

      <HomeFooter />
    </main>
  );
}