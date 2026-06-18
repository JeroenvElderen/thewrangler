import { ShieldCheck } from "lucide-react";
import styles from "../dashboard.module.css";
import { activity } from "../_components/data";

export default function ActivityLogPage() {
  return (
    <>
      <div className={styles.heroPanel}><div><p className={styles.eyebrow}>Audit Trail</p><h1>Activity Log</h1><p>Track all activities in the CMS.</p></div></div>
      <article className={styles.tableCard}><table><thead><tr><th>User</th><th>Action</th><th>Details</th><th>Date</th></tr></thead><tbody>{activity.map((row) => <tr key={row.join()}><td><ShieldCheck size={14} />{row[0]}</td><td>{row[1]}</td><td>{row[2]}</td><td>{row[3]}</td></tr>)}</tbody></table></article>
    </>
  );
}
