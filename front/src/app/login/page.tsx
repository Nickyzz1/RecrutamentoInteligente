import { Provider } from "@/components/ui/provider"
import { ROUTES } from "@/constants/routes"
import Image from "next/image";

import logo from "@/assets/logo.png"
import email from "@/assets/email.png"
import cadeado from "@/assets/cadeado.png"
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-screen bg-[#036D3C]">
      <div className="bg-white fixed h-screen flex flex-col items-center w-4/6 right-0 rounded-tl-[500px]">
        <Image src={logo} alt="Logo" className="w-80" />
        <div className="flex-1/4 flex justify-start flex-col items-center">
        <p className="font-semibold text-2xl text-[#666666]">Logue-se para encontrar as melhores oportunidades</p>
        <div className="flex flex-row items-center gap-8 justify-start w-full border-b-2 p-2">
          <Image src={email} alt="Email" className="w-8"/>
          <input className=" placeholder:text-[#949494] font-semibold text-2xl border-x-0 p-2" placeholder="Email" type="email"></input>
        </div>
        <div className="flex flex-row items-center gap-8 justify-start w-full border-b-2 p-2">
          <Image src={cadeado} alt="Email" className="w-8"/>
          <input className=" placeholder:text-[#949494] font-semibold text-2xl border-x-0  p-2" placeholder="Digite sua senha" type="password"></input>
        </div>
        </div>
        <button className="bg-[#036D3C] p-3 px-24 rounded-xl text-white hover:bg-[#036030]">Logar</button>
        <div className="flex flex-row gap-1">
        <p>Não tem uma conta?</p>
        <Link href={ROUTES.home} className="text-[#036D3C]">Cadastre-se</Link>
      </div></div>
    </div>
  );
}
