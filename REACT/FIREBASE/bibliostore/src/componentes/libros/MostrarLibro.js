import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect} from 'react-redux-firebase';
import Spinner from '../layout/Spinner'; //Spinners de carga Spinkit.com  

class MostrarLibro extends Component {
    
    //hay que quitar el id del del suscriptor del array llamado prestados del libro
    devolverLibro = codigo => {
        const { firestore } = this.props;
        const libroActualizado = {...this.props.libro};
        const prestados = libroActualizado.prestados.filter(alumno => alumno.codigo !== codigo )//quitamos el suscriptor
        libroActualizado.prestados = prestados; //actulizamos el libro con el nuevo array filtrado sin ese alumno
        
        //actualizar en firestore
        firestore.update({
            collection: 'libros',
            doc: this.props.libro.id
        }, libroActualizado)
    }
    
    render() { 
        const { libro } = this.props;
        if(!libro)return  <Spinner />

        let btnPrestamo;
        if(libro.existencia - libro.prestados.length > 0){
            btnPrestamo = <Link to={`/libros/prestamo/${libro.id}`} className="btn btn-success my-3">
                            Solicitar Prestamo
                          </Link>
        }else{
            btnPrestamo = null;
        }

        return (
            <div className="row">
                <div className="col-md-6 mb-4">
                    <Link to={'/'} className="btn btn-secondary">
                       <i className="fas fa-arrow-circle-left"></i> {" "}
                       Volver al Listado
                    </Link>
                </div>

                <div className="col-md-6">
                    <Link to={`/libros/editar/${libro.id}`} className="btn btn-primary flow-right">
                      <i className="fas fa-pencil-alt"></i> {" "}
                      EditarLibro
                    </Link>
                </div>

                <hr className="mx-5 w-100"/>

                <div className="col-12">
                    <h2 className="mb-4">
                        { libro.titulo }
                    </h2>
                    <p>
                        <span className="font-weight-bold">ISBN:</span> {" "}
                        { libro.ISBN }
                    </p>
                    <p>
                        <span className="font-weight-bold">Editorial:</span> {" "}
                        { libro.editorial }
                    </p>
                    <p>
                        <span className="font-weight-bold">Existencia:</span> {" "}
                        { libro.existencia }
                    </p>
                    <p>
                        <span className="font-weight-bold">Disponibles:</span> {" "}
                        { libro.existencia - libro.prestados.length }
                    </p>

                    { /* Boton para solicitar prestamo de libro si es que hay disponibles */}
                    {btnPrestamo}

                    {/* Muestra lps suscriptores o alumnos que tienen el libro, sino tiene prestados no muestra nada*/}
                    <h3 className="my-2">Personas que tienen este Libro</h3>
                    {libro.prestados.map(alumno => (
                        <div className="card my-2" key={alumno.codigo}>
                            <h4 className="card-header">{alumno.nombre} {alumno.apellido}</h4>
                            <div className="card-body">
                               <p>
                                   <span className="font-weight-bold">Código:</span> {" "}
                                   { alumno.codigo }
                               </p>
                               <p>
                                   <span className="font-weight-bold">Carrera:</span> {" "}
                                   { alumno.carrera }
                               </p>
                               <p>
                                   <span className="font-weight-bold">Fecha de solicutud:</span> {" "}
                                   { alumno.fecha_solicitud }
                               </p>
                            </div>
                            <div className="card-footer">
                                <button
                                  type="button" 
                                  className="btn btn-success font-weight-bold" 
                                  onClick={() => this.devolverLibro(alumno.codigo)} >
                                  Devolver Libro
                                </button>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
          );
    }
}
 
//conectarnos al firestore y trear un documento por id de la coleccion (seria una consulta por id)
//este componente se ejecuta cuando es llamado por la ruta y contiene en las props el id correspondiente
//para traer un documento o un libro especifico de la coleccion, le pasamos el id del libro en el doc
//cuando se consulta por un unico elemento le damos un alias con storeAs, el alias en este caso es libro y queda en ordered con ese alias
export default compose(
    firestoreConnect(props => [
        {//esta es la consulta a firestore
            collection: 'libros',
            storeAs: 'libro',
            doc: props.match.params.id  //el id es un parametro de ruta en el compoenente en sus props, enviado por el routing
        }
    ]), 
    connect(({firestore: { ordered }}, props) => ({   //la consulta queda que seria el libro en las props de componente bajo el nomnbre de libro
           libro: ordered.libro && ordered.libro[0]
    }))
)(MostrarLibro);
//Esta es la forma de hacer una consulta a una coleccion de firestore, consulta por id y dejarlo disponible en nuestro componente
 
