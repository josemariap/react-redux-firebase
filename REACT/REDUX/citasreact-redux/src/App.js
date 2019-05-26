import React, { Component } from 'react';
import Header from './componentes/Header';
import AgregarCitas from './componentes/AgregarCitas';
import ListaCitas from './componentes/ListaCitas';

//REDUX
import { Provider } from 'react-redux'; //este Component envolvera todo el return de nuestros componentes y recibe el store 
import store from './store'; //el store contiene el state de toda la aplicacion que se le pasa al Provider

class App extends Component {
 

  render() {
    return (
      <Provider store = {store}>
          <div className="container">
              <Header
                  titulo = "Administrador de Pacientes de Veterinaria"
              />
              
              <div className="row">
                  <div className="col-md-6">
                      <AgregarCitas
                      />
                  </div>
                  <div className="col-md-6"> 
                      <ListaCitas 
                      />
                  </div>
              </div>
          </div>
      </Provider>
    );
  }
}

export default App;
