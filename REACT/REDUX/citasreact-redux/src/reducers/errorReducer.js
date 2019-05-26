import { VALIDAR_FORM } from '../actions/types';
//cada reducer tiene su propio state

const initialState = {
    error: false
}

export default function(state = initialState, action) {
   switch(action.type){
       case VALIDAR_FORM :
         return{
             error: action.payload
         }
       default :
           return state
   }
}