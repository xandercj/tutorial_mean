# EjMean

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.


## Construcción de la aplicación

# Ejecutar el frontend angular

> 'ng serve'

# Instalar los módulos express y body-parser

> npm install -save express body-parser

Crear el archivo server.js con las siguientes características:
a. Puerto de escucha de peticiones: puerto 3000.
b. La devolución de un texto para las peticiones que le lleguen por la ruta “/api”.
c. La devolución de la página dist/index.html (página principal de nuestra aplicación Angular) para las peticiones que le lleguen por cualquier otra ruta.

Antes de ejecutar nuestra aplicación Express, deberemos realizar un build para generar la archivos de la aplicación Angular en la carpeta /dist:
> ng build

Ejecutar la aplicación Express
> node server.js


# Instalar mongodb

Descargar instalador en https://www.mongodb.org/downloads#production e instalar según manual https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/

> sudo apt-get install -y mongodb-org

Iniciar mongodb

> sudo systemctl start mongod

Verificar que mongob se inició correctamente 

> sudo systemctl status mongod

Iniciar mongodb al iniciar el SO
> sudo systemctl enable mongod

Detener mongodb
> sudo systemctl stop mongod
Reiniciar mongodb 
> sudo systemctl restart mongod
Iniciar una sesiòn a mongodb
> mongosh

# Conectarse a mongodb desde la aplicaciòn backend Express 
> npm install -save mongoose

En server.js conectarse a mongodb:

var mongoose = require(‘mongoose’);

// Conexión a la base de datos MongoDB a traves de Mongoose
var dbURI = ‘mongodb://localhost/db_mean’;
mongoose.connect(dbURI, {useMongoClient: true});


# Crear la API RESTful API, según el patrón de diseño MVC (Modelo-Vista-Controlador). MVC separa datos y lógica de negocio de una aplicación, specto su interfaz de usuario.


HTTP URL Descripción
GET /api/tareas Devuelve todas las tareas
POST /api/tareas Crea una tarea
GET /api/tareas/:tareaId Devuelve una tarea
PUT /api/tareas/:tareaId Modica una tarea
DELETE /api/tareas/:tareaId Borra una tarea


Modelo: representa los datos y lógica de negocio
de la aplicación. En nuestro caso, el modelo
quedará representado por una entidad “Tarea”
con las propiedades y métodos necesarios.
Vista: elemento con el que interactúa el usuario.
En nuestro caso, al ser una API, el usuario va a
ser otro componente software y la vista van a
ser los endpoints disponibles y los datos que
devolvemos (archivos JSON).
Controlador: hace de intermediario entre la
vista y el modelo: pide datos al modelo para
devolvérselos a la vista, y realiza acciones sobre
el modelo cuyo origen se produce en la vista.

Crear los siguientes directorios en server/:
“server/controllers”
“server/models” 
“server/routes”

Crear las rutas o endpoints de la API en el archivo tarea.js en la carpeta routes.

Luego crear el controlador tarea.js en la carpeta controllers.

Colocar la carga de las rutas de la API en el código del servidor. Para ello, se agrega el requerimiento de “server/routes/tarea.js” en server.js.


Crear el modelo de datos “Tarea” en el archivo tarea.js en la carpeta “server/models/".


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Mongodb
https://www.mongodb.com/docs/mongodb-shell/run-commands/
https://www.mongodb.com/docs/manual/reference/command/find/
https://www.mongodb.com/languages/javascript/mongodb-and-npm-tutorial
https://www.mongodb.com/docs/mongodb-shell/install/

# mongoose
https://mongoosejs.com/docs/index.html
https://platzi.com/tutoriales/1767-nodejs-microservicios/6518-creacion-api-con-nodejs-mongoose-y-express/

# Actualización en github

>> git init
>> git status
>> git add .
>> git commit -m 'App MEAN'
>> git remote add origin https://github.com/xandercj/tutorial_mean.git
>> git push -u origin main