import { ChevronDown, Plus } from "lucide-react";
import styles from "./dashboard.module.css";
import { stats } from "./_components/data";
import { cars } from "@/data/cars";
import CarsSection from "./_components/cars-section";

export default function DashboardPage() {
  return (
    <>
      <div className={styles.heroPanel}>
        <div>
          <p className={styles.eyebrow}>Admin CMS</p>
          <h1>Dashboard</h1>
          <p>Welcome back, Admin! Here&apos;s what is happening across Nordic American Motors.</p>
        </div>
        <button className={styles.primary}><Plus size={15} /> Add New Car</button>
      </div>

      <section className={styles.statsGrid}>
        {stats.map(({ icon: Icon, label, value, delta }) => (
          <article className={styles.statCard} key={label}><div><span>{label}</span><strong>{value}</strong><em>{delta}</em></div><Icon size={22} /></article>
        ))}
      </section>

      <section className={styles.mainGrid}>
        <article className={styles.chartCard}>
          <div className={styles.cardHeader}><h2>Website Views</h2><button>This Week <ChevronDown size={12} /></button></div>
          <div className={styles.chart}><svg viewBox="0 0 640 220" role="img" aria-label="Line chart of website views"><path className={styles.gridLine} d="M20 40H620M20 90H620M20 140H620M20 190H620" /><path className={styles.area} d="M20 170L115 145L210 88L305 160L400 134L495 148L590 52L620 66V220H20Z" /><path className={styles.line} d="M20 170L115 145L210 88L305 160L400 134L495 148L590 52L620 66" />{[20,115,210,305,400,495,590,620].map((x, i) => <circle key={x} cx={x} cy={[170,145,88,160,134,148,52,66][i]} r="5" />)}</svg></div>
        </article>

        <CarsSection cars={cars} variant="top-performing" title="Top Performing Cars" limit={5} />
      </section>
    </>
  );
}
