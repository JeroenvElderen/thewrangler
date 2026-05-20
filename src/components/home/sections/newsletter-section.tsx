import Image from "next/image";
import styles from "../home-page.module.css";

export function NewsletterSection() {
  return (
    <section className={styles.newsletter}>
      <Image
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop"
        alt="Mustang desert road"
        fill
      />
      <div>
        <p className={styles.redLabel}>Stay Updated</p>
        <h2>Get New Cars & Offers</h2>
        <p>
          Subscribe to our newsletter and be the first to know about new
          arrivals and exclusive offers.
        </p>
        <form>
          <input placeholder="Your email address" />
          <button>Subscribe</button>
        </form>
      </div>
    </section>
  );
}