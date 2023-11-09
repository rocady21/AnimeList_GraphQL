"use client"

import React, { useContext, useEffect, useState } from "react"
import {useQuery} from "@apollo/client"
import CardAnimne from "../components/Home/CardAnime"
import Loading from "../components/Home/Loading"
import PaginationFinal from "../components/Pagination"
import { OBTENER_ANIMES } from "../Querys/animes"
import AnimeContext from "../context/animes/AnimesContext"

const Animes = ()=> {

  const [animeForPage,setAnimeForPage] = useState(20)
  const [currentPage,setCurrentPage] = useState(1)
  const {data,error,loading} = useQuery(OBTENER_ANIMES)
  const {CargarAnimesStore,mostrarMensaje} = useContext(AnimeContext)
  
  
  if(loading === true) return <Loading/>
  const totalAnimes = data.Page.media.length
  
  const lastIndex = currentPage * animeForPage
  const firstIndex = lastIndex - animeForPage
  // aqui actualizaremos el store con los animes que cargamos
  

  return (
    <div className="flex flex-col items-center">
      <h1 className="uppercase font-bold text-center text-[25px] mt-[25px]">Anime List</h1>
      <div className="flex flex-row justify-between flex-wrap mx-[250px]">
          {
          data? data.Page.media.map((animeInfo)=> {
            return <CardAnimne info={animeInfo}/>
          }).slice(firstIndex,lastIndex) : <Loading/>
          }

      </div>
      <PaginationFinal 
        totalAnimes ={totalAnimes} 
        currentPage = {currentPage}
        setCurrentPage= {setCurrentPage}
        animeForPage = {animeForPage}
        />

    </div>
  )
}


export default Animes