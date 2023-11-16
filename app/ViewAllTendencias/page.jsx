"use client"
import { useQuery } from "@apollo/client";
import React from "react";
import { TRAER_ANIMES_TENDENCIA } from "../Querys/animes";
import SimpleCard from "../components/Home/SImpleCard";

const ViewAllTendencias = ()=> {

    const QUERY_TENDENCIA = TRAER_ANIMES_TENDENCIA(true)

    const {data,loading,error} = useQuery(QUERY_TENDENCIA)


    if(loading === true) return "Cargando..."

    console.log(data);
    return (
        <div className="px-[150px] w-full flex flex-row flex-wrap">
            {
                data.Page.media.map((anime,index)=>{
                    return <div className="w-[200px] m-3">
                        <SimpleCard key={index} index={index} keyA={"POPULARALL"} info={anime}/>
                    </div>
                })
            }
        </div>
    )
}

export default ViewAllTendencias