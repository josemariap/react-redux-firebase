import React, {Component} from 'react';


class Producto extends Component {
    render() {
    
            const {name, price} = this.props.producto;
        
            return(
             <div> 
                
               <h2>{name}</h2>
               <p>Precio: ${price}</p>
            </div>
            )
        
    }

}

export default Producto