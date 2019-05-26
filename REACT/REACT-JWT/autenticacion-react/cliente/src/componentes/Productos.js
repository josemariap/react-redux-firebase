import React, { Component } from 'react';
import Producto from './Producto';
import '../css/productos.css'; //estilos CSS para component productos y producto
import Buscador from './Buscador';
import axios from 'axios'; 


//ATENCION este componente recibe por props desde routes a "auth" que tiene metodos y me dice si el user esta autenticado con true
//veremos si esta autenticado con console.log( this.props.auth.isAuthenticated() )
class Productos extends Component {
    state = {
      productos: [],
      terminoBusqueda: ''
    }

    componentWillMount(){
      this.queryAPI();
    }

    queryAPI = () => {
      console.log( this.props.auth.isAuthenticated() )  //logueados devuelve true sino es false
      console.log( this.props.auth.getAccessToken() )   //logueados devuelve el token sino es undefined, y este token es que usaremos en el servidor express para acceder a la api
      //con el token ya consumiremos nuestra api express que nos pedia el access token para acceder a los recursos
      //el accessToken se coloca en el header de nuestra peticion a la api express
      const { getAccessToken } = this.props.auth;//extrameos la funcion que tiene el token
      const headers = { 'Authorization': `Bearer ${getAccessToken()}` };
      const url = 'http://localhost:5000/productos';
      return axios.get(url, {headers}).then(respuesta => 
        this.setState({ productos: respuesta.data }) );//seteamos nuestro state con la data de la respuesta de la api
    }

    busquedaProducto = (busqueda) => {
      if(busqueda.length > 3){ //mientras se escribe en el input de busqueda, si es < o = a tres letras se limpia el state      
        //copia de state
        let productos = [...this.state.productos]; 
        let resultado;
         //filtrar por termino de busqueda
        resultado = productos.filter(producto => (
        //toLowerCase para ignorar may y min, para el filtado
        producto.nombre.toLowerCase().indexOf(busqueda.toLowerCase()) !== -1
        ))
        
        this.setState({
             terminoBusqueda: busqueda,
             productos: resultado   //atencion1: despues de la primera busqueda el state quedara solo con los productos filtrados para la siguiente busqueda
          })
      }else{
         this.setState({
               terminoBusqueda: ''
           })  
        
         this.queryAPI(); //atencion2: volvemos a cargar el state con todos los productos para que esten todos para la siguiente busqueda     
       }
       
    }

    login = () => {
       this.props.auth.login(); //Este metodo nos llevará al login de Auth0 con goolge o base de datos segun definimos en Auth0
       //luego del login en Autho con google vuelve a este componente se ejecuta el  componentwillMount, vuelve a llamar a la api pero ya con el token
       //esto nos llevara al login y si nos logueamos con una cuanta de google volveremos a nuestra vista pero ya logueados y con un token ok
      }


    render() { 
        const { isAuthenticated } = this.props.auth; 

        return (
             <div className="productos">
                     

                {   //Esto solo se ejecuta cuando estamos logueados o sea true
                    isAuthenticated() && (
                     <React.Fragment>
                        <h2>Nuestros productos</h2>
                        <Buscador
                          busqueda = {this.busquedaProducto}
                        />

                        <ul className="lista-productos">
                            {Object.keys(this.state.productos).map(key => (
                                <Producto 
                                  key = {key}
                                  informacion = {this.state.productos[key]}
                                />
                            ))}
                        </ul>
                     </React.Fragment>
                    )
                } 

                {  //Es un if
                    //Si el metodo isAuthenticated es false lo cambiamos a true y se ejecuta lo que esta en los parentesis como un if
                     !isAuthenticated() && (  //esto nos llevara con el click a la pagina de autentificacion de google con Auth0
                      <div className="contenedor-boton">
                        <p>Para ver el contenido debes estar logueado</p>
                        <a className="boton" onClick={this.login} >Iniciar Sesión</a>
                      </div>
                     )
                }
             </div>
          );
    }
}
 
export default Productos;
