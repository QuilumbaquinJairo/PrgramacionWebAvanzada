const express = require('express');
const cors = require('cors');
const datos = require('../datos/datos');  // Importa el módulo de datos
const app = express();
const puerto = 3002;
// Configura CORS para permitir todas las solicitudes
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('../cliente'));

// Ruta para manejar la solicitud y enviar datos al cliente
app.get('/obtener', (req, res) => {
    const datosdb = datos.obtenerDatos();
    res.json(datosdb);
});

app.post('/index',(req, res) => {
    const nuevoDato = req.body;

    if (datos.insertarDato(nuevoDato)) {
        console.log('Datos insertados:', nuevoDato);
        res.redirect('/');
    } else {
        res.status(400).send('Error al insertar los datos. Verifica la validez de los datos proporcionados.');
    }
});

app.listen(puerto, () => {
    console.log(`El servidor está escuchando en el puerto ${puerto}`);
});
