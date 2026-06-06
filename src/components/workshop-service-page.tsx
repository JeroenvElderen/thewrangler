import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    BatteryCharging,
    CalendarDays,
    CheckCircle2,
    CircleDollarSign,
    ClipboardCheck,
    Disc3,
    Droplet,
    Gauge,
    Search,
    Settings,
    ShieldCheck,
    Truck,
    Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { WorkshopService } from "@/data/workshop-services";
import { workshopServices } from "@/data/workshop-services";
import SiteHeader from "./site-header";
import styles from "./workshop-service-page.module.css";

const iconMap: Record<string, LucideIcon> = {
    battery: BatteryCharging,
    brake: Disc3,
    calendar: CalendarDays,
    check: CheckCircle2,
    clipboard: ClipboardCheck,
    disc: Disc3,
    dollar: CircleDollarSign,
    droplet: Droplet,
    gauge: Gauge,
    oil: Droplet,
    search: Search,
    settings: Settings,
    shield: ShieldCheck,
    truck: Truck,
    wrench: Wrench,
};

type WorkshopServicePageProps = {
    service: WorkshopService;
};

function ServiceIcon({ name }: { name: string }) {
    const Icon = iconMap[name] ?? Wrench;

    return <Icon aria-hidden="true" />;
}

export default function WorkshopServicePage({ service }: WorkshopServicePageProps) {
    const relatedServices = workshopServices.filter((item) => item.slug !== service.slug);

    return (
        <main className={styles.serviceSite}>
            <SiteHeader />

            <section className={styles.hero}>
                <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    priority
                    sizes="100vw"
                />
                <div className={styles.heroContent}>
                    <nav className={styles.breadcrumb} aria-label="Breadcrumbs">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <Link href="/verkstad">Workshop</Link>
                        <span>/</span>
                        <strong>{service.title}</strong>
                    </nav>
                    <div className={styles.heroTitleRow}>
                        <div className={styles.heroIcon}>
                            <ServiceIcon name ={service.included[0]?.icon ?? "wrench"} />
                        </div>
                        <div>
                            <p className={styles.kicker}>{service.eyebrow}</p>
                            <h1>{service.heroTitle}</h1>
                        </div>
                    </div>
                    <p className={styles.lead}>{service.heroLead}</p>
                    <p className={styles.intro}>{service.intro}</p>

                    <div className={styles.trustRow}>
                        <article>
                            <ShieldCheck aria-hidden="true" />
                            <div>
                                <h2> Certified technicians</h2>
                                <p>Specialist in American pickups and 4x4s.</p>
                            </div>
                        </article>
                        <article>
                            <Settings aria-hidden="true" />
                            <div>
                                <h2>Quality parts</h2>
                                <p>Parts, fluids, and methods selected for proper function.</p>
                            </div>
                        </article>
                        <article>
                            <Gauge aria-hidden="true" />
                            <div>
                                <h2>Clear communication</h2>
                                <p>You know what we find and what we recommend.</p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section className={styles.topGrid}>
                <aside className={styles.overviewCard}>
                    <h2>Service overview</h2>
                    <p>{service.overview}</p>
                    <ul>
                        {service.checks.map((check) => (
                            <li key={check}>
                                <CheckCircle2 aria-hidden="true" />
                                <span>{check}</span>
                            </li>
                        ))}
                    </ul>
                    <Link href="/contact" className={styles.outlineButton}>
                    Book a service <ArrowRight size={18} aria-hidden="true" />
                    </Link>
                </aside>

                <div className={styles.includedPanel}>
                    <h2>What&apos;s included</h2>
                    <div className={styles.includedGrid}>
                        {service.included.map((item) => (
                            <article key={item.title}>
                                <ServiceIcon name={item.icon} />
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.benefitPanel}>
                <div>
                    <h2> The benefits</h2>
                    <div className={styles.benefitGrid}>
                        {service.benefits.map((benefit) => (
                            <article key={benefit.title}>
                                <ServiceIcon name={benefit.icon} />
                                <div>
                                    <h3>{benefit.title}</h3>
                                    <p>{benefit.text}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
                <div className={styles.intervalCard}>
                    <h2>{service.intervalsTitle}</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Service</th>
                                <th>Interval</th>
                            </tr>
                        </thead>
                        <tbody>
                            {service.intervals.map((row) => (
                                <tr key={`${row.service}-${row.interval}`}>
                                    <td>{row.service}</td>
                                    <td>{row.interval}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Link href="/verkstad" className={styles.outlineButton}>
                            View all services <ArrowRight size={18} aria-hidden="true" />
                    </Link>
                </div>
            </section>

            <section className={styles.processPanel}>
                <h2>How it works</h2>
                <div className={styles.processGrid}>
                    {service.process.map((step, index) => (
                        <article key={`${step.title}-${index}`}>
                            <strong>{String(index + 1).padStart(2, "0")}</strong>
                            <ServiceIcon name={step.icon} />
                            <h3>{step.title}</h3>
                            <p>{step.text}</p>
                            {index < service.process.length - 1 ? (
                                <ArrowRight className={styles.processArrow} aria-hidden="true" />
                            ) : null }
                        </article>
                    ))}
                </div>
            </section>

            <section className={styles.relatedPanel}>
                <h2>More workshop services</h2>
                <div>
                    {relatedServices.map((item) => (
                        <Link href={`/verkstad/${item.slug}`} key={item.slug}>
                            {item.title}
                            <ArrowRight size={16} aria-hidden="true" />
                        </Link>
                    ))}
                </div>
            </section>

            <section className={styles.ctaPanel}>
                <Image src="/car1.png" alt="The Wrangler verkstadsarbete" fill sizes="100vw" />
                <div>
                    <h2>{service.ctaTitle}</h2>
                    <p>{service.ctaText}</p>
                </div>
                <div className={styles.ctaActions}>
                    <Link href="/contact" className={styles.primaryButton}>
                        Book a service <ArrowRight size={18} aria-hidden="true" />
                    </Link>
                    <Link href="/contact" className={styles.secondaryButton}>
                        Contact us
                    </Link>
                </div>
            </section>

        </main>
    )
}
