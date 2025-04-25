import {HeaderNotLogged} from "@/app/components/header/page";
import { Provider } from "@/components/ui/provider"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-screen bg-[#F9FAFB]">
      <HeaderNotLogged/>
      <div className="flex items-center justify-center" >

        <div className="flex flex-col items-center w-full">

          <div className="flex flex-col mt-14 items-center w-full">
            <div className="flex">
              <h1 className="text-[#036D3C] font-bold text-3xl">Encontre sua</h1>
              <h1 className="text-[#F5991D] font-bold text-3xl mx-2"> próxima</h1>
            </div>
            <h1 className="text-[#F5991D] font-bold text-3xl">oportunidade</h1>
          </div>

          <div className="flex items-center justify-center mt-5 w-full">
            <h2 className="text-xl w-1/2 self-center">Explore novas vagas disponíveis e dê o próximo passo na sua carreira profissional</h2>
          </div>

        </div>

      </div>
    </div>
  );
}
