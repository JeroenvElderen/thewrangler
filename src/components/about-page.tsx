import Image from "next/image";
import {
  BadgeCheck,
  Car,
  Settings,
  ShieldCheck,
  Star,
  Gauge,
  UsersRound,
} from "lucide-react";
import { HomeFooter } from "./home/sections";
import SiteHeader from "./site-header";
import styles from "./about-page.module.css";

const team = [
  {
    name: "Jason Miller",
    role: "Founder & CEO",
    desc: "Car enthusiast and industry veteran with a vision for doing things better.",
    image: "/car1.png",
  },
  {
    name: "Emily Johnson",
    role: "Sales Manager",
    desc: "Passionate about helping customers find the perfect truck for their lifestyle.",
    image: "/car2.png",
  },
  {
    name: "Mike Thompson",
    role: "Service Manager",
    desc: "Ensures every truck leaves our shop in peak condition and every customer is happy.",
    image: "/car3.png",
  },
  {
    name: "Daniel Anderson",
    role: "Finance Specialist",
    desc: "Works with you to find flexible financing solutions that fit your needs.",
    image: "/car4.png",
  },
];

export default function AboutPage() {
  return (
    <main className={styles.aboutSite}>
      <SiteHeader />
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image src="/header.png" alt="Truck at sunset" fill priority />
        </div>
        <div className={styles.heroContent}>
          <p className={styles.smallKicker}>/ About Us</p>
          <h1>
            Built On Passion.<span>Driven By Values.</span>
          </h1>
          <p>
            The Wrangler was founded with a simple mission — to bring the power,
            freedom, and heritage of American trucks to enthusiasts who live
            life on their own terms.
          </p>
          <p>
            We’re more than a dealership. We’re a community built on trust,
            performance, and the open road.
          </p>
        </div>
      </section>

      <section className={styles.values}>
        <article className={styles.valueCard}>
          <Car />
          <p>
            <strong>Handpicked</strong>
            <span>Quality Cars</span>
          </p>
        </article>
        <article className={styles.valueCard}>
          <ShieldCheck />
          <p>
            <strong>Fair Prices</strong>
            <span>Honest Deals</span>
          </p>
        </article>
        <article className={styles.valueCard}>
          <BadgeCheck />
          <p>
            <strong>Full Transparency</strong>
            <span>No Surprises</span>
          </p>
        </article>
        <article className={styles.valueCard}>
          <Settings />
          <p>
            <strong>After-Sale Support</strong>
            <span>We’re Here For You</span>
          </p>
        </article>
      </section>

      <section className={styles.story}>
        <div className={styles.storyLeft}>
          <p className={styles.smallKicker}>/ Our Story</p>
          <div className={styles.timeline}>
            {[
              [
                "2015",
                "The Start",
                "The Wrangler was founded by car enthusiasts with a passion for American trucks and a dream to do things differently.",
              ],
              [
                "2017",
                "Expanding The Lineup",
                "We grew our inventory and brought in more brands and models — always handpicked for quality and performance.",
              ],
              [
                "2019",
                "Growing Community",
                "Our customers became more than buyers — they became part of The Wrangler family. Events, meets, and stories made the bond stronger.",
              ],
              [
                "2022",
                "New Location",
                "Bigger space, better service, and an even stronger commitment to the American truck culture.",
              ],
              [
                "2026",
                "Built For The Road Ahead",
                "We keep pushing forward, staying true to our roots while continuing to deliver the best trucks and experiences.",
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
          <Image src="/car5.png" alt="Truck by dealership sign" fill />
        </div>
      </section>

      <section className={styles.team}>
        <div className={styles.teamIntro}>
          <p className={styles.smallKicker}>/ Our Team</p>
          <h2>Real People. Real Passion.</h2>
          <p>
            We’re car people through and through. Our team shares the same
            passion for American trucks and the same commitment to giving you
            the best experience possible.
          </p>
          <a className={styles.outlineBtn}>Meet The Team</a>
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
          <p className={styles.smallKicker}>/ Our Promise</p>
          <h2>More Than Trucks. It’s A Lifestyle.</h2>
          <p>
            We believe in freedom, performance, and doing things the right way.
            When you drive with us, you’re not just buying a truck — you’re
            joining a community that lives for the road ahead.
          </p>
        </div>
        <div className={styles.metrics}>
          <div className={styles.metric}>
            <Gauge />
            <strong>500+</strong>
            <span>Trucks Sold</span>
          </div>
          <div className={styles.metric}>
            <Star />
            <strong>100%</strong>
            <span>Passion</span>
          </div>
          <div className={styles.metric}>
            <ShieldCheck />
            <strong>10+</strong>
            <span>Years Experience</span>
          </div>
          <div className={styles.metric}>
            <UsersRound />
            <strong>0</strong>
            <span>Compromises</span>
          </div>
        </div>
      </section>

      <section className={styles.family}>
        <div className={styles.familyBanner}>
          <Image src="/car4.png" alt="Truck on open road" fill />
        </div>
        <div className={styles.familyContent}>
          <p className={styles.smallKicker}>/ Join The Family</p>
          <h2>Let’s Drive Something Legendary.</h2>
          <p>
            Find your next American truck today and be part of something bigger.
          </p>
          <div className={styles.buttons}>
            <a className={styles.primaryBtn}>View Inventory</a>
            <a className={styles.outlineBtn}>Contact Us</a>
          </div>
        </div>
      </section>

      <HomeFooter />
    </main>
  );
}
