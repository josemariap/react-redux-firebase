import { MOSTRAR_PRODUCTOS, ELIMINAR_PRODUCTO, AGREGAR_PRODUCTO, MOSTRAR_PRODUCTO, EDITAR_PRODUCTO } from '../actions/types';

//cada reducer tiene su propio state
const initialState = {
    productos: []
};

//el parametro action siempre es un metodo con un return o dispatch como return
//el parametro action es el return con un json del productosActions pero atencion que no usa return sino dispatch como return
export  default function(state=initialState, action){
   switch(action.type){
      case MOSTRAR_PRODUCTOS:
        return {
            ...state,
            productos: action.payload
        }
      case ELIMINAR_PRODUCTO:
        return {
            ...state,
            productos: state.productos.filter(producto => producto.id !== action.payload)
        }
        case AGREGAR_PRODUCTO:
         return {
            ...state,
            productos: [...state.productos, action.payload]
        }
        case MOSTRAR_PRODUCTO:
         return {
            ...state,
            producto: action.payload
        }
        case EDITAR_PRODUCTO:
          return{
            ...state,
            productos: state.productos.map(
              producto => producto.id === action.payload.id
              ? (producto = action.payload)  //remplaza el producto completo con el actualizado
              :producto
            )
          }
      default:
         return state; 
   }
}