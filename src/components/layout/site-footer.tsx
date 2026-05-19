import { Mail, MapPin, Phone } from "lucide-react";
import styles from "../home/home-page.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <span>The</span>
        <strong>Wrangler</strong>
        <em>American Cars</em>
      </div>
      <div>
        <h4>Quick Links</h4>
        <a>Cars</a>
        <a>About Us</a>
        <a>Services</a>
        <a>Financing</a>
        <a>Contact</a>
      </div>
      <div>
        <h4>Services</h4>
        <a>Import</a>
        <a>Sales</a>
        <a>Financing</a>
        <a>Delivery</a>
        <a>Warranty</a>
      </div>
      <div>
        <h4>Contact Us</h4>
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
