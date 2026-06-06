import Image from "next/image";
import { Bell, CarFront, Cog, ShieldCheck, Tag } from "lucide-react";
import SiteHeader from "./site-header";
import styles from "./coming-soon-page.module.css";

const countdown = [
  ["24", "Days"],
  ["08", "Hours"],
  ["37", "Minutes"],
  ["15", "Seconds"],
];

const expectations = [
  {
    icon: CarFront,
    title: "More Vehicles",
    description: "An even bigger selection of American trucks and cars.",
  },
  {
    icon: ShieldCheck,
    title: "Better Experience",
    description: "A faster, smoother way to find your perfect vehicle.",
  },
  {
    icon: Cog,
    title: "Expert Service",
    description: "More services, more expertise, same trusted team.",
  },
  {
    icon: Tag,
    title: "Exclusive Offers",
    description: "Special deals and financing options tailored for you.",
  },
];

export default function ComingSoonPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image src="/gmc-header.png" alt="Truck outside dealership" fill priority />
        </div>
        <SiteHeader />
        <div className={styles.heroContent}>
          <p className={styles.kicker}>Something Big Is</p>
          <h1>
            Coming <span>Soon.</span>
          </h1>
          <p>
            We&apos;re working hard behind the scenes to bring you a better
            experience, more inventory, and even more ways to get you on the
            road.
          </p>
          <strong>Stay tuned.</strong>
        </div>
      </section>

      <section className={styles.countdown}>
        <h2>Launching In</h2>
        <div className={styles.countdownGrid}>
          {countdown.map(([value, label]) => (
            <article key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.details}>
        <div className={styles.expectCol}>
          <h3>What You Can Expect</h3>
          <div className={styles.expectGrid}>
            {expectations.map((item) => (
              <article key={item.title} className={styles.expectCard}>
                <item.icon />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className={styles.formCol}>
          <h3>Be The First To Know</h3>
          <p>
            Join our mailing list and be the first to know when we launch, plus
            get access to exclusive offers.
          </p>
          <form className={styles.form}>
            <input type="email" placeholder="Your email address" />
            <button type="submit">Notify Me</button>
          </form>
          <p className={styles.privacy}>
            <Bell size={14} /> We respect your privacy. Unsubscribe at any
            time.
          </p>
        </div>
      </section>

      <section className={styles.banner}>
        <Image src="/car5.png" alt="Truck on open road at sunset" fill />
        <div>
          <h3>
            The road ahead is <span>worth waiting for.</span>
          </h3>
          <p>Thank you for your patience and support.</p>
        </div>
      </section>

    </main>
  );
}
