import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    Clock,
    Camera,
    Headphones,
    MessageCircle,
    Mail,
    MapPin,
    Phone,
    ShieldCheck,
    Users,
    Wrench,
    PlayCircle,
} from "lucide-react";
import SiteHeader from "./site-header";
import styles from "./contact-page.module.css";

const trustItems = [
    {
        icon: ShieldCheck,
        title: "Trygg rådgivning",
        text: "Prata med specialister som kan amerikanska trucks",
    },
    {
        icon: Headphones,
        title: "Snabb återkoppling",
        text: "Vi svarar så snart vi kan, oftast samma arbetsdag.",
    },
    {
        icon: Users,
        title: "Personlig kontakt",
        text: "Rätt person guidar dig hele vägen till rätt bil.",
    },
];

const contactDetails = [
    {
        icon: Phone,
        title: "Telefon",
        lines: ["+46 70 123 45 67"],
    },
    {
        icon: Mail,
        title: "E-post",
        lines: ["info@thewrangler.se"],
    },
    {
        icon: MapPin,
        title: "Adress",
        lines: ["Eskilstunavägen 34", "645 34 Strängnäs"],
    },
    {
        icon: Clock,
        title: "Öppetider",
        lines: ["Mån–Fre: 09:00–18:00", "Lördag: 10:00–15:00", "Söndag: Stängt"],
    },
];

const reasons = [
  {
    icon: ShieldCheck,
    title: "Kvalitet först",
    text: "Varje fordon kontrolleras noggrant innan leverans.",
  },
  {
    icon: MapPin,
    title: "Showroom-känsla",
    text: "Besök en miljö byggd för amerikansk bilkultur.",
  },
  {
    icon: Wrench,
    title: "Service efter köp",
    text: "Vi finns kvar med garanti, verkstad och rådgivning.",
  },
  {
    icon: Users,
    title: "Passionerat team",
    text: "Människor som lever och andas amerikanska fordon.",
  },
];

export default function ContactPage() {
  return (
    <main className={styles.contactSite}>
      <SiteHeader />
      <section className={styles.hero}>
        <Image
          src="/dodge5.png"
          alt="Amerikansk pickup i mörk kvällsmiljö"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroContent}>
          <p className={styles.kicker}>/ Kontakt</p>
          <h1>
            Låt oss prata.<span>Vi hjälper dig.</span>
          </h1>
          <p className={styles.heroText}>
            Har du frågor om våra fordon, vill boka provkörning eller diskutera
            import och finansiering? Hör av dig så hjälper vi dig vidare.
          </p>
          <div className={styles.trustRow}>
            {trustItems.map(({ icon: Icon, title, text }) => (
              <article key={title}>
                <Icon aria-hidden="true" />
                <div>
                  <h2>{title}</h2>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className={styles.contactPanel}
        aria-label="Kontaktformulär och kontaktuppgifter"
      >
        <form className={styles.formCard}>
          <p className={styles.kicker}>Skicka ett meddelande</p>
          <h2>Berätta vad du letar efter.</h2>
          <p>
            Fyll i formuläret så återkommer vi med svar, bokningsförslag eller
            nästa steg för just ditt ärende.
          </p>
          <div className={styles.formGrid}>
            <label>
              <span>Fullständigt namn</span>
              <input type="text" name="name" placeholder="Ditt namn" />
            </label>
            <label>
              <span>E-postadress</span>
              <input type="email" name="email" placeholder="din@email.se" />
            </label>
            <label>
              <span>Telefonnummer</span>
              <input type="tel" name="phone" placeholder="+46" />
            </label>
            <label>
              <span>Ämne</span>
              <select name="subject" defaultValue="">
                <option value="" disabled>
                  Välj ärende
                </option>
                <option>Provkörning</option>
                <option>Lagerbil</option>
                <option>Import</option>
                <option>Finansiering</option>
                <option>Service</option>
              </select>
            </label>
            <label className={styles.messageField}>
              <span>Meddelande</span>
              <textarea
                name="message"
                placeholder="Skriv ditt meddelande"
                rows={6}
              />
            </label>
          </div>
          <div className={styles.formFooter}>
            <label className={styles.consent}>
              <input type="checkbox" name="consent" />
              <span>
                Jag godkänner att The Wrangler kontaktar mig om mitt ärende.
              </span>
            </label>
            <button type="submit">
              Skicka meddelande <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </form>

        <aside className={styles.detailsCard}>
          <p className={styles.kicker}>Kontaktuppgifter</p>
          <h2>Kom i kontakt.</h2>
          <div className={styles.detailList}>
            {contactDetails.map(({ icon: Icon, title, lines }) => (
              <article key={title}>
                <Icon aria-hidden="true" />
                <div>
                  <h3>{title}</h3>
                  {lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className={styles.socials} aria-label="Följ oss">
            <span>Följ oss</span>
            <Link href="/" aria-label="Facebook">
              <MessageCircle size={18} />
            </Link>
            <Link href="/" aria-label="Instagram">
              <Camera size={18} />
            </Link>
            <Link href="/" aria-label="Youtube">
              <PlayCircle size={18} />
            </Link>
          </div>
        </aside>
      </section>

      <section className={styles.showroom}>
        <div>
          <p className={styles.kicker}>/ Besök vårt showroom</p>
          <h2>Se bilarna på plats.</h2>
          <p>
            Kom förbi, ta en kaffe och upplev utvalda amerikanska pickups i en
            miljö som speglar känslan bakom The Wrangler.
          </p>
          <Link
            href="https://maps.google.com"
            className={styles.outlineButton}
          >
            Hitta hit <MapPin size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className={styles.mapCard} aria-label="Karta över showroom">
          <span className={styles.routeOne} />
          <span className={styles.routeTwo} />
          <span className={styles.routeThree} />
          <span className={styles.pin}>
            <MapPin size={34} aria-hidden="true" />
          </span>
          <div className={styles.mapLabel}>
            <strong>The Wrangler</strong>
            <span>American Car Dealer</span>
            <small>Strängnäs, Sweden</small>
          </div>
        </div>
      </section>

      <section className={styles.whySection}>
        <div className={styles.whyImage}>
          <Image
            src="/car5.png"
            alt="Pickup framför The Wrangler showroom"
            fill
            sizes="(max-width: 900px) 100vw, 42vw"
          />
        </div>
        <div className={styles.whyContent}>
          <p className={styles.kicker}>/ Varför The Wrangler?</p>
          <h2>Mer än en bilhall.</h2>
          <p>
            Vi kombinerar amerikansk bilkultur med svensk trygghet, tydliga
            processer och personlig service före, under och efter köpet.
          </p>
          <div className={styles.reasonGrid}>
            {reasons.map(({ icon: Icon, title, text }) => (
              <article key={title}>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
