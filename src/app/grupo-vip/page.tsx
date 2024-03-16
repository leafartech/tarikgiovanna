import Button from "@/components/button";
import Image from "next/image";

export default function GrupoVip() {
  return (
    <div className="flex justify-center text-center px-4">
      <div className="flex flex-col gap-2 items-center justify-center max-w-xl">
        <div className="sm:w-[] w-[200px]">
          <Image src="/images/logo.webp" alt="Logo 21 Dias Extraordinários" layout="responsive" width={192} height={100} />
        </div>
        <h1 className="text-xl">Até quando você vai viver seus dias cheios de <span className="font-bold">frustração, culpa</span>, e sem sentir orgulho da mulher que você é? <span className="font-bold">Sem ser uma mulher que é admirada?</span></h1>
        <div className="max-w-xl">
          <Image src="/images/bg0.webp" alt="Giovanna Habboub" layout="responsive" width={343} height={170} />
        </div>
        <p className="text-lg text-zinc-600 diff">Construa sua verdadeira autoestima em 21 passos e torne-se a mulher mais admirada: realizadora, orgulhosa de si mesma e reconhecendo seu próprio valor.</p>
        <a href="https://chat.whatsapp.com/EGW6owQTCUP4D8jtMW2UoV" className="w-full rounded-3xl bg-green-500 py-3 max-w-sm font-semibold text-white">Quero entrar no grupo vip</a>
        <p className="text-sm max-w-sm text-zinc-400 text-center">*Esse é o protocolo validado de 21 exercícios para despertar o seu valor (e parar de procrastinar).</p>
      </div>
    </div>
  )
}