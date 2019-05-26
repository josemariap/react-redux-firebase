import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firestoreConnect} from 'react-redux-firebase';

class NuevoSuscriptor extends Component {
    state = { 
        nombre: '',
        apellido: '',
        carrera: '',
        codigo: ''
     }

   //Mapeamos los values de los inputs al state con el evento onChange
   leerDato = e => {   
      this.setState({
        [e.target.name]: e.target.value
      })
     }
   
   //Agregar suscriptor a firestore/firebase
   agregarSuscriptor = e => {
        e.preventDefault()
        const nuevoSuscriptor = this.state;//Copio el state completo
        console.log(nuevoSuscriptor)
        
        const { firestore, history } = this.props;
        //Agregar a firestore, devuelve una promesa
        firestore.add({
           collection: 'suscriptores'
        }, nuevoSuscriptor).then(() => history.push('/suscriptores') )//redireccionamos
     }

    render() { 
        return ( 
           <div className="row">
             <div className="col-12 mb-4">
                <Link to={'/suscriptores'} className="btn btn-secondary">
                  <i className="fas fa-arrow-circle-left"></i> {" "}
                  Volver al Listado
                </Link>
             </div>
             <div className="col-12">
                <h2>
                    <i className="fas fa-user-plus"></i> {" "}
                    Nuevo Suscriptor
                </h2>

                <div className="row justify-content-center">
                   <div className="col-md-8 mt-5">
                        <form onSubmit={this.agregarSuscriptor}>
                            <div className="form-group">
                              <label>Nombre:</label>
                              <input required placeholder="Nombre del Suscriptor" type="text" name="nombre"
                               className="form-control" onChange={this.leerDato} />
                            </div>

                            <div className="form-group">
                              <label>Apellido:</label>
                              <input required placeholder="Apellido del Suscriptor" type="text" name="apellido"
                               className="form-control" onChange={this.leerDato} />
                            </div>
                            
                            <div className="form-group">
                              <label>Carrera:</label>
                              <input required placeholder="Carrera del Suscriptor" type="text" name="carrera"
                               className="form-control" onChange={this.leerDato}  />
                            </div>

                            <div className="form-group">
                              <label>Codigo:</label>
                              <input required placeholder="Codigo del Suscriptor" type="text" name="codigo"
                               className="form-control" onChange={this.leerDato} />
                            </div>
                             
                            <input type="submit" className="btn btn-success"  value="Agregar Suscriptor"/>
                        </form>
                   </div>
                </div>
             </div>
 
           </div>
         );
    }
}

//Para agregar documentos a firestore solo se necesita este firestoreConnect, lleva todo el otro codigo solo cuando hacemos consultas
export default firestoreConnect()(NuevoSuscriptor);//Con esto tenemos acceso a las funciones de firestore en las props