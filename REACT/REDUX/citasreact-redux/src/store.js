import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
//importar los reducers
import reducerPrincipal from './reducers' //busca el archivo index si no le indicamos que archivo js, importa combineReducers que es el default export

//const initialState = [];//sino le paso el storageState tengo que pasarle el initialState como parametro sl store

const middleware = [thunk];

//Agregar lo del localStorage al state principal del store, Atencion: la info en localStorage esta como String, hay que parcear a JSON
const storageState = localStorage.getItem('citas') ? JSON.parse(localStorage.getItem('citas')) : []; //si hay algo en el localStorage lo agrega si esta vacio agrega el arreglo vacio

                        //combineReducers //storageState o initialState
const store = createStore(reducerPrincipal, storageState, compose(applyMiddleware(...middleware),
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  //este parametro es de github redux dev tools
));

export default store;