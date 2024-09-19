import gsap from "gsap";

interface IProps{
    className: string
}

export function ParagraphAnimation({className}:IProps){
    gsap.to(`.${className}`,{
        height: "0%",
        duration: 0.8,
        ease: "elastic.out(1,9)",
        stagger: 0.2
    })
}
