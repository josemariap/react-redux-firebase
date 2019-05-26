import React from 'react';

import '../css/contacto.css';

class Contacto extends React.Component {
   login = () => {
      this.props.auth.login(); //Este metodo nos llevará al login de Auth0 con goolge o base de datos segun definimos en Auth0
      //luego del login en Autho con google vuelve a este componente se ejecuta el  componentwillMount, vuelve a llamar a la api pero ya con el token
      //esto nos llevara al login y si nos logueamos con una cuanta de google volveremos a nuestra vista pero ya logueados y con un token ok
   }

   render(){
      const {isAuthenticated} = this.props.auth; 
      return ( 
         <React.Fragment>
            {
               isAuthenticated() && (
                  <form>
                     <legend>Formulario de contacto</legend>
                     <div className="input-field">
                        <label>Nombre: </label>
                        <input type="text" placeholder="Tu Nombre" />
                     </div>
                     <div className="input-field">
                        <label>Email: </label>
                        <input type="email" placeholder="Tu Email" />
                     </div>
                     <div className="input-field">
                        <label>Mensaje: </label>
                        <textarea></textarea>
                     </div>
                     <div className="input-field enviar">
                        <input type="submit" value="Enviar" />
                     </div>
                  </form>
               )
            }

            {  //Es un if
                    //Si el metodo isAuthenticated es false lo cambiamos a true y se ejecuta lo que esta en los parentesis como un if
                !isAuthenticated() && (  //esto nos llevara con el click a la pagina de autentificacion de google con Auth0
                   <div className="contenedor-boton">
                        <p>Para enviar un mensaje debes estar logueado</p>
                        <a className="boton" onClick={this.login} >Iniciar Sesión</a>
                   </div>
                     )
            }
         
         </React.Fragment>
      );
    } 
}
 
export default Contacto;