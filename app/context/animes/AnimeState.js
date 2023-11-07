import React,{useReducer} from "react"
import AnimeContext from "./AnimesContext"
import AnimesReducer from "./AnimesReducer"
import { CAMBIAR_MENSAJE } from "@/types/types"

const AnimeState = ({children})=> {
    // State de pedidos

    const initialState = {
        mensaje:""
    }
    const [state, dispach] = useReducer(AnimesReducer,initialState)

    const mostrarMensaje = (msg)=> {
        
        dispach({
            type:CAMBIAR_MENSAJE,
            payload:msg
        })
    }
    return (
        <AnimeContext.Provider
            // aqui le pasaremos todas las funciones
            value={{
                mensaje: state.mensaje,
                mostrarMensaje
            }}
        >
            {children}

        </AnimeContext.Provider>

    )
}

export default AnimeState

