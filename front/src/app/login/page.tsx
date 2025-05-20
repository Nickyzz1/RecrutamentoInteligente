import { ROUTES } from "@/constants/routes"
import Image from "next/image";

import logo from "@/assets/logo.png"
import email from "@/assets/email.png"
import cadeado from "@/assets/cadeado.png"
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col h-screen w-screen bg-[#036D3C]">
      <div className="bg-white lg:w-4/6 fixed h-screen flex flex-col items-center w-11/12 sm:w-5/6 right-0 rounded-tl-[500px] md:rounded-tl-[600px] lg:rounded-tl-[700px]  flex-1/4 justify-start md:p-32 p-3 gap-28">
        <div className="flex flex-col items-center gap-4">
          <Image width={1000} height={1000} priority src={logo} alt="Logo" className="flex flex-col md:w-80 w-60 mt-50 sm:mt-60 md:mt-10  lg:w-auto" />
          <p className="text-sm sm:text-lg text-[#666666] max-w-80 text-center">Logue-se para encontrar as melhores oportunidades</p>
        </div>
        <div className="md:w-2/3 w-2/3 flex flex-col">
          <div className="flex flex-row items-center gap-8 justify-start w-full border-b-1 p-2">
            <Image src={email} alt="Email" className="w-6" />
            <input className="placeholder:text-[#949494]  md:text-xl outline-hidden border-x-0 p-2" placeholder="Email" type="email"></input>
          </div>
          <div className="flex flex-row items-center gap-8 justify-start w-full border-b-1 p-2">
            <Image src={cadeado} alt="Email" className="w-6" />
            <input className="placeholder:text-[#949494] md:text-xl outline-hidden border-x-0 p-2" placeholder="Senha" type="password"></input>
          </div>
        </div>
        <div className="flex flex-col items-center gap-7">
          <a href={ROUTES.start} className="bg-[#036D3C] text-center p-3 w-2/3 sm:w-6/4  rounded-xl text-white hover:bg-[#036030]">Logar</a>
          <div className="flex flex-row gap-1">
            <p>Não tem uma conta?</p>
            <Link href={ROUTES.register} className="text-[#036D3C]">Cadastre-se</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
