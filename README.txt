README:

Antes de poder correr el proyecto es necesario corre los siguientes comandos 
en una nueva terminal de VS Code (abra el directorio del proyecto en VS Code, 
una vez ahí, abra una nueva terminal con Ctrl+J):

1. npm install -g @angular/cli
2. ng add @angular/material
3. npm install @faker-js/faker --save-dev

La mayoría de las vistas del front pullean los datos del back, de la base de datos.
Si la base de datos no tiene datos o el front no está corriendo, no se verán
películas, actores y directores.