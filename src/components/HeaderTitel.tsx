"use client"
import { headertitels } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"


const HeaderTitel = () => {
    const ref = useRef<HTMLParagraphElement>(null)
    const [transition, setTransition] = useState<number>(0)
    const [duration, setDuration] = useState<string>("")

    useEffect(() => {
        if (ref.current) {
            const job = setInterval(() => {
                setTransition((prev) =>
                    prev - (ref.current?.offsetHeight ?? 0)
                );
                setDuration("duration-500")
            }, 4000)
            return () => {
                clearInterval(job)
            }
        }

    }, [])

    useEffect(() => {
        if (Math.abs(transition) >= ref.current!.offsetHeight * headertitels.length) {
            setDuration("")
            setTransition(0)
        }

    }, [transition])




    return (


        <div>
            {
                headertitels.map((titels, index) =>
                    <p
                        ref={ref}
                        style={{
                            transform: `translateY(${transition}px)`,


                        }}
                        className={cn("text-black text-5xl font-bold lg:translate-x-8 transform", duration)} key={index}>{titels}</p>
                )
            }
        </div>


    )
}

export default HeaderTitel