import { HeaderLogged } from "@/app/components/header2/page";
import { Card } from "@/app/components/card/page";
import { Provider } from "@/components/ui/provider"
import { ROUTES } from "@/constants/routes"
import Image from "next/image";

import lupa from "@/assets/lupa.png"
import seta from "@/assets/seta.png"

export default function Start() {
    return (
        <div className="flex flex-col min-h-screen bg-[#F9FAFB] ">
            <HeaderLogged />
            <div className="flex items-center justify-center px-5">

                <div className="flex flex-col items-center w-full gap-8">
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex gap-1.5 mt-14">
                            <h1 className="text-[#036D3C] font-bold text-5xl">Encontre sua</h1>
                            <h1 className="text-[#F5991D] font-bold text-5xl mx-2">próxima oportunidade</h1>
                        </div>
                        <h2 className="text-2xl font-semibold text-[#909192]">Explore novas vagas disponíveis e dê o próximo passo na sua carreira profissional</h2>
                    </div>
                    <div className="bg-[#F1F2F3] flex flex-row rounded-4xl p-3 gap-6 w-full max-w-[700px]">
                        <button className="cursor-pointer">
                            <Image src={lupa} alt="lupa" className="w-9"></Image>
                        </button>
                        <input type="text" className="text-2xl w-full pr-4 font-semibold placeholder:text-[#909192] outline-hidden" placeholder="Pesquise por cargo"></input>
                    </div>

                    <div className="flex flex-row flex-wrap gap-10 justify-center px-10 pt-4 pb-10">
                        <Card skills={["bnsa", "sha", "saqaaaaaaa ve muito texto loudsao"]} date={new Date()} title={"Desenvolvedor React senior"} status={"Ativa"} adress={"Curitiba, PR"} description={"Estamos buscando um desenvolvedor React experiente para se juntar ao nosso time de tecnologia. Você trabalhará em projetos legais."}></Card>
                        <Card skills={["sdsaa", "sfdxda", "liusa", "12"]} date={new Date()} title={"Desenvolvedor React senior"} status={"Ativa"} adress={"Curitiba, PR"} description={"Estamos buscando um desenvolvedor React experiente para se juntar ao nosso time de tecnologia. Você trabalhará em projetos legais."}></Card>
                        <Card skills={["sfdsa", "ggsggha", "saqaaaaaaa"]} date={new Date()} title={"Desenvolvedor React senior"} status={"Ativa"} adress={"Curitiba, PR"} description={"Estamos buscando um desenvolvedor React experiente para se juntar ao nosso time de tecnologia. Você trabalhará em projetos legais."}></Card>
                        <Card skills={["sgra", "slia", "sa", "12"]} date={new Date()} title={"Desenvolvedor React senior"} status={"Ativa"} adress={"Curitiba, PR"} description={"Estamos buscando um desenvolvedor React experiente para se juntar ao nosso time de tecnologia. Você trabalhará em projetos legais."}></Card>
                        <Card skills={["sda", "sjkua", "saqaaaaaaa"]} date={new Date()} title={"Desenvolvedor React senior"} status={"Ativa"} adress={"Curitiba, PR"} description={"Estamos buscando um desenvolvedor React experiente para se juntar ao nosso time de tecnologia. Você trabalhará em projetos legais."}></Card>
                        <Card skills={["sfda", "sgra", "salkj", "12"]} date={new Date()} title={"Desenvolvedor React senior"} status={"Ativa"} adress={"Curitiba, PR"} description={"Estamos buscando um desenvolvedor React experiente para se juntar ao nosso time de tecnologia. Você trabalhará em projetos legais."}></Card>
                    </div>
                </div>

            </div>
        </div>
    );
}
