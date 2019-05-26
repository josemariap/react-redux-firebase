import React, { Component } from 'react';

class Formulario extends Component {

    entradaRef = React.createRef();
    tituloRef = React.createRef();

    crearPost = (e) => {
        e.preventDefault();  
        const post = {
            title: this.tituloRef.current.value,
            body: this.entradaRef.current.value,
            userId: 1
        }
        this.props.crearPost(post);    
        e.currentTarget.reset();
    }
    //Fix: no hay valdiacion de campos vacios
    render() { 
        return (  
            
            <form className="col-12" onSubmit={this.crearPost}>
               <legend className="text-center">Crear Nuevo post</legend>
               <div className="form-group">
                    <label>Titulo Del Post</label>
                    <input type="text" ref={this.tituloRef} className="form-control" placeholder="Titulo Del Post"/>
               </div>
               <div className="form-group">
                    <label>Descripcion:</label>
                    <textarea ref={this.entradaRef} className="form-control" placeholder="Contenido..."></textarea>
               </div>
               <button type="submit" className="btn btn-primary">Crear</button>
            </form>
        );
    }
}
 
export default Formulario ;