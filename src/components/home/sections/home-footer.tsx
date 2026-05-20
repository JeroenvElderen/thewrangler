import { Mail, MapPin, Phone } from "lucide-react";
import styles from "../home-page.module.css";

export function HomeFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <span>The</span>
        <strong>Wrangler</strong>
        <em>Amerikanska bilar</em>
      </div>
      <div>
        <h4>Snabblänkar</h4>
        <a>Bilar</a>
        <a>Om Oss</a>
        <a>Kontakt</a>
      </div>
      <div>
        <h4>Tjänster</h4>
        <a>Import</a>
        <a>Försäljning</a>
        <a>Finansiering</a>
        <a>Leverans</a>
        <a>Garanti</a>
      </div>
      <div>
        <h4>Kontakta oss</h4>
        <p>
          <Phone size={14} /> +46 70 123 45 67
        </p>
        <p>
          <Mail size={14} /> info@thewrangler.se
        </p>
        <p>
          <MapPin size={14} /> Stockholm, Sweden
        </p>
      </div>
    </footer>
  );
}