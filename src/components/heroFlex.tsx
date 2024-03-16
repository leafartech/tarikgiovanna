import { ReactNode } from "react"

interface HeroFlexProps {
    children: ReactNode
    imagePath: string
}

export default function HeroFlex({imagePath, children}: HeroFlexProps) {
    return (
        <div className="sm:grid sm:grid-cols-2 sm:max-w-4xl flex flex-col gap-4">
            <div className="">
                <img src={`images/${imagePath}.webp`} alt="Giovanna Habboub" />
            </div>
            <div className="">
                {children}
            </div>
        </div>
    )
}