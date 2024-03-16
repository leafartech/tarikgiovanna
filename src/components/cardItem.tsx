import { XCircleIcon } from '@heroicons/react/24/solid'

interface CardItemProps {
    text: string
}

export default function CardItem({ text }: CardItemProps) {
    return (
        <p className="text-zinc-600">
            <XCircleIcon className="h-7 w-7 fill-red-500 inline-block" />
            <span className="ms-2">{text}</span>
        </p>
    )
}
