import React, { Component } from 'react';
import Header from './componentes/Header'
import Noticias from './componentes/Noticias';
import Formulario from './componentes/Formulario';
//API KEY NOTICIAS: 2910dd47c07c4e048cad8ff2bb431e55

class App extends Component {

  state = {
    noticias: []
  }

  componentDidMount(){
    this.consultarNoticias();
  }


  consultarNoticias = (categoria = 'general') => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=2910dd47c07c4e048cad8ff2bb431e55`

    fetch(url)
    .then(response => {
       return response.json();
    })
    .then(noticias => {
       this.setState({
           noticias:  noticias.articles
        }
       )
    })

  }


  render() {
    return (
      <div className="contenedor-app">
         <Header 
           titulo = "Noticias"
         />

        <div className="container white contenedor-noticias">
          <Formulario 
           consultarNoticias = {this.consultarNoticias}
          />
          <Noticias 
            noticias = {this.state.noticias}
          />
        </div>
          
      </div>
    );
  }
}

export default App;
