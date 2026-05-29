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
import { HomeFooter } from "./home/sections";
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
    title: "Wrangler Experience Center",
    text: "Välkommen till vår anläggning vid Eskilstunavägen i Strängnäs — även om du bara vill titta in.",
  },
  {
    icon: Car,
    title: "Frihet på riktigt",
    text: "Vi levererar inte bara ett fordon. Vi hjälper dig hitta friheten, oavsett om vägen är asfalt eller terräng.",
  },
];

const team = [
  {
    name: "Jason Miller",
    role: "Founder & CEO",
    desc: "Bilentusiast och branschveteran med en tydlig vision om att göra bilköpet mer personligt.",
    image: "/car1.png",
  },
  {
    name: "Emily Johnson",
    role: "Sales Manager",
    desc: "Hjälper varje kund att hitta rätt amerikansk bil för sin livsstil och sina behov.",
    image: "/car2.png",
  },
  {
    name: "Mike Thompson",
    role: "Service Manager",
    desc: "Ser till att varje bil lämnar verkstaden i toppskick och att supporten håller rätt nivå.",
    image: "/car3.png",
  },
  {
    name: "Daniel Anderson",
    role: "Finance Specialist",
    desc: "Tar fram flexibla finansieringslösningar som gör drömbilen enklare att förverkliga.",
    image: "/car4.png",
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
            The Wrangler.<span>En legend vaknar.</span>
          </h1>
          <p>
            The Wrangler är ett dotterbolag till Hyrdon Sverige AB — Sveriges
            mest flexibla bilösning och ett ledande företag inom prisvärda,
            flexibla bilabonnemang sedan 2019.
          </p>
          <p>
            Vi grundades 2025 i Strängnäs för att göra amerikanska pickup- och
            terrängfordon mer tillgängliga, personliga och bekymmersfria.
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
          <p className={styles.smallKicker}>/ Vår berättelse</p>
          <div className={styles.timeline}>
            {[
              [
                "2019",
                "Hyrdon Sverige AB",
                "Grunden lades med en flexibel bilösning som snabbt blev känd för smarta och prisvärda abonnemang.",
              ],
              [
                "2025",
                "The Wrangler grundas",
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

      <section className={styles.experience}>
        <div className={styles.sectionIntro}>
          <p className={styles.smallKicker}>/ Vad är The Wrangler?</p>
          <h2>Frihet, personlighet och amerikansk bilkultur.</h2>
          <p>
            Ordet wrangler förmedlar känslan av frihet — och det är precis vad
            vi eftersträvar. Hos oss handlar det inte om opersonliga bilhallar
            eller industriområden, utan om omtanke, passion och en upplevelse
            som får varje besökare att lämna med ett leende.
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
            The Wrangler är registrerad och auktoriserad importör och
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

      <section className={styles.team}>
        <div className={styles.teamIntro}>
          <p className={styles.smallKicker}>/ Vårt team</p>
          <h2>Riktiga människor. Riktig passion.</h2>
          <p>
            Bakom The Wrangler finns bilintresserade människor med passion för
            amerikanska fordon och ett gemensamt mål: att ge dig en personlig,
            trygg och minnesvärd upplevelse från första besöket till lång tid
            efter leverans.
          </p>
          <Link className={styles.outlineBtn} href="/">
            Möt teamet
          </Link>
        </div>
        <div className={styles.teamGrid}>
          {team.map((member) => (
            <article className={styles.member} key={member.name}>
              <div className={styles.memberPhoto}>
                <Image src={member.image} alt={member.name} fill />
              </div>
              <h4>{member.name}</h4>
              <p className={styles.role}>{member.role}</p>
              <p>{member.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.promise}>
        <div className={styles.promiseIntro}>
          <p className={styles.smallKicker}>/ Garanti och service</p>
          <h2>Du köper en bil. Vi ser till att du njuter av den.</h2>
          <p>
            Alla nya bilar omfattas av 2 års nybilsgaranti och alla begagnade
            bilar omfattas av 12 månaders garanti. Servar du bilen hos The
            Wrangler ingår alltid en kostnadsfri lånebil — naturligtvis i rätt
            stil.
          </p>
          <p>
            Även efter garantitiden finns vi tillgängliga. Bilar köpta hos oss
            får 20 % rabatt vid eventuella problem, och fram tills bilen är 10
            år gammal garanterar vi att The Wrangler alltid är minst 10 %
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

      <section className={styles.family}>
        <div className={styles.familyBanner}>
          <Image src="/car4.png" alt="Amerikansk pickup på öppen väg" fill />
        </div>
        <div className={styles.familyContent}>
          <p className={styles.smallKicker}>/ En legend vaknar</p>
          <h2>Jeep Wrangler förtjänar sin egen scen.</h2>
          <p>
            Jeep Wrangler är en legend, men ofta hamnar den bland många andra
            fordon eller importeras med osäker historik. The Wrangler förändrar
            det — vi väcker legenden till liv igen och gör den tillgänglig för
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

      <HomeFooter />
    </main>
  );
}
