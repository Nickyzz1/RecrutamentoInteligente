import { HeaderLogged } from "@/app/components/header2/page";
import { Card } from "@/app/components/card/page";
import { Provider } from "@/components/ui/provider"
import { ROUTES } from "@/constants/routes"
import Image from "next/image";

import lupa from "@/assets/lupa.png"
import seta from "@/assets/seta.png"
import back from "@/assets/back.png"
import Link from "next/link";

export default function Start() {
    return (
        <div>
            <HeaderLogged />
            <div className="flex flex-row min-h-screen bg-[#F9FAFB] ">
                <div className="flex flex-col ">
                    <div className="p-8 px-16 flex flex-col gap-6">
                        <div className="flex flex-row gap-4 items-center">
                            <Image src={back} alt="seta" className="scale-75"></Image>
                            <p className="font-semibold text-gray-500">Voltar</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-[#036D3C] font-bold text-3xl">Desenvolvedor react senior</p>
                            <p className="text-gray-500 font-semibold">Darede à nuvem | Curitiba, PR</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="bg-[#F1F5F9] border-gray-200 border-[1px] rounded-2xl flex flex-row w-fit p-2.5 gap-2">
                                <p className="font-semibold border-gray-200 border-[1px] bg-white rounded-xl p-2">Descrição</p>
                                <p className="font-semibold  rounded-xl p-2">Atribuições</p>
                                <p className="font-semibold  rounded-xl p-2">Requisitos</p>
                                <p className="font-semibold  rounded-xl p-2">Benefícios</p>
                            </div>
                            <div className="flex flex-col bg-white border-[1px] border-gray-200 p-5 px-6 gap-4 max-w-[700px] rounded-2xl">
                                <p className="font-semibold text-xl">Descrição da Vaga</p>
                                <p className="max-w-11/12">muito texto lallalalal muito texto alalla eba eba ai ai ai muito tewxto muito texto lallalalal muito texto alalla eba eba ai ai ai muito tewxto muito texto lallalalal muito texto alalla eba eba ai ai ai muito tewxto muito texto lallalalal muito texto alalla eba eba ai ai ai muito tewxto</p>
                            </div>
                        </div>
                        <div className="h-0.5 max-w-[700px] bg-[#036D3C]"></div>
                        <div className="flex flex-col gap-8">
                            <p className="font-semibold text-xl">Etapas do processo</p>
                            <div>
                                <div className="bg-[#036D3C] w-0.5 h-24 fixed ml-[11px] z-0"></div>
                                <div className="max-w-[700px]">
                                    <div className="flex flex-row items-center justify-between pr-5 max-w-[700px]">
                                        <div className="flex flex-row items-center gap-5 pl-1.5">
                                            <div className="w-3 h-3 bg-[#036D3C] rounded-full"></div>
                                            <p className="font-semibold ">Inscrições</p>
                                        </div>
                                        <p>05/01 - 27/01</p>
                                    </div>
                                    <div className="flex flex-row items-center justify-between pr-5 max-w-[700px]">
                                        <div className="flex flex-row items-center gap-5 ">
                                            <div className="border-2 border-solid w-[20px] h-[20px] ml-[1.8px] fixed border-amber-500 rounded-full "></div>
                                            <div className="w-3 h-3 bg-[#036D3C] ml-1.5 rounded-full"></div>
                                            <p className="font-semibold ">Avaliação de candidaturas</p>
                                        </div>
                                        <p>05/01 - 27/01</p>
                                    </div>
                                    <div className="flex flex-row items-center justify-between pr-5 max-w-[700px]">
                                        <div className="flex flex-row items-center gap-5 pl-1.5">
                                            <div className="w-3 h-3 bg-gray-300 rounded-full z-10"></div>
                                            <p className="font-semibold ">Dinâmica</p>
                                        </div>
                                        <p>05/01 - 27/01</p>
                                    </div>
                                    <div className="flex flex-row items-center justify-between pr-5 max-w-[700px]">
                                        <div className="flex flex-row items-center gap-5 pl-1.5">
                                            <div className="w-3 h-3 bg-gray-300 rounded-full z-10"></div>
                                            <p className="font-semibold ">Entrevista</p>
                                        </div>
                                        <p>05/01 - 27/01</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Link href={ROUTES.start}>Candidatar-se</Link>
                    <div>
                        <p>Informações da vaga</p>
                        <div>
                            <p>Data de publicação</p>
                            <p>15 de janeiro de 2023</p>
                        </div>
                        <div>
                            <p>Local</p>
                            <p>São Paulo, SP</p>
                        </div>
                        <div>
                            <p>Empresa</p>
                            <p>Darede à núvem</p>
                        </div>
                        <div>
                            <p>Habilidades relevantes</p>
                            <div>
                                <p className="border-[#036D3C] rounded-2xl px-3 border-[1px] w-fit">Git</p>
                                <p className="border-[#036D3C] rounded-2xl px-3 border-[1px] w-fit">Git</p>
                                <p className="border-[#036D3C] rounded-2xl px-3 border-[1px] w-fit">Git</p>
                                <p className="border-[#036D3C] rounded-2xl px-3 border-[1px] w-fit">Git</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
