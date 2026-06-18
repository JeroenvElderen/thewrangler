import Image from "next/image";
import { ChevronDown, Power, TrendingUp } from "lucide-react";
import styles from "../dashboard.module.css";
import { cars, stats } from "../_components/data";

export default function InsightsPage() {
  return (
    <>
      <div className={styles.heroPanel}><div><p className={styles.eyebrow}>Analytics</p><h1>Insights</h1><p>Detailed analytics and insights about website performance.</p></div><button className={styles.cardButton}>May 12 – May 18, 2024 <ChevronDown size={12} /></button></div>
      <section className={styles.statsGrid}>{stats.map(({ icon: Icon, label, value, delta }) => <article className={styles.statCard} key={label}><div><span>{label}</span><strong>{value}</strong><em>{delta}</em></div><Icon size={22} /></article>)}</section>
      <section className={styles.mainGrid}><article className={styles.chartCard}><div className={styles.cardHeader}><h2>Website Traffic</h2><button>This Week</button></div><div className={styles.chart}><svg viewBox="0 0 640 220" role="img" aria-label="Website traffic chart"><path className={styles.gridLine} d="M20 40H620M20 90H620M20 140H620M20 190H620" /><path className={styles.area} d="M20 160L115 135L210 65L305 148L400 110L495 132L590 44L620 55V220H20Z" /><path className={styles.line} d="M20 160L115 135L210 65L305 148L400 110L495 132L590 44L620 55" /></svg></div></article><article className={styles.card}><div className={styles.cardHeader}><h2>Traffic Sources</h2><Power size={17} /></div><div className={styles.donut}>12,842<br /><span>Total</span></div><p className={styles.sourceRow}>Direct <b>48.3%</b></p><p className={styles.sourceRow}>Organic Search <b>28.7%</b></p><p className={styles.sourceRow}>Social Media <b>12.7%</b></p><p className={styles.sourceRow}>Referral <b>7.7%</b></p></article></section>
      <section className={styles.mainGrid}><article className={styles.card}><div className={styles.cardHeader}><h2>Top Pages</h2><TrendingUp size={17} /></div>{["/", "/inventory", "/about-us", "/contact"].map((page, i) => <p className={styles.sourceRow} key={page}>{page}<b>{3245 - i * 299}</b></p>)}</article><article className={styles.card}><h2>Top Cars by Views</h2>{cars.slice(0, 5).map((car, i) => <div className={styles.miniCar} key={car[1]}><Image src={car[0]} alt="" width={54} height={34} /><span>{car[1]}</span><em>{2153 - i * 271}</em></div>)}</article></section>
    </>
  );
}
