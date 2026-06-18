import styles from "../dashboard.module.css";

export default function PageTextsPage() {
  return (
    <>
      <div className={styles.heroPanel}><div><p className={styles.eyebrow}>Content CMS</p><h1>Page Texts</h1><p>Manage and edit texts for all pages.</p></div></div>
      <article className={styles.editorCard}><h2>Hero Section</h2><div className={styles.editorLayout}><div className={styles.sectionList}>{["Homepage", "Hero Section", "About Section", "Inventory", "Finance", "Selling Your Car", "Contact", "FAQ"].map((item, i) => <span className={i === 1 ? styles.selected : ""} key={item}>{item}</span>)}</div><form><label>Subtitle<input defaultValue="Welcome to The Wrangler" /></label><label>Title<input defaultValue="Built for Adventure. Driven by Freedom." /></label><label>Description<textarea defaultValue="The specialist in high-quality Jeep Wranglers and off-road vehicles for those who live for adventure." /></label><label>Button Text<input defaultValue="View Inventory" /></label><button className={styles.primary}>Save Changes</button></form></div></article>
    </>
  );
}
