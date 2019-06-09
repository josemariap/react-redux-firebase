import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';
import Clima from './components/Clima';

function App() {
  //DEFINICION DE HOOKS
  const [city, setCity]= useState('');
  const [country, setCountry]= useState('');
  const [error, setError] = useState(false);
  const [resultApi, setResultApi] = useState({});//para guardar respuesta de la api clima

  //CICLO DE VIDA CON HOOKS, useEffect se ejecuta cuando se modifica algun state del HOOKS
  useEffect(() => {
     //prevenir ejecucion cuando se inicia la primera vez
     if(city === '') return; //salimos del useEffect

     const consultarApi = async () => {
     //consultar a la api weather map usando fetch api
     const appId  = 'b8bddafa4803edaa02a9badfcb365330';
     //los parametros los tomamos del HOOKS
     let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
 
     //fetch is promise, en la arrow function tenes el response completo, luego vas descomponiendo con el segundo then y tenemos los la data
     const respuesta = await fetch(url);
     const resultado = await respuesta.json();
     setResultApi(resultado);//guardamos la respuesta del api clima en un state del HOOKS
     console.log(resultado)
     }

     consultarApi(); //metetodo que se llame dentro del useEffect tiene que estar declaro dentro de el

  }, [city, country]);//cuando se modifca city y country
 

  const datosConsulta = datos => {
     if(datos.ciudad === '' || datos.pais ===''){
       setError(true);
       return;
     }
     setCity(datos.ciudad);
     setCountry(datos.pais);
     setError(false);
     //al cambiar los state se invoca el useEffect() de HOOKS que llama al metodo que consulta la api
  }
  
  //Cargamos el componenete de Error o de mostrar Clima segun el estado de error del state del Hooks
  let componente = '';
  if(error){
    componente = <Error mensaje = 'Ambos campos son obligatorios'/>
  }else if(resultApi.cod === '404'){
     //esta opcion es para cuando la ciudad no corresponde al pais
    componente = <Error mensaje = 'La ciudad no existe en ese  país'/>
  }else{
    componente = <Clima resultado = {resultApi}/>
  }

  return (
    <div className="App">

      <Header
        titulo = "Clima React Hooks"
      />
      
      <div className="contenedor-form"> 
         <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formulario
                datosConsulta={datosConsulta}
               />
            </div>

            <div className="col s12 m6">
              {componente}
            </div>
          </div>
        </div>    
      </div>

    </div>
  );
}

export default App;
