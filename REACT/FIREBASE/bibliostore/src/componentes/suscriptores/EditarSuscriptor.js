import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect} from 'react-redux-firebase';
import Spinner from '../layout/Spinner'; //Spinners de carga Spinkit.com  

class EditarSuscriptor extends Component {

    //create Refs
    nombreInput=React.createRef();
    apellidoInput=React.createRef();
    carreraInput=React.createRef();
    codigoInput=React.createRef();

    //actualizar libro en firebase/firestore
    editarSuscriptor = e => {
        e.preventDefault();
        const suscritorActualizado = {
            nombre: this.nombreInput.current.value,
            apellido: this.apellidoInput.current.value,
            carrera: this.carreraInput.current.value,
            codigo: this.codigoInput.current.value
        }
        const { firestore, history, suscriptor} = this.props;
         firestore.update({
             collection: 'suscriptores',
             doc: suscriptor.id
         }, suscritorActualizado).then( history.push('/suscriptores'));
       
    }
    
    render() { 
        const { suscriptor } = this.props;

        if(!suscriptor) return (<Spinner />)  //mientras este vacio el suscriptor retorna el Spinner
        //cuando hay datos de suscriptor retorna el form
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
                            <i className="fas fa-user"></i> {' '}
                            Editar Suscriptor
                        </h2>

                        <div className="row justify-content-center">
                            <div className="col-md-8 mt-5">
                                <form onSubmit={this.editarSuscriptor}>
                                    <div className="form-group">
                                        <label>Nombre:</label>
                                        <input required placeholder="Nombre del Suscriptor" type="text" name="nombre"
                                        className="form-control" defaultValue={suscriptor.nombre} ref={this.nombreInput} />
                                    </div>

                                    <div className="form-group">
                                        <label>Apellido:</label>
                                        <input required placeholder="Apellido del Suscriptor" type="text" name="apellido"
                                        className="form-control" defaultValue={suscriptor.apellido} ref={this.apellidoInput} />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label>Carrera:</label>
                                        <input required placeholder="Carrera del Suscriptor" type="text" name="carrera"
                                        className="form-control" defaultValue={suscriptor.carrera} ref={this.carreraInput} />
                                    </div>

                                    <div className="form-group">
                                        <label>Codigo:</label>
                                        <input required placeholder="Codigo del Suscriptor" type="text" name="codigo"
                                        className="form-control" defaultValue={suscriptor.codigo} ref={this.codigoInput}/>
                                    </div>
                                        
                                    <input type="submit" className="btn btn-success"  value="Confirmar Cambios"/>
                                </form>
                            </div>
                        </div>
                 </div>

          </div>
         );
    }
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
    connect(({firestore: { ordered }}, props) => ({   //la consulta que seria el suscriptor queda en las props de componente bajo el nomnbre de suscriptor
           suscriptor: ordered.suscriptor && ordered.suscriptor[0]
    }))
)(EditarSuscriptor);
//Esta es la forma de hacer una consulta a una coleccion de firestore, consulta por id y dejarlo disponible en nuestro componente