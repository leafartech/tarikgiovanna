import Button from "@/components/button";
import Card from "@/components/card";
import { CardItemPositive } from "@/components/cardItemPositive";
import CenteredText from "@/components/centeredText";
import Dropdown from "@/components/dropdown";
import HeaderFlex from "@/components/header";
import HeroFlex from "@/components/heroFlex";
import HeroFlexRight from "@/components/heroFlexRight";
import Line from "@/components/line";
import Payment from "@/components/payment";
import Section from "@/components/section";

export default function Page() {
  return (
    <div className="bg-client-pallete">
      <HeaderFlex 
        image={true}
      />
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
          <CenteredText>Mas e se eu te dissesse que existe uma <span className="font-bold text-client-pallet-2">forma diferente</span> de viver sua vida?</CenteredText>
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
              <h4 className="text-xl font-medium">Essa solução é a construção da sua <span className="font-bold text-client-pallet-2">AUTOESTIMA</span>.</h4>
            </div>
            <img src="images/bg3.webp" alt="Autoestima" className="sm:max-w-xl w-full" />
            <Button>Quero ser uma mulher realizadora</Button>
          </div>
        </Section>
        <Section classNameS="sm:pb-24 pb-12 px-4 sm:px-0">
          <div className="flex flex-col sm:items-center sm:mb-12 mb-6">
            <h5 className="text-zinc-600 font-medium text-lg mb-2">E antes que você diga:</h5>
            <CenteredText>“É impossível parar de procrastinar”, <span className="font-bold text-client-pallet-2">permita que eu me apresente</span>.</CenteredText>
          </div>
          <HeroFlex
            imagePath="bg4"
          >
            <div className="flex flex-col sm:gap-8 gap-4">
              <h2 className="text-3xl">Meu nome é <br /> <span className="font-bold diff text-client-pallet-2">Giovanna Habboub</span></h2>
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
            imagePath=""
          >
            <div className="flex flex-col sm:gap-8 gap-4">
              <h2 className="sm:text-3xl text-2xl"><span className="font-bold text-client-pallet-2">21 Dias Extraordinários</span>: o protocolo de 21 desafios práticos para se tornar a mulher mais admirada que você conhece.</h2>
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
            <CenteredText size={true}><span className="font-bold text-client-pallet-2">Você vai entender o porquê te falta energia para fazer as coisas que você deveria fazer e vive se sentindo frustrada.</span></CenteredText>
            <h5 className="text-zinc-600 font-medium text-lg mt-2 max-w-xl sm:text-center text-left">E porque mentiram quando te disseram que o que você precisa é de disciplina e não de motivação.</h5>
            <img src="images/bg7.webp" alt="Caminho para alcançar objetivo" className="mt-12" />
          </div>
        </Section>
        <Section classNameS="sm:pb-24 pb-12 px-4 sm:px-0">
          <HeroFlex
            imagePath="bg8"
          >
            <div className="flex flex-col justify-between sm:gap-4 gap-2">
              <h2 className="sm:text-3xl text-2xl">Sempre querendo evoluir, se tornar uma mulher melhor, <span className="font-bold text-client-pallet-2">mas ao mesmo tempo sempre paralisada e nunca consegue de fato começar</span>?</h2>
              <p className="text-zinc-600 text-xl">Então, se você deseja:</p>
              <ul className="flex flex-col gap-2 sm:pt-6 sm:pb-0 py-3">
                <li><CardItemPositive text="Parar de procrastinar" /></li>
                <li><CardItemPositive text="Sentir orgulho da mulher que você é" /></li>
                <li><CardItemPositive text="Ser uma mulher admirada" /></li>
                <li><CardItemPositive text="Ter um relacionamento validado para os seus dias" /></li>
              </ul>
              <Button>Quero ser uma mulher realizadora</Button>
              <div className="flex flex-col gap-4 border-t border-zinc-800 pt-6 sm:mt-0 mt-6">
                <p className=""><span className="font-semibold ">Então o desafio 21 Dias Extraordinários é para você.</span></p>
              </div>
            </div>
          </HeroFlex>
        </Section>
        <Section classNameS="sm:pb-12 pb-6 px-4 sm:px-0">
          <div className="flex flex-col items-center gap-6">
            <CenteredText><span className="font-bold text-client-pallet-2">Conheça aqui os desafios</span></CenteredText>
            <img src="images/bg9.webp" alt="" className="" />
            <CenteredText sizePlus={true}>O protocolo validado para parar de procrastinar e se tornar a mulher mais admirada que você conhece</CenteredText>
          </div>
          <div className="w-full flex flex-col items-center gap-4 mt-4">
            <Dropdown title="Protocolo etapa 1">
              <ul className="flex flex-col gap-2">
                <li><span className="font-medium">Desafio 1:</span> A consciência é a cura</li>
                <li><span className="font-medium">Desafio 2:</span> Aceite e aprimore</li>
                <li><span className="font-medium">Desafio 3:</span> Sombras e Luzes</li>
                <li><span className="font-medium">Desafio 4:</span> Qual é a sua motivação?</li>
                <li><span className="font-medium">Desafio 5:</span> Quais as suas motivações</li>
                <li><span className="font-medium">Desafio 6:</span> Quem tem o poder sobre você?</li>
                <li><span className="font-medium">Desafio 7:</span> Qual ação você precisa?</li>
              </ul>
            </Dropdown>
            <Dropdown title="Protocolo etapa 2">
              <ul className="flex flex-col gap-2">
                <li><span className="font-medium">Desafio 8:</span> Você se reforça?</li>
                <li><span className="font-medium">Desafio 9:</span> Jogo do nada a ver</li>
                <li><span className="font-medium">Desafio 10:</span> É preciso se comparar</li>
                <li><span className="font-medium">Desafio 11:</span> As 10 possibilidades</li>
                <li><span className="font-medium">Desafio 12:</span> Micropassos da vitória</li>
                <li><span className="font-medium">Desafio 13:</span> O que drena sua energia?</li>
                <li><span className="font-medium">Desafio 14:</span> Se libertando dos medos</li>
              </ul>
            </Dropdown>
            <Dropdown title="Protocolo etapa 3">
              <ul className="flex flex-col gap-2">
                <li><span className="font-medium">Desafio 15:</span> A congruência de valores</li>
                <li><span className="font-medium">Desafio 16:</span> O que pensam sobre você?</li>
                <li><span className="font-medium">Desafio 17:</span> Você merece</li>
                <li><span className="font-medium">Desafio 18:</span> Mural do destrave</li>
                <li><span className="font-medium">Desafio 19:</span> Limites, limites e limites</li>
                <li><span className="font-medium">Desafio 20:</span> O problema é uma benção</li>
                <li><span className="font-medium">Desafio 21:</span> Carta para você</li>
              </ul>
            </Dropdown>
          </div>
        </Section>
        <Section classNameS="sm:pb-12 pb-6 sm:pt-12 pt-6 bg-zinc-100 px-4 sm:px-0">
          <div className="flex flex-col items-center gap-6">
            <CenteredText>Você ainda vai receber de <span className="font-bold text-client-pallet-2">bônus</span></CenteredText>
            <img src="images/bg10.webp" alt="" />
            <h2 className="font-medium sm:text-2xl text-xl sm:text-center text-left max-w-xl">Como fazer um planejamento eficaz e tirar seus planos do papel</h2>
          </div>
        </Section>
        <Line />
        <Section classNameS="sm:py-24 pb-12 pt-6 px-4 sm:px-0 bg-zinc-100">
          <div className="flex flex-col gap-4 items-center">
            <CenteredText size={true}>Veja os resulados de quem aplica o protocolo do <span className="font-bold text-client-pallet-2">21 Dias Extraordinários</span></CenteredText>
            <iframe src="https://www.youtube.com/embed/IfnPmHqeklI?si=Beh_8QSp6Y_FvhRw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="rounded-xl sm:w-[524px] sm:h-[296px] w-full h-[242px]"></iframe>
          </div>
        </Section>
        <Section classNameS="sm:py-12 py-6 bg-client-pallet-2 px-4 sm:px-0">
          <div className="flex gap-6 items-center sm:flex-nowrap flex-wrap justify-center">
            <div className="">
              <img src="images/dep1.webp" className="object-contain rounded-xl" />
            </div>
            <div className="">
              <img src="images/dep2.webp" className="object-contain rounded-xl" />
            </div>
            <div className="">
              <img src="images/dep3.webp" className="object-contain rounded-xl" />
            </div>
            <div className="">
              <img src="images/dep4.webp" className="object-contain rounded-xl" />
            </div>
          </div>
        </Section>
        <Section classNameS="sm:py-24 py-12 px-4 sm:px-0">
          <div className="sm:grid sm:grid-cols-2 sm:max-w-4xl flex flex-col gap-4">
            <Payment />
            <div className="flex flex-col justify-center ps-4 border-l border-zinc-800">
              <h4 className="text-3xl font-bold">Risco zero</h4>
              <div className="flex flex-col gap-2 mt-4">
                <p className="text-zinc-600">Como temos certeza que este curso é da mais alta qualidade, estamos te oferecendo uma <span className="font-semibold">garantia</span>.</p>
                <p className="text-zinc-600"><span className="font-semibold">É muito simples</span>, basta nos enviar um e-mail dentro do prazo de 7 dias que realizaremos 100% do reembolso do valor investido.</p>
                <p className="text-zinc-600">Você não tem risco nenhum.</p>
              </div>
            </div>
          </div>
        </Section>
        <Section classNameS="sm:pb-24 pb-12 px-4 sm:px-0">
          <CenteredText>Ainda está com dúvidas?</CenteredText>
          <div className="w-full flex flex-col items-center gap-2 sm:gap-4 mt-4">
            <Dropdown
              title="01 - Quais as formas de pagamento?"
            >
              <p className="">Cartão de crédito, boleto e pix.</p>
            </Dropdown>
            <Dropdown
              title="02 - O conteúdo é ao vivo?"
            >
              <p className="">Não. Como nossos alunos possuem rotinas completamente diferentes, o conteúdo inteiro está gravado para que você possa assistir de onde e quando quiser.</p>
            </Dropdown>
            <Dropdown
              title="03 - E se eu tiver dúvidas?"
            >
              <p className="">Você poderá tirar suas dúvidas dentro da plataforma de aulas.</p>
            </Dropdown>
            <Dropdown
              title="04 - Até quando posso acessar as aulas?"
            >
              <p className="">Por um ano inteiro - dá tempo para você assistir e reassistir quantas vezes você desejar durante esse período.</p>
            </Dropdown>
            <Dropdown
              title="05 - Como eu acesso os produtos?"
            >
              <p className="">Ao finalizar a compra, será enviado o link com sua senha no seu e-mail.</p>
            </Dropdown>
          </div>
        </Section>
      </main>
      <footer className="py-6 bg-client-pallet-2 px-4">
        <div className="w-full flex flex-col gap-2 items-center">
          <h4 className="text-white font-semibold">Estamos dispostos a atender:</h4>
          <Button>Fale agora mesmo com o suporte</Button>
        </div>
      </footer>
    </div>
  )
}