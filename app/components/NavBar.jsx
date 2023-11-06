"use client"
import React from "react";
import Link from "next/link";

const NavBar = ()=> {
    return (
        <div className="flex flex-row justify-around bg-black/90 p-4 px-[200px] font-light text-white">

        <div className="nombrePAges">
            <h1>AnimePage</h1>
            <div className="links">
                <Link href={"/"}>Animes</Link>
                <Link href={"/mangas"}>Animes</Link>


            </div>
        </div>


        <div className="search"></div>
        </div>
        )
}

export default NavBar