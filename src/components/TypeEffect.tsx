"use client"

import { useIntersection } from "@/Hoock/IntersectionHoock";
import { cn } from "@/lib/utils";
import React, { CSSProperties, MutableRefObject, useEffect, useRef, useState } from "react";
const TypeEffect = ({ classname, text, stylish }: {
  classname?: string;
  text: string;
  stylish?: CSSProperties;
}) => {
  const ref: MutableRefObject<null> = React.useRef(null)
  const [textEffct, setTextEffect] = useState<string>("")
  const [hasTregerd, setHasTregerd] = useState<boolean>(false)

  const isVisible = useIntersection(ref, "0px")




  const deleyPara = (index: number, nextletter: string) => {
    setTimeout(function () {
      setTextEffect((prev) => prev + nextletter)
      if (index = text.length) {
        return setHasTregerd(true)
      }
    }, 50 * index)
  }
  useEffect(() => {

    if (isVisible && !hasTregerd) {
      for (let i = 0; i < text.length; i++) {
        const nextletter = text[i]
        deleyPara(i, nextletter)
      }
    }

  }, [isVisible])

  return (
    <div ref={ref} >
      <>
        <p className={cn('', classname)} style={stylish} >{textEffct}</p>
      </>
    </div>
  )
}

export default TypeEffect