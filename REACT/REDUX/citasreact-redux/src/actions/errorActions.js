import { VALIDAR_FORM } from './types'; 

export const validarFormulario = (estado) => {
    return {
        type:  VALIDAR_FORM, 
        payload: estado
    }
}