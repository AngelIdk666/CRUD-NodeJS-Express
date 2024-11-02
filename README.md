# TUTORIAL DE SIMPLE-CRUD-API-NODEJS :rocket:
Tutorial: [Creación de una API sencilla con Nodejs](https://dev.to/jessicamelerodev/creacion-de-una-api-sencilla-con-nodejs-en-espanol-21n) dividida en 5 partes.

### Parte I
  Inicializamos el proyecto: 
  ```
  npm init
  ```
  Instalamos dependecias generales:
  ```
  npm install express express-validator dotenv mongoose --save
  ```
  Dependecias de desarrollo:
  ```
  npm install nodemon --save-dev
  ```
  
  Añadir en el apartado "scripts" del archivo package.json
  ```
  "start": "node .",
  "dev": "nodemon ."
  ```
  
  Creamos un archivo index.js en la raíz del proyecto donde se crea el servidor. Y ejecutamos:
  
  ```
  npm run dev
  ```
  
### Parte II
Creación del archivo db.js para conectar a la base de datos y archivo .env para las variables de entorno.
Archivo .env:
  ```
  PORT=3000
  
  ```
  
### Parte III
  Creación de un modelo llamado mascota.
  
### Parte IV
  Creación de las rutas GET, POST, PUT y DELETE
  
### Parte V
  Separación en un controlador de las funciones de las rutas.
  
## :books: Documentación de algunas librerías usadas
:leaves: [Express](https://expressjs.com/es/4x/api.html) :leaves: [Nodemon](https://www.npmjs.com/package/nodemon)

## APARTADO DE JENKINS
  Ejecución 
  ![Ejecución](/crude/imgs/ejecusion.jpeg "Ejecucion")

  Contenedores
  ![Contenedores Dockers](/crude/imgs/contenedores.jpeg "Contenedores Dockers")

  Configuracion para el Testeo desde Github
  ![Config Testeo](/crude/imgs/configuracion_para_testeo.jpeg "Config Testeo")

  Guardando el Script
  ![Scrip Guardado](/crude/imgs/scrip_guardado.jpeg "Scrip Guardado")

  Ejecucion de consola remota
  ![Ejecucion Remota](/crude/imgs/ejecucion_consola_remota.jpeg "Ejecucion Remota")


