import styles from "../home-page.module.css";
import { stats } from "../data";

export function AboutSection() {
  return (
    <section className={styles.aboutStrip}>
      <div>
        <p className={styles.redLabel}>The Wrangler</p>
        <h2>More Than Just A Car Dealer</h2>
        <p>
          We’re passionate about American cars. From classic legends to modern
          performance machines — we bring you the best, carefully selected and
          delivered with pride.
        </p>
        <a className={`${styles.btn} ${styles.outline}`}>About Us</a>
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