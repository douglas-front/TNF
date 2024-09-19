import styles from './LanguageSection.module.css'
interface Iprops{
    src: string
    download: string
}

export default function Card({src, download}: Iprops) {
    return(
        <a href="" download={download}>
        <div className={styles.card}>
            <img src={src} alt="languages images" />
        </div>
        </a>
    )
}