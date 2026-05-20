"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import styles from "./home/home-page.module.css";

type NavItem = {
  label: string;
  href: string;
  children?: Array<{ label: string; href: string }>;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Om oss", href: "" },
  {
    label: "Fordon",
    href: "",
    children: [
      { label: "SUV", href: "" },
      { label: "Sedan", href: "" },
      { label: "Pickup", href: "" },
      { label: "Sportbil", href: "" },
    ],
  },
  { label: "Verkstad", href: "" },
  { label: "Financing", href: "" },
  { label: "Kontakt", href: "" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const dropdownRefs = useRef<Array<HTMLDetailsElement | null>>([]);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
        dropdownRefs.current.forEach((dropdown) => {
          if (dropdown?.open) {
            dropdown.open = false;
          }
        });
      }
    };

    document.addEventListener("pointerdown", onPointerDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  return (
    <header ref={headerRef} className={styles.navbar}>
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
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;

          if (item.children) {
            return (
              <details
                key={item.label}
                className={styles.dropdown}
                ref={(node) => {
                  dropdownRefs.current[index] = node;
                }}
              >
                <summary className={styles.navLink}>
                  <span>{item.label}</span>
                  <ChevronDown size={16} className={styles.dropdownArrow} />
                </summary>
                <div className={styles.dropdownMenu}>
                  {item.children.map((child) => {
                    const isChildActive = pathname === child.href;

                    return (
                      <Link
                        key={`${item.label}-${child.label}`}
                        href={child.href}
                        className={
                          isChildActive ? styles.activeDropdownLink : styles.dropdownLink
                        }
                        onClick={() => setMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    );
                  })}
                </div>
              </details>
            );
          }
          
          return (
            <Link
              key={`${item.label}-${item.href}`}
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
