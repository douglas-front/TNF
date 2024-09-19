import styles from '../Hero.module.css'
import gsap from 'gsap'

export default function titleAnimation(){
    gsap.to(`.${styles.title} span`,{
        y:0,
        duration: 1,
        ease: "elastic.out(1,9)",
        stagger: 0.2,
        delay: 4.5
    })
}