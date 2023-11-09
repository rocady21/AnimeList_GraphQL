import { CAMBIAR_MENSAJE,ACTUALIZAR_BUSCADOR,ACTUALIZAR_ANIMES } from "@/types/types"
CAMBIAR_MENSAJE

export default (state,actions) => {
    switch(actions.type) {
        // aqui llamaremos todos nuestros casos para modificar el state
        case CAMBIAR_MENSAJE:
            return {
                mensaje: actions.payload
            }
        case ACTUALIZAR_BUSCADOR:
            return {
                ...state,
                search:actions.payload

            }
        case ACTUALIZAR_ANIMES:
            return {
                ...state,
                animes:state.payload
            }

        default:
            return state
    }
}