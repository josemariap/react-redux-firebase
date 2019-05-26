import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';

import Libros from './componentes/libros/Libros';
import MostrarLibro from './componentes/libros/MostrarLibro';
import NuevoLibro from './componentes/libros//NuevoLibro';
import EditarLibro from './componentes/libros/EditarLibro';
import PrestamoLibro from './componentes/libros/PrestamoLibro';

import Suscriptores from './componentes/suscriptores/Suscriptores';
import EditarSuscriptor from './componentes/suscriptores/EditarSuscriptor';
import MostrarSuscriptor from './componentes/suscriptores//MostrarSuscriptor';
import NuevoSuscriptor from './componentes/suscriptores/NuevoSuscriptor';

import NavBar from './componentes/layout/NavBar';

import Login from './componentes/auth/Login';

//importamos los metodos para proteger las rutas, ver README 
import { UserIsAuthenticated, UserIsNotAuthenticated } from './helpers/auth';

function App() {
  return (
     <Provider store = {store} >
         <BrowserRouter>
            <NavBar />
            <div className="container">
                  <Switch>

                     <Route exact path="/" component={ UserIsAuthenticated(Libros) } />
                     <Route exact path="/libros/nuevo" component={ UserIsAuthenticated(NuevoLibro) } />
                     <Route exact path="/libros/editar/:id" component={ UserIsAuthenticated(EditarLibro) } />
                     <Route exact path="/libros/prestamo/:id" component={ UserIsAuthenticated(PrestamoLibro) } />
                     <Route exact path="/libros/mostrar/:id" component={ UserIsAuthenticated(MostrarLibro) } />

                     <Route exact path="/suscriptores" component={ UserIsAuthenticated(Suscriptores) } />
                     <Route exact path="/suscriptores/nuevo" component={ UserIsAuthenticated(NuevoSuscriptor) } />
                     <Route exact path="/suscriptores/mostrar/:id" component={ UserIsAuthenticated(MostrarSuscriptor) } />
                     <Route exact path="/suscriptores/editar/:id" component={ UserIsAuthenticated(EditarSuscriptor) } />

                     <Route exact path="/login" component={ UserIsNotAuthenticated(Login) } />

                  </Switch>
            </div>
         </BrowserRouter>
     </Provider>
  );
}

export default App;
