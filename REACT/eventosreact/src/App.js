import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Eventos from './componentes/Eventos';

//Este proyecto usa el framework UIKIT para el CSS  https://getuikit.com/
//API de eventos gestion de app y claves / token https://www.eventbrite.com.ar/account-settings/apps   jpico841@gmail.com  pass:luzbelito1982
//uso del api de eventos: https://www.udemy.com/react-de-principiante-a-experto-creando-mas-de-10-aplicaciones/learn/v4/t/lecture/11081012?start=17
//categorias: https://www.eventbriteapi.com/v3/categories/?token=EVF2SH7TLJ7FVS4MZRYE&locale=es_ES
//las categorias son para cargar el combo del form para luego traer los eventos en otro request

class App extends Component {

  state = {
    categorias: [],
    eventos: []
  }

  token = 'EVF2SH7TLJ7FVS4MZRYE';
  ordenar = 'date';

  componentDidMount() {
    this.obtenerCategrotias();
  }
  

  //fetch es una promesa que es asincrona, pero con el async await se espera la respuesta de la promesa antes de seguir, el metodo sigue de forma async
  obtenerCategrotias = async () => {
      let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;
      await fetch(url)
       .then(respuesta => {
         return respuesta.json();
       })
       .then(categorias => {
         this.setState({
           categorias: categorias.categories
         })
        })
  }

  obtenerEvento = async (busqueda) => {
      let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordenar}&token=${this.token}&locale=es_ES`;
      await fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(eventos => {
        this.setState({
          eventos: eventos.events
        })
        console.log(eventos.events);
      })   
  }


  render() {
    return (
      <div className="App">
          <Header
            titulo = "Eventos"
          />
          <div>
            <Formulario
               categorias = {this.state.categorias}
               obtenerEvento = {this.obtenerEvento}
            />
            < Eventos
              eventos = {this.state.eventos}
            />
         </div>
      </div>
    );
  }
}

export default App;
