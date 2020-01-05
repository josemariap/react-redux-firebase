import { createStore } from 'redux';
import combineReducers from './reducers/index';

//definimos un state inicial que será un arreglo vacio
//const initialState = [];


const store = createStore(
   combineReducers,
  // initialState,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// subscribe se ejecuta si se modifica algo en el store
store.subscribe( () => {
   console.log('Se modifico el store');
}); 

export default store;