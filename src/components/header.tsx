import Image from "next/image";
import Button from "./button";

interface HeaderFlexProps {
    image?: boolean
}

export default function HeaderFlex({ image }: HeaderFlexProps) {
    return (
        <header className="sm:h-screen w-full relative flex justify-center">
            <div className="relative w-full max-w-4xl flex sm:flex-row flex-col items-center justify-start">
                {!image && (
                    <div className="w-full sm:absolute px-4">
                        <Image src="/images/bg1.webp" className="sm:block hidden rounded-xl" alt="Giovanna Habboub" layout="responsive" width={812} height={538} />
                    </div>
                )}
                <div className="flex flex-col sm:justify-start sm:items-start justify-center items-center gap-4 max-w-xl z-50 px-4 pt-6">
                    <div className="sm:w-[] w-[200px]">
                        <Image src="/images/logo.webp" alt="Logo 21 Dias Extraordinários" layout="responsive" width={192} height={100} />
                    </div>
                    <Image src="/images/bg0.webp" alt="Giovanna Habboub" className="sm:hidden block rounded-xl" layout="responsive" width={343} height={170} />
                    <h1 className="sm:text-3xl text-xl font-semibold">Até quando você vai viver seus dias cheios de frustração, culpa, e sem sentir orgulho da mulher que você é? Sem ser uma mulher que é admirada?</h1>
                    <p className="paragraph">Construa sua verdadeira autoestima em 21 passos e torne-se a mulher mais admirada: realizadora, orgulhosa de si mesma e reconhecendo seu próprio valor.</p>
                    <Button>Quero ser uma mulher realizadora</Button>
                    <p className="text-sm max-w-sm text-zinc-400 sm:text-left text-center">*Esse é o protocolo validado de 21 exercícios para despertar o seu valor (e parar de procrastinar).</p>
                </div>
            </div>
        </header>
    )
}