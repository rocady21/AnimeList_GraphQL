"use client"
import { gql, useQuery } from "@apollo/client";
import React from "react";
import { POPULAR_TOOD_EL_TIEMPO } from "../Querys/animes";
import SimpleCard from "../components/Home/SImpleCard";

const POPULAR_ALL = gql`
query GetAnimeList($page:Int){
    Page(page: $page){
        media(sort:POPULARITY_DESC type:ANIME){
        id
        idMal
        title {
          romaji
          english
          native
          userPreferred
        }
        type
        season
        coverImage {
          extraLarge
          large
          medium
          color
        }
        bannerImage
        format
        episodes
  
        studios {
          edges {
            node {
              id
            name}
          }
        }
        genres
        volumes
      }          
    }
}
`

const ViewAllPopular = ()=> {
    const {data,loading,error} = useQuery(POPULAR_ALL)

    if(loading === true) {
        return "Cargando..."
    }
    return ( 
        <div className="px-[150px] w-full flex flex-row flex-wrap">
            {
                data.Page.media.map((anime,index)=>{
                    return <div className="w-[180px] m-3">
                        <SimpleCard key={index} index={index} keyA={"POPULARALL"} info={anime}/>
                    </div>
                })
            }
        </div>
    )
}

export default ViewAllPopular