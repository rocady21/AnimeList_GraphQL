"use client"
import React, { useRef, useState } from "react";
import ModalCharacter from "./Modal";


const CharactersCard = ({info}) => {
    const {age,gender,id,name,image, dateOfBirth,modNotes,siteUrl,description} = info.node
    const [open,setOpen] = useState(false)

    const handleOpen = ()=> {
        setOpen(true)
    }

    const handleClose = ()=> {
        setOpen(false)
    }
    


    return (
        <div className="w-1/3 p-5 relative ">
            <div role="button" onClick={handleOpen} className="bg-gray-100 h-full flex flex-row rouned shadow-md">
                <img className="w-1/3 h-full object-cover" src={image.large} alt="" />
                <div className="p-3 flex flex-col items-start justify-between text-[12px] w-full">
                    <div className="info w-full">
                        <h1 className="text-[15px] ">{name.userPreferred}  <span className="text-[10px]">({name.native})</span></h1>
                        <p className="">Genero:{gender? gender : "No identificado"}</p>
                        <p className="">Edad: {age? age : "???"}</p>
                    </div>
                    <button className="self-end uppercase font-bold hover:text-black border hover:bg-gray-100 hover:border-1 hover:border-black justify-self-end bg-black text-white px-4 py-1">Ver </button>
                </div>
            </div>
            {
                open === true && <ModalCharacter open={open} handleClose={handleClose} info={info}  />
            }

        </div>
    )
}


export default CharactersCard