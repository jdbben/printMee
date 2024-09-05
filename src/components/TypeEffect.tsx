"use client"

import { cn } from "@/lib/utils";
import { CSSProperties, useEffect, useState } from "react";
const TypeEffect = ({ classname, text, stylish }: {
  classname?: string;
  text: string;
  stylish?: CSSProperties;
}) => {

  const [textEffct, setTextEffect] = useState<string>("")


  const deleyPara = (index: number, nextletter: string) => {
    setTimeout(function () {
      setTextEffect((prev) => prev + nextletter)
    }, 50 * index)
  }

  useEffect(() => {
    for (let i = 0; i < text.length; i++) {
      const nextletter = text[i]
      deleyPara(i, nextletter)
    }
  }, [])
  return (
    <div>

      <>
        <p className={cn('', classname)} style={stylish} >{textEffct}</p>
      </>

    </div>
  )
}

export default TypeEffect