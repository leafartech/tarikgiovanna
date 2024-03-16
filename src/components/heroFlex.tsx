import Image from "next/image"
import { ReactNode } from "react"

interface HeroFlexProps {
    children: ReactNode
    imagePath: string
    width: number
    height: number
}

export default function HeroFlex({imagePath, children, width, height}: HeroFlexProps) {
    return (
        <div className="sm:grid sm:grid-cols-2 sm:max-w-4xl flex flex-col gap-4">
            <div className="">
                <Image src={`/images/${imagePath}.webp`} alt="Giovanna Habboub" width={width} height={height} />
            </div>
            <div className="">
                {children}
            </div>
        </div>
    )
}