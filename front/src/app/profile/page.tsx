import Image from "next/image";

// imports internos
import { HeaderLogged } from "@/components/header2/page";
import { Card } from "@/components/card/page";
import editar from "@/assets/editar.png"
import sair from "@/assets/sair.png"
import primo from "@/assets/primo.jpg"
import email from "@/assets/emailgreen.png"
import fone from "@/assets/phonegreen.png"
import chapeu from "@/assets/chapeu.png"

export default function Start() {
    return (
        <div className="flex max-w-screen overflow-hidden flex-col items-center justify-center bg-[#F9FAFB]">
            <HeaderLogged />
            <div className="flex  items-center justify-center w-full md:p-15 p-5">
                {/* Esquerda */}
                <div className="border-[1px] border-[#036D3C] rounded-[10px] p-4">
                    <div className="flex flex-row justify-end gap-3">
                        <Image src={sair} alt="sair" className="w-7 h-7"></Image>
                        <Image src={editar} alt="editar" className="w-7 h-7"></Image>
                    </div>
                    <div className="p-3 rounded-full border-[1px] border-[#036D3C]">
                        <Image src={primo} alt="foto" className="rounded-full w-52 h-52 object-cover"></Image>
                    </div>
                    <div>
                        <p className="text-3xl font-semibold text-[#036D3C]">El Primo</p>
                        <p className="text-2xl text-gray-500 font-semibold">Tanque</p>
                    </div>
                    <div className="bg-[#036D3C] w-full h-[1px]"></div>
                    <div>
                        <div className="flex flex-row">
                            <Image src={email} alt="email"></Image>
                            <p>Email:</p>
                            <p>adriana@email.com</p>
                        </div>
                        <div>
                            <Image src={fone} alt="telefone"></Image>
                            <p>Tel: </p>
                            <p>41 98493-8117</p>
                        </div>
                        <div>
                            <Image src={chapeu} alt="formação"></Image>
                            <p>Engenharia de software</p>
                        </div>
                    </div>
                </div>
                {/* Direita */}
                <div>
                    <div>
                        <p>Editar currículo</p>
                        <Image src={editar} alt="editar"></Image>
                    </div>
                    <div>
                        <div>
                            <p>Interesses</p>
                            <Image src={editar} alt="editar"></Image>
                        </div>
                        <div>
                            <p className="border-[#036D3C] rounded-2xl px-3 border-[1px] w-fit">Liderança</p>
                            <p className="border-[#036D3C] rounded-2xl px-3 border-[1px] w-fit">Liderança</p>
                        </div>
                        <p>Biografia</p>
                        <p>tewxto muito texto texto umuito texto texto muito texto muito texto muito texto muito texto texto tmuito textoi tewxto muito texto texto umuito texto texto muito texto muito texto muito texto muito texto texto tmuito textoi</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
