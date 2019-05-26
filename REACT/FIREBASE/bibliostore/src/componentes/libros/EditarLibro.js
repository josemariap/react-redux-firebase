import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect} from 'react-redux-firebase';
import Spinner from '../layout/Spinner'; //Spinners de carga Spinkit.com 

class EditarLibro extends Component {

    //create Refs
    tituloInput=React.createRef();
    editorialInput=React.createRef();
    isbnInput=React.createRef();
    existenciaInput=React.createRef();

    //actualizar libro en firebase/firestore
    actualizarLibro = e => {
        e.preventDefault();
        const libroActualizado = {
            titulo: this.tituloInput.current.value,
            editorial: this.editorialInput.current.value,
            ISBN: this.isbnInput.current.value,
            existencia: this.existenciaInput.current.value
        }
        const { firestore, history, libro} = this.props;
         firestore.update({
             collection: 'libros',
             doc: libro.id
         },  libroActualizado).then( history.push('/'));    
    }
  
    render() { 
        const { libro } = this.props;

        if(!libro) return (<Spinner />)  //mientras este vacio el libro retorna el Spinner
        //cuando hay datos de suscriptor retorna el form

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
                            Editar Libro
                        </h2>

                        <div className="row justify-content-center">
                            <div className="col-md-8 mt-5">
                                <form onSubmit={this.actualizarLibro}>
                                        <div className="form-group">
                                            <label>Título: </label>
                                            <input type="text" className="form-control" name="titulo" ref={this.tituloInput}
                                            required placeholder="Nombre de Libro" defaultValue={libro.titulo}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Editorial: </label>
                                            <input type="text" className="form-control" name="editorial" ref={this.editorialInput}
                                            required placeholder="Editorial de Libro" defaultValue={libro.editorial}/>
                                        </div>
                                        <div className="form-group">
                                            <label>ISBN: </label>
                                            <input type="text" className="form-control" name="ISBN" ref={this.isbnInput}
                                            required placeholder="ISBN de Libro" defaultValue={libro.ISBN}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Existencia: </label>
                                            <input type="number" min="0" className="form-control" name="existencia" ref={this.existenciaInput}
                                            required placeholder="Cantidad Existente" defaultValue={libro.existencia}/>
                                        </div>

                                        <input type="submit" Value="Confirmar cambios" className="btn btn-success"/>
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
    connect(({firestore: { ordered }}, props) => ({   //la consulta que seria el libro queda en las props de componente bajo el nomnbre de libro
           libro: ordered.libro && ordered.libro[0]
    }))
)(EditarLibro);
//Esta es la forma de hacer una consulta a una coleccion de firestore, consulta por id y dejarlo disponible en nuestro componente