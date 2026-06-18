import styles from "../dashboard.module.css";

export default function SettingsPage() {
  return (
    <>
      <div className={styles.heroPanel}><div><p className={styles.eyebrow}>Configuration</p><h1>Settings</h1><p>Manage website settings and CMS defaults.</p></div></div>
      <article className={styles.editorCard}><h2>General</h2><form className={styles.settingsForm}><label>Site Name<input defaultValue="The Wrangler" /></label><label>Site Description<textarea defaultValue="We specialize in high-quality Jeep Wranglers and off-road vehicles." /></label><label>Site Logo<input defaultValue="/logo.png" /></label><label>Timezone<input defaultValue="UTC+01:00 Amsterdam, Berlin, Rome, Stockholm, Vienna" /></label><button className={styles.primary}>Save Changes</button></form></article>
    </>
  );
}
