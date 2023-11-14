"use client"
import { OBTENER_ANIME_ESPESIFICO } from "@/app/Querys/animes";
import CardInfo from "@/app/components/VIewAnimee/CardInfo";
import Characters from "@/app/components/VIewAnimee/Characters";
import InfoAnime from "@/app/components/VIewAnimee/InfoAnime";
import Portada from "@/app/components/VIewAnimee/Portada";
import Relations from "@/app/components/VIewAnimee/Relations";
import { useQuery } from "@apollo/client";
import { useRouter,useParams } from "next/navigation";
import React, { useState } from "react";
import Loading from "./loading";
import Trailer from "@/app/components/VIewAnimee/Trailer";
import Personajes from "@/app/components/VIewAnimee/Episodios";
import Episodios from "@/app/components/VIewAnimee/Episodios";


const VerAnime = () => {
    const [statePage,setStatePage] = useState("Trailer")
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
                    <div className="navegar flex flex-row mx-2 justify-around mt-[25px]">
                        <button onClick={()=> setStatePage("Trailer")} className={`rounded-t-lg w-[33%] bg-${statePage === "Trailer"? "white" : "none"}`}>Trailer</button>
                        <button onClick={()=> setStatePage("Personajes")} className={`rounded-t-lg w-[33%] bg-${statePage === "Personajes"? "white" : "none"}`}>Personajes</button>
                        <button onClick={()=> setStatePage("Episodios")} className={`rounded-t-lg w-[33%] bg-${statePage === "Episodios"? "white" : "none"}`}>Episodios</button>
                    </div>
                    <div className="hijos mx-2" >
                    {
                        statePage === "Trailer" ? <Trailer trailer={dataF.trailer}/> : statePage === "Personajes"? <Characters characters={dataF.characters.edges}/> : <Episodios data={dataF}/>
                    }
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default VerAnime