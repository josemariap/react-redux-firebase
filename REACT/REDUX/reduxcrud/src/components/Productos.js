import React, { Component } from 'react'
import Producto from './Producto';

//Atencion!! este proyecto levanta un json-server (ver README) con el archivo productos que nos permite editarlo y esta disponible en una uri para su consumo
//Redux
import { connect } from 'react-redux';
import { mostrarProductos } from '../actions/productosActions';

class Productos extends Component {

    //se diparará el action y se cargaran los productos //Atencion: ejecutar json-server --watch productos.json --port 5000 para que esta app tenga donde buscar los productos
    componentDidMount(){
        this.props.mostrarProductos();
    }

    render() { 
        const { productos } = this.props;
        return (  
            <React.Fragment>
                <h2 className="text-center my-5">Listado de Productos</h2>
                <div className="row justify-content-center">
                   <div className="col-md-8">
                     <ul>
                        {productos.map(producto => (
                            <Producto
                              key = {producto.id} 
                              info = {producto}
                            />
                        ))}
                     </ul>
                   </div>
                </div>
            </React.Fragment>
        );
    }
}

//productos quedará conectado a las props de este componente, primero busca en el combineReducer y luego en el productosReducers
const mapStateToProps = (state) => ({
    productos: state.productos.productos
})

//conectamos las actions y el state del store a las props del compoenente
export default connect(mapStateToProps, { mostrarProductos }) (Productos);