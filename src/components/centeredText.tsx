import { ReactNode } from "react";

interface CenteredTextProps {
    children: ReactNode
    size?: boolean
}

export default function CenteredText({ children, size}: CenteredTextProps) {
    return (
        <div className={`w-full ${size ? 'max-w-3xl' : 'max-w-2xl'}`}>
            <h2 className="font-medium sm:text-3xl text-2xl sm:text-center text-left">{children}</h2>
        </div>
    )
}