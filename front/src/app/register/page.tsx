import { Provider } from "@/components/ui/provider"
import { ROUTES } from "@/constants/routes"
import Image from "next/image";

import logo from "@/assets/logo.png"
import email from "@/assets/email.png"
import user from "@/assets/user.png"
import telefone from "@/assets/phone.png"
import cadeado from "@/assets/cadeado.png"
import Link from "next/link";
import { Button } from "@mui/material";

export default function Register() {
  return (
    <div className="flex flex-col min-h-screen w-screen bg-[#036D3C]">
      <div className="bg-white fixed h-screen flex flex-col items-center w-4/6 right-0 rounded-tl-[500px] flex-1/4 justify-start p-32 gap-20">
        <div className="flex flex-col items-center gap-4">
          <Image src={logo} alt="Logo" className="w-80" />
          <p className="font-semibold text-2xl text-[#666666]">Logue-se para encontrar as melhores oportunidades</p>
        </div>
        <div className="w-2/3 max-w-[600px]">
            <div className="flex flex-row items-center gap-8 justify-start w-full border-b-2 p-2">
            <Image src={user} alt="User" className="w-8" />
            <input className=" placeholder:text-[#949494] font-semibold text-2xl outline-hidden border-x-0 p-2" placeholder="Nome completo" type="text"></input>
          </div>
          <div className="flex flex-row items-center gap-8 justify-start w-full border-b-2 p-2">
            <Image src={email} alt="Email" className="w-8" />
            <input className=" placeholder:text-[#949494] font-semibold text-2xl outline-hidden border-x-0 p-2" placeholder="Email" type="email"></input>
          </div>
          <div className="flex flex-row items-center gap-8 justify-start w-full border-b-2 p-2">
            <Image src={telefone} alt="Fone" className="w-8" />
            <input className=" placeholder:text-[#949494] font-semibold text-2xl outline-hidden border-x-0 p-2" placeholder="Telefone" type="tel" pattern="([0-9]{2}) [0-9]{5}-[0-9]{4}"></input>
          </div>
          <div className="flex flex-row items-center gap-8 justify-start w-full border-b-2 p-2">
            <Image src={cadeado} alt="Senha" className="w-8" />
            <input className=" placeholder:text-[#949494] font-semibold text-2xl outline-hidden border-x-0 p-2" placeholder="Senha" type="password"></input>
          </div>
          <div className="flex flex-row items-center gap-8 justify-start w-full border-b-2 p-2">
            <Image src={cadeado} alt="Senha" className="w-8" />
            <input className=" placeholder:text-[#949494] font-semibold text-2xl outline-hidden border-x-0 p-2" placeholder="Confirme sua senha" type="password"></input>
          </div>
        </div>
        <div className="flex flex-col items-center gap-7">
          <a href={ROUTES.login} className="bg-[#036D3C] p-3 px-24 rounded-xl text-white hover:bg-[#036030]" >Cadastrar</a>
          <div className="flex flex-row gap-1">
            <p>Ja tem uma conta?</p>
            <Link href={ROUTES.login} className="text-[#036D3C]">Faça login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
