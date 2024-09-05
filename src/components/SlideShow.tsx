"use client";
import { useEffect, useRef, useState } from "react"
import { imageAssets } from "../lib/constants"
import { cn } from "@/lib/utils";

imageAssets.push(imageAssets[0])

const SlideShow = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [transition, setTransition] = useState(0);
    const [duration, setDuration] = useState('')

    useEffect(() => {
        if (ref.current) {
            const job = setInterval(() => {
                setDuration("duration-1000")
                setTransition((prev) =>
                    prev - (ref.current?.offsetWidth ?? 0)
                );
            }
                , 5000)
            return () => {
                clearInterval(job)
            }
        }

    }, []);
    useEffect(() => {

        if (ref.current && imageAssets.length * ref.current.offsetWidth <= Math.abs(transition)) {
            setTransition(0)
            setDuration("")
        }
    }, [transition]);



    return (
        <div className="flex overflow-hidden">
            <div style={{
                transform: `translateX(${transition}px)`
            }} ref={ref} className={cn("flex transform", duration)}>
                {imageAssets.map((imageUrl, i) => <img src={imageUrl} key={i} />)}

            </div>

        </div>

    )
}

export default SlideShow