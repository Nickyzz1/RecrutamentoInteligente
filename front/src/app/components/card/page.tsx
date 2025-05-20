"use client"
import React from 'react';
import { ROUTES } from "@/constants/routes"

import Image from "next/image";
import seta from "@/assets/seta.png"

interface CardProps {
    title: string;
    status: string;
    adress: string;
    description: string;
    date: Date;
}

export const Card:  React.FC<CardProps> = ({title, status, adress, description, date}) => {

    return (
        <>
            <div className="shadow-[5px_5px_10px_0px_rgba(0,_0,_0,_0.2)] bg-white p-8 w-full flex flex-col gap-5 ">
                <div className="flex flex-col gap-1">
                    <div className="flex flex-col md:flex-row justify-between">
                        <p className="text-[#036D3C] text-xl font-semibold">{title}</p>
                        <button className="bg-[#F5991D] px-4 hover:shadow-amber-400 hover:shadow rounded-2xl text-white font-medium">{status}</button>
                    </div>
                    <p className="text-[#949494] text-xs">Darede à nuvem | {adress}</p>
                </div>
                <p className="text-[#666666] max-w-11/12">{description}</p>
                <div className="flex flex-wrap gap-2">
                    <p className="border-[#036D3C] rounded-2xl px-3 border-[1px] w-fit">Experiência com sei lá</p>
                    <p className="border-[#036D3C] rounded-2xl px-3 border-[1px] w-fit">Conhecimento de sei lá</p>
                    <p className="border-[#036D3C] rounded-2xl px-3 border-[1px] w-fit">Experiência com sei lá</p>
                    <p className="border-[#036D3C] rounded-2xl px-2 border-[1px] w-fit">+1</p>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <p className="text-[#949494]">{date.toLocaleDateString()}</p>
                    <div className="flex flex-row gap-2 items-center">
                        <p className="text-[#036D3C]">Ver detalhes</p>
                        <Image src={seta} alt="seta" className="w-6"></Image>
                    </div>
                </div>
            </div>
        </>
    )
}
