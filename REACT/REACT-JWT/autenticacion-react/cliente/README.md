## JWT jason web token
   ATENCION: USA GOOGLE PARA EL LOGIN
   Esta app con REACT JWT consta de cliente y servidor que son dos carpetas dentro de autenticacion-react como directorio (padre)
   

   Auth0: Servicio de autentificación que nos da parte del código hecho: https://auth0.com/
   OJO  que puede vencer la prueba gratis!!
   Login en la pagina Auth0: pass: YdZLq2w3KiWpuNg     correo: jpico841@gmail.com
   ¡Deje que Auth0 maneje las complejidades de la autenticación segura para que pueda concentrarse en construir su aplicación!

   Ver uso:
   Link udemy de uso de Auth0: https://www.udemy.com/react-de-principiante-a-experto-creando-mas-de-10-aplicaciones/learn/v4/t/lecture/12018012?start=15
   

   1-Hay que crear una Applications (single page applications) en esta pagina Auth0 y con esta tendremos las credenciales, agregar el callback y el cors(ver video)

   2-Crear la API para nuestro servidor que será el backend api (nos entrega el código listo)

   3-Descargamos el codigo de la App seleccionando React
   4-Esta descarga es un proyecto react y capiamos la carpeta Auth y el history.js del src dentro de nuestro /src de cliente a la par de serviceWorker.js
   La carpeta callback la copiamos dentro de nuestra carpeta /componentes
   Copiamos tambien routes.js dentro de /componentes y arrgalmos los import e importamos los componentes propios
   Seguir la configuracion exactamente exacta mirando el video de udemy del link de arriba ya que hay que modificar Router.js
   Ver link como ejemplo de configuracion:  https://www.udemy.com/react-de-principiante-a-experto-creando-mas-de-10-aplicaciones/learn/v4/t/lecture/12018018?start=15

   Installamos las dependencias necesarias: npm install --save auth0-js axios history jwt-decode

   Si miramos en el archivo /Auth0.js encontramos todos las funciones necesarias como login, logout, etc..


   En el proyecto servidor primero creamos con npm init y luego instalamos las siguientes dependencias:
    npm install --save body-parser cors express express-jwt express-jwt-authz jwks-rsa nodemon
    Dependencias de desarrollo:  npm install --save-dev babel-cli babel-preset-env babel-preset-stage-0
   Creamos un index.js y agregamos el codigo de Auth0 de la Api que creamos
   El codigo que copiamos esta con required, hay que usar los import from y no esos


   
  




------------------------------------------------------------------------------------------------------------------------------


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
