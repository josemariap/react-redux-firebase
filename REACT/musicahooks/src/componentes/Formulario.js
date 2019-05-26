
import React, { useState } from 'react';
//el Formulario tiene su propio state con HOOKS

function Formulario(props){

    const [busqueda, agregarBusqueda] = useState({
        artista: '',
        cancion: ''
    })  
    
    //actualizar state con values de los input
    //el name del input se tiene que llamar igual que el dato del state, actualizamos el state con el value del input mantiendo una copia
    //del dato del state que no cambia, que es el del otro input
    const actualizarState = e => {
        agregarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    }

    //submit  del form
    const enviarInformacion = (e) => {
        e.preventDefault();
        props.consultarApi(busqueda);  //pasamos el state al componente padre App
    }

    return (  
        <div className="bg-info">
          <div className="container">
              <div className="row">
                  <form onSubmit={enviarInformacion}
                    className="col card text-white bg-transparent  mb-5 pt-5 pb-2">
                      <fieldset>
                          <legend className="text-center">Buscador Letras Canciones</legend>
                          <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Artista</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="artista" 
                                        placeholder="Nombre Artista" 
                                        required
                                        onChange={actualizarState}
                                    />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Canción</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="cancion" 
                                        placeholder="Nombre Canción" 
                                        required
                                        onChange={actualizarState}
                                    />
                                </div>
                              </div>
                          </div>
                          <button type="submit" className="btn btn-primary float-right">Buscar</button>
                      </fieldset>
                  </form>
              </div>
          </div>
      </div>
    );
}
 
export default Formulario;