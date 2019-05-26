/* Pequeña introduccion al funcionamiento de Redux */

const redux = require('redux');

const createStore = redux.createStore;

//definimos el state inicial
const stateInicial = {
    usuarios: []
}

//definimos el reducer que retorna al store la copia actualizada del state
const reducerPrincipal = (state = stateInicial, action) => {
   if(action.type === 'AGREGAR_USUARIO'){
     return{
         ...state,
         usuarios: action.nombre
     }//retorno la copia del state mas el usuario nuevo agregado a el
   }
   if(action.type === 'MOSTRAR_USUARIO'){
    return{
        ...state,
    }//retorno la copia del state  sin actulizaciones
  }
   return state;
}

//definimos el store
//el store almacena el state actual de toda la app
//3 parámetros: reducer que define como cambia el state, state inicial y applymiddleware que es el potenciador del store
const store = createStore(reducerPrincipal);
console.log(store.getState())

//Subscribe: Escucha los cambios del state, se ejecuta automaticamente cada vez que una accion utiliza el dispatch
store.subscribe(() => {
    console.log("Algo cambio en el state...", store.getState())
})

//Dispatch: Dispara la accion, forma de cambiar el state en el reducer,  contiene tipo de accion y la informacion
store.dispatch( {type: 'AGREGAR_USUARIO', nombre: 'juan'} );
console.log(store.getState())//el state se retorno modificado por reducer al store

store.dispatch( {type: 'MOSTRAR_USUARIO'} );
console.log(store.getState())//se retorno el state del reducer al store sin modifcaciones

