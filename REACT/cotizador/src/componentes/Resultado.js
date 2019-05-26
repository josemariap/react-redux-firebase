import React, {Component} from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

class Resultado extends Component{

    render(){
        const resultado = this.props.resultado
        const mensaje = (!resultado) ? 'Seleciona marca, año y plan para tu auto' : 'La cotizacion del seguro es: $';

        return(
           <div className="gran-total">
                <TransitionGroup component="span" className="resultado">
                   {mensaje}
                   <CSSTransition
                      classNames="resultado"
                      key={resultado}
                      timeout={{enter: 500, exit: 500}} >
                      <span>{resultado}</span>
                   </CSSTransition>

                </TransitionGroup>

           </div>
               
           
        )
    }
}

export default Resultado;