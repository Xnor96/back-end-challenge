# Desafío del Backend

Este proyecto es un programa de Node.js que realiza una solicitud GET en una ruta proporcionada, cuenta cuántos elementos tienen una edad igual a 32, escribe los valores clave correspondientes en un archivo llamado `output.txt` y calcula el hash SHA1 del archivo.

## Instalación

1. Clona este repositorio en tu máquina local:

   git clone #https://github.com/tu-nombre-de-usuario/desafio-backend.git
   cd desafio-backend

2. Instala las dependencias requeridas:
    npm install

# Uso
Para ejecutar el programa, utiliza el siguiente comando:
    
    1. node main.js


# El proyecto está organizado en los siguientes directorios:

api: Contiene el archivo api.js, responsable de obtener los datos de la API.
utils: Contiene los archivos calculateSHA1Hash.js y countAge32.js, que proporcionan funciones de utilidad utilizadas en el programa principal.
main.js: Es el punto de entrada de la aplicación.

# DEPENDENCIAS
Este proyecto utiliza las siguientes dependencias:

axios: Para realizar solicitudes HTTP a la API.