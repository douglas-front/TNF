import styles from "./Creators.module.css";

interface Iprops {
  creatorPhoto: string
  name: string;
  area: string;
  experience: string;
}

export default function Card({ area, experience, name, creatorPhoto }: Iprops) {
  return (
    <div className={styles.card}>
      <img src={creatorPhoto} alt="creator photo" />
      <span className={styles.nameCreator}>{name}</span>
      <div className={styles.line}></div>
      <span className={styles.areaCreator}>{area}</span>
      <p 
      className={styles.experienceCreator}
      dangerouslySetInnerHTML={{ __html: experience }}
      >
      </p>

    </div>
  );
}
