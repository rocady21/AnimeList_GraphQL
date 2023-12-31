"use client"
"use client"
import React, { useContext, useEffect, useState } from "react"
import AnimeContext from "./context/animes/AnimesContext"
import { useQuery } from "@apollo/client"
import { POPULAR_ESTA_TEMPORADA, TOP3POPULARITYANIME, TRAER_ANIMES_TENDENCIA,POPULAR_TOOD_EL_TIEMPO } from "./Querys/animes"

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import { useRouter } from "next/navigation"
import SimpleCard from "./components/Home/SImpleCard"
import MainPageLoading from "./components/MainPageLoading"
import Search from "./components/Search"

export default function Home() {

  const router = useRouter()
  const {mostrarMensaje,mensaje,search} = useContext(AnimeContext)
  const QUERY_TENDENCIA = TRAER_ANIMES_TENDENCIA(false)
  const POPULAR_TOOD_EL_TIEMPO_QUERY = POPULAR_TOOD_EL_TIEMPO(false)

  const {data,loading,error} = useQuery(TOP3POPULARITYANIME)
  const {data:dataTendencia,loading:loadingTendencia,error:errorTendencia} = useQuery(QUERY_TENDENCIA)
  const {data:dataPopular,loading:loadingPopular,error:errorPopular} = useQuery(POPULAR_ESTA_TEMPORADA)
  const {data:dataPopularAll,loading:loadingPopularAll,error:errorPopularAll} = useQuery(POPULAR_TOOD_EL_TIEMPO_QUERY)


  if(loading === true || loadingTendencia === true || loadingPopular === true || loadingPopularAll === true) return <MainPageLoading main={true}/>


  const VerTendencias = ()=> {
    router.push("/ViewAllTendencias")
  }
  const VerPopularesAll = ()=> {
    router.push("/ViewAllPopular")
  }

  return (
    <div className="flex flex-col items-center w-[60%] m-auto">
      {
        search === ""?  <div className="flex flex-col w-full items-center">
      <div className="tendencia mt-[50px] w-full w-full">
        <div className=" flex flex-row justify-between items-start">
          <h1 className="font-bold text-gray-800 uppercase text-start">Tendecias</h1>
          <p role="button" onClick={VerTendencias} className="uppercase text-[12px]">Ver Todos</p>
        </div>
        <div className="data flex flex-row w-[100%] max-w-[100%]  ">
          {
            dataTendencia.Page.media.map((anime,index)=> {              
              return <SimpleCard key={index} keyA={"Tendencia"} index = {index} info={anime}/>
            })
          }
        </div>
      </div>

      <div className="tendencia mt-[15px] w-full">
        <div className=" flex flex-row justify-between items-start">
          <h1 className="font-bold text-gray-800 uppercase text-start">Popular en esta temporada</h1>
          <p  role="button" className="uppercase text-[12px]">Ver Todos</p>
        </div>
        <div className="data flex flex-row ">
          {
            dataPopular.Page.media.map((anime,index)=> {
              return <SimpleCard key={index} index={index} keyA={"popularTemp"} info={anime}/>
            })
          }
        </div>
      </div>

      <div className="tendencia mt-[15px] w-full">
        <div className=" flex flex-row justify-between items-start">
          <h1 className="font-bold text-gray-800 uppercase text-start">Populares</h1>
          <p onClick={VerPopularesAll}  role="button" className="uppercase text-[12px]">Ver Todos</p>
        </div>
        <div className="data flex flex-row ">
          {
            dataPopularAll.Page.media.map((anime,index)=> {
              return <SimpleCard key={index} index={index} keyA={"Popular"} info={anime}/>
            })
          }
        </div>
      </div>

      <div className="tendencia mt-[10px] w-full">
        <h1 className="font-bold text-gray-800 uppercase text-start ">Siguiente temporada</h1>
        <div className="data"></div>
      </div>
      </div> : <Search/> }


    </div>
  )
}
