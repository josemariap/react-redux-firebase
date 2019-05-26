import React, { Component } from 'react';

import '../css/nosotros.css';

class Nosotros extends Component {
   
    render() { 
        return ( 
            <div className="contenedor-nosotros">
                <div className="imagen">
                    <img src="/img/camisa_1.png" alt="imagen nosotros"/>
                </div>
                <div className="contenido">
                  <h2>Sobre Nosotros</h2>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed ex odio.
                     Quisque nisl diam, vehicula ut consectetur at, efficitur a metus. Integer vitae
                     massa eu metus suscipit pharetra eget eget augue. Ut enim metus, ornare quis 
                     hendrerit eu, laoreet id augue. In pulvinar bibendum justo, vitae sagittis mi euismod eu.
                     Aliquam sagittis eu enim vitae semper. Mauris pretium dignissim justo, sed lobortis mauris. 
                  </p>
                </div>
            </div>
         );
    }
}
 
export default Nosotros;