import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect} from 'react-redux-firebase';
//la barra de navegacion solo se mostrara si el user esta autenticado en firebase

class NavBar extends Component {
    state = {
        usuarioAutenticado: false
      }
    
    //esta metodo es similar al componentWillRecibeProps y se ejecutara cuando las props reciban auth del state de redux
    //las props ya tienen auth que se pasaron del state con el connect al final
    //cuando el user esta logueado, auth.uid es true
    static getDerivedStateFromProps(props, state) {
          const { auth } = props;
          if(auth.uid){
              //no es necesario usar el setState, al estar dentro de este metodo especial, ya reconoce el valor a actualizar del state
              return { usuarioAutenticado: true}
          }else{
              return { usuarioAutenticado: false}
          } 
      }

    //cerrar sesion
    cerrarSesion = () => {
        const { firebase } = this.props;
        firebase.logout();
    }

    render() { 
        const { usuarioAutenticado } = this.state;
        //extraer datos del autenticado
        const  { auth } = this.props;
        return ( 

            <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
                <nav className="navbar navbar-light">
                    <span className="navbar-brand mb-0 h1 ">
                        Administrador de Biblioteca
                    </span>
                </nav>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                 data-target="#navbarColor01" aria-controls="navbarColor01"
                 aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                  { usuarioAutenticado ? (
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to={'/suscriptores'} className="nav-link">Suscriptores</Link> 
                            </li>
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link">Libros</Link> 
                            </li>
                        </ul>
                  ): null }

                  { usuarioAutenticado ? (
                     <ul className="navbar-nav ml-auto">
                         <li className="nav-item">
                             <a href="#!" className="nav-link">
                                {auth.email}
                             </a>
                         </li>
                         <li className="nav-item">
                            <button type="button" className="btn btn-danger" onClick={this.cerrarSesion}>
                                Cerrar Sesión
                            </button>
                         </li>
                     </ul>
                  ): null }
                </div>
            </nav>
     );
    }
}
 
export default compose(
    firebaseConnect(), //conectamos auth de firebase del state principal del store de redux con las props del componente, ahora en la props se llamara auth
    connect((state, props) => ({
       auth: state.firebase.auth
    })
    )
)(NavBar);
//Conclusion: el state principal del store(redux), contiene todo lo de firebase y firestore, pero nos interesa que auth que esta
//dentro de firebase quede en las props del componente, con estos connect logramos eso! que auth de firebase quede en las props de NavBar