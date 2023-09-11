# 02cmpc-dogs
 
**Postgres SQL (Docker)**

1. Descargar docker desktop 

        https://www.docker.com/products/docker-desktop/

2.  Ejecutar contenedor de postgres (En caso de no tenerla el comando la baja automaticamente)

        docker run --name PgCmpcDogs -e POSTGRES_USER=su -e POSTGRES_PASSWORD=password -e POSTGRES_DB=pgcmpcdogs -p 39001:5432 -d postgres

****

**Repositorio**

1. Clonar repositorio localmente

        https://github.com/jorgez300/02cmpc-dogs.git

****

**Ejecutar Back**

1. Dentro de la carpeta cmpc-dogs-back

        npm i

        npm run start

El backend se encargara de crear el modelo de base de datos en postgres



****

**Ejecutar Front**

1. Dentro de la carpeta cmpc-dogs-back

        npm i

        npm run dev