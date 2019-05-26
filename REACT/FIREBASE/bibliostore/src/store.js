import { createStore, combineReducers, compose } from 'redux';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';  //reducers de firebase
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';  //para el login
import buscarUsuarioReducer from './reducers/buscarUsuarioReducer';/* nuestros reducers */


// Todas estas configuraciones se hacen en el store de redux y son para integrar react con redux y firebase y firestore
// Configurar firestore, esta conf la copio desde firebase la opcion web
const firebaseConfig = {
    apiKey: "AIzaSyB63KNYytEsCURgD-HKgrNtYjuQPjw-cvk",
    authDomain: "bibliostore-32c34.firebaseapp.com",
    databaseURL: "https://bibliostore-32c34.firebaseio.com",
    projectId: "bibliostore-32c34",
    storageBucket: "bibliostore-32c34.appspot.com",
    messagingSenderId: "525827069266",
    appId: "1:525827069266:web:5c7bfad0b7a4584e"
}
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 // Config react-redux habilitamos para usar firestore con el true
const rrfConfig = {
   userProfile: 'users',
   useFirestoreForProfile: true
}

// Crear el enhacer con compose de redux y firestore
const createStoreWhitFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
)(createStore);


// CombineReducers Agregamos los reducer de firebaseReducer y firestoreReducer importados arriba
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    usuario: buscarUsuarioReducer
})

// state inicial
const initialState = {}

// Creamos el store de redux con firebase,  el rootReducers o combineReducers incuye los reducers de firebase y firestore
const store = createStoreWhitFirebase(rootReducer, initialState, compose(
     reactReduxFirebase(firebase),
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;