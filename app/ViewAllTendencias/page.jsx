import { useQuery } from "@apollo/client";
import React from "react";

const ViewAllTendencias = ()=> {

    const QUERY_TENDENCIA = TRAER_ANIMES_TENDENCIA(false)

    const {data,loading,error} = useQuery(QUERY_TENDENCIA)


    if(loading === true) return "Cargando..."

    console.log(data);
    return (
        <div>Tendencias</div>
    )
}

return ViewAllTendencias