import { Edit3, Plus, Trash2 } from "lucide-react";
import styles from "../dashboard.module.css";
import { users } from "../_components/data";

export default function UsersPage() {
  return (
    <>
      <div className={styles.heroPanel}><div><p className={styles.eyebrow}>Team</p><h1>Users</h1><p>Manage employees and their access.</p></div><button className={styles.primary}><Plus size={15} /> Add User</button></div>
      <article className={styles.tableCard}><table><thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Status</th><th>Actions</th></tr></thead><tbody>{users.map((user) => <tr key={user[1]}><td>{user[0]}</td><td>{user[1]}</td><td>{user[2]}</td><td><span className={user[3] === "Inactive" ? styles.draft : styles.published}>{user[3]}</span></td><td><Edit3 size={14} /><Trash2 size={14} /></td></tr>)}</tbody></table></article>
    </>
  );
}
