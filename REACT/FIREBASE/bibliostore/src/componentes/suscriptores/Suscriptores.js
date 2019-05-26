import React from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect} from 'react-redux-firebase';

import Spinner from '../layout/Spinner'; //Spinner de  Spinkit.com

const Suscriptores = (props) => {
    if(!props.suscriptores)return  <Spinner /> //mientras no se llenen las props se muestra esto, cuans se llenan retorna bien lo de abajo
    const { suscriptores, firestore } = props; //extraemos los suscriptores de las props para el map y firestore para ver que viene

 //   console.log(firestore)//podremos ver todas la funciones que se le pueden pasar a firebase, ejemplo: delete, add, get, update..
    //Los funciones que nos otorga firestore retornan un promise entonces podemos usar el .then ejemplo para mostrar un msj de eliminacion ok usando un arrow funtion dentro del then
    //Eliminar suscriptores, directamente lo hacemos sobre firebase, sin action no n¡reducers
    const eleiminarSuscriptor = id => {
       firestore.delete({
           collection: 'suscriptores',
           doc: id
       })
    }

    return (  
        <div className="row">
            <div className="col-md-12 mb-4">
                <Link to="suscriptores/nuevo" className="btn btn-primary">
                  <i className="fas fa-plus"></i> {" "}
                    Nuevo Suscriptor
                </Link>
            </div>
            <div className="col-md-8">
                <h2>
                    <i className="fas fa-users"></i> Suscriptores
                </h2>
            </div>

            <table className="table table-striped mt-4">
                 <thead className="text-light bg-primary">
                     <tr>
                         <th>Nombre</th>
                         <th>Carrera</th>
                         <th>Acciones</th>
                     </tr>
                 </thead>

                 <tbody>
                      {suscriptores.map(suscriptor => (
                          <tr key={suscriptor.id}>
                             <td>{suscriptor.nombre} {suscriptor.apellido}</td>
                             <td>{suscriptor.carrera}</td>
                             <td>
                                 <Link to={`/suscriptores/mostrar/${suscriptor.id}`} className="btn btn-success btn-block">
                                    <i className="fas fa-angle-double-right"></i> {" "} 
                                    Más Información
                                 </Link>

                                 <button type="button" className="btn btn-danger btn-block" onClick={ () => eleiminarSuscriptor(suscriptor.id) }>
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
    firestoreConnect([{collection: 'suscriptores'}]), //esta es la consulta a firestore
    connect((state, props) => ({
        suscriptores: state.firestore.ordered.suscriptores //queda la coleccion consultada en las props del componente
    }))
)(Suscriptores);

//ATENCION: QUEDA DISPONIBLE TODO EL STORE Y SU STATE PRINCIPAL EN EL COMPONENTE EN SUS PROPS. Y TENER
//EN CUENTA QUE EL STORE DE REDUX ESTA CONFIGURADO y CONECTADO CON FIREBASE/FIRESTORE, INDICANDOLE LA COLECCION SUSCRIPTORES 
//DEL FIRESTORE QUE QUEREMOS QUE SE CARGUE EL STATE DEL STORE DE REDUX, ENTONCES ESTA COLLECCION DEL
//FIRESTORE QUEDA EN EL STATE PRINCIPAL DEL STORE DE REDUX
//QUE ESTA A SU VES CONECTADA A ESTE COMPONENTE A SUS PROPS
