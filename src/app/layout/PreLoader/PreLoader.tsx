'use client'

import NumberCounter from "@/app/components/numberAnimation";
import styles from "./PreLoader.module.css";
import gsap from "gsap";
import { useEffect } from "react";


export default function PreLoader() {

  useEffect(()=>{
    gsap.to(`.${styles.bg}`,{
      height: "100vh",
      duration: 1,
      ease: "elastic(1,9)",
      delay: 3.4
    })

    gsap.to(`.${styles.preLoader}`,{
      height: "0vh",
      duration: 1,
      ease: "elastic(1,9)",
      delay: 4.4
    })
  }, [])

  return (
    <div className={styles.preLoader}>
      <h1>
         <NumberCounter start={0} end={100} duration={3} /> %
      </h1>

      <div className={styles.bg}></div>
    </div>
  );
}
