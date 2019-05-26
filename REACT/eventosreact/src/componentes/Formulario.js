import React, {Component} from 'react';
import PropTypes from 'prop-types';

//Este proyecto usa el framework UIKIT para el CSS ver index.html https://getuikit.com/

class Formulario extends Component {

    nombreEventoRef = React.createRef();
    categoriaRef = React.createRef();

    buscarEvento = (e) => {
        e.preventDefault();
        const datosBusqueda = {
            nombre: this.nombreEventoRef.current.value,
            categoria: this.categoriaRef.current.value
        }

        this.props.obtenerEvento(datosBusqueda);
    }

    mostrarOpciones = (key) => {
       const categoria = this.props.categorias[key];
       const {id, name_localized} = categoria;

       if(!id || !name_localized) return null;

       return(
           <option key={id} value={id}>{name_localized}</option>
       )
    }

    render(){
        const categorias = Object.keys(this.props.categorias);//Del array hago otro array pero con las key de cada elemento

        return(
           <form onSubmit={this.buscarEvento}>
               <fieldset className="uk-fieldset uk-margin">
                  <legend className="uk-legend uk-text-center">
                      Busca tu evento por nombre y categoria
                  </legend>

                  <div className="uk-column-1-3@m uk-margin">
                        <div className="uk-margin" uk-margin="true">
                           <input className="uk-input" type="text" placeholder="Nombre de evento o ciudad" ref={this.nombreEventoRef}/>
                        </div>
                        <div className="uk-margin" uk-margin="true">
                           <select className="uk-select" ref={this.categoriaRef}>
                               {categorias.map(this.mostrarOpciones)}
                           </select>
                        </div>
                        <div className="uk-margin" uk-margin="true">
                           <button className="uk-button uk-button-danger">Buscar</button>
                        </div>
                  </div>
               </fieldset>
           </form>
        )
    }
} 

Formulario.propTypes = {
    obtenerEvento: PropTypes.func.isRequired,
    categorias: PropTypes.array.isRequired
}
export default Formulario;