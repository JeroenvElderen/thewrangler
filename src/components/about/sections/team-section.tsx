import Image from "next/image";
import styles from "../../about-page.module.css";
import { team } from "../data";

export default function TeamSection() {
  return <section className={styles.team}><div className={styles.teamIntro}><p className={styles.smallKicker}>/ Our Team</p><h2>Real People. Real Passion.</h2></div><div className={styles.teamGrid}>{team.map((member) => <article className={styles.member} key={member.name}><div className={styles.memberPhoto}><Image src={member.image} alt={member.name} fill /></div><h4>{member.name}</h4><p className={styles.role}>{member.role}</p><p>{member.desc}</p></article>)}</div></section>;
}
