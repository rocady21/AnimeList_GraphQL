import { useQuery } from "@apollo/client";
import React from "react";
import { POPULAR_TOOD_EL_TIEMPO } from "../Querys/animes";

const ViewAllPopular = ()=> {
    const QUERYPOPULARALL = POPULAR_TOOD_EL_TIEMPO(true)
    const {data,loading,error} = useQuery(QUERYPOPULARALL)

    if(loading === true) {
        return "Cargando..."
    }
    return ( 
        <div ></div>
    )
}

return ViewAllPopular