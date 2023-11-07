"use client"

import React, { useState } from "react"
import {useQuery,gql} from "@apollo/client"
import {OBTENER_ANIMES} from "./Querys/animes"
import CardAnimne from "./components/Home/CardAnime"
import Loading from "./components/Home/Loading"
import PaginationFinal from "./components/Pagination"
import { Pagination } from "@mui/material"


export default function Home() {

  const [animeForPage,setAnimeForPage] = useState(16)
  const [currentPage,setCurrentPage] = useState(1)
  const {data,error,loading} = useQuery(OBTENER_ANIMES)
  
  if(loading === true) return <Loading/>
  const totalAnimes = data.Page.media.length
  console.log("Pagina ACtual:", currentPage);


  const lastIndex = currentPage * animeForPage
  const firstIndex = lastIndex - animeForPage



  return (
    <div className="flex flex-col items-center">
      <h1 className="uppercase font-bold text-center text-[25px] mt-[25px]">Anime List</h1>
      <div className="flex flex-row justify-between flex-wrap mx-[150px]">
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
