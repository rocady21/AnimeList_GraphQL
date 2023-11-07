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
import Loading from "./loading";


const VerAnime = () => {

    const {id} = useParams()
    const QUERYANIME = OBTENER_ANIME_ESPESIFICO(id)
    const {data,loading,error} = useQuery(QUERYANIME,{
        variables:{
            id:id
        }
    })
    
    if(loading === true) {
        return <Loading/>
    }
    const {Page:{media:[dataF]}} = data
    
    return (
        <div className="w-full h-full flex flex-col">
            <div className="portada w-full h-full">
                <Portada data={dataF}/>
            </div>
            <div className="flex flex-col items-center md:items-start md:flex-row  w-full mt-[310px] px-[0px] sm:px-[50px] md:px-[100px] lg:px-[159px] xl:px-[250px]">
                <InfoAnime info = {dataF}/>
                <div className="flex flex-col h-full md:w-4/5 w-full">
                    <Relations relations = {dataF.relations.edges}/>
                    <Characters characters={dataF.characters.edges}/>
                </div>
            </div>
            
        </div>
    )
}

export default VerAnime