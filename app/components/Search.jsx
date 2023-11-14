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
    
    if(loading === true) return "cargando..."
    console.log(data);
    return (
        <div className="flex flex-row">
            {
                data.Page.media.map((anime,index)=> {
                    <SimpleCard info={anime} keyA={"Search"} index={index}/>
                })
            }
        </div>
    )
}

export default Search