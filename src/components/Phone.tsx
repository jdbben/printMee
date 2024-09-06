import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

interface PhoneProbs extends HTMLAttributes<HTMLDivElement> {
    imgsrc: string,
    dark?: boolean
}


const Phone = ({ imgsrc, dark, className }: PhoneProbs) => {
    return (
        <div>
            <div className={cn("relative pointer-events-none z-50 overflow-hidden", className)}>
                <img className="pointer-events-none z-50 select-none" src="/imgs/phone-template-white-edges.png" width={300} alt="" />
                <div className="absolute -z-10 inset-0">
                    <img src={imgsrc} alt="" className="object-cover min-w-full min-h-full" />
                </div>

            </div>
        </div>
    )
}

export default Phone