import React, {Component} from 'react';
import Productos from './Productos';
import Footer from './Footer';
import Header from './Header'; 

class Aplicacion extends Component {

   state = {
        productos: []
      };

    componentDidMount(){
      console.log("YEAP!!")
      this.setState({
          productos: [
            {name:"notebook", price: 324454333333}, 
            {name:"notebook2", price: 532445},
            {name:"notebook3", price: 3266445},
            {name:"notebook4", price: 34424457}
          ]
          })
    }
   
    render() {
  
            return(
              
              <div> 
                 
                <Header
                   titulo = "Nuestra tienda virtual"
                />

                <Productos 
                   productos = {this.state.productos}
                />
              
                
                <Footer />

              </div>
            
            
            )
        
    }

}

export default Aplicacion