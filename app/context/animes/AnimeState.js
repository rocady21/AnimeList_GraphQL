import React,{useReducer} from "react"
import AnimeContext from "./AnimesContext"
import AnimesReducer from "./AnimesReducer"
import { CAMBIAR_MENSAJE,ACTUALIZAR_BUSCADOR,ACTUALIZAR_ANIMES } from "@/types/types"

const AnimeState = ({children})=> {
    // State de pedidos

    const initialState = {
        mensaje:"",
        animes:null,
        search:""
    }
    const [state, dispach] = useReducer(AnimesReducer,initialState)

    const mostrarMensaje = (msg)=> {
        dispach({
            type:CAMBIAR_MENSAJE,
            payload:msg
        })
    }

    const CargarAnimesStore = (animes)=> {
        dispach({
            type:ACTUALIZAR_ANIMES,
            payload:animes
        })
    }

    const buscarAnime = (text)=> {
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
                CargarAnimesStore,
                mostrarMensaje,
                buscarAnime
            }}
        >
            {children}

        </AnimeContext.Provider>

    )
}

export default AnimeState

