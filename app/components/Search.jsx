import React, { useContext } from "react";
import AnimeContext from "../context/animes/AnimesContext";
import { useQuery } from "@apollo/client";
import { BUSCAR_ANIME } from "../Querys/animes";
import SimpleCard from "./Home/SImpleCard";

const Search = ()=> {

    const {search} = useContext(AnimeContext)
    const {data,loading,error} = useQuery(BUSCAR_ANIME,{
        variables:{
            search: search
        }
    })
    
    if(loading === true) return <div className="loading w-full flex flex-row flex-wrap px-[150px]">
        <div className="card w-[12%] h-[275px] m-3 flex flex-col justify-between">
            <div className="W-full bg-gray-300 animate-pulse h-[88%]"></div>
            <div className="w-full bg-gray-300 animate-pulse h-[8%]"></div>
        </div>
        <div className="card w-[12%] h-[275px] m-3 flex flex-col justify-between">
            <div className="W-full bg-gray-300 animate-pulse h-[88%]"></div>
            <div className="w-full bg-gray-300 animate-pulse h-[8%]"></div>
        </div>
        <div className="card w-[12%] h-[275px] m-3 flex flex-col justify-between">
            <div className="W-full bg-gray-300 animate-pulse h-[88%]"></div>
            <div className="w-full bg-gray-300 animate-pulse h-[8%]"></div>
        </div>
        <div className="card w-[12%] h-[275px] m-3 flex flex-col justify-between">
            <div className="W-full bg-gray-300 animate-pulse h-[88%]"></div>
            <div className="w-full bg-gray-300 animate-pulse h-[8%]"></div>
        </div>
        <div className="card w-[12%] h-[275px] m-3 flex flex-col justify-between">
            <div className="W-full bg-gray-300 animate-pulse h-[88%]"></div>
            <div className="w-full bg-gray-300 animate-pulse h-[8%]"></div>
        </div>
        <div className="card w-[12%] h-[275px] m-3 flex flex-col justify-between">
            <div className="W-full bg-gray-300 animate-pulse h-[88%]"></div>
            <div className="w-full bg-gray-300 animate-pulse h-[8%]"></div>
        </div>
        <div className="card w-[12%] h-[275px] m-3 flex flex-col justify-between">
            <div className="W-full bg-gray-300 animate-pulse h-[88%]"></div>
            <div className="w-full bg-gray-300 animate-pulse h-[8%]"></div>
        </div>
        <div className="card w-[12%] h-[275px] m-3 flex flex-col justify-between">
            <div className="W-full bg-gray-300 animate-pulse h-[88%]"></div>
            <div className="w-full bg-gray-300 animate-pulse h-[8%]"></div>
        </div>
        <div className="card w-[12%] h-[275px] m-3 flex flex-col justify-between">
            <div className="W-full bg-gray-300 animate-pulse h-[88%]"></div>
            <div className="w-full bg-gray-300 animate-pulse h-[8%]"></div>
        </div>
        <div className="card w-[12%] h-[275px] m-3 flex flex-col justify-between">
            <div className="W-full bg-gray-300 animate-pulse h-[88%]"></div>
            <div className="w-full bg-gray-300 animate-pulse h-[8%]"></div>
        </div>
        <div className="card w-[12%] h-[275px] m-3 flex flex-col justify-between">
            <div className="W-full bg-gray-300 animate-pulse h-[88%]"></div>
            <div className="w-full bg-gray-300 animate-pulse h-[8%]"></div>
        </div>
        <div className="card w-[12%] h-[275px] m-3 flex flex-col justify-between">
            <div className="W-full bg-gray-300 animate-pulse h-[88%]"></div>
            <div className="w-full bg-gray-300 animate-pulse h-[8%]"></div>
        </div>
        <div className="card w-[12%] h-[275px] m-3 flex flex-col justify-between">
            <div className="W-full bg-gray-300 animate-pulse h-[88%]"></div>
            <div className="w-full bg-gray-300 animate-pulse h-[8%]"></div>
        </div>
        <div className="card w-[12%] h-[275px] m-3 flex flex-col justify-between">
            <div className="W-full bg-gray-300 animate-pulse h-[88%]"></div>
            <div className="w-full bg-gray-300 animate-pulse h-[8%]"></div>
        </div>
        <div className="card w-[12%] h-[275px] m-3 flex flex-col justify-between">
            <div className="W-full bg-gray-300 animate-pulse h-[88%]"></div>
            <div className="w-full bg-gray-300 animate-pulse h-[8%]"></div>
        </div>
        <div className="card w-[12%] h-[275px] m-3 flex flex-col justify-between">
            <div className="W-full bg-gray-300 animate-pulse h-[88%]"></div>
            <div className="w-full bg-gray-300 animate-pulse h-[8%]"></div>
        </div>
        <div className="card w-[12%] h-[275px] m-3 flex flex-col justify-between">
            <div className="W-full bg-gray-300 animate-pulse h-[88%]"></div>
            <div className="w-full bg-gray-300 animate-pulse h-[8%]"></div>
        </div>
        <div className="card w-[12%] h-[275px] m-3 flex flex-col justify-between">
            <div className="W-full bg-gray-300 animate-pulse h-[88%]"></div>
            <div className="w-full bg-gray-300 animate-pulse h-[8%]"></div>
        </div>
        <div className="card w-[12%] h-[275px] m-3 flex flex-col justify-between">
            <div className="W-full bg-gray-300 animate-pulse h-[88%]"></div>
            <div className="w-full bg-gray-300 animate-pulse h-[8%]"></div>
        </div>
        <div className="card w-[12%] h-[275px] m-3 flex flex-col justify-between">
            <div className="W-full bg-gray-300 animate-pulse h-[88%]"></div>
            <div className="w-full bg-gray-300 animate-pulse h-[8%]"></div>
        </div>
        <div className="card w-[12%] h-[275px] m-3 flex flex-col justify-between">
            <div className="W-full bg-gray-300 animate-pulse h-[88%]"></div>
            <div className="w-full bg-gray-300 animate-pulse h-[8%]"></div>
        </div>
        <div className="card w-[12%] h-[275px] m-3 flex flex-col justify-between">
            <div className="W-full bg-gray-300 animate-pulse h-[88%]"></div>
            <div className="w-full bg-gray-300 animate-pulse h-[8%]"></div>
        </div>
        <div className="card w-[12%] h-[275px] m-3 flex flex-col justify-between">
            <div className="W-full bg-gray-300 animate-pulse h-[88%]"></div>
            <div className="w-full bg-gray-300 animate-pulse h-[8%]"></div>
        </div>
        <div className="card w-[12%] h-[275px] m-3 flex flex-col justify-between">
            <div className="W-full bg-gray-300 animate-pulse h-[88%]"></div>
            <div className="w-full bg-gray-300 animate-pulse h-[8%]"></div>
        </div>
        <div className="card w-[12%] h-[275px] m-3 flex flex-col justify-between">
            <div className="W-full bg-gray-300 animate-pulse h-[88%]"></div>
            <div className="w-full bg-gray-300 animate-pulse h-[8%]"></div>
        </div>
        <div className="card w-[12%] h-[275px] m-3 flex flex-col justify-between">
            <div className="W-full bg-gray-300 animate-pulse h-[88%]"></div>
            <div className="w-full bg-gray-300 animate-pulse h-[8%]"></div>
        </div>
        <div className="card w-[12%] h-[275px] m-3 flex flex-col justify-between">
            <div className="W-full bg-gray-300 animate-pulse h-[88%]"></div>
            <div className="w-full bg-gray-300 animate-pulse h-[8%]"></div>
        </div>
        <div className="card w-[12%] h-[275px] m-3 flex flex-col justify-between">
            <div className="W-full bg-gray-300 animate-pulse h-[88%]"></div>
            <div className="w-full bg-gray-300 animate-pulse h-[8%]"></div>
        </div>



    </div>
    console.log(data);
    return (
        <div className="flex flex-row flex-wrap w-full px-[150px]">
            {
                data.Page.media.map((anime,index)=> {
                    return <div className="w-[12%] h-[350px] mx-3">
                        <SimpleCard key={index} info={anime} keyA={"Search"} index={index}/>
                    </div>
                })
            }
        </div>
    )
}

export default Search