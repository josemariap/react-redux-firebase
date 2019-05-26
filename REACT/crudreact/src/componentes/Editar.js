import React, { Component } from 'react';

class Editar extends Component {
    
    entradaRef = React.createRef();
    tituloRef = React.createRef();

    editarPost = (e) => {
        e.preventDefault();  
        const post = {
            title: this.tituloRef.current.value,
            body: this.entradaRef.current.value,
            userId: 1,
            id: this.props.post.id
        }
        this.props.editarPost(post);    
    }

    cargarFormulario = () => {
        if(!this.props) return null;//se valida por da error si carga el formulario sin tener props para tomar los valores

        const { title, body } = this.props.post;//se valida con el if para que no explote acá
        return(
            <form className="col-12" onSubmit={this.editarPost}>
                <legend className="text-center">Editar post</legend>
                <div className="form-group">
                    <label>Titulo Del Post</label>
                    <input type="text" ref={this.tituloRef} className="form-control" defaultValue={title}/>
                </div>
                <div className="form-group">
                    <label>Descripcion:</label>
                    <textarea ref={this.entradaRef} className="form-control" defaultValue={body}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Guardar cambios</button>
            </form>
        )
    }


    render() { 
        return (  
            
            <React.Fragment>
                {this.cargarFormulario()}
            </React.Fragment>
           
        );
    }
}
 
export default Editar;