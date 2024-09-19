import gsap from "gsap";

interface IProps{
    className: string
}

export function Bounce({className}:IProps){
    gsap.to(`.${className}`,{
        scale: 1.08,
        ease: "elastic",
        duration: .7
    })
    gsap.to(`.${className}`,{
        scale: 1,
        ease: "elastic",
        duration: .7,
        delay: 0.2
    })
}