import Button from "@/components/button";
import Card from "@/components/card";
import { CardItemPositive } from "@/components/cardItemPositive";
import CenteredText from "@/components/centeredText";
import HeaderFlex from "@/components/header";
import HeroFlex from "@/components/heroFlex";
import HeroFlexRight from "@/components/heroFlexRight";
import Line from "@/components/line";
import Section from "@/components/section";

export default function Page() {
  return (
    <div className="bg-client-pallete">
      <HeaderFlex />
      <main className="sm:pt-0 pt-12">
        <Section classNameS="sm:pb-24 pb-12">
          <div className="sm:grid sm:grid-cols-2 flex flex-col sm:gap-0 gap-4">
            <div className="flex justify-center">
              <img src="images/bg2.webp" alt="Mulher desmotivada" />
            </div>
            <Card />
          </div>
        </Section>
        <Section className="sm:pb-24 pb-12 px-4 sm:px-0">
          <CenteredText>Mas e se eu te dissesse que existe uma <span className="font-bold">forma diferente</span> de viver sua vida?</CenteredText>
          <div className="flex flex-col gap-2 sm:py-12 py-6">
            <div className="bg-zinc-200 px-4 py-6 rounded-xl sm:text-center text-left max-w-lg">
              <p className="text-zinc-600">Porque existe um protocolo validado que vai te impulsionar para realizar aquilo que deseja.</p>
            </div>
            <div className="bg-zinc-200 px-4 py-6 rounded-xl sm:text-center text-left max-w-lg">
              <p className="text-zinc-600">E te mostrará o que fazer em cada dia para parar de procrastinar, como um mapa.</p>
            </div>
            <div className="bg-zinc-200 px-4 py-6 rounded-xl sm:text-center text-left max-w-lg">
              <p className="text-zinc-600">É esse protocolo que te permitirá se tornar a mulher que você admiraria.</p>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center">
            <div className="px-2 rounded-xl text-center max-w-lg">
              <h4 className="text-xl font-medium">Essa solução é a construção da sua <span className="font-bold">AUTOESTIMA</span>.</h4>
            </div>
            <img src="images/bg3.webp" alt="Autoestima" className="sm:max-w-xl w-full" />
            <Button>Quero ser uma mulher realizadora</Button>
          </div>
        </Section>
        <Section classNameS="sm:pb-24 pb-12 px-4 sm:px-0">
          <div className="flex flex-col sm:items-center sm:mb-12 mb-6">
            <h5 className="text-zinc-600 font-medium text-lg mb-2">E antes que você diga:</h5>
            <CenteredText>“É impossível parar de procrastinar”, <span className="font-bold">permita que eu me apresente</span>.</CenteredText>
          </div>
          <HeroFlex
            imagePath="bg4"
          >
            <div className="flex flex-col sm:gap-8 gap-4">
              <h2 className="text-3xl">Meu nome é <br /> <span className="font-bold diff">Giovanna Habboub</span></h2>
              <div className="flex flex-col gap-4">
                <p className="text-zinc-600 text-lg">A vida que eu levo demanda muito de mim, levando-me a armadilhas que afetam minha autoestima e me fazem procrastinar</p>
                <p className="text-zinc-600 text-lg font-semibold">Toda tentativa de parar de procrastinar resultava em fracasso, apesar de usar várias ferramentas, como listas e notas, nunca conseguia cumprir as metas estabelecidas, perdendo o ânimo rapidamente.</p>
                <p className="text-zinc-600 text-lg">Entendi que o problema era minha autoestima, não as ferramentas. Assim, criei um desafio 100% prático que me permitiu ter mais confiança e viver dias mais produtivos e alinhados com minhas crenças.</p>
                <p className="text-zinc-600 text-xl"><span className="font-bold">Esse é o Desafio 21 Dias Extraordinários.</span></p>
                <div className="">
                  <img src="images/bg5.webp" alt="assinatura" className="h-12 pt-6 border-t border-zinc-800" />
                </div>
              </div>
            </div>
          </HeroFlex>
        </Section>
        <Line />
        <Section classNameS="sm:py-24 py-12 px-4 sm:px-0">
          <HeroFlexRight
            imagePath="bg6"
          >
            <div className="flex flex-col sm:gap-8 gap-4">
              <h2 className="sm:text-3xl text-2xl"><span className="font-bold">21 Dias Extraordinários</span>: o protocolo de 21 desafios práticos para se tornar a mulher mais admirada que você conhece.</h2>
              <div className="flex flex-col gap-4">
                <p className="text-zinc-600">Ao contrário da maioria dos outros cursos sobre autoestima, que ficam te ensinando a se olhar no espelho e ficar repetindo frases positivas ao seu respeito, ou simplesmente a se aceitar como você é…</p>
                <p className="text-zinc-600 font-semibold">E que até te dão um certo ÂNIMO, mas em poucos dias a frustração está de volta e te consumindo novamente…</p>
                <p className="text-zinc-600">Esse é um protocolo altamente funcional e validado que vai te ensinar a construir a verdadeira autoestima, e a assim, você conseguirá parar de procrastinar.</p>
              </div>
              <Button>Quero ser uma mulher realizadora</Button>
            </div>
          </HeroFlexRight>
        </Section>
        <Section classNameS="sm:pb-24 pb-2 px-4 sm:px-0">
          <div className="flex flex-col items-center mb-12">
            <CenteredText size={true}><span className="font-bold">Você vai entender o porquê te falta energia para fazer as coisas que você deveria fazer e vive se sentindo frustrada.</span></CenteredText>
            <h5 className="text-zinc-600 font-medium text-lg mt-2 max-w-xl sm:text-center text-left">E porque mentiram quando te disseram que o que você precisa é de disciplina e não de motivação.</h5>
            <img src="images/bg7.webp" alt="Caminho para alcançar objetivo" className="mt-12" />
          </div>
        </Section>
        <Section classNameS="sm:pb-24 pb-12 px-4 sm:px-0">
          <HeroFlex
            imagePath="bg8"
          >
            <div className="flex flex-col justify-between sm:gap-4 gap-2">
              <h2 className="sm:text-3xl text-2xl">Sempre querendo evoluir, se tornar uma mulher melhor, <span className="font-bold">mas ao mesmo tempo sempre paralisada e nunca consegue de fato começar</span>?</h2>
              <p className="text-zinc-600 text-xl">Então, se você deseja:</p>
              <ul className="flex flex-col gap-2 sm:py-6 py-3">
                <li><CardItemPositive text="Parar de procrastinar" /></li>
                <li><CardItemPositive text="Sentir orgulho da mulher que você é" /></li>
                <li><CardItemPositive text="Ser uma mulher admirada" /></li>
                <li><CardItemPositive text="Ter um relacionamento validado para os seus dias" /></li>
              </ul>
              <div className="flex flex-col gap-4 border-t border-zinc-800 pt-6">
                <p className=""><span className="font-semibold ">Então o desafio 21 Dias Extraordinários é para você.</span></p>
                <Button>Quero ser uma mulher realizadora</Button>
              </div>
            </div>
          </HeroFlex>
        </Section>
      </main>
    </div>
  )
}