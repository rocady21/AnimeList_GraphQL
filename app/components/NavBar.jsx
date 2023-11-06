"use client"
import React from "react";
import Link from "next/link";
import {Search} from "@mui/icons-material"
const NavBar = ()=> {
    return (
        <div className="flex flex-row bg-black/90 p-4 px-[200px] justify-around font-light text-white">

        <div className="nombrePAges flex flex-row items-center w-2/5 ">
            <h1 className="text-[20px] uppercase font-bold">AnimePage</h1>
            <div className="links w-full flex justify-around">
                <Link href={"/"}>Animes</Link>
                <Link href={"/mangas"}>Mangas</Link>


            </div>
        </div>


        <div className="text-gray-100 font-light bg-black/30 px-2 py-2 rounded-full text-[16px] justify-self-end">
            <Search className="mx-3"/>
            <input className="focus:border-none focus:outline-none bg-black/30 text-[16px]" placeholder="Buscar..." type="text" name="search" id="search" />

        </div>
        </div>
        )
}

export default NavBar