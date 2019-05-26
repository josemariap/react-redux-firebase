import React, { Component } from 'react';
import OptionSelect from './OptionSelect';

class Formulario extends Component {

   monedaRef = React.createRef();
   cryptoRef = React.createRef();
    
   handleCurrency = (e) => {
     e.preventDefault();
     const cotizacion  = {
        moneda: this.monedaRef.current.value,
        crypto: this.cryptoRef.current.value
     }

     this.props.obtnerValoresCrypto(cotizacion);  
   }
    
    render(){
        return(
           <form onSubmit={this.handleCurrency}>
               <div className="form-group">
                  <label>Moneda:</label>
                  <select className="form-control" ref={this.monedaRef}>
                     <option value="" disabled defaultValue>Elige tu moneda</option>
                     <option value="USD">Dolar Estadounidense</option>
                     <option value="MXN">Peso Mexicano</option>
                     <option value="GBP">Libras</option>
                     <option value="EUR">Euros</option>
                  </select>
               </div>

               <div  className="form-group">
                  <label>Cryptomoneda</label>
                  <select className="form-control" ref={this.cryptoRef}>
                     {Object.keys(this.props.monedas). map(key => (
                        <OptionSelect
                          key = {key}
                          moneda = {this.props.monedas[key]}
                        />
                     ))}
                  </select>
               </div>

               <div className="form-group">
                  <input type="submit" className="btn btn-primary" value="Cotizar" />
               </div>
           </form>
        )
    }
}

export default Formulario;