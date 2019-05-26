import React, { Component } from 'react';
import Header from './componentes/Header'
import Formulario from './componentes/Formulario';
import Error from './componentes/Error';
import Clima from './componentes/Clima'

//CON npm run build  SE CREA LA CARPETA BUILD QUE ES LA QUE ESTA LISTA PARA DEPLOYAR EN UN SERVER

class App extends Component {

  state = {
    error: '',
    consulta: {},
    resultado: {}
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.consulta !== this.state.consulta){
      this.consularApi();
    }   
  }

  componentDidMount(){
    this.setState({
      error: false
    })
  }

  consularApi = () => {
    const {ciudad, pais} = this.state.consulta;
    if(!ciudad || !pais) return null;  //sale del metodo

    //consultar a la api weather map usando fetch api
    const appId  = 'b8bddafa4803edaa02a9badfcb365330';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

    //fetch is promise, en la arrow function tenes el response completo, luego vas descomponiendo con el segundo then y tenemos los la data
    fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(datos => {
        console.log(datos)
        this.setState({
          resultado: datos
        })      
      })
      .catch(error => {
        console.log( error)
      })
  }


  datosConsulta = respuesta => {
   if(respuesta.ciudad === '' || respuesta.pais === ''){
        this.setState({
          error: true
        })
   }else{
        this.setState({
          error: false,
          consulta: respuesta  //guarda en el state los parametros
        })     
   }
      
  }

  render() {
    const {error} = this.state;
    let resultado;
    const {cod} = this.state.resultado
    
    if(error){
      resultado = <Error mensaje = "Ambos campos son obligatorios" />
    }else if(cod === '404'){
      resultado = <Error mensaje = "Ciudad no encontrada" />
    }else{ 
      resultado = <Clima resultado = {this.state.resultado} />
    }

    return (
      <div className="App">
        
        <Header
         titulo = "Clima Mundial"
         />

         <Formulario
          datosConsulta = {this.datosConsulta}
         />
         {resultado}
        
          
      </div>
    );
  }
}

export default App;
