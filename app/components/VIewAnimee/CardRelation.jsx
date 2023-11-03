"use client"
import { useRouter } from "next/navigation";
import React from "react";


const CardRelations = ({anime})=> {
    const router = useRouter()
    const irAlAnime = ()=> {
        router.push("/verAnime/" + anime.id)
    }
    console.log(anime);
    return (
        <div role="button" onClick={irAlAnime} className="w-[350px] h-[200px] min-w-[300px]  mx-2 p-4 flex flex-row bg-gray-100" >
            <div className="flex flex-col justify-between">
                <img className=" h-[80%]" src={anime.coverImage.large} alt="" />
                <p className="flex flex-row" style={{color:anime.coverImage.color,fontSize:"12px"}}>{anime.type}-<span className="font-bold text-light text-black font-normal">{anime.status}</span></p>
            </div>
            <div className="info w-2/3 px-2 font-bold">
                <h1>{anime.title.userPreferred}<span className="font-bold text-sm">({anime.title.native})</span> </h1>
            </div>
        </div>
    )
}

export default CardRelations