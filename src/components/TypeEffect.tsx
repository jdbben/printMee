"use client"

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
const TypeEffect = ({ classname, text }: {
  classname?: string;
  text: string;
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
        <p className={cn('', classname)}>{textEffct}</p>
      </>

    </div>
  )
}

export default TypeEffect