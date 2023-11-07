"use client"
import { OBTENER_ANIME_ESPESIFICO } from "@/app/Querys/animes";
import CardInfo from "@/app/components/VIewAnimee/CardInfo";
import Characters from "@/app/components/VIewAnimee/Characters";
import InfoAnime from "@/app/components/VIewAnimee/InfoAnime";
import Portada from "@/app/components/VIewAnimee/Portada";
import Relations from "@/app/components/VIewAnimee/Relations";
import { useQuery } from "@apollo/client";
import { useRouter,useParams } from "next/navigation";
import React from "react";


const VerAnime = () => {

    const {id} = useParams()
    const QUERYANIME = OBTENER_ANIME_ESPESIFICO(id)
    const {data,loading,error} = useQuery(QUERYANIME,{
        variables:{
            id:id
        }
    })
    
    if(loading === true) {
        return "Cargando..."
    }
    const {Page:{media:[dataF]}} = data
    console.log(dataF);
    
    return (
        <div className="w-full h-full flex flex-col">
            <div className="portada w-full h-full">
                <Portada data={dataF}/>
            </div>
            <div className="body flex flex-row w-full mt-[310px] px-[10%] 2xl:px-[15%] xl:px-[15%] lg:px-[13%] md:px-[15%] sm:px-[20%]">
                <InfoAnime info = {dataF}/>
                <div className="flex flex-col w-4/5 h-full">
                    <Relations relations = {dataF.relations.edges}/>
                    <Characters characters={dataF.characters.edges}/>
                </div>
            </div>
            
        </div>
    )
}

export default VerAnime