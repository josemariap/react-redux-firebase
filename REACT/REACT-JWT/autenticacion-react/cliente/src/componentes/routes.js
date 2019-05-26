import React from 'react';
import { Route, Router } from 'react-router-dom';//Router suplanta al Swtich y BrowserRouter
/* Link udemy de configuracion: https://www.udemy.com/react-de-principiante-a-experto-creando-mas-de-10-aplicaciones/learn/v4/t/lecture/12018018?start=15  */
//Auth0
//Eliminamos el import de App.js y Home.js ya que no se usaran
import Callback from './Callback/Callback';
import Auth from '../Auth/Auth'; //acomodamos el nivel del import
import history from '../history';//acomodamos el nivel del import

//Agregamos los componentes propios
import Navegacion from './Navegacion';
import SingleProducto from './SingleProducto';
import Productos from './Productos';
import Contacto from './Contacto';
import Nosotros from './Nosotros';
import Header from './Header';


const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div className="contenedor">

          <Header />
          
          <Navegacion 
            auth={auth}  // con auth podemos cerrar sesion desde la nevegacion y tambien iniciar sesion
          />

          <Route exact path="/" render={(props) => (
                <Productos         
                  auth={auth} {...props}  //pasando esta props auth definimos que secciones requiere logeo del usuario para accder
                />
            )}
          />
 
          <Route exact path="/nosotros" component={Nosotros} />

          <Route exact path="/contacto" render={(props) => (
                <Contacto
                   auth={auth} {...props} //pasando esta props auth definimos que secciones requiere logeo del usuario para accder, el contenido se muestra dependiendo del true del isAunthenticated()
                />
             )}
          />

          <Route exact path="/productos" render={(props) => (
                <Productos
                   auth={auth} {...props} //pasando esta props auth definimos que secciones requiere logeo del usuario para accder
                />
             )}
          />

          <Route exact path="/producto/:productoId" render={(props) => {
                 console.log(props)  //para ver donde viene el parámetro id, en props vienen los parametros
                 let idProducto = props.location.pathname.replace('/producto/',  '') //como viene todo el path con el id, solo dejo el id y quito la ruta
                 return(
                    <SingleProducto
                       producto  = {this.state.productos[idProducto]}
                       auth={auth} {...props}
                    />
                  ) }} 
          />

          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
        </div>
      </Router>
  );
}
