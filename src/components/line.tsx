import { ArrowLongDownIcon } from "@heroicons/react/24/solid"

export default function Line() {
    return (
        <div className="bg-client-pallet-2 py-6 w-full flex flex-col gap-3 items-center px-4 sm:px-0">
            <h3 className="text-white text-2xl font-semibold flex items-center text-center">
                <span>Construa a verdadeira autoestima</span>
                <ArrowLongDownIcon className="h-6 sm:block hidden" /></h3>
            <ul className="flex flex-wrap gap-6 text-white justify-center">
                <li className="font-medium border-2 rounded-3xl py-2 px-4 border-white">Autoeficácia</li>
                <li className="font-medium border-2 rounded-3xl py-2 px-4 border-white">Autoconfiança</li>
                <li className="font-medium border-2 rounded-3xl py-2 px-4 border-white">Autoimagem</li>
                <li className="font-medium border-2 rounded-3xl py-2 px-4 border-white">Autoreforço</li>
            </ul>
        </div>
    )
}