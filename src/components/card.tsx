import CardItem from "./CardItem";

export default function Card() {
    return (
        <div className="bg-zinc-100 rounded-3xl max-w-lg border-4 border-zinc-800">
            <div className="p-6">
                <h2 className="sm:text-3xl text-2xl font-medium mb-4">Você se sente <span className="font-bold">frustrada</span>?</h2>
                <div className="flex flex-col gap-1">
                    <CardItem
                        text="Como se você não conseguisse progredir na vida?"
                    />
                    <CardItem
                        text="Com toda sua energia sugada pelas pessoas a sua volta?"
                    />
                    <CardItem
                        text="Se sente fraca emocionalmente para dar conta da sua própria vida?"
                    />
                    <CardItem
                        text="Cansada de procrastinar e não cumprir com as coisas que você mesma se propõe a fazer?"
                    />
                </div>
            </div>
            <div className="bg-zinc-800 p-6 rounded-b-xl">
                <h4 className="text-white text-lg mb-4"><span className="font-bold">Eu te entendo</span>, sei como é se sentir frustrada e pensar:</h4>
                <p className="text-zinc-400 text-sm">"Eu não consigo progredir em nada, nunca termino o que começo, não tenho valor para ninguém, não sei impor limites para nada, mas sei que tenho potencial para mais, mas por falta de ânimo, acabo não fazendo nada".</p>
            </div>
        </div>
    )
}