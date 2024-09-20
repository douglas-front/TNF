'use client'

import { Bounce } from "@/app/animations/Bounce";
import styles from "./DownloadSection.module.css";

export default function DownloadSection() {
  return (
    <section className={styles.downloadSection}>
      <h1 className={`${styles.title} small`}>
        baixar o game
        <img src="/downloadIcon.png" alt="icon download" />
      </h1>
      <a href="" className={styles.downloadButton} onMouseEnter={()=> Bounce({className: `${styles.downloadButton}`})}>
        <img src="/diferentIcon/windowsWhite.png" alt="windows icon" />
      </a>

      <img className={styles.plusOrnamentation} src="/diferentIcon/plusWhite.png" alt="icon" />
    </section>
  );
}
