import React, { Component } from 'react'

import { firebaseConnect } from 'react-redux-firebase'; //firebaseConnect es para el login a diferencia, No usar firestoreConnect


class Login extends Component {
    state = {
        email: '',
        password: ''
     }

     leerDato = e => {
        this.setState({
           [e.target.name]: e.target.value
        })
     }

    //inicio de sesion en firebase con usarios guardados con mail y pass
    iniciarSesion = e => {
        e.preventDefault()
        //firebase ya esta disponible en las props
        const { firebase } = this.props;
        const { email, password } = this.state;
        //autenticar al usuario con metodo login de firebase devuelve una promesa
        firebase.login({
            email,
            password
        })
        .then(resultado => console.log("Login ok"))
        .catch(error => console.log("error en el login"))
    }
     
    render() { 
        return ( 
            <div className="row justify-content-center">
                <div className="col-md-5">
                     <div className="card mt-5">
                         <div className="card-body">
                             <h2 className="text-center py-4">
                                   <i className="fas fa-lock"> </i>{ ' ' }
                                   Iniciar Sesión
                             </h2>

                             <form onSubmit={this.iniciarSesion}>
                                 <div className="form-group">
                                     <label>Email: </label>
                                     <input
                                         type="email"
                                         className="form-control"
                                         name="email"
                                         onChange={this.leerDato}
                                         required
                                         value={this.state.email}
                                     />
                                 </div>
                                 <div className="form-group">
                                     <label>Password: </label>
                                     <input
                                         type="password"
                                         className="form-control"
                                         name="password"
                                         onChange={this.leerDato}
                                         required
                                         value={this.state.password}
                                     />
                                 </div>
                                 <input type="submit" className="btn btn-success btn-block"  value="Iniciar Sesión"/>
                             </form>
                         </div>
                     </div>
                </div>
            </div>
         );
    }
}
 
export default firebaseConnect()(Login);