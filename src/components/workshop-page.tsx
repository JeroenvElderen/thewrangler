import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BatteryCharging,
  CalendarDays,
  CarFront,
  CheckCircle2,
  CircleDollarSign,
  ClipboardCheck,
  Clock3,
  Disc3,
  Gauge,
  Medal,
  Settings,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  Wrench,
} from "lucide-react";
import SiteHeader from "./site-header";
import styles from "./workshop-page.module.css";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Specialister på trucks",
    text: "Erfarna tekniker som kan amerikanska pickups, SUV:ar och 4x4-bilar.",
  },
  {
    icon: Settings,
    title: "Kvalitetsdelar",
    text: "Reservdelar och vätskor valda för lång livslängd och rätt prestanda.",
  },
  {
    icon: Clock3,
    title: "Snabbt & tydligt",
    text: "Vi planerar jobbet, håller dig uppdaterad och får dig tillbaka på vägen.",
  },
  {
    icon: CircleDollarSign,
    title: "Rimliga priser",
    text: "Tydliga kostnadsförslag, transparent dialog och inga överraskningar.",
  },
];

const services = [
  {
    icon: Wrench,
    title: "Service",
    text: "Oljebyte, filter, vätskor och kontroller som håller din truck i toppform.",
  },
  {
    icon: Disc3,
    title: "Bromsar",
    text: "Inspektion och byte av belägg, skivor och bromskomponenter.",
  },
  {
    icon: Gauge,
    title: "Diagnostik",
    text: "Felsökning av motor, drivlina, elektronik och prestandarelaterade system.",
  },
  {
    icon: Settings,
    title: "Chassi & styrning",
    text: "Vi åtgärdar vibrationer, leder, stötdämpare och styrningsdetaljer.",
  },
  {
    icon: Truck,
    title: "Däck & hjul",
    text: "Montering, balansering och hjulinställning för en tryggare körning.",
  },
  {
    icon: BatteryCharging,
    title: "Elsystem",
    text: "Från batterier till avancerad eldiagnostik — vi hittar felet.",
  },
  {
    icon: Sparkles,
    title: "Avgas & ljud",
    text: "Reparationer och uppgraderingar för rätt flöde, ljud och känsla.",
  },
  {
    icon: CarFront,
    title: "Custombyggen",
    text: "Tillbehör, lift kits, ljusramper och personliga uppgraderingar.",
  },
];

const reasons = [
  {
    icon: Medal,
    title: "Certifierad kunskap",
    text: "Utbildad personal med praktisk erfarenhet av amerikanska fordon.",
  },
  {
    icon: Star,
    title: "Modern utrustning",
    text: "Rätt verktyg och diagnosutrustning för exakta beslut.",
  },
  {
    icon: ShieldCheck,
    title: "Ärlig service",
    text: "Vi förklarar vad som behövs, vad som kan vänta och varför.",
  },
  {
    icon: CheckCircle2,
    title: "Nöjdhetsfokus",
    text: "Din truck, vår omsorg — från bokning till färdig leverans.",
  },
];

const process = [
  {
    step: "01",
    icon: CalendarDays,
    title: "Boka tid",
    text: "Kontakta oss online eller via telefon och berätta vad du behöver hjälp med.",
  },
  {
    step: "02",
    icon: ClipboardCheck,
    title: "Vi kontrollerar",
    text: "Vi går igenom trucken och tar fram ett tydligt förslag.",
  },
  {
    step: "03",
    icon: Wrench,
    title: "Vi arbetar",
    text: "Teamet utför arbetet med noggrannhet, rätt delar och rätt verktyg.",
  },
  {
    step: "04",
    icon: Truck,
    title: "Tillbaka på vägen",
    text: "Du får en genomgång av jobbet och kan köra vidare med trygg känsla.",
  },
];

export default function WorkshopPage() {
  return (
    <main className={styles.workshopSite}>
      <SiteHeader />

      <section className={styles.hero}>
        <Image
          src="/dodge5.png"
          alt="Amerikansk pickup i The Wrangler verkstad"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroContent}>
          <p className={styles.kicker}>/ Verkstad</p>
          <h1>
            Expertvård.<span>Byggd för trucks.</span>
          </h1>
          <p className={styles.heroText}>
            Vår verkstad är utrustad för att ta hand om allt din amerikanska
            truck behöver. Från löpande service till komplex felsökning och
            customarbete — vi hjälper dig hela vägen.
          </p>
        </div>
      </section>

      <section className={styles.trustStrip} aria-label="Verkstadsfördelar">
        {trustItems.map(({ icon: Icon, title, text }) => (
          <article key={title}>
            <Icon aria-hidden="true" />
            <div>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className={styles.servicesPanel}>
        <div className={styles.panelKicker}>/ Våra verkstadstjänster</div>
        <div className={styles.sectionHeading}>
          <span />
          <div>
            <h2>Varje service. Varje detalj.</h2>
            <p>Komplett omsorg för din truck, under ett tak.</p>
          </div>
          <span />
        </div>
        <div className={styles.serviceGrid}>
          {services.map(({ icon: Icon, title, text }) => (
            <article className={styles.serviceCard} key={title}>
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
              <Link href="/contact">
                Läs mer <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.whyPanel}>
        <div className={styles.shopImage}>
          <Image
            src="/car5.png"
            alt="The Wrangler servicehall med verktyg och amerikanska bilar"
            fill
            sizes="(max-width: 900px) 100vw, 42vw"
          />
        </div>
        <div className={styles.whyContent}>
          <p className={styles.kicker}>/ Varför välja vår verkstad?</p>
          <h2>
            Erfarenhet du kan <span>lita på.</span>
          </h2>
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

      <section className={styles.processPanel}>
        <p className={styles.panelKicker}>/ Så fungerar det</p>
        <div className={styles.processGrid}>
          {process.map(({ step, icon: Icon, title, text }, index) => (
            <article className={styles.processItem} key={step}>
              <strong>{step}</strong>
              <Icon aria-hidden="true" />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              {index < process.length - 1 ? (
                <ArrowRight className={styles.processArrow} aria-hidden="true" />
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className={styles.ctaPanel}>
        <div>
          <h2>Redo att serva din truck?</h2>
          <p>
            Boka din verkstadstid idag och låt vårt team ta hand om resten.
          </p>
        </div>
        <div className={styles.ctaActions}>
          <Link href="/contact" className={styles.primaryButton}>
            Boka service <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link href="/contact" className={styles.secondaryButton}>
            Kontakta oss
          </Link>
        </div>
        <Image
          src="/dodge1.png"
          alt="Ram pickup redo för service"
          fill
          sizes="100vw"
        />
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <Image
            src="/Wrangler_Logo.svg"
            alt="The Wrangler"
            width={150}
            height={100}
          />
          <p>Amerikanska trucks. Importerade med passion. Byggda för vägen framåt.</p>
        </div>
        <div>
          <h4>Snabblänkar</h4>
          <Link href="/cars">Bilar</Link>
          <Link href="/about">Om oss</Link>
          <Link href="/services">Tjänster</Link>
          <Link href="/verkstad">Verkstad</Link>
          <Link href="/contact">Kontakt</Link>
        </div>
        <div>
          <h4>Tjänster</h4>
          <Link href="/contact">Service</Link>
          <Link href="/contact">Reparationer</Link>
          <Link href="/contact">Diagnostik</Link>
          <Link href="/contact">Däck & hjul</Link>
          <Link href="/contact">Custombyggen</Link>
        </div>
        <div>
          <h4>Kontakt</h4>
          <p>+46 70 123 45 67</p>
          <p>info@thewrangler.se</p>
          <p>Strängnäs, Sweden</p>
        </div>
        <div>
          <h4>Öppettider</h4>
          <p>Mån–Fre: 08:00–17:00</p>
          <p>Lördag: 09:00–14:00</p>
          <p>Söndag: Stängt</p>
        </div>
      </footer>
    </main>
  );
}