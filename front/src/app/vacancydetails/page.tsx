import Image from "next/image";
import Link from "next/link";

// imports internos
import { HeaderLogged } from "@/components/header2/page";
import { ROUTES } from "@/constants/routes"
import { GoBack } from "@/components/goBack/page";
import { Button } from "@mui/material";

export default function VacancyDetails() {
    return (
        <div className="flex max-w-screen overflow-hidden flex-col items-center justify-center bg-[#F9FAFB]">
            <HeaderLogged />
            <div className="flex flex-col xl:flex-row min-h-screen">

                <div className="flex flex-col ">
                    <div className="p-3 my-4 md:p-6 md:px-16 flex flex-col gap-3">
                        
                      <GoBack/>

                        <div className="flex flex-col gap-2 md:gap-4">
                            <p className="text-[#036D3C] text-xl md:text-3xl">Desenvolvedor react senior</p>
                            <p className="text-[#909192] text-sm md:text-md ">Darede à nuvem | Curitiba, PR</p>
                        </div>

                        <Button variant="contained" style={{backgroundColor: '#036D3C'}}>Candidatar-se</Button>

                        <div className="flex flex-col gap-3">

                            <div className="bg-[#F1F5F9] items-center justify-around border-gray-200 border-[1px] flex-wrap rounded-2xl flex sm:flex-row gap-2 p-2.5 ">
                                <p className="border-gray-200 border-[1px] bg-white rounded-xl p-3 px-4 text-xs">Descrição</p>
                                <p className=" rounded-xl text-xs">Atribuições</p>
                                <p className=" rounded-xl text-xs">Requisitos</p>
                                <p className=" rounded-xl text-xs">Benefícios</p>
                            </div>

                            <div className="flex flex-col bg-white border-[1px] border-gray-200 p-5 px-6 gap-4 max-w-[700px] rounded-2xl">
                                <p className="text-xl">Descrição da Vaga</p>
                                <p className="max-w-11/12">muito texto lallalalal muito texto alalla eba eba ai ai ai muito tewxto muito texto lallalalal muito texto alalla eba eba ai ai ai muito tewxto muito texto lallalalal muito texto alalla eba eba ai ai ai muito tewxto muito texto lallalalal muito texto alalla eba eba ai ai ai muito tewxto</p>
                            </div>

                        </div>

                        <div className="h-0.5 max-w-[700px] bg-[#036D3C]"></div>

                        <div className="flex flex-col gap-8">

                            <p className="text-xl">Etapas do processo</p>

                            <div>
                                {/* <div className="bg-[#036D3C] w-0.5 h-24 fixed ml-[11px] z-0"></div> */}
                                <div className="max-w-[700px]">
                                    <div className="flex flex-row items-center justify-between pr-5 max-w-[700px]">
                                        <div className="flex flex-row items-center gap-5 pl-1.5">
                                            <div className="w-3 h-3 bg-[#036D3C] rounded-full"></div>
                                            <p className="">Inscrições</p>
                                        </div>
                                        <p>05/01 - 27/01</p>
                                    </div>
                                    <div className="flex flex-row items-center justify-between pr-5 max-w-[700px]">
                                        <div className="flex flex-row items-center gap-5 ">
                                            {/* <div className="border-2 border-solid w-[20px] h-[20px] ml-[1.8px] fixed border-amber-500 rounded-full "></div> */}
                                            <div className="w-3 h-3 bg-[#036D3C] ml-1.5 rounded-full"></div>
                                            <p className="">Avaliação de candidaturas</p>
                                        </div>
                                        <p>05/01 - 27/01</p>
                                    </div>
                                    <div className="flex flex-row items-center justify-between pr-5 max-w-[700px]">
                                        <div className="flex flex-row items-center gap-5 pl-1.5">
                                            <div className="w-3 h-3 bg-gray-300 rounded-full z-10"></div>
                                            <p className="">Dinâmica</p>
                                        </div>
                                        <p>05/01 - 27/01</p>
                                    </div>
                                    <div className="flex flex-row items-center justify-between pr-5 max-w-[700px]">
                                        <div className="flex flex-row items-center gap-5 pl-1.5">
                                            <div className="w-3 h-3 bg-gray-300 rounded-full z-10"></div>
                                            <p className="">Entrevista</p>
                                        </div>
                                        <p>05/01 - 27/01</p>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center w-1/2 pt-24 gap-8">
                    <Link href={ROUTES.sendcandidature} className="bg-[#036D3C] hidden text-white p-2 w-1/3 md:flex justify-center items-center rounded-xl">Candidatar-se</Link>
                    <div className="flex flex-col bg-white border-[1px] border-gray-200 w-1/2 p-8 px-20 gap-4  rounded-2xl">
                        <p className="font-semibold text-xl">Informações da vaga</p>
                        <div className="flex flex-col gap-1">
                            <p className="text-[#949494] font-medium">Data de publicação</p>
                            <p>15 de janeiro de 2023</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-[#949494] font-medium">Local</p>
                            <p>São Paulo, SP</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-[#949494] font-medium">Empresa</p>
                            <p>Darede à núvem</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-[#949494] font-medium">Habilidades relevantes</p>
                            <div className="flex flex-wrap gap-2">
                                <p className="border-[#036D3C] rounded-2xl px-3 border-[1px] font-semibold w-fit">Git</p>
                                <p className="border-[#036D3C] rounded-2xl px-3 border-[1px] font-semibold w-fit">Git</p>
                                <p className="border-[#036D3C] rounded-2xl px-3 border-[1px] font-semibold w-fit">Git</p>
                                <p className="border-[#036D3C] rounded-2xl px-3 border-[1px] font-semibold w-fit">Git</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
