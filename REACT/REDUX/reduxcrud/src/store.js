import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; //reducer principal combineReducers

const initialState = {};

const middleware = [thunk];
                          //combineReducer y state principal del store
const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //herramientas para test con redux dev tools del Chrome
) );

export default store;