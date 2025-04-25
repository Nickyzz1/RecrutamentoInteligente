"use client"
import { Button } from "@mui/material";
import React from 'react';

export const HeaderNotLogged = () => {

    return(
        <>
        <div className="flex w-full h-15 shadow-md items-center px-6 bg-[#ffffff]">
            <h1 className="text-[#036D3C] font-bold text-xl">Darede</h1>
            <h1 className="text-[#F5991D] font-bold text-xl">Recruit</h1>

            <div className="flex w-full justify-end gap-2">
                <Button variant="outlined">Entrar</Button>
                <Button variant="contained" sx={{ color: 'white', backgroundColor: '#036D3C' }}>Cadastrar</Button>
            </div>
        </div>
        </>
    )
}
