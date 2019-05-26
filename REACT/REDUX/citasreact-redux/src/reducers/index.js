import { combineReducers } from 'redux';
//agregamos todos nuestros reducers
import citasReducer from './citasReducer'; 
import errorReducer from './errorReducer';

//este reducer es el reducerPrincipal que se le pasa al crear el store como parametro
export default combineReducers({
  citas: citasReducer, 
  error: errorReducer
});