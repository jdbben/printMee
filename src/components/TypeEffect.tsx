"use client"

import { useEffect, useState } from "react";
const TypeEffect = () => {
  const text: string = "At PrintMee, we believe your memories are invaluable and deserve to be celebrated with elegance. Whether it’s a cherished photo, a meaningful quote, or a unique design, our custom products allow you to transform your special moments into personalized treasures. Celebrate your story with our beautifully crafted items and keep your most treasured memories close to your heart."

  const [textEffct, setTextEffect] = useState<string>("")


  const deleyPara = (index: number, nextletter: string) => {
    setTimeout(function () {
      setTextEffect((prev) => prev + nextletter)
    }, 75 * index)
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
        {textEffct}
      </>

    </div>
  )
}

export default TypeEffect