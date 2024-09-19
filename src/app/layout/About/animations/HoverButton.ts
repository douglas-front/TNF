import styles from '../About.module.css'
import gsap from "gsap";

export function HoverButton(){
    gsap.to(`.${styles.button}`,{
        scale: 1.1,
        ease: "elastic",
        duration: .7
    })
}
export function HoverButtonOut(){
    gsap.to(`.${styles.button}`,{
        scale: 1,
        ease: "elastic",
    })
}