import { CAMBIAR_MENSAJE,ACTUALIZAR_BUSCADOR,ACTUALIZAR_ANIMES } from "@/types/types"
CAMBIAR_MENSAJE

export default (state,actions) => {
    switch(actions.type) {
        // aqui llamaremos todos nuestros casos para modificar el state

        case ACTUALIZAR_BUSCADOR:
            return {
                ...state,
                search:actions.payload

            }

        default:
            return state
    }
}