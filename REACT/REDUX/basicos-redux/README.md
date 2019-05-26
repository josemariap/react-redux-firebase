## Instalamos Redux: npm install --save-dev redux
  corremos con: node basicos-redux.js 

  Creamos el store que contendra nuestro state de toda la app.
  Anteriomentes teniamos el state en un componente principal, ahora estará en el store

  Dispatcher: es la FORMA que se va a cambiar el state, este envia la action al store con el tipo de modifcacion y el payload si 
  es que lo necesita

  El store recibe el dispatcher con el action y lo envia al reducer en su segundo parametro en el primer parametro el reducer 
  recibe el state del store, el action es el segundo parametro del reducer que tambien lo recibe del store, 
  el reducer tiene la logica para modificar el state de acuerdo el action, luego envia el state actualizado al store
  El store cuenta con el state actualizado para enviar a los componentes.

  Subscribe es un funcion del store con una arrows function: esta escuchando y se ejecuta cuando se dispara una action por el dispatcher.