import Image from "next/image";
import Link from "next/link";
import {
  Armchair,
  BadgeDollarSign,
  CarFront,
  CheckCircle2,
  ChevronRight,
  CircleGauge,
  Cpu,
  Gauge,
  Headphones,
  MapPin,
  Mountain,
  Phone,
  ShieldCheck,
  Truck,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { RamEquipmentIcon, RamInfoPage } from "@/data/ram-1500-pages";
import SiteHeader from "./site-header";
import styles from "./ram-1500-info-page.module.css";

const equipmentIcons: Record<RamEquipmentIcon, LucideIcon> = {
  armchair: Armchair,
  cpu: Cpu,
  gauge: Gauge,
  shield: ShieldCheck,
  truck: Truck,
};

function getHeroHighlights(page: RamInfoPage) {
  return [
    {
      icon: ShieldCheck,
      title: `Byggd för ${page.trim}`,
      text: page.headline,
    },
    {
      icon: Headphones,
      title: "Stor kapacitet",
      text: page.performanceGroups[1]?.items[0] ?? "Kraft för både arbete och vardag.",
    },
    {
      icon: Mountain,
      title: "Klarar Norden",
      text: page.performanceGroups[2]?.items[0] ?? "Anpassad för varierande vägförhållanden.",
    },
    {
      icon: BadgeDollarSign,
      title: "Rätt val",
      text: "Välj den RAM 1500-nivå som matchar din körning.",
    },
  ];
}

type Ram1500InfoPageProps = {
  page: RamInfoPage;
};

export default function Ram1500InfoPage({ page }: Ram1500InfoPageProps) {
  const heroHighlights = getHeroHighlights(page);

  return (
    <main className={styles.site}>
      <SiteHeader />

      <section className={styles.hero}>
        <Image
          src="/dodge2.png"
          alt="Mörkt bergslandskap bakom en amerikansk pickup"
          fill
          priority
          sizes="100vw"
          className={styles.heroBackdrop}
        />
        <div className={styles.heroShade} />
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.breadcrumb}>Cars <span>/</span> {page.model} {page.trim}</p>
            <h1>{page.model}<span>{page.trim}</span></h1>
            <h2>{page.headline}</h2>
            <p>{page.intro}</p>
          </div>
        </div>
        <div className={styles.highlightGrid}>
          {heroHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className={styles.highlightCard}>
                <Icon aria-hidden="true" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.detailGrid}>
        <article className={styles.panel}>
          <h2>{page.whatTitle}</h2>
          {page.whatParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <ul className={styles.checkList}>
            {page.whatBullets.map((fact) => (
              <li key={fact}><CheckCircle2 aria-hidden="true" />{fact}</li>
            ))}
          </ul>
          <p>{page.whatClosing}</p>
        </article>

        <article className={styles.panel}>
          <h2>Viktiga specifikationer och prestanda</h2>
          <p>{page.performanceIntro}</p>
          {page.performanceGroups.map((group) => (
            <div key={group.title} className={styles.specGroup}>
              <h3>{group.title}</h3>
              <ul className={styles.dotList}>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </article>

        <aside className={styles.imagePanel}>
          <div className={styles.galleryImage}>
            <Image src={page.images.gallery} alt={`${page.model} ${page.trim} i mörk miljö`} fill sizes="(max-width: 900px) 100vw, 34vw" />
          </div>
          <div className={styles.conclusion}>
            <h2>Slutsats</h2>
            <p>{page.conclusion}</p>
            <MapPin aria-hidden="true" />
          </div>
        </aside>
      </section>

      <section className={styles.equipmentPanel}>
        <div className={styles.sectionTitleRow}>
          <h2>{page.equipmentTitle}</h2>
          <span />
        </div>
        <div className={styles.equipmentGrid}>
          {page.equipmentGroups.map((group) => {
            const Icon = equipmentIcons[group.icon];
            return (
              <article key={group.title} className={styles.equipmentCard}>
                <Icon aria-hidden="true" />
                <h3>{group.title}</h3>
                <p>(standard)</p>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
                {group.note ? <p className={styles.equipmentNote}>{group.note}</p> : null}
              </article>
            );
          })}
        </div>
        <p className={styles.note}>
          <CircleGauge aria-hidden="true" /> {page.equipmentNote}
        </p>
      </section>

      <section className={styles.ctaBand}>
        <Image src={page.images.cta} alt={`${page.model} ${page.trim} i dramatisk miljö`} fill sizes="100vw" />
        <div>
          <h2>{page.ctaTitle}</h2>
          <p>{page.ctaText}</p>
        </div>
        <div className={styles.ctaActions}>
          <Link href="/contact" className={styles.primaryButton}>Boka rådgivning</Link>
          <Link href="/contact" className={styles.secondaryButton}>Kontakta oss <ChevronRight aria-hidden="true" /></Link>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <Image src="/Wrangler_Logo.svg" alt="The Wrangler" width={170} height={100} />
          <p>American trucks. Imported for passion. Built for the road ahead.</p>
        </div>
        <div><h3>Quick links</h3><Link href="/stock">Cars</Link><Link href="/about">About us</Link><Link href="/services">Services</Link><Link href="/financing">Financing</Link><Link href="/contact">Contact</Link></div>
        <div><h3>Services</h3><a>Buy/Sell</a><a>Trade-in</a><a>Financing</a><a>Delivery</a></div>
        <div><h3>Workshop</h3><a>Repairs</a><a>Maintenance</a><a>Diagnostics</a><a>Performance</a></div>
        <div><h3>Contact us</h3><p><Phone aria-hidden="true" /> +46 70 123 45 67</p><p><Wrench aria-hidden="true" /> info@thewrangler.se</p><p><CarFront aria-hidden="true" /> Falkenberg, Sweden</p></div>
        <div><h3>Opening hours</h3><p>Mon - Fri: 08:00 - 17:00</p><p>Saturday: 09:00 - 14:00</p><p>Sunday: Closed</p></div>
      </footer>
    </main>
  );
}