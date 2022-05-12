# INSTALACIÓN DE ANGULAR
Para instalar Angular es necesario tener instalado NODEJS para poder utilizar los npm (Node Package Manager).
instalar la última versión de Angular con el siguiente comando:
*** npm install -g @angular/cli@latest ***

Moverse desde la consola hasta el lugar donde queremos crear nuestro proyecto. Mi escritorio, mis documentos, o cualquier otra carpeta específica.

Ejecutar el siguiente comando:
*** ng new nombre-del-proyecto ***

El asistente nos solicitará algunos datos del proyecto:

El nombre del proyecto no puede contener espacios o guiones u otros caracteres especiales, solo letras y números.  
Si se quiere añadir el routing de angular. Esto es opcional, ya que se puede agregar de forma manual de ser necesario. 
Preguntará si queremos usar un formato específico para los estilos.

Esperamos a que el asistente acabe de generar nuestro proyecto de Angular
___

Al crear un **NUEVO PROYECTO** las tres principales carpetas son:

**e2e:** Carpeta dedicada a testing “end to end”.

**node_modules:** Carpeta en la que se incluyen todos los node modules instalados al hacer npm install.

**src:** Carpeta en la que se realizará el desarrollo de la aplicación
___

Para crear un **MÓDULO PROPIO**, además del módulo principal que se genera al crear un proyecto (app.module.ts) se deben seguir los siguientes pasos:

Ir a la consola o línea de comandos desde la terminal que resulte más cómoda, tener en cuenta que hay que estar dentro de la carpeta creada con el proyecto de Angular.

Ejecutar el comando: ***ng generate module <nombre-modulo>*** o su abreviado: ***ng g m <nombre-modulo>***

Una vez ejecutado el comando, AngularCLI  creará  un subdirectorio con el nombre del módulo dentro de la carpeta "src/app" y un archivo: nombre-modulo.module.ts.

Y para un mejor orden se puede especificar una carpeta donde ir guardando los componentes, por ejemplo en el siguiente comando, incorporamos la carpeta components:
***ng g c components/<nombre-del-componente> [opciones]***