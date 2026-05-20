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
        <p className={styles.redLabel}>Håll dig uppdaterad</p>
        <h2>Få nya bilar och erbjudanden</h2>
        <p>
          Prenumerera på vårt nyhetsbrev och var först med att veta om nya varor och exklusiva erbjudanden.
        </p>
        <form>
          <input placeholder="Din e-postadress" />
          <button>Prenumerera</button>
        </form>
      </div>
    </section>
  );
}