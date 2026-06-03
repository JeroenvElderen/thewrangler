"use client";

import Image from "next/image";
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
  { label: "Om oss", href: "/about" },
  {
    label: "Fordon",
    href: "",
    children: [
      { label: "Model guides", href: "/cars" },
      { label: "Inventory", href: "/stock" },
      { label: "Pickup", href: "/cars" },
      { label: "Offroad & 4x4", href: "/cars" },
    ],
  },
  { label: "Verkstad", href: "/verkstad" },
  { label: "Financing", href: "/financing" },
  { label: "Kontakt", href: "/contact" },
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
      <Link href="/" className={styles.logo} aria-label="The Wrangler">
        <Image
          src="/Wrangler_Logo.svg"
          alt="The Wrangler"
          width={150}
          height={100}
          priority
          className={styles.logoImage}
        />
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
          const isActive =
            pathname === item.href ||
            (item.href === "/verkstad" && pathname === "/workshop");

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
      <Link href="/stock" className={styles.inventoryButton}>Visa lager</Link>
    </header>
  );
}
