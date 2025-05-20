import Image from "next/image"
//imports internos
import back from '@/assets/back.png'

export const GoBack = () => {
    return(
        <>
         <div className="flex flex-row gap-2 md:gap-4 items-center">
            <Image src={back} alt="seta" className="scale-40 md:scale-50 object-contain"></Image>
            <p className=" text-[#909192] text-xs md:text-md">Voltar</p>
        </div>
        </>
    )
}

