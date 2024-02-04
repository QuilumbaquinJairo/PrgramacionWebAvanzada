const express = require('express');
const cors = require('cors');
const app = express();
const puerto = 3002;

app.use(cors()); // Habilita CORS

app.get('/', (req, res) => {
    res.send('¡Hola desde el Microservicio 2!');
});

app.listen(puerto, () => {
    console.log(`Microservicio 2 está escuchando en http://localhost:${puerto}`);
});
