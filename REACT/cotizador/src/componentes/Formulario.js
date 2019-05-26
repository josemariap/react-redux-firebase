import React, { Component } from 'react';


class Formulario extends Component{

   //Los refs son para leer los campos de un formulario, se agregan a los input del form
   marcaRef = React.createRef();
   yearRef = React.createRef();
   planBasicoRef = React.createRef();
   planCompletoRef = React.createRef();

    //metodo arrow function que se ejcuta al enviar el formulario con submit onSubmit
    cotizarSeguro = (e) => {
        e.preventDefault();
        console.log("Se envio el formulario!!")
        //Leer los valores de los input ejemplo: this.marcaRef.current.value

        //Armamos el objeto para pasar al componente principal
        const plan = this.planBasicoRef.current.checked ? 'basico' : 'completo';

        const infoAuto = {
            marca: this.marcaRef.current.value,
            year: this.yearRef.current.value,
            plan: plan
        }

         console.log(infoAuto);

         //se envia la info al componente padre a traves de la funcion (en los parametros), que el padre le paso con props
         this.props.cotizarSeguro(infoAuto);

         //Resetear el formulario
         e.currentTarget.reset();
    
    }


    
    render(){
        return(
            <form className="cotizar-auto" onSubmit={this.cotizarSeguro} >
            <div className="campo">
                <label>Marca</label>
              <select name="marca" ref={this.marcaRef}>
                <option value="americano">Americano</option>
                <option value="europeo">Europeo</option>
                <option value="asiatico">Asiatico</option>
              </select>
            </div>

            <div className="campo">
                <label>Año</label>
                <select name="year" ref={this.yearRef} >
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                </select>
            </div>
            <div className="campo">
                <label>Plan:</label>
                <input type="radio"  name="plan" value="basico" ref={this.planBasicoRef}/> Básico
                <input type="radio"  name="plan" value="completo" ref={this.planCompletoRef}/> Completo
            </div>

            <button type="submit" className="boton">Cotizar</button>
        </form>
      )}
}

export default Formulario;