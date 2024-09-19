import styles from '../Hero.module.css'
import gsap from 'gsap'

export function arrowAnimation(){
    gsap.to(`.${styles.arrow}`,{
        left: "25vw",
        duration: 0.8,
        ease: "elastic.out(1,9)",
    })

    gsap.to(`.${styles.arrow}`,{
        rotate: "0deg",
        duration: 0.8,
        ease: "elastic.out(1,9)",
        delay: 0.2
    })
}
export function arrowAnimationOut(){
   gsap.to(`.${styles.arrow}`,{
        left: "0vw",
        duration: 0.8,
        ease: "elastic.out(1,9)",
    })
    
    gsap.to(`.${styles.arrow}`,{
        rotate: "45deg",
        duration: 0.8,
        ease: "elastic.out(1,9)",
    })
  
}