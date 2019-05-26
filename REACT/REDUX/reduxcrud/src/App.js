import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
//Redux
import { Provider } from 'react-redux';
import store from './store';

import Header from './components/Header';
import Productos from './components/Productos';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';

class App extends Component {
  
  render() { 
    return ( 
      <Provider store={store} >
          <BrowserRouter>
                <React.Fragment>
                  
                      <Header />

                      <div className="container">  
                          <Switch>
                              <Route exact path='/' component={Productos} />
                              <Route exact path='/productos/nuevo' component={NuevoProducto} />
                              <Route exact path='/productos/editar/:id' component={EditarProducto} />
                          </Switch>
                      </div> 

                </React.Fragment> 
          </BrowserRouter>
      </Provider>
     );
  }
}
 
export default App;


