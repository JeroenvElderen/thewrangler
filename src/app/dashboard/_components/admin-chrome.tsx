import { Bell, ChevronDown, CircleUserRound, Search } from "lucide-react";
import styles from "../dashboard.module.css";
import { AdminSidebar } from "./admin-sidebar";

export function AdminChrome({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.shell}>
      <AdminSidebar />
      <section className={styles.workspace}>
        <header className={styles.topbar}>
          <label className={styles.search}><Search size={14} /><input placeholder="Search..." /></label>
          <div className={styles.profile}><Bell size={15} /><CircleUserRound size={24} /><span><b>Admin</b><small>Employee</small></span><ChevronDown size={13} /></div>
        </header>
        {children}
      </section>
    </main>
  );
}
