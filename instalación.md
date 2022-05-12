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

Al crear un nuevo proyecto las tres principales carpetas son:

**e2e:** Carpeta dedicada a testing “end to end”.

**node_modules:** Carpeta en la que se incluyen todos los node modules instalados al hacer npm install.

**src:** Carpeta en la que se realizará el desarrollo de la aplicación