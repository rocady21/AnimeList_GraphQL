"use client"
import { useQuery } from "@apollo/client";
import React from "react";
import { OBTENER_MANGAS } from "../Querys/animes";
import MainPageLoading from "../components/MainPageLoading";
import SimpleCard from "../components/Home/SImpleCard";

const Mangas = ()=> {

    const {data,loading,error} = useQuery(OBTENER_MANGAS)

    console.log(data);
    if(loading === true) return <MainPageLoading main={false}/>
    return (
        <div>
            <h1 className="uppercase font-bold text-center my-[25px">Mangas</h1>
            <div className="w-[60%] m-auto grid grid-cols-6 gap-2">
                {
                    data.Page.media.map((anime,index)=>{
                        return <div className="w-full ">
                            <SimpleCard key={index} index={index} keyA={"Mangas"} info={anime}/>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Mangas