import { HeaderLogged } from "@/app/components/header2/page";
import { Provider } from "@/components/ui/provider"
import { ROUTES } from "@/constants/routes"
import Image from "next/image";

import lupa from "@/assets/lupa.png"


export default function Start() {
    return (
        <div className="flex flex-col min-h-screen w-screen bg-[#F9FAFB]">
            <HeaderLogged />
            <div className="flex items-center justify-center px-5">
  
                <div className="flex flex-col items-center w-full gap-2">

                    <div className="flex gap-1.5 mt-14">
                        <h1 className="text-[#036D3C] font-bold text-5xl">Encontre sua</h1>
                        <h1 className="text-[#F5991D] font-bold text-5xl mx-2">próxima oportunidade</h1>
                    </div>
                    <h2 className="text-2xl font-semibold text-[#909192]">Explore novas vagas disponíveis e dê o próximo passo na sua carreira profissional</h2>

                    <div className="bg-[#F1F2F3] flex flex-row rounded-4xl p-3 gap-6 w-full max-w-[700px]">
                        <Image src={lupa} alt="lupa" className="w-10"></Image>
                        <input type="text" className="text-2xl font-semibold text-[#909192]" placeholder="Pesquise por cargo"></input>
                    </div>

                </div>

            </div>
        </div>
    );
}
