import { ReactNode } from "react";

interface CenteredTextProps {
    children: ReactNode
    size?: boolean
    sizePlus?: boolean
}

export default function CenteredText({ children, size, sizePlus }: CenteredTextProps) {
    return (
        <div className={`w-full ${sizePlus ? "max-w-4xl" : size ? 'max-w-3xl' : 'max-w-2xl'}`}>
            <h2 className={`font-medium sm:text-3xl text-2xl sm:text-center text-left ${sizePlus && "sm:text-3xl text-lg"}`}>{children}</h2>
        </div>
    )
}