import { CAMBIAR_MENSAJE } from "@/types/types"
CAMBIAR_MENSAJE

export default (state,actions) => {
    switch(actions.type) {
        // aqui llamaremos todos nuestros casos para modificar el state
        case CAMBIAR_MENSAJE:
            return {
                mensaje: actions.payload
            }
        default:
            return state
    }
}