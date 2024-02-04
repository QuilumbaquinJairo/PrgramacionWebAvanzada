# Microproyecto de Tres Capas en Desarrollo Web

Este microproyecto ilustra una aplicación simple de tres capas en desarrollo web. Las capas incluyen la capa de presentación del cliente, la capa lógica de negocios en el servidor y la capa de datos en el servidor.

## Estructura del Proyecto

``` markdown
proyecto-tres-capas/
│
├── cliente/
│ └── index.html
│
├── servidor/
│ ├── node_modules/ 
│ ├── server.js
│ ├── package.json
│ └── .gitignore
│
└── datos/
└── datos.js
```

## Instrucciones de Ejecución

### Capa de Datos en el Servidor

1. Abre una terminal y navega al directorio `datos`.
2. (Opcional) Realiza las modificaciones necesarias en el archivo `datos.js` para ajustar la capa de datos según tus necesidades.

### Capa Lógica de Negocios en el Servidor

1. Abre una terminal y navega al directorio `servidor`.
2. Ejecuta `npm install` para instalar las dependencias, incluido `cors`.
3. Ejecuta `npm start` para iniciar el servidor con nodemon.

### Capa de Presentación del Cliente

1. Abre una terminal y navega al directorio `cliente`.
2. Ejecuta `npm install -g live-server` para instalar Live Server globalmente si aún no lo has hecho.
3. Ejecuta `live-server` para iniciar el servidor de desarrollo en el puerto 5500 (u otro puerto disponible).
4. Abre el navegador y accede a la URL proporcionada por Live Server, por ejemplo, `http://127.0.0.1:5500/index.html`.

### Notas Importantes

- Asegúrate de tener `Node.js` y `npm` instalados.
- Asegúrate de tener `nodemon` instalado globalmente para facilitar la actualización del servidor.
- Al utilizar `live-server` para el cliente, se proporcionará una URL específica. Asegúrate de utilizar esa URL en lugar de `http://localhost:3002` para evitar problemas de CORS.

