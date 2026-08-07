import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Car,
  Coffee,
  Gauge,
  HeartHandshake,
  MapPin,
  Settings,
  ShieldCheck,
  Star,
  Wrench,
} from "lucide-react";
import SiteHeader from "./site-header";
import styles from "./about-page.module.css";

const pillars = [
  {
    icon: HeartHandshake,
    title: "100 % kundnöjdhet",
    text: "Vi ger oss inte förrän du är helt nöjd.",
  },
  {
    icon: BadgeCheck,
    title: "Prisvärdhet",
    text: "Lägsta prisgaranti på amerikanska pickuper och Jeep Wrangler.",
  },
  {
    icon: ShieldCheck,
    title: "Tillförlitlighet",
    text: "Varje bil levereras med Carfax och korrekt, skadefri historik.",
  },
  {
    icon: Settings,
    title: "Helhetskoncept",
    text: "Verkstad, finansiering, serviceavtal och reservdelar på samma plats.",
  },
  {
    icon: Star,
    title: "Transparent prissättning",
    text: "Inga dolda kostnader och inga dyra tilläggspaket.",
  },
];

const experience = [
  {
    icon: Coffee,
    title: "Amerikansk showroom-känsla",
    text: "Kliv in i en autentisk miljö med café, cappuccino och klassisk amerikansk hotdog på vår bekostnad.",
  },
  {
    icon: MapPin,
    title: "Nordic American Motors Experience Center",
    text: "Välkommen till vår anläggning vid Eskilstunavägen i Strängnäs — även om du bara vill titta in.",
  },
  {
    icon: Car,
    title: "Frihet på riktigt",
    text: "Vi levererar inte bara ett fordon. Vi hjälper dig hitta friheten, oavsett om vägen är asfalt eller terräng.",
  },
];

const productCards = [
  {
    title: "Jeep Wrangler",
    text: "Lär dig historien bakom ikonen och provkör olika motorer och utrustningsnivåer — från Willys till Sahara.",
  },
  {
    title: "Dodge Ram 1500",
    text: "Amerikansk pickup-kraft med komfort, närvaro och praktisk vardagskapacitet.",
  },
  {
    title: "GMC Sierra",
    text: "Rejäla premium-pickuper för dig som vill kombinera styrka med hög utrustningsnivå.",
  },
  {
    title: "Chevrolet Silverado",
    text: "En klassisk amerikansk pickup med dragstyrka, utrymme och tydlig karaktär.",
  },
];

export default function AboutPage() {
  return (
    <main className={styles.aboutSite}>
      <SiteHeader />
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/header.png"
            alt="Amerikansk pickup i solnedgång"
            fill
            priority
          />
        </div>
        <div className={styles.heroContent}>
          <p className={styles.smallKicker}>/ Om oss</p>
          <h1>
            Inte bara ett showroom<span>en destination.</span>
          </h1>
          <p>
            Välkommen till en av de mest exklusiva destinationerna för amerikanska bilar
            och pickuper. Hos oss står inte den snabba affären i fokus, utan
            personlig service, förtroende och en upplevelse i en klass för sig.
          </p>
          <p>
            Ta plats, koppla av med en förstklassig kopp kaffe och upptäck i lugn och ro
            din nästa amerikanska drömbil.
          </p>
        </div>
      </section>

      <section className={styles.values}>
        {pillars.map(({ icon: Icon, title, text }) => (
          <article className={styles.valueCard} key={title}>
            <Icon />
            <p>
              <strong>{title}</strong>
              <span>{text}</span>
            </p>
          </article>
        ))}
      </section>

      <section className={styles.story}>
        <div className={styles.storyLeft}>
          <p className={styles.smallKicker}>/ Vår historia</p>
          <div className={styles.timeline}>
            {[
              [
                "2019",
                "Hyrdon Sverige AB",
                "Grunden lades med en flexibel bilösning som snabbt blev känd för smarta och prisvärda abonnemang.",
              ],
              [
                "2025",
                "Nordic American Motors grundas",
                "Verksamheten startade vid Eskilstunavägen i Strängnäs med fokus på amerikanska pickup- och terrängfordon.",
              ],
              [
                "Idag",
                "Drömmar blir verklighet",
                "I vår egna amerikanska showroom-miljö köper du inte bara en bil — här förverkligas en dröm.",
              ],
            ].map(([year, title, desc]) => (
              <article className={styles.timelineItem} key={year}>
                <span className={styles.year}>{year}</span>
                <span className={styles.dot} />
                <h4>{title}</h4>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </div>
        <div className={styles.storyMedia}>
          <Image src="/car5.png" alt="Pickup utanför bilhall" fill />
        </div>
      </section>

      <section id="vad-ar-nordic-american-motors" className={styles.experience}>
        <div className={styles.sectionIntro}>
          <p className={styles.smallKicker}>/ Vad är Nordic American Motors?</p>
          <h2>Frihet, personlighet och amerikansk bilkultur.</h2>
          <p>
            Nordic American Motors förenar nordisk kvalitet med amerikansk
            bilkultur. Hos oss handlar det inte om opersonliga bilhallar, utan om
            omtanke, passion och en upplevelse som får varje besökare att lämna
            med ett leende.
          </p>
        </div>
        <div className={styles.infoGrid}>
          {experience.map(({ icon: Icon, title, text }) => (
            <article className={styles.infoCard} key={title}>
              <Icon />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.products}>
        <div className={styles.sectionIntro}>
          <p className={styles.smallKicker}>/ Våra produkter</p>
          <h2>Auktoriserad importör och återförsäljare.</h2>
          <p>
            Nordic American Motors är registrerad och auktoriserad importör och
            återförsäljare av amerikanska pickup- och terrängfordon från Jeep,
            Dodge, GMC, Ford och Chevrolet.
          </p>
        </div>
        <div className={styles.productGrid}>
          {productCards.map((product) => (
            <article className={styles.productCard} key={product.title}>
              <Gauge />
              <h3>{product.title}</h3>
              <p>{product.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="garanti-service" className={styles.promise}>
        <div className={styles.promiseIntro}>
          <p className={styles.smallKicker}>/ Garanti och service</p>
          <h2>Du köper en bil. Vi ser till att du njuter av den.</h2>
          <p>
            Alla nya bilar omfattas av 2 års nybilsgaranti och alla begagnade
            bilar omfattas av 12 månaders garanti. Servar du bilen hos Nordic
            American Motors ingår alltid en kostnadsfri lånebil — naturligtvis i rätt
            stil.
          </p>
          <p>
            Även efter garantitiden finns vi tillgängliga. Bilar köpta hos oss
            får 20 % rabatt vid eventuella problem, och fram tills bilen är 10
            år gammal garanterar vi att Nordic American Motors alltid är minst
            10 %
            billigare än andra aktörer.
          </p>
        </div>
        <div className={styles.metrics}>
          <div className={styles.metric}>
            <ShieldCheck />
            <strong>2 år</strong>
            <span>Nybilsgaranti</span>
          </div>
          <div className={styles.metric}>
            <BadgeCheck />
            <strong>12 mån</strong>
            <span>Begagnatgaranti</span>
          </div>
          <div className={styles.metric}>
            <Wrench />
            <strong>20 %</strong>
            <span>Rabatt efter köp</span>
          </div>
          <div className={styles.metric}>
            <Star />
            <strong>10 %</strong>
            <span>Billigare garanti</span>
          </div>
        </div>
      </section>

      <section id="legend" className={styles.family}>
        <div className={styles.familyBanner}>
          <Image src="/car4.png" alt="Amerikansk pickup på öppen väg" fill />
        </div>
        <div className={styles.familyContent}>
          <p className={styles.smallKicker}>/ En legend vaknar</p>
          <h2>Jeep Wrangler förtjänar sin egen scen.</h2>
          <p>
            Jeep Wrangler är en legend, men ofta hamnar den bland många andra
            fordon eller importeras med osäker historik. Nordic American Motors
            förändrar det — vi väcker legenden till liv igen och gör den tillgänglig för
            fler, precis som det en gång var tänkt.
          </p>
          <div className={styles.buttons}>
            <Link className={styles.primaryBtn} href="/stock">
              Visa lager
            </Link>
            <Link className={styles.outlineBtn} href="/">
              Kontakta oss
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
