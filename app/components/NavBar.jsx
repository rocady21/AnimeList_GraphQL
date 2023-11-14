"use client"
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import {Search} from "@mui/icons-material"
import AnimeContext from "../context/animes/AnimesContext";
const NavBar = ()=> {
    
    const [value,setValue] = useState("")
    const {animes,search,GuardarBusqueda} = useContext(AnimeContext)

    console.log(search);
    useEffect(()=>{
        console.log("A");
        GuardarBusqueda(value)
    },[value])

    return (
        <div className="flex flex-row bg-black/90 p-4 px-[200px] justify-around font-light text-white">

        <div className="nombrePAges flex flex-row items-center w-2/5 ">
            <Link href={"/"} className="text-[20px] uppercase font-bold">AnimePage</Link>
            <div className="links w-full flex justify-around">
                <Link href={"/animes"}>Animes</Link>
                <Link href={"/mangas"}>Mangas</Link>
            </div>
        </div>


        <div className="text-gray-100 font-light bg-black/30 px-2 py-2 rounded-full text-[16px] justify-self-end">
            <Search className="mx-3"/>
            <input value={value} onChange={(e)=> setValue(e.target.value)} className="focus:border-none focus:outline-none bg-black/30 text-[16px]" placeholder="Buscar..." type="text" name="search" id="search" />

        </div>
        </div>
        )
}

export default NavBar