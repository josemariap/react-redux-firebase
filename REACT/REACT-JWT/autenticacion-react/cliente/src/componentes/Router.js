import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';   

import Navegacion from './Navegacion';  //Se utiliza dentro de BrowserRouter por los Link to
import SingleProducto from './SingleProducto';
import Productos from './Productos';
import Contacto from './Contacto';
import Nosotros from './Nosotros';
import Header from './Header';
import Err from './Err';

import infoProductos from '../datosMock/datos.json';

class Router extends Component {
    state = {
        productos: [],
        terminoBusqueda: ''
    }

    componentWillMount(){
        this.setState({
            productos: infoProductos
        })
    }

    busquedaProducto = (busqueda) => {
       if(busqueda.length > 3){   //mientras se escribe en el input de busqueda, si es < o = a tres letras se limpia el state
          this.setState({
              terminoBusqueda: busqueda
           }
          )
       }else{
          this.setState({
                terminoBusqueda: ''
            }
           )            

        }
    }
    
    render() { 

        let productos = [...this.state.productos];//hacemos una copia del array de productos del state
        let busqueda = this.state.terminoBusqueda;//termino de busqueda del buscador input
        let resultado;
        if(busqueda !== ''){
           resultado = productos.filter(producto => (
               //toLowerCase para ignorar may y min, para el filtado
               producto.nombre.toLowerCase().indexOf(busqueda.toLowerCase()) !== -1
           ))
        }else{
           resultado = this.state.productos;
        }
        
        return (
            <BrowserRouter>
                <div className="contenedor">
                    <Header />

                    <Navegacion />

                    <Switch>
                        <Route exact path="/" render={() => (
                            <Productos 
                                productos = {resultado}
                                busquedaProducto = {this.busquedaProducto}
                            />
                        )} />

                        <Route exact path="/nosotros" component={Nosotros} />

                        <Route exact path="/productos" render={() => (
                            <Productos
                               productos = {resultado}
                               busquedaProducto = {this.busquedaProducto}
                            />
                          )
                         } />

                        <Route exact path="/producto/:productoId" render={(props) => {
                            console.log(props)  //para ver donde viene el parámetro id, en props vienen los parametros
                            let idProducto = props.location.pathname.replace('/producto/',  '') //como viene todo el path con el id, solo dejo el id y quito la ruta
                            return(
                                <SingleProducto
                                   producto  = {this.state.productos[idProducto]}
                                />
                            )
                         }} />

                        <Route exact path="/contacto" component={Contacto} />

                        <Route component={Err} />
                    </Switch>
                </div>
            </BrowserRouter>
            
          );
    }
}
 
export default Router ;