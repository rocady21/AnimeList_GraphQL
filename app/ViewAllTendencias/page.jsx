"use client"
import { gql, useQuery } from "@apollo/client";
import React from "react";
import SimpleCard from "../components/Home/SImpleCard";
import MainPageLoading from "../components/MainPageLoading";


const TENDENCIASALL = gql`
query GetAnimeList($page:Int ){
    Page(page: $page){
        media(sort:TRENDING_DESC type:ANIME){
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


const ViewAllTendencias = ()=> {


    const {data,loading,error} = useQuery(TENDENCIASALL)


    if(loading === true) return <MainPageLoading main={false}/>

    console.log(data);
    return (
        <div>
            <h1 className="uppercase text-center my-[25px] font-bold text-[25px]">Tendencias</h1>

            <div className="w-[60%] m-auto grid grid-cols-6 gap-2">
                {
                    data.Page.media.map((anime,index)=>{
                        return <div className="w-full ">
                            <SimpleCard key={index} index={index} keyA={"POPULARALL"} info={anime}/>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default ViewAllTendencias