'use client'

import { useEffect } from "react";
import styles from "./Hero.module.css";
import titleAnimation from "@/app/layout/Hero/Animations/titleAnimation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {paragraphAnimation, paragraphAnimationOut} from "@/app/layout/Hero/Animations/paragraphAnimation";
import { arrowAnimation, arrowAnimationOut } from "@/app/layout/Hero/Animations/arrowAnimation";

export default function Hero() {

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(`.${styles.plus}`,{
      rotate: "280deg",
      ease: "elastic.out(1,9)",
      duration: 1,
      scrollTrigger:{
        trigger: `.${styles.hero}`,
        start: "45% 50%",
        end: "100% 50%",
        scrub: true
      }
    })


    ScrollTrigger.create({
      trigger: `.${styles.welcome}`,
      start: "-100% 50%",
      end: "200% 50%",
      onEnter: ()=>{
        paragraphAnimation()
        arrowAnimation()
      },
      onEnterBack: ()=>{
        paragraphAnimation()
        arrowAnimation()
      },
      onLeave: ()=>{
        paragraphAnimationOut()
        arrowAnimationOut()
      },
      onLeaveBack: ()=>{
        paragraphAnimationOut()
        arrowAnimationOut()
      }
    })

    return()=>{
      gsap.killTweensOf(`.${styles.plus}`)
      ScrollTrigger.killAll()
    }
  },[])
  
  useEffect(()=>{
    titleAnimation()
  })

  return (
    <section className={styles.hero}>
      <h1 className={styles.title}><span>the</span></h1>
      <h1 className={styles.title}><span>Nordeste</span></h1>
      <h1 className={styles.title}><span>Face</span></h1>

      <div className={styles.welcome}>
        <div className={styles.bg}></div>
        <p>
          seja bem vindo a um novo conceito <br />
          em aprendizagem de programação, <br />
          mergulhe nessa experiência em <br />
          rumo ao mundo do desenvolvimento. <br />
        </p>
        <img className={styles.arrow} src="/arrow.png" alt="arrow icon" />
      </div>

      <div className={styles.info}>
        <div className={styles.bg}></div>
        <p>
          já disponível para a seguinte <br />
          plataforma digital.
        </p>
        <button className={styles.button}>
          <img src="/windows.png" alt="" />
        </button>
      </div>

      <img className={`${styles.ornamentation} ${styles.plus}`} src="/plus.png" alt="icon" />
      <img className={`${styles.ornamentation2} ${styles.plus}`} src="/plus.png" alt="icon" />
    </section>
  );
}
