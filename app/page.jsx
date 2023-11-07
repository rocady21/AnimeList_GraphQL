"use client"
"use client"
import React, { useContext, useEffect, useState } from "react"
import AnimeContext from "./context/animes/AnimesContext"


export default function Home() {

  const {mostrarMensaje,mensaje} = useContext(AnimeContext)


  return (
    <div className="flex flex-col items-center">
      <div className="">Top Animes</div>

      <div className="episodesRecient">tendencia</div>
      <div className="episodesRecient">popular en esta temporada</div>
      <div className="episodesRecient">all time popular</div>
      <div className="episodesRecient">siguiente temporada</div>

    </div>
  )
}
