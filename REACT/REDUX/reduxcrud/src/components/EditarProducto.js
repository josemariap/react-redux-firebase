import React, { Component } from 'react'
//recordar startiar json-server con los productos
//Redux 
import { connect } from 'react-redux';
import { mostrarProducto, editarProducto } from '../actions/productosActions';

class  EditarProducto extends Component {
    
    //podemos hacer validacion de campos usando el state del compoente formulario, tambien podemos usar ref o onChange para capturar los input
    state = {
        nombre: '',
        precio: '',
        error: false
    }

    componentDidMount(){
        const id = this.props.match.params.id //la ruta que esta escuchando y me rendariza este componente me envia el id en la ruta, y lo accedo de esa forma
        this.props.mostrarProducto(id);
    }
    
    //se ejecuta cuando el componente recibe props, en este caso las recibio del mapeo del connect
    componentWillReceiveProps(nextProps, nextState){
      console.log(nextProps.producto) //estas serian las nuevas props que recibio el compenentey si es que tenia alguna de antes tambien( no es este el caso )
      const { nombre, precio } = nextProps.producto;
      //las agrego al state para que funcione la validacion del form
      this.setState({
          nombre,
          precio
      })
    }

    com

    nombreProducto = e => {
      this.setState({nombre: e.target.value})
    }

    precioProducto = e => {
        this.setState({precio: e.target.value})
    }

    actualizarProducto = e => {
        e.preventDefault();
        const { nombre, precio } = this.state;
        if(nombre === '' || precio === ''){
            this.setState({error: true})
            return;
        }
        this.setState({error: false})
        
        //json-server le dará un id autom. cuando lo agregue a productos.json
        const { id } = this.props.match.params;
        const post = {
            id: id,
            nombre: nombre,
            precio: precio
        }
        
        //disparamos el action para editar el producto
        this.props.editarProducto(post);

       //this.props.agregarProducto(post); 
        this.props.history.push('/') //redirecionamos, no hace falta limpiar el form, porque redirecciono
    }
    

    render() {  
        const  { nombre, precio, error } = this.state
        return (
           
            <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center">Editar Producto</h2>
                            <form onSubmit={this.actualizarProducto}>
                                <div className="form-group">
                                    <label>Titulo</label>
                                    <input defaultValue={nombre} onChange={this.nombreProducto} type="text" className="form-control" placeholder="Titulo" />
                                </div>
                                <div className="form-group">
                                    <label>Precio del Producto</label>
                                    <input defaultValue={precio} onChange={this.precioProducto} type="text" className="form-control" placeholder="Precio" />
                                </div>
                                <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Guardar Cambios</button>
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

//el producto será mapeado a this.props.producto del componente
const mapStateToProps = (state) => ({
    producto: state.productos.producto
})

//conectamos la action mostrarProducto y el state del store a las props del compoenente
export default connect(mapStateToProps, { mostrarProducto, editarProducto }) (EditarProducto);
