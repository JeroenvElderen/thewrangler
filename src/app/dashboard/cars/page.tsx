import Image from "next/image";
import { Copy, Edit3, Plus, Trash2 } from "lucide-react";
import styles from "../dashboard.module.css";
import { cars } from "../_components/data";

export default function CarsPage() {
  return (
    <>
      <div className={styles.heroPanel}><div><p className={styles.eyebrow}>Inventory CMS</p><h1>Cars</h1><p>Manage all cars, add new listings, or edit existing vehicles.</p></div><button className={styles.primary}><Plus size={15} /> Add New Car</button></div>
      <article className={styles.tableCard}><div className={styles.cardHeader}><h2>Car Listings</h2><div className={styles.filters}><input placeholder="Search cars..." /><button>All Makes</button><button>All Models</button><button>All Years</button><button>All Status</button></div></div><table><thead><tr><th>Image</th><th>Title</th><th>Make</th><th>Model</th><th>Year</th><th>Price</th><th>Status</th><th>Actions</th></tr></thead><tbody>{cars.map((car) => (<tr key={car[1]}><td><Image src={car[0]} alt="" width={56} height={36} /></td><td>{car[1]}</td><td>{car[2]}</td><td>{car[3]}</td><td>{car[4]}</td><td>{car[5]}</td><td><span className={car[6] === "Draft" ? styles.draft : styles.published}>{car[6]}</span></td><td><Edit3 size={14} /><Copy size={14} /><Trash2 size={14} /></td></tr>))}</tbody></table></article>
    </>
  );
}
