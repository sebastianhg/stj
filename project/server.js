const express = require('express');
const GetExpedientes = require('./mapper.js'); 
const app = express();

app.get('/', (_, res) => {
    res.sendFile(__dirname + '/formulario.html');
});

app.get('/get-expedientes', async (req, res) => {
    const numeroExpediente = req.query.asunto;
    const anio = req.query.anio;
    const titular = req.query.nombre;
    const resultado = await GetExpedientes(titular, numeroExpediente, anio)
    res.json({"response": resultado});
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});


