import React, { Component } from 'react';
import Noticia from './Noticia';
import PropTypes from 'prop-types';
import {TransitionGroup, CSSTransition} from 'react-transition-group'; //hay que instalar esta dependencia

class Noticias extends Component {

    render(){

        return(
            <div className="row">
               <TransitionGroup>

                    {this.props.noticias.map(noticia => (
                       <CSSTransition classNames="fade" timeout={500}
                           key = { noticia.url }   //sirve como identificador unico    
                       >

                            <Noticia 
                              noticia = { noticia }  
                            />

                       </CSSTransition>
                    ))}
               
               </TransitionGroup>
            </div>
            
            
        )
    }
}

Noticias.propTypes = {
    noticias: PropTypes.array.isRequired
}

export default Noticias;