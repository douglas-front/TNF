import styles from './LanguageSection.module.css'

interface Iprops{
    src: string
}

export default function Card({src}: Iprops) {
    return(
        <div className={styles.card}>
            <img src={src} alt="" />
        </div>
    )
}