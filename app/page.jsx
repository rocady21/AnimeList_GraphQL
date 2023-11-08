"use client"
"use client"
import React, { useContext, useEffect, useState } from "react"
import AnimeContext from "./context/animes/AnimesContext"
import { useQuery } from "@apollo/client"
import { TOP3POPULARITYANIME, TRAER_ANIMES_TENDENCIA } from "./Querys/animes"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import { useRouter } from "next/navigation"
import SimpleCard from "./components/Home/SImpleCard"

export default function Home() {

  const router = useRouter()

  const {mostrarMensaje,mensaje} = useContext(AnimeContext)

  const {data,loading,error} = useQuery(TOP3POPULARITYANIME)
  const {data:dataTendencia,loading:loadingTendencia,error:errorTendencia} = useQuery(TRAER_ANIMES_TENDENCIA)

  if(loading === true || loadingTendencia === true) return "Cargando..."
  console.log(dataTendencia);
  const verAnime = ()=> {
    router.push("verAnime/" + id)
  }
  return (
    <div className="flex flex-col items-center w-[75%] m-auto">
      <div className="w-full">

      </div>

      <div className="tendencia my-[50px] w-full">
        <div className=" flex flex-row justify-between items-start">
          <h1 className="font-bold text-gray-800 uppercase text-start">Tendecias</h1>
          <p className="uppercase text-[12px]">Ver Todos</p>
        </div>
        <div className="data flex flex-row ">
          {
            dataTendencia.Page.media.map((anime)=> {
              return <SimpleCard img={anime.coverImage.large} name={anime.title.native}/>
            })
          }
        </div>
      </div>

      <div className="tendencia my-[50px] w-full">
        <h1 className="font-bold text-gray-800 uppercase text-start ">Popular en esta temporada</h1>
        <div className="data"></div>
      </div>

      <div className="tendencia my-[50px] w-full">
        <h1 className="font-bold text-gray-800 uppercase text-start ">Popular</h1>
        <div className="data"></div>
      </div>

      <div className="tendencia my-[50px] w-full">
        <h1 className="font-bold text-gray-800 uppercase text-start ">siguiente temporada</h1>
        <div className="data"></div>
      </div>


    </div>
  )
}
