import gsap from "gsap";
import styles from '../LanguageSection.module.css'

export function cardAnimation(){
    gsap.to(`.${styles.card}`,{
        y: 0,
        ease: "elastic.out(1,9)",
        duration: 1,
        stagger: .1
    })

    gsap.to(`.${styles.divCard}`, {
        pointerEvents: "initial",
        delay: 1.6
    })
}