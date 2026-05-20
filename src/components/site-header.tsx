"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import styles from "./home/home-page.module.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Om oss", href: "" },
  { label: "Bilar", href: "" },
  { label: "Verkstad", href: "" },
  { label: "Financing", href: "" },
  { label: "Kontakt", href: "" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <span>The</span>
        <strong>Wrangler</strong>
        <em>American Cars</em>
      </Link>
      <button
        className={styles.menuToggle}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      <nav className={menuOpen ? styles.mobileNavOpen : undefined}>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={isActive ? styles.activeNavLink : styles.navLink}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <button className={styles.inventoryButton}>View Inventory</button>
    </header>
  );
}
