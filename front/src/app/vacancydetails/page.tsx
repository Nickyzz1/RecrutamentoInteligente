"use client";


import Image from "next/image";
import Link from "next/link";

// imports internos
import { HeaderLogged } from "@/components/header2/page";
import { ROUTES } from "@/constants/routes";
import { GoBack } from "@/components/goBack/page";
import { Button, ButtonGroup, Divider, Step, StepContent, StepLabel, Stepper, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import { Footer } from "@/components/footer/page";

export default function VacancyDetails() {
    const [activeStep, setActiveStep] = useState(1);
    const [page, setPage] = useState(1);

    const steps = [
        {
            label: "Inscrições",
            date: "05/01 - 27/01"
        },
        {
            label: "Avaliação de candidaturas",
            date: "05/01 - 27/01"
        },
        {
            label: "Dinâmica",
            date: "05/01 - 27/01"
        },
        {
            label: "Entrevista",
            date: "05/01 - 27/01"
        },
    ]

    return (
        <>
            <HeaderLogged />
            <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 p-10 md:px-20 gap-3 lg:gap-x-44">
                    <div>
                        <GoBack/>
                            <div className="flex items-center justify-between w-full my-2">
                                <div className="flex flex-col gap-3 md:items-center">
                                    <div className="flex flex-row gap-5">
                                        <div className="flex flex-col">
                                            <h1 className="text-xl font-semibold text-green-800">Desenvolvedor react senior</h1>
                                            <p className="text-gray-400 text-sm">Darede à nuvem | Curitiba, PR</p>
                                        </div>
                                        <p className="text-white bg-orange-400 px-3 flex items-center text-center justify-center rounded-3xl md:rounded-full">Vaga ativa</p>
                                    </div>
                                    <div className="flex gap-2 md:justify-between w-full">
                                        {/* <Button variant="contained" style={{backgroundColor: '#036D3C'}} className="hidden md:flex">Candidatar-se</Button> */}
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-5">
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                                    <Button variant="outlined" onClick={() => setPage(1)}>Descrição</Button>
                                    <Button variant="outlined" onClick={() => setPage(2)}>Atribuições</Button>
                                    <Button variant="outlined" onClick={() => setPage(3)}>Requisitos</Button>
                                    <Button variant="outlined" onClick={() => setPage(4)}>Benefícios</Button>
                                </div>
                                {page == 1 ? (
                                <div className="flex flex-col border border-gray-400 bg-white rounded-2xl p-3 gap-3">
                                    <h1 className="font-semibold text-lg">🐱‍🐉 Descrição da Vaga</h1>
                                    <p>muito texto lallalalal muito texto alalla eba eba ai ai ai muito tewxto muito texto lallalalal muito texto alalla eba eba ai ai ai muito tewxto muito texto lallalalal muito texto alalla eba eba ai ai ai muito tewxto muito texto lallalalal muito texto alalla eba eba ai ai ai muito tewxto</p>
                                </div>
                                ) : page == 2 ? (
                                    <div className="flex flex-col border border-gray-400 bg-white rounded-2xl p-3 gap-3">
                                        <h1 className="font-semibold text-lg">🐱‍🐉 Atribuições da Vaga</h1>
                                        <p>muito texto lallalalal muito texto alalla eba eba ai ai ai muito tewxto muito texto lallalalal muito texto alalla eba eba ai ai ai muito tewxto muito texto lallalalal muito texto alalla eba eba ai ai ai muito tewxto muito texto lallalalal muito texto alalla eba eba ai ai ai muito tewxto</p>
                                    </div>
                                ) : page == 3 ? (
                                    <div className="flex flex-col border border-gray-400 bg-white rounded-2xl p-3 gap-3">
                                        <h1 className="font-semibold text-lg">🐱‍🐉 Requisitos da Vaga</h1>
                                        <p>muito texto lallalalal muito texto alalla eba eba ai ai ai muito tewxto muito texto lallalalal muito texto alalla eba eba ai ai ai muito tewxto muito texto lallalalal muito texto alalla eba eba ai ai ai muito tewxto muito texto lallalalal muito texto alalla eba eba ai ai ai muito tewxto</p>
                                    </div>
                                ) : page == 4 ? (
                                    <div className="flex flex-col border border-gray-400 bg-white rounded-2xl p-3 gap-3">
                                        <h1 className="font-semibold text-lg">🐱‍🐉 Benefícios</h1>
                                        <p>muito texto lallalalal muito texto alalla eba eba ai ai ai muito tewxto muito texto lallalalal muito texto alalla eba eba ai ai ai muito tewxto muito texto lallalalal muito texto alalla eba eba ai ai ai muito tewxto muito texto lallalalal muito texto alalla eba eba ai ai ai muito tewxto</p>
                                    </div>
                                ) : (
                                    <div className="flex flex-col border border-gray-400 bg-white rounded-2xl p-3 gap-3">
                                        <h1 className="font-semibold text-lg">🐱‍🐉 Benefícios</h1>
                                        <p>muito texto lallalalal muito texto alalla eba eba ai ai ai muito tewxto muito texto lallalalal muito texto alalla eba eba ai ai ai muito tewxto muito texto lallalalal muito texto alalla eba eba ai ai ai muito tewxto muito texto lallalalal muito texto alalla eba eba ai ai ai muito tewxto</p>
                                    </div>
                                )}
                            <div>

                                <Divider />

                                <h1 className="font-semibold text-lg pt-5">Etapas do processo</h1>

                                <div>
                                <Stepper activeStep={activeStep} orientation="vertical">
                                    {steps.map((step, index) => (
                                    <Step key={step.label}>
                                        <StepLabel>
                                        <h1>{step.label}</h1>
                                        </StepLabel>
                                    </Step>
                                    ))}
                                </Stepper>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                        
                    <div className="flex gap-6 itens-center flex-col mt-10">
                        <Button variant="contained" style={{backgroundColor: '#036D3C'}} className="hidden md:flex">Candidatar-se</Button>
                        <div className="flex flex-col border border-gray-400 bg-white rounded-2xl p-3 gap-3 self-center w-full">
                            <div>
                                <h1 className="font-semibold text-green-800 text-lg">Informações da vaga</h1>
                                <div className="flex gap-1 flex-col">
                                    <h2 className="text-gray-500">Data de publicação:</h2>
                                    <p>15 de janeiro de 2023</p>
                                </div>
                                <div className="flex gap-1 flex-col">
                                    <h2 className="text-gray-500">Local:</h2>
                                    <p>São Paulo-SP</p>
                                </div>
                                <div className="flex gap-1 flex-col">
                                    <h2 className="text-gray-500">Empresa:</h2>
                                    <p>Darede à núvem</p>
                                </div>
                                <div className="flex gap-1 flex-col">
                                    <h2 className="text-gray-500">Habilidades relevantes:</h2>
                                    <div className="flex gap-2 flex-wrap">
                                        <p className="outline-green-900 outline-1 py-0.5 px-6 rounded-full text-gray-800 bg-green-100">Git</p>
                                        <p className="outline-green-900 outline-1 py-0.5 px-6 rounded-full text-gray-800 bg-green-100">Git</p>
                                        <p className="outline-green-900 outline-1 py-0.5 px-6 rounded-full text-gray-800 bg-green-100">Git</p>
                                        <p className="outline-green-900 outline-1 py-0.5 px-6 rounded-full text-gray-800 bg-green-100">Git</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer className=""/>
        </>
    );
}
