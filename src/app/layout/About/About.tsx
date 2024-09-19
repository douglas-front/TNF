"use client"

import styles from "./About.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import {ParagraphAnimation} from "@/app/animations/ParagraphAnimation";
import { Bounce } from "@/app/animations/Bounce";

export default function About() {

  const arrForOrnamentation = [1, 2, 3, 4, 5];


  useEffect(()=>{

    ScrollTrigger.create({
      trigger: `.${styles.about}`,
      start: "40% 50%",
      end: "100% 50%",
      onEnter: () =>{
        ParagraphAnimation({className: `${styles.bg}`})
      },
   
    
    })

  },[])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to(`.${styles.ornamentation} img`,{
      rotate: "400deg",
      scrollTrigger:{
        trigger: `.${styles.about}`,
        start: "0% 60%",
        end: "160% 100%",
        scrub: true
      }
    })

    return () => gsap.killTweensOf(`.${styles.ornamentation}`)
  },[])

  return (
    <section className={styles.about}>
      <h1 className={styles.title}>
        sobre
        <span className={styles.miniTitle}>
          <img src="/spanInit.png" alt="text" />
        </span>
      </h1>

      <div className={styles.info}>
        <div className={styles.paragraphs}>
          <p>
            Somos um grupo de cinco jovens <br />
            apaixonados por tecnologia, unidos <br />
            para apresentar um projeto que <br />
            ensina programação de forma <br />
            acessível e inovadora. 
          </p>
          <p>
            Utilizando linguagens de programação, criamos uma <br />
            maneira mais fácil e divertida de programar. Desenvolvemos <br />
            uma interface gráfica interativa para o usuário, na qual, com <br />
            apenas um clique, você pode obter um código pronto. Esse <br />
            código pode variar entre opções básicas e complexas.
          </p>
          <div className={styles.bg}></div>
        </div>
        <div className={styles.paragraphs}>
          <p>
            Nosso projeto surgiu da vontade de <br />
            compartilhar o conhecimento em <br />
            programação com outros jovens. <br />
            Combinando nossa experiência e <br />
            entusiasmo até o desenvolvimento <br />
            do projeto como um todo.
          </p>
          <p>
            Dessa forma, proporcionamos uma maneira divertida <br />
            e prática de explorar o mundo da programação. Ao <br />
            integrar códigos de várias linguagens de programação, <br />
            oferecemos aos jovens a oportunidade de aplicar <br />
            conceitos em tempo real, criando um ambiente perfeito <br />
            para o desenvolvimento dentro da área da programação.
          </p>
          <div className={styles.bg}></div>

        </div>
      </div>

      <div className={styles.button} onMouseEnter={()=> Bounce({className: `${styles.button}`})}>
        <img src="/button.png" alt="button" />
      </div>

      <img className={styles.ornamentationPlus} src="/plus.png" alt="icon" />

      <img className={styles.blocks} src="/icon3.png" alt="icon" />

      <div className={styles.ornamentation}>
        {arrForOrnamentation.map((item, index) => (
          <img key={index} src="/plus2.png" alt="icon" />
        ))}
      </div>
    </section>
  );
}
