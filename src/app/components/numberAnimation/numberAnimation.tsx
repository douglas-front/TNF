'use client'

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

interface Iprops {
  start: number;
  end: number;
  duration?: number;
}

export default function NumberCounter ({ start, end, duration = 2 }: Iprops){
  const [currentNumber, setCurrentNumber] = useState(start);
  const numberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(numberRef.current, {
      duration: duration,
      innerText: end,
      snap: { innerText: 1 },
      onUpdate: () => {
        setCurrentNumber(parseInt(numberRef.current!.innerText));
      },
      ease: "power1.inOut",
    });
  }, [end, duration]);

  return <div ref={numberRef}>{currentNumber}</div>;
};
