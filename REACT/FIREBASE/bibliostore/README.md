This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Configuraciones:

REALCIONADO A LOS ESTILOS Y REQUERIOS PARA LA PARTE VISUAL:
AGREGAMOS BOOTSWATCH QUE ES UN bootstrap.min.css el tema es Flatly dentro de la carpeta /public/css y agrego
el link en el head del index.html
los spinner de carga son de SpinKit: https://tobiasahlin.com/spinkit/ los coloco en la carpeta /layout

AGREAMOS LOS JS DE BOOTSRAP EN EL INDEX.HTML

AGREGAMOS FONTAWESOME PARA LOS ICONOS O DIBUJOS https://fontawesome.com/

DATABASE: USAMOS FIREBASE CLOUD FIRESTORE CON LA CUENTA DE GOOGLE josepicoas@gmail.com vamos a la consola de firebase
dy encontraremos la app bibliostore. Encontraremos coleciones que son como tablas. Es nosql. Es documental.
FIREBASE dependencias para integrar react con firebase y redux:
Dependencias necesarias son 5, el @ es la version: npm install --save firebase react-redux-firebase@2 react-redux@5 redux redux-firestore

Github de la dependencia: https://github.com/prescottprue/react-redux-firebase  encontramos parte codigo necesario para esta implementacion.
Info de reac-redux-firebase: http://react-redux-firebase.com/

La configuracion esta en este video:https://www.udemy.com/react-de-principiante-a-experto-creando-mas-de-10-aplicaciones/learn/v4/t/lecture/14559312?start=0

EL STORE.JS TIENE TODA LA CONFIGURACION QUE CONECTA REACT, REDUX, FIREBASE Y FIRESTORE Y ES APLICABLE EN OTRAS APPS.
Cuando se crea el store de redux se crea con firebase para su uso

Para borrar, agregar, listar, editar y otras funciones, usamos directamente los metodos de firestore sin actions ni reducers


Habilitar la seguridad en firestore para la base de datos usada en esta app
Login video explicativo de login con firebase Udemy: https://www.udemy.com/react-de-principiante-a-experto-creando-mas-de-10-aplicaciones/learn/lecture/14559766#questions
Reglas de seguridad en firestore / para usar login desde la app obligatorio
En firestore fui a la partes de reglas de database y exiten 3 reglas (bloquear todo, permitir todo, permitir todo con user logueados a la app) Nosostros usaremos esta ultima regla
Despues vamos a authentication en firestore y habilitamos las formas de login, en esta app usamos por email
Despues vamos a plantillas / configuracion SMTP y lo habilitamos
Despues vamos a usuarios / agregar usuario y cargamos los usuarios que podran loguearse para el uso de los datos
Agregue para el login alñ usuario: correo@correo.com   con el password: 123123  (para prueba de login)
Los password se hashean.


Para proteger las rutas usaremos algo nuevo y potente: 
1-instalar estas dos dependencias: npm install --save history redux-auth-wrapper
2-Copiar este codigo en un archivo auth.js dentro de una carpeta helpers
Este archivo tendrá dos metodos, uno para cuando estamos autenticados y otro para cuando no

CODIGO:

import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
import { createBrowserHistory }  from 'history';
import Spinner from '../componentes/layout/Spinner';

const locationHelper = locationHelperBuilder({});
const history = createBrowserHistory();

export const UserIsAuthenticated = connectedRouterRedirect({
  wrapperDisplayName: 'UserIsAuthenticated',
  AuthenticatingComponent: Spinner,
  allowRedirectBack: true,
  redirectPath: (state, ownProps) =>
    locationHelper.getRedirectQueryParam(ownProps) || '/login',
  authenticatingSelector: ({ firebase: { auth, profile, isInitializing } }) =>
    !auth.isLoaded || isInitializing === true,
  authenticatedSelector: ({ firebase: { auth } }) =>
    auth.isLoaded && !auth.isEmpty,
});

export const UserIsNotAuthenticated = connectedRouterRedirect({
  wrapperDisplayName: 'UserIsNotAuthenticated',
  AuthenticatingComponent: Spinner,
  allowRedirectBack: false,
  redirectPath: (state, ownProps) =>
    locationHelper.getRedirectQueryParam(ownProps) || '/',
  authenticatingSelector: ({ firebase: { auth, isInitializing } }) =>
    !auth.isLoaded || isInitializing === true,
  authenticatedSelector: ({ firebase: { auth } }) =>
    auth.isLoaded && auth.isEmpty,
});

FIN DEL  CODIGO

3-Estos dos metodos hay que importarlos en App.js
4-Usar el metodo  UserIsAuthenticated en App.js en los Route para proteger las rutas de los componentes envolviendo el componente
ejemplo: <Route exact path="/" component={ UserIsAuthenticated(Libros) } />  
Y esta ruta quedará proptegida y si queremos acceder sin login nos llebara a la vista de login
Cuando cargo la app en teoria carga en / que son la lista de libros pero al estar protegida y no estar
autenticado me lleva a el vista de login. Todas las rutas que quiera acceder sino estoy logueado me redirecciona a /login
porque eso lo defini en /helpers/auth.js
Lo que queremos que se vea sin login, ese ruta usamos UserIsNotAuthenticated, ejemplo para el El componente login







---------------------------------------------------------------------------------------------

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
