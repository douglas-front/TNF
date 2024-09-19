import Card from '@/app/layout/LanguageSection/Card'
import styles from './LanguageSection.module.css'

export default function LanguageSection() {

    const languages = [
        {
            img: "/languages/assembly.png"
        },
        {
            img: "/languages/C.png"
        },
        {
            img: "/languages/c++.png"
        },
        {
            img: "/languages/CSS.png"
        },
        {
            img: "/languages/java.png"
        },
        {
            img: "/languages/javascript.png"
        },
        {
            img: "/languages/lua.png"
        },
        {
            img: "/languages/perl.png"
        },
        {
            img: "/languages/php.png"
        },
        {
            img: "/languages/python.png"
        },
        {
            img: "/languages/ruby.png"
        },
        {
            img: "/languages/rust.png"
        },
    ]

    return(
        <section className={styles.languageSection}>
            <h1 className={`${styles.title} small`}>linguagens 
                <img src="/downloadIcon.png" alt="" />
            </h1>
            <div className={styles.containerCards}>
                {languages.map((card, index)=>(
                    <Card key={index} src={card.img}/>
                ))}
            </div>
        </section>
    )
}