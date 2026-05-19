import Image from "next/image";
import styles from "../../about-page.module.css";

export default function AboutHeroSection() {
  return <section className={styles.hero}><div className={styles.heroBg}><Image src="/header.png" alt="Truck at sunset" fill priority /></div><div className={styles.heroContent}><p className={styles.smallKicker}>/ About Us</p><h1>Built On Passion.<span>Driven By Values.</span></h1><p>The Wrangler was founded with a simple mission — to bring the power, freedom, and heritage of American trucks to enthusiasts who live life on their own terms.</p></div></section>;
}
