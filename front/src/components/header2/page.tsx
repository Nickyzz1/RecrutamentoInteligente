"use client"
import { Button } from "@mui/material";
import React from 'react';
import { ROUTES } from "@/constants/routes"

import Image from "next/image";
import user from "@/assets/user.png"


export const HeaderLogged = () => {

    return(
        <>
        <div className="flex w-full h-15 shadow-md items-center px-6 bg-[#ffffff]">
            <h1 className="text-[#036D3C] font-bold text-xl">Darede</h1>
            <h1 className="text-[#F5991D] font-bold text-xl">Recruit</h1>

            <div className="flex w-full justify-end gap-8">
                <a href="https://images.steamusercontent.com/ugc/2077889393106802801/509548242CA42145059BDA2532B670FCDAD3C050/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" className="text-black font-semibold">Início</a>
                <a href="https://images.steamusercontent.com/ugc/2077889393106802801/509548242CA42145059BDA2532B670FCDAD3C050/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" className="text-black font-semibold">Minhas Candidaturas</a>
                <a href="https://images.steamusercontent.com/ugc/2077889393106802801/509548242CA42145059BDA2532B670FCDAD3C050/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"  className="flex flex-row items-center gap-2">
                    <Image src={user} alt="user" className="w-4"></Image>
                    <p className="text-black font-semibold">Perfil</p>
                </a>
            </div>
        </div>
        </>
    )
}
