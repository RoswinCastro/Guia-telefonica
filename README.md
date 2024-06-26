# Guía Telefónica

Este proyecto es una aplicación de guía telefónica que utiliza Node.js, Express.js y MySQL para proporcionar servicios de gestión de datos relacionados con empresas, departamentos, municipios, lugares, teléfonos y zonas.

## Requisitos previos
- Node.js instalado en tu sistema. Puedes descargarlo [aquí](https://nodejs.org/). - RECOMENDADO -
- MySQL Server instalado y configurado localmente. Puedes descargarlo [aquí](https://www.mysql.com/).
- XAMPP instalado en tu sistema. Puedes descargarlo [aquí](https://www.apachefriends.org/index.html). - RECOMENDADO -

## Instalación
1. Clona este repositorio en tu máquina local utilizando el siguiente comando:
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    ```
2. Ve al directorio del proyecto:
    ```bash
    cd guia-telefonica
    ```
3. Instala las dependencias utilizando npm:
    ```bash
    npm install
    ```

## Configuración de la base de datos
- Abre XAMPP y asegúrate de que el servidor MySQL y el Apache estén activo.
- Importar base de datos en el phpMyAdmin (Descargar desde el repositorio "guia_telefonica_final.sql"). Tener en cuenta de que al importar primero se creará la base de datos, pero sin las tablas, luego seleccione la tabla y vuelva a importar la misma base de datos.
- Modifica los detalles de conexión a la base de datos en el archivo `app.js` según sea necesario. Puedes encontrar la sección marcada como "MODIFICAR DATOS DE SER NECESARIO".

## Uso
- Ejecuta la aplicación utilizando el siguiente comando:
    ```bash
    npm start
    ```
  Esto iniciará el servidor en el puerto especificado (por defecto en el puerto 5000).
- Accede a la aplicación a través de tu navegador web visitando [http://localhost:5000](http://localhost:5000).
- Utiliza los formularios proporcionados en la página web para agregar datos relacionados con empresas, departamentos, zonas, municipios, lugares y teléfonos.
- Puedes ver todos los datos almacenados en la base de datos haciendo clic en el botón "Mostrar Todos los Datos". Los datos se mostrarán en una tabla en la misma página.

Nota: La funcionalidad de actualización y eliminación de datos aún no está implementada en la interfaz web, pero puedes realizar estas acciones directamente en la base de datos según sea necesario.

¡Disfruta utilizando la Guía Telefónica! Si tienes alguna pregunta o encuentras algún problema, no dudes en ponerte en contacto con el equipo de desarrollo.

LAMENTABLEMENTE NO ENCONTRÉ DONDE DESPLEGAR DICHO TRABAJO, POR LO TANTO SOLO PUEDO PROPORCIONAR LO QUE HICE DESDE UN LOCALHOST.
