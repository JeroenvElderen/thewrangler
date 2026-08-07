import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import styles from "./site-footer.module.css";

const quickLinks = [
  { href: "/cars", label: "Bilar" },
  { href: "/about", label: "Om Oss" },
  { href: "/contact", label: "Kontakt" },
];

const serviceLinks = [
  { href: "/stock", label: "Import" },
  { href: "/stock", label: "Försäljning" },
  { href: "/financing", label: "Finansiering" },
  { href: "/contact", label: "Leverans" },
  { href: "/contact", label: "Garanti" },
];

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Image
          src="/NordicAmericanMotors_logo.svg"
          alt="Nordic American Motors"
          width={193}
          height={125}
        />
      </div>
      <nav aria-label="Snabblänkar">
        <h4>Snabblänkar</h4>
        {quickLinks.map((link) => (
          <Link href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <nav aria-label="Tjänster">
        <h4>Tjänster</h4>
        {serviceLinks.map((link) => (
          <Link href={link.href} key={`${link.href}-${link.label}`}>
            {link.label}
          </Link>
        ))}
      </nav>
      <div>
        <h4>Kontakta oss</h4>
        <p>
          <Phone size={14} aria-hidden="true" /> +46 76 774 25 02
        </p>
        <p>
          <Mail size={14} aria-hidden="true" /> info@nordicamericanmotors.se
        </p>
        <p>
          <MapPin size={14} aria-hidden="true" /> Stockholm, Sweden
        </p>
      </div>
    </footer>
  );
}
