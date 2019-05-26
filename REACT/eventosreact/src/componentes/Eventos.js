import React, {Component} from 'react';
import Evento from './Evento';
import PropTypes from 'prop-types';

export default class Eventos extends Component {
    //cada evento que itera lo pone ordenado usando 3 columnas por el 3@m   Es el grid true
    render() {
        return (
            <div className="uk-child-width-1-3@m" uk-grid="true">  
                {Object.keys(this.props.eventos).map(key => (
                    <Evento
                      info = {this.props.eventos[key]}
                      key = {key}
                    />
                )) }
            </div>
        );
    }
}

Eventos.propTypes = {
    eventos: PropTypes.array.isRequired
}