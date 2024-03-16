import { CheckCircleIcon } from '@heroicons/react/24/solid'

interface CardItemProps {
    text: string
}


export function CardItemPositive({ text }: CardItemProps) {
    return (
        <p className="text-zinc-600">
            <CheckCircleIcon className="h-7 w-7 fill-green-500 inline-block" />
            <span className="ms-2">{text}</span>
        </p>
    )
}