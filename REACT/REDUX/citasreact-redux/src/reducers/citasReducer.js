import { MOSTRAR_CITAS, AGREGAR_CITA, BORRAR_CITA} from '../actions/types'; //importamos los types para que el reducer sepa que hacer con el state antes de retornarlo
//IMPORTANTE: citasReducer.js se mapea con los metodos de citasActions.js, esos metodos son lo que van uno por vez como parametro action a la funcion de reducer de abajo
//state inicial, cada reducer debe tener su propio state pero ese state es el unico para toda la app


// cada reducer tiene su propio state
const initalState = {
    citas:[]
  }

export default function(state = initalState, action) { 
   switch(action.type){  //action seria algun metodo de citasAction que retorna un json con el type y opcional el payload
      case MOSTRAR_CITAS:
         return {
             ...state
         }
      case AGREGAR_CITA:
         return {
            ...state,
            citas: [...state.citas, action.payload] //retorna el array de citas mas una cita nueva agregada a el, eso se agrega al state y queda actualizado
         }
      case BORRAR_CITA:
         return {
            ...state,
            citas: state.citas.filter(cita => cita.id !== action.payload)
         }
      default:
         return state;
   }
}