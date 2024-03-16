import Image from "next/image"
import { ReactNode } from "react"

interface HeroFlexProps {
    children: ReactNode
    imagePath?: string
    width: number
    height: number
}

export default function HeroFlexRight({ imagePath, children, height, width }: HeroFlexProps) {
    return (
        <div className="sm:grid sm:grid-cols-2 max-w-6xl flex flex-col gap-12">
            <div className="">
                {children}
            </div>
            {imagePath && (
                <div className="flex items-center">
                    <Image src={`/images/${imagePath}.webp`} alt="Giovanna Habboub" width={width} height={height} />
                </div>
            )}
        </div>
    )
}