import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect} from 'react-redux-firebase';
import Spinner from '../layout/Spinner';
import FichaSuscriptor from '../suscriptores/FichaSuscriptor';

//Redux action propios// esto es porque quiero que el usuario buscado para el prestamo quede en el state principal de redux y en las props de este componente
import { buscarUsuario } from '../../actions/buscarUsuarioActions'; //el action hay que agregarlo al connect para que quede en las props

class PrestamoLibro extends Component {
    state = {
        busqueda: '',
        noResultado: false
    }

    leerDato = e => {
       this.setState({
           busqueda: e.target.value
       })
    }

    buscarAlumno = e => {
       e.preventDefault();
       const { busqueda } = this.state;
       const { firestore, buscarUsuario } = this.props; //buscarUsuario es el action que quedo conectado en las props
      
       //hacer la consulta a firestore de forma manual
       const coleccion = firestore.collection('suscriptores');
       const consulta = coleccion.where("codigo", "==", busqueda).get();//devuelve una promesa 
       //obtenemos el resultado de la query a firestore en la promesa. el resultado tiene mucha info pero el suscriptor esta en docs que es un arreglo
       consulta.then(resultado => { 
           if(resultado.empty){
               //no hay resultados
               //diparamos el action sin el usuario para que ya se carge en redux
               buscarUsuario({});//action vacio
               this.setState({
                   noResultado: true
               })        
           }else{
               //hay resultados pero como es solo uno esta en la posicion 0 del arreglo y hay que extraerlos con data()
               //en resultado tenemos el id y el empty y en resultado.data que seria el arreglo con los suscriptores y se extraen cpn data
               console.log(resultado.docs[0].data())
               const datos = resultado.docs[0].data();//extramemos el documento suscriptor del resultado
               //Disparamos el action con el usuario de parametro para que viaje al reducer y se guarde en el state de redux
               buscarUsuario(datos); //action con usuario de parametro
               //docs es un arreglo ya que puede devulver muchos documentos con la query
               this.setState({
                   noResultado: false
               })
           }
       })
    }

    //prestamo consiste en actualizar en firestore, el libro que se presta, que en su arreglo prestados contenga el usuario al que se le presta
    solicitarPrestamo = () => {
        const { usuario } = this.props; //se paso del state de redux a las props del componente
        usuario.fecha_solicitud = new Date().toLocaleDateString(); //format fecha: MM/DD/AAAA agrega un valor mas al json suscriptor con la fecha actual
        //no se pueden mutar los props, tomar una copia y modificar la copia
        let prestados = [];
        prestados = [...this.props.libro.prestados, usuario];//agrego el usuario que le presto el libro al array de prestados del libro
        //Copio el libro
        const libro = {...this.props.libro};
        //borramos el arreglo prestados de la copia del libro,xq el arrglo prestados no tiene el usuario nuevo al que se le va a prestar el libro
        delete libro.prestados;
        //asignamos el arreglo prestados actualizado al libro
        libro.prestados = prestados;//prestados es el arreglo actualizado 

        //obtenemos firestore y history
        const { firestore, history } = this.props;
        //actualizar libro en la bbdd firestore con el suscriptor en el arreglo prestados
        //el parametro libro del update es el que se pasa para que actualice firestore
        firestore.update({
            collection: 'libros',
            doc: libro.id
        }, libro).then(history.push('/'))//despues de actualizar correctamente el libro me redirecciona a libros
    }

  
   
    render() { 
        const { libro } = this.props;

        if(!libro) return (<Spinner />)
         

        //prestamo
        const { usuario } = this.props;//el usuario que se busco esta en las props ya que se paso a traves del action y el reducer de redux
        let fichaAlumno, btnSolicitar;
        if(usuario.nombre){
           fichaAlumno = <FichaSuscriptor alumno = {usuario} />
           btnSolicitar = <button className="btn btn-primary btn-block" onClick={this.solicitarPrestamo}>Solicitar Prestamo </button>
        }else{
           fichaAlumno = null;
           btnSolicitar = null;  //esta boton en su evento onClick realizará el prestamo en firestore/firebase
        }


        //mensaje de error 
        let mensajeResultado = '';
        if(this.state.noResultado){
           mensajeResultado = <div className="alert alert-danger dislplay-4 text-center">No hay resultados para ese código</div>
        }else{
           mensajeResultado = null;
        }

        return (
            <div className="row">
                <div className="col-12 mb-4">
                    <Link to={'/'} className="btn btn-secondary">
                        <i className="fas fa-arrow-circle-left"></i> {" "}
                        Volver al Listado
                    </Link>
                </div>
                <div className="col-12">
                        <h2>
                            <i className="fas fa-book"></i> {' '}
                            Solicitar Prestamo: { libro.titulo }
                        </h2>

                        <div className="row justify-content-center mt-5">
                            <div className="col-md-8">
                               <form onSubmit={this.buscarAlumno}> 
                                    <legend className="color-primary text-center">
                                        Busca Suscriptor por Código
                                    </legend>

                                    <div className="form-group">
                                        <input type="text" name="busqueda" className="form-control" onChange={this.leerDato} required/>
                                    </div>

                                    <input type="submit" value="Buscar Alumno" className="btn btn-success btn-block"/>
                               </form>

                               {/*muestra la ficha del Alumno y el boton solicitar para poder hacerle el prestamo, si es que el alumno existe*/}
                               {fichaAlumno}
                               {btnSolicitar}

                               {/* muestra mensaje de No resultados */}
                               { mensajeResultado }
                            </div>
                            
                        </div>
                </div>
            </div>
            
          );
    }
}
 
export default compose(
    firestoreConnect(props => [
        {
            collection: 'libros',
            storeAs: 'libro',
            doc: props.match.params.id  
        }
    ]), 
    connect(({firestore: { ordered }, usuario}, props) => ({   
           libro: ordered.libro && ordered.libro[0],
           usuario: usuario
    }), { buscarUsuario })  //buscarUsuario es el action para que quede en las props y ser disparado al reducer
)(PrestamoLibro);