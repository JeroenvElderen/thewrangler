"use client";

import Image from "next/image";
import Link from "next/link";
import { LogOut, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import styles from "../dashboard.module.css";
import { navItems } from "./data";

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoRow}>
        <Image src="/Wrangler_Logo.svg" alt="The Wrangler" width={118} height={34} />
        <Menu size={16} />
      </div>
      <nav className={styles.nav} aria-label="Admin navigation">
        {navItems.map(({ label, href, icon: Icon }) => {
          const active = href === "/dashboard" ? pathname === href : pathname.startsWith(href);
          return (
            <Link className={active ? styles.navActive : styles.navItem} href={href} key={href}>
              <Icon size={15} />
              {label}
            </Link>
          );
        })}
      </nav>
      <a className={styles.logout} href="#logout"><LogOut size={15} />Logout</a>
    </aside>
  );
}
