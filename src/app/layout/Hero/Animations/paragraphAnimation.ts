import styles from '../Hero.module.css'
import gsap from 'gsap'

export function paragraphAnimation(){
    gsap.to(`.${styles.bg}`,{
        height: "0%",
        duration: 0.8,
        ease: "elastic.out(1,9)",
        stagger: 0.2
    })
}
export function paragraphAnimationOut(){
    gsap.to(`.${styles.bg}`,{
        height: "100%",
        duration: 0.8,
        ease: "elastic.out(1,9)",
    })
}