import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { firestoreConnect} from 'react-redux-firebase';

class NuevoLibro extends Component {
   state = { 
        titulo: '',
        ISBN:'',
        editorial:'',
        existencia:''
   }
   
   leerDato = e => {
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   //Agregar libro a firestore/firebase
   agregarLibro = e => {
      e.preventDefault()
      const nuevoLibro = this.state;//Copio el state completo qur tiene el libro 
      nuevoLibro.prestados = [];
      console.log(nuevoLibro)
      
      const { firestore, history } = this.props;  //history sirve para redireccionar a otra ruta
      //Agregar a firestore, devuelve una promesa
      firestore.add({
         collection: 'libros'
      }, nuevoLibro).then(() => history.push('/') )//redireccionamos a libros
   }

    render() { 
        return (
             <div className="row">
               <div className="col-12 mb-4">
                  <Link to={"/"} className="btn btn-secondary">
                    <i className="fas fa-arrow-circle-left"></i> {' '}
                    Volver al Listado
                  </Link>
               </div>
               <div className="col-12">
                  <h2>
                      <i className="fas fa-book"></i> {' '}
                      Nuevo Libro
                  </h2>

                  <div className="row justify-content-center">
                      <div className="col-md-8 mt-5">
                         <form onSubmit={this.agregarLibro}>
                             <div className="form-group">
                                <label>Título: </label>
                                <input type="text" className="form-control" name="titulo" onChange={this.leerDato}
                                required placeholder="Nombre de Libro" value={this.state.titulo}/>
                             </div>
                             <div className="form-group">
                                <label>Editorial: </label>
                                <input type="text" className="form-control" name="editorial" onChange={this.leerDato}
                                required placeholder="Editorial de Libro" value={this.state.editorial}/>
                             </div>
                             <div className="form-group">
                                <label>ISBN: </label>
                                <input type="text" className="form-control" name="ISBN" onChange={this.leerDato}
                                required placeholder="ISBN de Libro" value={this.state.ISBN}/>
                             </div>
                             <div className="form-group">
                                <label>Existencia: </label>
                                <input type="number" min="0" className="form-control" name="existencia" onChange={this.leerDato}
                                required placeholder="Cantidad Existente" value={this.state.existencia}/>
                             </div>

                             <input type="submit" value="Agregar Libro" className="btn btn-success"/>

                         </form>
                      </div>
                  </div>

               </div>

             </div>
          );
    }
}

//Para agregar documentos a firestore solo se necesita este firestoreConnect, lleva todo el otro codigo solo cuando hacemos consultas
export default firestoreConnect()(NuevoLibro);//Con esto tenemos acceso a las funciones de firestore en las props