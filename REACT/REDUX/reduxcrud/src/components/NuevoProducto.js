import React, { Component } from 'react'
//recordar startiar json-server con los productos
//Redux 
import { connect } from 'react-redux';
import { agregarProducto } from '../actions/productosActions';

class  NuevoProducto extends Component {
    
    //podemos hacer validacion de campos usando el state del compoente formulario, tambien podemos usar ref o onChange para capturar los input
    state = {
        nombre: '',
        precio: '',
        error: false
    }

    nombreProducto = e => {
      this.setState({nombre: e.target.value})
    }

    precioProducto = e => {
        this.setState({precio: e.target.value})
    }

    nuevoProducto = e => {
        e.preventDefault();

        const { nombre, precio } = this.state;
        if(nombre === '' || precio === ''){
            this.setState({error: true})
            return;
        }
        this.setState({error: false})
        
        //json-server le dará un id autom.
        const post = {
            nombre: nombre,
            precio: precio
        }
        this.props.agregarProducto(post); //pasamos el producto al action para que sea agregado por api y al state del reducer
        this.props.history.push('/') //redirecionamos, no hace falta limpiar el form, porque redirecciono
    }
    

    render() {  
        const  { error } = this.state
        return (
           
            <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center">Agregar Nuevo Producto</h2>
                            <form onSubmit={this.nuevoProducto}>
                                <div className="form-group">
                                    <label>Titulo</label>
                                    <input  onChange={this.nombreProducto} type="text" className="form-control" placeholder="Titulo" />
                                </div>
                                <div className="form-group">
                                    <label>Precio del Producto</label>
                                    <input onChange={this.precioProducto} type="text" className="form-control" placeholder="Precio" />
                                </div>
                                <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                            </form>
                            {error ? 
                                   <div className="fron-wight-bold alert alert-danger text-center mt-4">
                                        Todos los campos son obligatorios
                                   </div>
                                   : ''
                            }

                        </div>
                    </div>
                </div>
            </div>

       );
    }
}

//conectamos las actions y el state del store a las props del compoenente
export default connect(null, { agregarProducto }) (NuevoProducto);
