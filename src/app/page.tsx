import Image from "next/image";
import {
  Car,
  ShieldCheck,
  BadgeCheck,
  Settings,
  Star,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const featuredCars = [
  {
    name: "2021 Ford F-150",
    trim: "Lariat 5.0 V8",
    price: "589 000 kr",
    meta: "18 000 km / Automatic",
    image:
      "/car1.png",
  },
  {
    name: "2020 Dodge Challenger",
    trim: "SRT Hellcat",
    price: "899 000 kr",
    meta: "12 500 km / Automatic",
    image:
      "/car2.png",
  },
  {
    name: "2019 Chevrolet",
    trim: "Camaro SS",
    price: "499 000 kr",
    meta: "22 000 km / Automatic",
    image:
      "/car3.png",
  },
  {
    name: "2021 Jeep Grand",
    trim: "Cherokee SRT",
    price: "699 000 kr",
    meta: "15 000 km / Automatic",
    image:
      "/car5.png",
  },
];

const shopTypes = [
  {
    title: "Muscle Cars",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop",
    icon: Car,
  },
  {
    title: "Pickup Trucks",
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1600&auto=format&fit=crop",
    icon: BadgeCheck,
  },
  {
    title: "SUVs",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1600&auto=format&fit=crop",
    icon: ShieldCheck,
  },
  {
    title: "Classics",
    image:
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=1600&auto=format&fit=crop",
    icon: Settings,
  },
];

export default function Home() {
  return (
    <main className="site">
      <header className="navbar">
        <div className="logo">
          <span>The</span>
          <strong>Wrangler</strong>
          <em>American Cars</em>
        </div>

        <nav>
          <a>Cars</a>
          <a>About Us</a>
          <a>Services</a>
          <a>Financing</a>
          <a>Contact</a>
        </nav>

        <button>View Inventory</button>
      </header>

      <section className="hero">
        <Image src="/header.png" alt="Dodge ram with Swedish and an American flag" fill priority />

        <div className="hero-content">
          <p className="kicker">★ Premium American cars, imported to Sweden</p>
          <h1>
            American Power.
            <span>Swedish Roads.</span>
          </h1>
          <p className="hero-text">
            We import and sell high-quality American cars and trucks — built for
            performance, made to stand out.
          </p>

          <div className="hero-buttons">
            <a className="btn red">View Cars</a>
            <a className="btn outline">Our Story</a>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div>
          <Car />
          <p><strong>Handpicked</strong><span>Quality cars</span></p>
        </div>
        <div>
          <ShieldCheck />
          <p><strong>Fair Prices</strong><span>Honest deals</span></p>
        </div>
        <div>
          <BadgeCheck />
          <p><strong>Full Transparency</strong><span>No surprises</span></p>
        </div>
        <div>
          <Settings />
          <p><strong>After-Sale Support</strong><span>We’re here for you</span></p>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Featured Cars</h2>
          <a>View All Cars ›</a>
        </div>

        <div className="car-grid">
          {featuredCars.map((car) => (
            <article className="car-card" key={car.name}>
              <div className="car-image">
                <Image src={car.image} alt={car.name} fill />
              </div>
              <div className="car-info">
                <h3>{car.name}</h3>
                <h4>{car.trim}</h4>
                <strong>{car.price}</strong>
                <p>{car.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-strip">
        <div>
          <p className="red-label">The Wrangler</p>
          <h2>More Than Just A Car Dealer</h2>
          <p>
            We’re passionate about American cars. From classic legends to modern
            performance machines — we bring you the best, carefully selected and
            delivered with pride.
          </p>
          <a className="btn outline">About Us</a>
        </div>

        <div className="stats">
          <div><Car /><strong>500+</strong><span>Cars imported</span></div>
          <div><Settings /><strong>10+</strong><span>Years experience</span></div>
          <div><Star /><strong>100%</strong><span>Passion</span></div>
          <div><ShieldCheck /><strong>0</strong><span>Compromises</span></div>
        </div>
      </section>

      <section className="section">
        <h2>Shop By Type</h2>

        <div className="type-grid">
          {shopTypes.map((item) => {
            const Icon = item.icon;
            return (
              <article className="type-card" key={item.title}>
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

      <section className="newsletter">
        <Image src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop" alt="Mustang desert road" fill />
        <div>
          <p className="red-label">Stay Updated</p>
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

      <footer className="footer">
        <div className="logo">
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
          <p><Phone size={14} /> +46 70 123 45 67</p>
          <p><Mail size={14} /> info@thewrangler.se</p>
          <p><MapPin size={14} /> Stockholm, Sweden</p>
        </div>

      </footer>
    </main>
  );
}