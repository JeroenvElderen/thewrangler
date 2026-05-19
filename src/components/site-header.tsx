"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./home/home-page.module.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Cars", href: "/cars" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Financing", href: "/financing" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <span>The</span>
        <strong>Wrangler</strong>
        <em>American Cars</em>
      </Link>
      <nav>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={isActive ? styles.activeNavLink : styles.navLink}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <button>View Inventory</button>
    </header>
  );
}