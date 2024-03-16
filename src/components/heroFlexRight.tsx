import { ReactNode } from "react"

interface HeroFlexProps {
    children: ReactNode
    imagePath: string
}

export default function HeroFlexRight({imagePath, children}: HeroFlexProps) {
    return (
        <div className="sm:grid sm:grid-cols-2 max-w-6xl flex flex-col gap-12">
            <div className="">
                {children}
            </div>
            <div className="flex items-center">
                <img src={`images/${imagePath}.webp`} alt="Giovanna Habboub" />
            </div>
        </div>
    )
}