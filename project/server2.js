// const express = require('express');
// const app = express();

// // Ruta para el formulario
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/formulario.html');
// });

// // Ruta para realizar el scraping
// app.get('/scrape', (req, res) => {
//     // Requerir y ejecutar el archivo de scraping
//     require('./scraping.js')();
//     res.send('Scraping en progreso.'); // O cualquier otro mensaje de respuesta
// });

// // Iniciar el servidor en el puerto 3000
// app.listen(3000, () => {
//     console.log('Servidor escuchando en el puerto 3000');
// });




// const express = require('express');
// const hacerBusqueda = require('./scraping.js'); // Importa la función hacerBusqueda desde scraping.js
// const app = express();

// // Ruta para el formulario
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/formulario.html');
// });

// // // Ruta para realizar el scraping
// // app.get('/scrape', (req, res) => {
// //     // Llama a la función hacerBusqueda()
// //     hacerBusqueda();
// //     res.send('Scraping en progreso.'); // O cualquier otro mensaje de respuesta
// // });


// app.get('/scrape', async (req, res) => {
//     // Requerir y ejecutar el archivo de scraping
//     const coinciden = await require('./scraping.js')();
//     let mensaje = 'El número de expediente y año no coinciden en la tabla: no coincide';
//     if (coinciden) {
//         mensaje = 'El número de expediente y año coinciden en la tabla: coincide';
//     }
//     res.send(mensaje);
// });


// // Iniciar el servidor en el puerto 3000
// app.listen(3000, () => {
//     console.log('Servidor escuchando en el puerto 3000');
// });




const express = require('express');
const hacerBusqueda = require('./scraping.js'); // Importa la función hacerBusqueda desde scraping.js
const app = express();

// Ruta para el formulario
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/formulario.html');
});

// Ruta para realizar el scraping
app.get('/scrape', async (req, res) => {
    const numeroExpediente = req.query.asunto;
    const anio = req.query.anio; // Obtener el valor del parámetro anio de la URL

    // Llamar a la función hacerBusqueda con los valores proporcionados
    const resultado = await hacerBusqueda(numeroExpediente, anio);

    // Enviar la respuesta como JSON con el resultado del scraping
    res.json({ resultado });
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});


