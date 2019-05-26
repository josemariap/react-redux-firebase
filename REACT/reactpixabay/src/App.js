import React, { Component } from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';
import '../src/css/spinner.css'
//SPINNERS: http://tobiasahlin.com/spinkit/

//Usamos la API de Pixabay https://pixabay.com/api/docs/
//https://pixabay.com/api/?key=11785630-af6571adf2332398351bee9b9&q=comidas&image_type=photo
//ESTE PROYECTO USA PAGINATION

class App extends Component {

  state = {
    termino: '',
    imagenes: [],
    pagina: '',
    cargando: false
  }

   consultarApi = async () => {
    const termino  = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=11785630-af6571adf2332398351bee9b9&q=${termino}&per_page=30&page=${pagina}`;
    await fetch(url)
       .then(res => {      
            this.setState({cargando: true})
            return res.json()
       })
       .then(resultado => {
         //el timeOut es solo para probar el spinner de carga
         setTimeout(() => {
           this.setState({
           imagenes: resultado.hits,
           cargando: false
         }
          )
         }, 500)
         
       })
    
  }

  //el state recibe una funcion que invoca despues de que se actualizo el state
  datosBusqueda = (termino) => {
    this.setState({
      termino: termino,
      pagina: 1
    }, () => {
      this.consultarApi();
    })
  }   

  paginaSiguiente  = () => {
      let pagina = this.state.pagina;
      pagina += 1;
      this.setState({
        pagina: pagina
      }, () => {
        this.consultarApi();
        this.scroll();
      })
  }

  paginaAnterior = () => {
    let pagina = this.state.pagina;
    if(pagina === 1) return null;
      pagina -= 1;
      this.setState({
        pagina: pagina
      }, () => {
        this.consultarApi();
        this.scroll();
      })
  }

  scroll = () => {
    const elemento = document.querySelector("#resultado");//Seleccione el div con React
    elemento.scrollIntoView('smooth', 'start');//lo scrolleo al princicio
  }
  
  render() {
    const cargando = this.state.cargando;
    let resultado;
    if(cargando){
       //si cargando esta en true se muestra el spinner de espera
       resultado = <div className="spinner">
                    <div className="double-bounce1"></div>
                    <div className="double-bounce2"></div>
                   </div>
    }else{
       //si cargando esta en false se muestra componentes de resultados de imagenes
       resultado =  <Resultado
                      imagenes = {this.state.imagenes}
                      paginaSiguiente = {this.paginaSiguiente}
                      paginaAnterior = {this.paginaAnterior}
                    />
    }

    return (
      <div className="app container">
        <div className="jumbotron">
           <p className="lead text-center">Buscador de Imágenes</p>
           <Buscador
             datosBusqueda = {this.datosBusqueda}
           />
        </div>
        <div className="row justify-content-center">
           {resultado}
        </div>
      </div>
    );
  }
}

export default App;
