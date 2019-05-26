import React from 'react';
import { NavLink } from 'react-router-dom';
//NavLink nos marca en que pagina de la navegacion estamos parados, usa CSS de navagacion.css
import '../css/navegacion.css';

//BARRA DE NAVEGACION
const Navegacion = () => {
    return ( 
        <nav className="navegacion">
           <NavLink to={'/nosotros'} activeClassName="activo">Nosotros</NavLink>
           <NavLink to={'/productos'} activeClassName="activo">Productos</NavLink>
           <NavLink to={'/contacto'} activeClassName="activo">Contacto</NavLink>
        </nav>
     );
}
 
export default Navegacion;