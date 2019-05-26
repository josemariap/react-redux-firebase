import React from 'react';
import { NavLink } from 'react-router-dom';
//NavLink nos marca en que pagina de la navegacion estamos parados, usa CSS de navagacion.css
import '../css/navegacion.css';

//BARRA DE NAVEGACION
class  Navegacion extends React.Component {

   cerrarSesion = () => {
      this.props.auth.logout();
   }

   inciarSesion = () => {
      this.props.auth.login();
   }

   render(){
      console.log( this.props.auth.isAuthenticated() )
      const { isAuthenticated } = this.props.auth;

      let resultado;

      if(isAuthenticated()) {
        resultado = <a onClick={this.cerrarSesion}>Cerrar Sesión</a>
      }else{
        resultado = <a onClick={this.inciarSesion}>Iniciar Sesión</a>
      }

      return ( 
       
         <nav className="navegacion">
            <NavLink to={'/nosotros'} activeClassName="activo">Nosotros</NavLink>
            <NavLink to={'/productos'} activeClassName="activo">Productos</NavLink>
            <NavLink to={'/contacto'} activeClassName="activo">Contacto</NavLink>
            {resultado}
         </nav>
       
       );
      }
}
 
export default Navegacion;