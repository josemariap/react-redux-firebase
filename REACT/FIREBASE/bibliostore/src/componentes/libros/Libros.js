import React from 'react'
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect} from 'react-redux-firebase';

import Spinner from '../layout/Spinner'; //Spinner de  Spinkit.com

const Libros = (props) => {
    if(!props.libros)return  <Spinner /> //mientras no se llenen las props se muestra esto, cuans se llenan retorna bien lo de abajo
    const { libros, firestore } = props;

    const eleiminarLibro = id => {
        firestore.delete({
            collection: 'libros',
            doc: id
        })
     }

    return (  
    <div className="row">
        <div className="col-md-12 mb-4">
            <Link to="libros/nuevo" className="btn btn-primary">
              <i className="fas fa-plus"></i> {" "}
                Nuevo Libro
            </Link>
        </div>
        <div className="col-md-8">
            <h2>
                <i className="fas fa-book"></i> Libros
            </h2>
        </div>

        <table className="table table-striped mt-4">
             <thead className="text-light bg-primary">
                 <tr>
                     <th>Titulo</th>
                     <th>ISBN</th>
                     <th>Editorial</th>
                     <th>Existencia</th>
                     <th>Disponibles</th>
                     <th>Acciones</th>
                 </tr>
             </thead>

             <tbody>
                    {libros.map(libro=> (
                          <tr key={libro.id}>
                             <td>{libro.titulo}</td>
                             <td>{libro.ISBN}</td>
                             <td>{libro.editorial}</td>
                             <td>{libro.existencia}</td>
                             <td>{libro.existencia - libro.prestados.length}</td>
                             <td>
                                 <Link to={`/libros/mostrar/${libro.id}`} className="btn btn-success btn-block">
                                    <i className="fas fa-angle-double-right"></i> {" "} 
                                    Más Información
                                 </Link>

                                 <button type="button" className="btn btn-danger btn-block" onClick={ () => eleiminarLibro(libro.id)} >
                                    <i className="fas fa-trash"></i> {" "}
                                     Eliminar
                                 </button>
                             </td>
                          </tr>
                    ))}
             
             </tbody>
        </table>
    </div>
    );
}
 
// En el state principal del store de redux queda con la collection suscriptores del firestore (quedan mucha otra info, buscar la coleccion en el arbol json)
// Las props de este componente queda con la coleccion suscriptores del firestore de fierebase
export default compose(
    firestoreConnect([{collection: 'libros'}]), //esta es la consulta a firestore
    connect((state, props) => ({
        libros: state.firestore.ordered.libros //queda la coleccion consultada que esta en el state, en las props del componente bajo el nombre de libros
    }))
)(Libros);

//ATENCION: QUEDA DISPONIBLE TODO EL STORE Y SU STATE PRINCIPAL EN EL COMPONENTE EN SUS PROPS. Y TENER
//EN CUENTA QUE EL STORE DE REDUX ESTA CONFIGURADO y CONECTADO CON FIREBASE/FIRESTORE, INDICANDOLE LA COLECCION SUSCRIPTORES 
//DEL FIRESTORE QUE QUEREMOS QUE SE CARGUE EL STATE DEL STORE DE REDUX, ENTONCES ESTA COLLECCION DEL
//FIRESTORE QUEDA EN EL STATE PRINCIPAL DEL STORE DE REDUX
//QUE ESTA A SU VES CONECTADA A ESTE COMPONENTE A SUS PROPS