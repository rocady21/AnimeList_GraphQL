import React,{useReducer} from "react"
import AnimeContext from "./AnimesContext"
import AnimesReducer from "./AnimesReducer"
import { CAMBIAR_MENSAJE,ACTUALIZAR_BUSCADOR,ACTUALIZAR_ANIMES } from "@/types/types"
import { useQuery } from "@apollo/client"

const AnimeState = ({children})=> {
    // State de pedidos

    const initialState = {
        mensaje:"",
        animes:null,
        search:"",
        resultsSearch:null
    }
    const [state, dispach] = useReducer(AnimesReducer,initialState)

    const GuardarBusqueda = (text)=> {

        dispach({
            type:ACTUALIZAR_BUSCADOR,
            payload:text
        })
    }
    return (
        <AnimeContext.Provider
            // aqui le pasaremos todas las funciones
            value={{
                mensaje: state.mensaje,
                search:state.search,
                animes:state.animes,
                GuardarBusqueda
            }}
        >
            {children}

        </AnimeContext.Provider>

    )
}

export default AnimeState

