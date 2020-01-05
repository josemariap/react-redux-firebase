import React, { useState, useEffect } from 'react'; //HOOKS
import Formulario from './components/Buscador';
import ListadoImagenes from './components/ListadoImagenes';

function App() {
  
  const [busqueda, guardarBusqueda] = useState(''); //HOOKS
  const [imagenes, guardarImagenes] = useState([]);

  //para la paginacion
  const [paginaActual, guardarPaginaActual] = useState(1);
  const [totalPaginas, guardarTotalPaginas] = useState(1);

   useEffect(() => {
      const consultarApi = async () => {
          
          if(busqueda === '') return;  

          const imagenesPorPagina = 30;
          const url = `https://pixabay.com/api/?key=11785630-af6571adf2332398351bee9b9&q=${busqueda}&per_page=${imagenesPorPagina}&image_type=photo&page=${paginaActual}`;
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
          console.log(resultado)
          guardarImagenes(resultado.hits); //guardo el arreglo de imagenes en el state de imagenes
       
          //calcular total paginas necesarias para la paginacion y guardandolo en el state totalPaginas
          guardarTotalPaginas( Math.ceil(resultado.totalHits / imagenesPorPagina) );

          //mover scroll al inicio
          const jumbotron = document.querySelector('.jumbotron');
          jumbotron.scrollIntoView({behavior : 'smooth', block : 'end'});//efecto de como scrolea
        }

      consultarApi();

   }, [busqueda, paginaActual]); //se ejecuta el useEffect cuando se modifica el state busqueda o el de paginaActual

   // metodos de paginacion
   const paginaAnterior = () => {
     let nuevaPaginaActual = paginaActual - 1;
     guardarPaginaActual(nuevaPaginaActual); //colocamos en el state
   }

   const paginaSiguiente = () => {
    let nuevaPaginaActual = paginaActual + 1;
    guardarPaginaActual(nuevaPaginaActual); //colocamos en el state
   }

  return (
    <div className="app container">
      <div className="jumbotron">
         <p className="lead text-center">Buscador de Imágenes</p>
  
        <Formulario
          guardarBusqueda={guardarBusqueda}
        />
      </div>

      <div className="row justify-content-center">
        <ListadoImagenes
           imagenes={ imagenes }
        />

        { (paginaActual === 1 ) ? null : <button onClick={paginaAnterior} type="button" className="btn btn-info mr-1">&laquo; Anterior</button>}
        
        { (paginaActual === totalPaginas ) ? null :  <button onClick={paginaSiguiente} type="button" className="btn btn-info">Siguiente &raquo;</button> }
       
      </div>
    </div>
  );
}

export default App;
