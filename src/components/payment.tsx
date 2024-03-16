import Button from "./button";

export default function Payment() {
    return (
        <div className="sm:w-96 pb-6 bg-zinc-800 rounded-xl flex flex-col gap-4">
            <div className="pt-6 pb-6 bg-red-500 rounded-t-xl">
                <h2 className="text-white font-semibold text-xl text-center">Faça sua inscrição agora mesmo</h2>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-zinc-400">de R$ 597 por apenas</p>
                <h5 className="text-white text-2xl font-medium">12x de R$ 24,80</h5>
            </div>
            <div className=" px-4 flex flex-col gap-4">
                <Button>Destrabar minha vaga</Button>
                <div className="flex justify-center w-full">
                    <img src="images/bg11.webp" alt="Métodos de pagamento" className="object-contain w-56" />
                </div>
                <p className="text-zinc-200 text-center text-sm">ATENÇÃO: essa oferta é por tempo limitado e pode se esgotar a qualquer momento.</p>
            </div>
        </div>
    )
}