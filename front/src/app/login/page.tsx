import { Provider } from "@/components/ui/provider"
import { ROUTES } from "@/constants/routes"
import Image from "next/image";

import logo from "@/assets/logo.png"
import email from "@/assets/email.png"
import cadeado from "@/assets/cadeado.png"
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-screen bg-[#049A55]">
      <div className="bg-white fixed h-screen flex flex-col items-center w-4/6 right-0 rounded-tl-[500px]">
        <Image src={logo} alt="Logo" className=""/>
        <p>Logue-se para encontrar as melhores oportunidades</p>
        <Image src={email} alt="Email"/>
        <p>Email</p>
        <Image src={cadeado} alt="Senha"/>
        <p>Digite sua senha</p>
        <button>Logar</button>
        <p>Não tem uma conta?</p>
        <Link href={ROUTES.home}>Cadastre-se</Link>
      </div>
    </div>
  );
}
