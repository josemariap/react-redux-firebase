import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
//useEffect es para manejar lo que serìa componentDidMount y componentDidUpdate  del clss component usando sfcomponent con hooks y
//podemos tener state y setState sin usar un class component a partir del useState
//usamos google fonts en el index.html

const App = () => {

  const [state, actualizarState] = useState({}); 

  const consultaApi =  async () => {
    const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes') //api frases de breaking bad
    //agregar el resultado de la api al state
    actualizarState(resultado.data[0]); //cargamos el state con el json
  }

  //consulta rest api con axios en el useEffect para cargar de entrada los datos en el state como un componentDidMount usando hooks
  useEffect(
    () => {
       consultaApi();
    }, [])
   
  return ( 
     <div className="contenedor">
        <Frase
          frase = {state}
        />
        <button onClick={consultaApi}>nueva frase</button>
     </div>
   );
}


function Frase (props){
   return(
     <div className="frase">
        <h1>{props.frase.quote}</h1>
        <p>{props.frase.author}</p>
     </div>
   )
}
 
export default App;
