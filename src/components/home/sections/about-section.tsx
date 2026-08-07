import styles from "../home-page.module.css";
import { stats } from "../data";

export function AboutSection() {
  return (
    <section className={styles.aboutStrip}>
      <div>
        <p className={styles.redLabel}>Nordic American Motors</p>
        <h2>Mer än bara en bilhandlare</h2>
        <p>
          Vi brinner för amerikanska bilar. Från klassiska legender till moderna prestandamaskiner – vi ger dig det bästa, noggrant utvalt och levererat med stolthet.
        </p>
        <a className={`${styles.btn} ${styles.outline}`}>Om oss</a>
      </div>
      <div className={styles.stats}>
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label}>
            <Icon />
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}