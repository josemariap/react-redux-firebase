import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Resultado from './componentes/Resultado';

import axios from 'axios';

//Esta app usa AXIOS para llamar a la api   npm install --save-dev axios
//DOC: https://github.com/axios/axios
//API CRYPTOMONEDAS:  https://coinmarketcap.com/api/
//Enlace de efecto de carga spinner: http://tobiasahlin.com/spinkit/  Selecionamos uno y vemos en source el html y css que hay que agregar, el css va en el index.css

class App extends Component {

  state = {
    monedas: [],
    cotizacion: {},
    monedaCotizada: "",
    cargando: false
  }

  async componentDidMount(){
    this.obtenerMonedas();
  }

  obtenerMonedas = async () => {
      const url = `https://api.coinmarketcap.com/v2/ticker/`;
      await axios.get(url)
       .then(response => {
          //console.log(response.data.data);
         this.setState({
           monedas: response.data.data
         })
       })
       .catch(error => {
         console.log(error);
       })
  }

  //cotizar una crypto en base a una moneda
  obtnerValoresCrypto =  async (parametros) => {
    const {moneda, crypto} = parametros;
    const url = `https://api.coinmarketcap.com/v2/ticker/${crypto}/?convert=${moneda}`;
      await axios.get(url)
       .then(response => {
         //console.log(response.data.data);  //Solo agregamos el timeout para que tarde mas en cargar y se puede ver el efecto visual de respuesta de consulta
         this.setState({cargando: true})  //mientras esta el tiempo que tarda la respuesta el cargando esta en true y se muestra la animacion
         setTimeout(() => {
          this.setState({
            cotizacion: response.data.data,
            monedaCotizada: moneda,
            cargando: false
          })
         }, 1000)
       })
       .catch(error => {
         console.log(error);
       })


  }

  render() {

    const cargando = this.state.cargando;
    let resultado;
    if(cargando){
      //spinner: http://tobiasahlin.com/spinkit/
      resultado = <div class="spinner">
                    <div class="dot1"></div>
                    <div class="dot2"></div>
                  </div>
    }else{
       resultado = <Resultado
                     cotizacion = {this.state.cotizacion}
                     monedaCotizada = {this.state.monedaCotizada}
                   />
    }

    return (
      <div className="container">
         <Header
           titulo = "Cotiza Cryptomonedas al Instante"
         />
         <div className="row justify-content-center">
            <div className="col-md-6 bg-light pb-4 contenido-principal">
                <Formulario
                  monedas = {this.state.monedas}
                  obtnerValoresCrypto = {this.obtnerValoresCrypto}
                />
                {resultado}
            </div>
         </div>
      </div>
    );
  }
}

export default App;
