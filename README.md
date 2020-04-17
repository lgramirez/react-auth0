Proyecto creado con create-react-app para poner a prueba conceptos de OpenId Connect (Auth0) para manejar autenticacion y OAuth2 (Give permission without sharing credentials and each permission you grant is called a scope) for autorizacion.
Stack de la app: react, react-router

Importante: Use cuenta de github para logearme a Auth0

1. Crear react app con create-react-app.
2. Establecer las rutas con react-router.
3. Crear una app en Auth0 para que podamos manejar la seguridad.
4. Agregamos un .env para configurar las variables de nuestro ambiente.
5. Configuramos un .js para manejar auth0 con la libreria auth0 que instalamos previamente.
6. Creamos una pagina Callback para manejar la respuesta desde Auth0.
7. Configuramos las rutas que solo podran ser vistas si estamos logueados.
8. Creamos un simple endpoint (get: /public) y agregamos a package.json para que se inicien, tanto el cliente como el servidor en un solo comando
9. Creamos un API en Auth0 para que le demos proteccion
10. Creamos un endpoint (get: /private) para que solo podamos acceder con access token, lo verificamos usando el middleware checkJWT
11. Agregamos el componente Private y lo modificamos para que solo este visible a conectados y si alguien quiere entrar a esa ruta, sin estar authenticado, sera redirigido a login.
12. Creamos un scope en Auth0, usando OAuth2, para que podamos tener acceso a los cursos de una persona que solicita a la API local. Recomienda usar scopes para interactuar con aplicaciones de terceros, asi delegar permisos para tu aplicacion para interactuar con los datos de las aplicaciones de terceros, por ejm: que la app solicite permisos a google para leer contactos de un usuario, el scope seria "read:contacts".
13. Creamos roles en Auth0 con la opcion rules, para identificar admin y user roles que tienen acceso a la API para admin. La recomendacion para usar roles es que los usemos para manejar los permisos dentro de nuestra app.
14. Agregamos la funcion redirect despues de login recordando en localstorage desde donde estamos intentando loguearnos.
15. Construimos un PrivateRoute (HOC) para que maneje la logica de si estas autenticado y si esta autorizado para ver las paginas que solicita.
16. Usaremos context API para manejar el objeto auth que es utilizado en varias partes.
17. Guardaremos los tokens en memoria para evitar ataques XSS, configuramos Auth0 para que acepte llamadas desde nuestro dominio porque ahora que guardamos los datos en memoria tenemos que hacer llamadas a Auth0 para comprobar de que tenemos sesion activa en le server (silent auth). Sin embargo una vez realizada toda este configuracion, todavia no podemos ingresar con los datos de google porque necesitamos configurar las keys para cuando salgamos a produccion, esto no lo vemos en el curso.
18. Implementamos un renovador de tokens para cuando se acabe el tiempo de vida de nuestro token y no hayamos dado logout.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
