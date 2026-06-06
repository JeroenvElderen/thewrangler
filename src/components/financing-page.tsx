import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    BadgeDollarSign,
    Calculator,
    CheckCircle2,
    Clock,
    FileCheck2,
    FileText,
    Handshake,
    Headphones,
    KeyRound,
    ShieldCheck,
    Truck,
} from "lucide-react";
import SiteHeader from "./site-header";
import styles from "./financing-page.module.css";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Trusted partners",
    text: "Reliable banks and lenders that understand imported American trucks.",
  },
  {
    icon: Clock,
    title: "Quick approval",
    text: "Fast decisions so you can keep your purchase moving.",
  },
  {
    icon: BadgeDollarSign,
    title: "Flexible terms",
    text: "Options designed around your budget and ownership plans.",
  },
];

const financeOptions = [
  {
    icon: Truck,
    title: "Loan financing",
    text: "Spread the cost over time with competitive rates and flexible repayment terms.",
  },
  {
    icon: KeyRound,
    title: "Lease financing",
    text: "Lower monthly payments with the option to upgrade when your lease ends.",
  },
  {
    icon: Handshake,
    title: "Balloon financing",
    text: "Lower monthly payments with a larger final payment at the end of the term.",
  },
  {
    icon: ShieldCheck,
    title: "Commercial financing",
    text: "Solutions for business and fleet trucks that work as hard as you do.",
  },
];

const steps = [
  { icon: FileText, title: "Apply online", text: "Fill out our quick and easy application in just a few minutes." },
  { icon: FileCheck2, title: "Get approved", text: "We review your application and get back to you fast." },
  { icon: Truck, title: "Choose your truck", text: "Pick the truck that fits your needs from our wide selection." },
  { icon: KeyRound, title: "Drive away", text: "Sign the documents and drive your new truck home." },
];

const benefits = [
  "Competitive rates",
  "No hidden fees",
  "Personalized service",
  "Tailored solutions",
  "Support all the way",
];

export default function FinancingPage() {
  return (
    <main className={styles.site}>
      <SiteHeader />

      <section className={styles.hero}>
        <Image
          src="/dodge1.png"
          alt="Black RAM truck outside The Wrangler dealership"
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <p className={styles.kicker}>/ Financing</p>
          <h1>
            Financing <span>made simple.</span>
          </h1>
          <p className={styles.lead}>
            We offer flexible financing solutions tailored to your needs. Get behind the wheel of your next American truck — on terms that work for you.
          </p>
          <div className={styles.trustRow}>
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title}>
                  <Icon aria-hidden="true" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.optionsSection}>
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>/ Financing options</p>
          <h2>
            Choose the option <span>that fits you best.</span>
          </h2>
        </div>
        <div className={styles.optionGrid}>
          {financeOptions.map((option) => {
            const Icon = option.icon;
            return (
              <article key={option.title} className={styles.optionCard}>
                <Icon aria-hidden="true" />
                <h3>{option.title}</h3>
                <p>{option.text}</p>
                <Link href="/contact">
                  Learn more <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.processGrid}>
        <div className={styles.stepsPanel}>
          <p className={styles.kicker}>/ How it works</p>
          <h2>
            Four simple steps <span>to get started.</span>
          </h2>
          <ol className={styles.stepsList}>
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <li key={step.title}>
                  <span className={styles.stepNumber}>{index + 1}</span>
                  <Icon aria-hidden="true" />
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <div className={styles.whyPanel}>
          <Image src="/gmc-header.png" alt="American truck driving through mountain roads" fill sizes="(max-width: 900px) 100vw, 66vw" />
          <div className={styles.whyContent}>
            <p className={styles.kicker}>/ Why finance with us?</p>
            <h2>
              Built on trust. <span>Focused on you.</span>
            </h2>
            <ul>
              {benefits.map((benefit) => (
                <li key={benefit}>
                  <CheckCircle2 size={18} aria-hidden="true" /> {benefit}
                </li>
              ))}
            </ul>
            <Link href="/contact" className={styles.questionCard}>
              <Headphones aria-hidden="true" />
              <span>
                <strong>Questions?</strong>
                Financing experts are here to help.
                <em>Contact us <ArrowRight size={15} aria-hidden="true" /></em>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.calculatorSection}>
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>/ Calculate your payment</p>
          <h2>
            Get an estimate <span>in seconds.</span>
          </h2>
          <p>Use our sample calculator to see an estimated monthly payment based on your preferred terms.</p>
        </div>
        <div className={styles.calculatorPanel}>
          <div className={styles.fieldsGrid}>
            <label>
              Vehicle price
              <span>SEK&nbsp;&nbsp;600,000</span>
            </label>
            <label>
              Down payment
              <span>SEK&nbsp;&nbsp;120,000</span>
            </label>
            <label>
              Loan term
              <span>60 months</span>
            </label>
            <label>
              Interest rate
              <span>5.49 %</span>
            </label>
            <button>Calculate payment</button>
          </div>
          <div className={styles.resultsGrid}>
            <article className={styles.monthlyResult}>
              <small>Estimated monthly payment</small>
              <strong>SEK 8,950 / month</strong>
            </article>
            <article>
              <Calculator aria-hidden="true" />
              <span>Loan amount</span>
              <strong>SEK 480,000</strong>
            </article>
            <article>
              <BadgeDollarSign aria-hidden="true" />
              <span>Total interest (est.)</span>
              <strong>SEK 59,000</strong>
            </article>
            <article>
              <BadgeDollarSign aria-hidden="true" />
              <span>Total amount (est.)</span>
              <strong>SEK 539,000</strong>
            </article>
          </div>
          <p className={styles.disclaimer}>This is an estimate only and does not constitute an offer. Final terms are subject to credit approval.</p>
        </div>
      </section>

      <section className={styles.ctaStrip}>
        <Image src="/ford1.png" alt="American truck ready for delivery" fill sizes="100vw" />
        <div>
          <h2>Ready to drive your next truck?</h2>
          <p>Let us help you find the right financing solution.</p>
        </div>
        <div className={styles.ctaActions}>
          <Link href="/contact">Apply now</Link>
          <Link href="/contact">Contact us</Link>
        </div>
      </section>

    </main>
  );
}
