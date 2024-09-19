'use client'
import { createContext, useLayoutEffect, useState } from "react";

export const LocomotiveScrollContext = createContext<any>(null!)

interface Props extends React.PropsWithChildren { }
export default function LocomotiveScrollProvider({ children }: Props) {
  const [_, _set] = useState<any>(null!)

  useLayoutEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default

      const newLocomotiveScroll = new LocomotiveScroll({
        autoResize: true,
        lenisOptions: {
            autoResize: true,
            touchMultiplier: 1.5,
        },
      })

      _set(newLocomotiveScroll.lenisInstance)

    //   newLocomotiveScroll?.stop()
    })()

    return () => { }
  }, [])

  return (
    <LocomotiveScrollContext.Provider value={_}>
      {children}
    </LocomotiveScrollContext.Provider>
  )
}