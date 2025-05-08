"use client"
import { Button } from "@mui/material";
import React from 'react';
import { ROUTES } from "@/constants/routes"

export const HeaderNotLogged = () => {

    return(
        <>
        <div className="flex w-full h-15 shadow-md items-center px-6 bg-[#ffffff]">
            <h1 className="text-[#036D3C] font-bold text-xl">Darede</h1>
            <h1 className="text-[#F5991D] font-bold text-xl">Recruit</h1>

            <div className="flex w-full justify-end gap-2">
                <Button variant="outlined" href={ROUTES.login}>Entrar</Button>
                <Button variant="contained" href={ROUTES.register} sx={{ color: 'white', backgroundColor: '#036D3C' }}>Cadastrar</Button>
            </div>
        </div>
        </>
    )
}
