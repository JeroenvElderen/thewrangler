import Image from "next/image";
import { Upload } from "lucide-react";
import styles from "../dashboard.module.css";
import { mediaAssets } from "../_components/data";

export default function MediaPage() {
  return (
    <>
      <div className={styles.heroPanel}><div><p className={styles.eyebrow}>Assets</p><h1>Media Library</h1><p>Upload and manage media files.</p></div><button className={styles.primary}><Upload size={15} /> Upload Files</button></div>
      <article className={styles.mediaCard}><div className={styles.cardHeader}><h2>All Media</h2><div className={styles.filters}><button>Images</button><button>Videos</button><button>Documents</button></div></div><div className={styles.mediaGrid}>{mediaAssets.map((src) => <div key={src}><Image src={src} alt="Media asset" width={150} height={92} /><span>{src.replace("/", "")}</span></div>)}</div></article>
    </>
  );
}
