import React from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect} from 'react-redux-firebase';
import Spinner from '../layout/Spinner'; //Spinners de carga Spinkit.com  

const MostrarSuscriptor = (props) => {
    if(!props.suscriptor)return  <Spinner />
    const {nombre, apellido, carrera, codigo } = props.suscriptor;
    return ( 
         
         <div className="row">
            <div className="col-md-6 mb-4">
              <Link to={'/suscriptores'} className="btn btn-secondary">
                 <i className="fas fa-arrow-circle-left"></i> {" "}
                 Volver al Listado
              </Link>
            </div>

            <div className="col-md-6">
              <Link to={`/suscriptores/editar/${props.suscriptor.id}`} className="btn btn-primary flow-right">
                <i className="fas fa-pencil-alt"></i> {" "}
                EditarSuscriptor
              </Link>

            </div>

            <hr className="mx-5 w-100"/>

            <div className="col-12">
               <h2 className="mb-4">
                   {nombre} {apellido}
               </h2>
               <p>
                  <span className="font-weight-bold">Carrera:</span> {" "}
                  {carrera} 
               </p>
               <p>
                  <span className="font-weight-bold">Código:</span> {" "}
                  {codigo} 
               </p>
            </div>

         </div>
     );
}
 
//conectarnos al firestore y trear un documento por id de la coleccion (seria una consulta por id)
//este componente se ejecuta cuando es llamado por la ruta y contiene en las props el id correspondiente
//para traer un documento o un suscriptor especifico de la coleccion, le pasamos el id del suscriptor en el doc
//cuando se consulta por un unico elemento le damos un alias con storeAs, el alias en este caso es suscriptor y queda en ordered con ese alias
export default compose(
    firestoreConnect(props => [
        {//esta es la consulta a firestore
            collection: 'suscriptores',
            storeAs: 'suscriptor',
            doc: props.match.params.id  //el id es un parametro de ruta en el compoenente en sus props, enviado por el routing
        }
    ]), 
    connect(({firestore: { ordered }}, props) => ({   //la consulta queda que seria el suscriptor en las props de componente bajo el nomnbre de suscriptor
           suscriptor: ordered.suscriptor && ordered.suscriptor[0]
    }))
)(MostrarSuscriptor);
//Esta es la forma de hacer una consulta a una coleccion de firestore, consulta por id y dejarlo disponible en nuestro componente