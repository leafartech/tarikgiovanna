import { ReactNode } from "react"

interface ButtonProps {
    children: ReactNode
}

export default function Button({ children }: ButtonProps) {
    return (
        <button className="w-full rounded-3xl bg-green-500 py-3 max-w-sm font-semibold text-white">{children}</button>
    )
}