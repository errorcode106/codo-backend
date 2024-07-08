Grupo 06 Dante Alberto Martinez

# Proyecto de Catálogo de Telas

Continuando con el proyecto del frontend donde hice una página para un catálogo de telas.

Solo se creo una base de datos donde se carga el catálogo.

Proyecto de Catálogo de Telas
Este proyecto consiste en la creación de una página web para un catálogo de telas, donde los usuarios pueden explorar diferentes telas organizadas por categorías. La implementación del frontend está realizada con HTML y CSS, y se incluye una base de datos MySQL para almacenar y gestionar la información del catálogo.

Backend
El backend está implementado en Node.js y Express.js y se encarga de manejar las solicitudes del cliente y la comunicación con la base de datos MySQL.

Base de Datos
La base de datos se desarrollo con MySQL y consta de dos tablas principales: telas y categorias. Estas tablas están relacionadas con una relación "uno a muchos", ya que una categoría puede tener muchas telas, pero cada tela pertenece a una sola categoría.

Tablas
Tabla telas:

id_tela (INT, AUTO_INCREMENT, PRIMARY KEY): Identificador único para cada tela.
nombre_tela (VARCHAR): Nombre de la tela.
precio_metro (DECIMAL): Precio por metro de la tela.
stock (INT): Cantidad de stock disponible.
id_categoria (INT): Identificador de la categoría a la que pertenece la tela.

Tabla categorias:
id_categoria (INT, AUTO_INCREMENT, PRIMARY KEY): Identificador único para cada categoría.
nombre_categoria (VARCHAR): Nombre de la categoría.


Endpoints

POST /categorias
Descripción: Crea una nueva categoría.

GET /categorias
Descripción: Devuelve una lista de todas las categorías disponibles.

GET /telas
Descripción: Devuelve una lista de todas las telas junto con el nombre de la categoría a la que pertenecen.

GET /telas/:id
Descripción: Devuelve la información de una tela específica por su ID.

POST /telas
Descripción: Crea una nueva tela.

PUT /telas/:id
Descripción: Actualiza la información de una tela específica por su ID.

DELETE /telas/:id
Descripción: Elimina una tela específica por su ID.




