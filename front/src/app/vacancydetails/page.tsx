"use client";


import Image from "next/image";
import Link from "next/link";

// imports internos
import { HeaderLogged } from "@/components/header2/page";
import { ROUTES } from "@/constants/routes";
import { GoBack } from "@/components/goBack/page";
import { Button, Divider, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";

export default function VacancyDetails() {
    const [alignment, setAlignment] = useState('web');

    const handleChange = (
      event: React.MouseEvent<HTMLElement>,
      newAlignment: string,
    ) => {
      setAlignment(newAlignment);
    };
    return (
        <>
            <HeaderLogged />
            <div className="flex flex-col p-10 gap-3">
                <div>
                    <GoBack/>
                        <div className="flex items-center justify-between w-full my-2">
                            <div className="flex flex-col md:flex-row gap-3 md:items-center">
                                <div className="flex flex-col">
                                    <h1 className="text-xl font-semibold text-green-800">Desenvolvedor react senior</h1>
                                    <p className="text-gray-400 text-sm">Darede à nuvem | Curitiba, PR</p>
                                </div>
                                <div className="bg-orange-400 p-2 rounded-2xl flex items-center justify-center">
                                    <p className="text-white">Vaga ativa</p>
                                </div>
                            </div>
                            <Button variant="contained" style={{backgroundColor: '#036D3C'}}>Candidatar-se</Button>
                        </div>

                        <div className="flex flex-col gap-5">
                            <ToggleButtonGroup
                                color="primary"
                                value={alignment}
                                exclusive
                                onChange={handleChange}
                                aria-label="Platform"
                                >
                                <ToggleButton value="descricao">Descrição</ToggleButton>
                                <ToggleButton value="atribuicoes">Atribuições</ToggleButton>
                                <ToggleButton value="requisitos">Requisitos</ToggleButton>
                                <ToggleButton value="beneficios">Benefícios</ToggleButton>
                            </ToggleButtonGroup>

                            <div className="flex flex-col border border-gray-400 bg-white rounded-2xl p-3 gap-3">
                                <h1 className="font-semibold text-lg">🐱‍🐉 Descrição da Vaga</h1>
                                <p>muito texto lallalalal muito texto alalla eba eba ai ai ai muito tewxto muito texto lallalalal muito texto alalla eba eba ai ai ai muito tewxto muito texto lallalalal muito texto alalla eba eba ai ai ai muito tewxto muito texto lallalalal muito texto alalla eba eba ai ai ai muito tewxto</p>
                            </div>
                        <div>

                            <Divider />

                            <h1 className="font-semibold text-lg">Etapas do processo</h1>

                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <div></div>
                                            <p>Inscrições</p>
                                        </div>
                                        <p>05/01 - 27/01</p>
                                    </div>
                                    <div>
                                        <div>
                                            <div></div>
                                            <p>Avaliação de candidaturas</p>
                                        </div>
                                        <p>05/01 - 27/01</p>
                                    </div>
                                    <div>
                                        <div>
                                            <div></div>
                                            <p>Dinâmica</p>
                                        </div>
                                        <p>05/01 - 27/01</p>
                                    </div>
                                    <div>
                                        <div>
                                            <div></div>
                                            <p>Entrevista</p>
                                        </div>
                                        <p>05/01 - 27/01</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div>
                    <Link href={ROUTES.sendcandidature}>Candidatar-se</Link>
                    <div>
                        <p>Informações da vaga</p>
                        <div>
                            <p>Data de publicação</p>
                            <p>15 de janeiro de 2023</p>
                        </div>
                        <div>
                            <p>Local</p>
                            <p>São Paulo, SP</p>
                        </div>
                        <div>
                            <p>Empresa</p>
                            <p>Darede à núvem</p>
                        </div>
                        <div>
                            <p>Habilidades relevantes</p>
                            <div>
                                <p>Git</p>
                                <p>Git</p>
                                <p>Git</p>
                                <p>Git</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
