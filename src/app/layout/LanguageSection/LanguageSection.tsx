'use client'

import Card from '@/app/layout/LanguageSection/Card';
import styles from './LanguageSection.module.css';
import { Bounce } from '@/app/animations/Bounce';

export default function LanguageSection() {
    const languages = [
        {
            img: "/languages/assembly.png",
            download: "/ASSEMBLY.zip"
        },
        {
            img: "/languages/C.png",
            download: "/C.zip"
        },
        {
            img: "/languages/c++.png",
            download: "/C++.zip"
        },
        {
            img: "/languages/CSS.png",
            download: "/HTMLCSS.zip"
        },
        {
            img: "/languages/java.png",
            download: "/JAVA.zip"
        },
        {
            img: "/languages/javascript.png",
            download: "/JAVASCRIPT.zip"
        },
        {
            img: "/languages/lua.png",
            download: "/LUA.zip"
        },
        {
            img: "/languages/perl.png",
            download: "/PERL.zip"
        },
        {
            img: "/languages/php.png",
            download: "/PHP.zip"
        },
        {
            img: "/languages/python.png",
            download: "/PYTHON.zip"
        },
        {
            img: "/languages/ruby.png",
            download: "/RUBY.zip"
        },
        {
            img: "/languages/rust.png",
            download: "/RUST.zip"
        },
    ];

    return (
        <section className={styles.languageSection}>
            <h1 className={`${styles.title} small`}>
                linguagens
                <img src="/downloadIcon.png" alt="Download Icon" />
            </h1>
            <div className={styles.containerCards}>
                {languages.map((card, index) => (
                    <div className={`card${index.toString()}`} key={index} onMouseEnter={()=> Bounce({className: `card${index}`})}>
                        <Card src={card.img} download={card.download} />
                    </div>
                ))}
            </div>
        </section>
    );
}
