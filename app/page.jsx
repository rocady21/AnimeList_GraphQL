"use client"

import React from "react"
import {useQuery,gql} from "@apollo/client"
import {OBTENER_ANIMES} from "./Querys/animes"
import CardAnimne from "./components/Home/CardAnime"
import Loading from "./components/Home/Loading"


export default function Home() {

  const {data,error,loading} = useQuery(OBTENER_ANIMES)


  return (
    <div className="">
      <h1 className="uppercase font-bold text-center text-[25px] mt-[25px]">Anime List</h1>
      <div className="flex flex-row justify-between flex-wrap mx-[150px]">
          {
          data? data.Page.media.map((animeInfo)=> {
            return <CardAnimne info={animeInfo}/>
          }) : <Loading/>
          }

      </div>

    </div>
  )
}
