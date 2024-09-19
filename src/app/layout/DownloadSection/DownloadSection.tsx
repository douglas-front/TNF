import styles from "./DownloadSection.module.css";

export default function DownloadSection() {
  return (
    <section className={styles.downloadSection}>
      <h1 className={`${styles.title} small`}>
        baixar
        <img src="/downloadIcon.png" alt="" />
      </h1>
      <a href="" className={styles.downloadButton}>
        <img src="/diferentIcon/windowsWhite.png" alt="windows icon" />
      </a>

      <img className={styles.plusOrnamentation} src="/diferentIcon/plusWhite.png" alt="icon" />
    </section>
  );
}
