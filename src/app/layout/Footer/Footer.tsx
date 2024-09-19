import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.sitemap}>
        <h3 className={styles.subTitle}>sitemap</h3>
        <ul className={styles.list}>
          <li>Sobre</li>
          <li>Contato</li>
          <li>Download</li>
        </ul>
      </div>

      <img className={styles.logo} src="/logo.png" alt="" />
      <p className={styles.paragraph}>
        Seja bem-vindo ao projeto <br />
        The Nordeste Face, Esperamos <br />
        que você aprenda com nossas <br />
        ferramentas.
      </p>

      <button className={styles.toTop}>
        <img src="/arrow.png" alt="" />
      </button>
    </footer>
  );
}
