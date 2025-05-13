import { HeaderLogged } from "@/app/components/header2/page";
import { Card } from "@/app/components/card/page";
import { Provider } from "@/components/ui/provider"
import { ROUTES } from "@/constants/routes"
import Image from "next/image";

import lupa from "@/assets/lupa.png"
import seta from "@/assets/seta.png"
import back from "@/assets/back.png"

export default function Start() {
    return (
        <div className="flex flex-col min-h-screen bg-[#F9FAFB] ">
            <HeaderLogged />
            <div className="p-8 px-16 ">
                <div className="flex flex-row gap-4 items-center">
                    <Image src={back} alt="seta" className="scale-75"></Image>
                    <p className="font-semibold text-gray-500">Voltar</p>
                </div>
                <p className="text-[#036D3C] font-bold text-3xl">Desenvolvedor react senior</p>
                <p>Darede à nuvem | Curitiba, PR</p>
                <div className="bg-[#F1F5F9] border-gray-200 border-[1px] rounded-2xl flex flex-row w-fit p-2.5 gap-2">
                    <p className="font-semibold border-gray-200 border-[1px] bg-white rounded-xl p-2">Descrição</p>
                    <p className="font-semibold  rounded-xl p-2">Atribuições</p>
                    <p className="font-semibold  rounded-xl p-2">Requisitos</p>
                    <p className="font-semibold  rounded-xl p-2">Benefícios</p>
                </div>
                <div className="flex flex-col bg-white border-[1px] border-gray-200 p-6 px-8 gap-4 max-w-[700px] rounded-2xl">
                    <p className="font-semibold ">Descrição da Vaga</p>
                    <p className="max-w-11/12">muito texto lallalalal muito texto alalla eba eba ai ai ai muito tewxto muito texto lallalalal muito texto alalla eba eba ai ai ai muito tewxto muito texto lallalalal muito texto alalla eba eba ai ai ai muito tewxto muito texto lallalalal muito texto alalla eba eba ai ai ai muito tewxto</p>
                </div>
                <div></div>
                <div>
                    <p>Etapas do processo</p>
                    <div>
                        <div></div>
                        <div>
                            <div>
                                <div></div>
                                <p>Inscrições</p>
                                <p>05/01 - 27/01</p>
                            </div>
                            <div>
                                <div></div>
                                <p>Inscrições</p>
                                <p>05/01 - 27/01</p>
                            </div>
                            <div>
                                <div></div>
                                <p>Inscrições</p>
                                <p>05/01 - 27/01</p>
                            </div>
                            <div>
                                <div></div>
                                <p>Inscrições</p>
                                <p>05/01 - 27/01</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
