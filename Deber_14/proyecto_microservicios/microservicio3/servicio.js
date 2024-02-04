const express = require('express');
const cors = require('cors');
const datos = require('../datos/datos');
const app = express();
const puerto = 3003;

app.use(cors()); // Habilita CORS
app.use(express.json());
app.use(express.urlencoded());

app.get('/obtener', (req, res) => {
    const datosdb = datos.obtenerDatos();
    res.json(datosdb);
});

app.listen(puerto, () => {
    console.log(`Microservicio 3 está escuchando en http://localhost:${puerto}`);
});