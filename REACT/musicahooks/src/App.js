import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import Formulario from './componentes/Formulario';
import Cancion from './componentes/Cancion';
import Informacion from './componentes/Informacion';
//HOOKS con tres states

function App() {
  
  //utilizar useState con tres states
  const [artista, agregarArtista] = useState('');
  const [letra, agregarLetra] = useState([]);
  const [info, agregarInfo] = useState({});

  //metodo para consultar API
  const consultarApi = async busqueda => {
    const {cancion, artista} = busqueda;
    const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
    const resultado = await axios(url);
    agregarArtista(artista);//agrego el artista al state para que lo use dentro del metodo consultarApiInfo()
    agregarLetra(resultado.data.lyrics);//agrego la letra a uno de los state
  }

  //metodo para consultar API de info de música
  const consultarApiInfo = async () => {
    if(artista){  //ATENCION! como se llama a este metedo del useEffect como componentDidMount la api me devolvera datos aunque no tenga parametro artista, entonces solo llamara a la api cuando tengamos el artista del input
      const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;  //api info de bandas de musicales
      const resultado = await axios(url);
      console.log(resultado);//revisar que info guardar en el state
      agregarInfo(resultado.data.artists[0]);//guarda datos del artista en uno de los states, en este caso info
    }
  }

  //ATENCION! se ejecuta useEffect SOLO cuando se actuliza el state artista por eso va como parametro en el arreglo del useEffect
  //PERO tambien se ajecuta como el componentDidMount cuando se carga App, OJO!
  useEffect(
    () => {
       consultarApiInfo();
    }, [artista]
  )

  return(
    <Fragment>
        <Formulario
           consultarApi = {consultarApi}
        />

        <div className="container mt-5">
           <div className="row">
              <div className="col-md-6">
                  <Informacion
                     info = {info}
                  />
              </div>
              <div className="col-md-6">
                  <Cancion
                     letra = {letra}
                  />
              </div>
           </div>
        </div>
        
    </Fragment>
  )
}

export default App;