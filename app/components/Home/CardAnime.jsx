"use client"
import React, { useState } from "react"
import ShowInfo from "./ShowInfo"
import { useRouter } from "next/navigation"


const CardAnimne = ({info})=> { 

    const [show,setShow] = useState(false)
    const router = useRouter()
    const mostrarPagina = ()=> {
        router.push("/verAnime/" + info.id)
    }
    
    return (
        <div role="button" onClick={mostrarPagina} className="sm:w-full z-5 md:w-1/2 lg:w-1/2 xl:w-1/4 2xl:w-1/5 flex flex-col items-center my-5  ">
            <div onMouseEnter={()=> setShow(true)} onMouseLeave={()=> setShow(false)} className={`relative w-2/3 h-full photo  rounded shadow-xl shadow-[${info.coverImage.color}]  bg-white p-1 bg-white`}>
                {show === true && <ShowInfo info={info}/>}
                <img className="w-full h-full " src={info.coverImage.large} alt="" />
            </div>
        </div>
    )

}

export default CardAnimne