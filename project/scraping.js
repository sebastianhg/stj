// const puppeteer = require('puppeteer');

// const hacerBusqueda = async () => {
//     try {
//         // Iniciar el navegador con la opción headless en false
//         const navegador = await puppeteer.launch({ headless: false });
//         const pagina = await navegador.newPage();

//         // Navegar a la página
//         await pagina.goto('https://stjsonora.gob.mx/ListaAcuerdos/');

//         // Esperar a que se cargue la página y el elemento esté disponible
//         await pagina.waitForSelector('#select2-IdUnidad-container');

//         // Hacer clic en el elemento "Seleccione el Juzgado"
//         await pagina.click('#select2-IdUnidad-container');

//         // Esperar a que aparezca la lista de opciones
//         await pagina.waitForSelector('.select2-results__option');

//         // Obtener todas las opciones de la lista
//         const opciones = await pagina.$$('.select2-results__option');

//         // Buscar la opción "HERMOSILLO - JUZGADO TERCERO DE PRIMERA INSTANCIA DE LO CIVIL DE HERMOSILLO"
//         for (const opcion of opciones) {
//             const textoOpcion = await pagina.evaluate(el => el.textContent, opcion);
//             if (textoOpcion.includes('HERMOSILLO - JUZGADO TERCERO DE PRIMERA INSTANCIA DE LO CIVIL DE HERMOSILLO')) {
//                 await opcion.click();
//                 break;
//             }
//         }

//         // Seleccionar "Acuerdos por Expediente" en el Tipo de Consulta
//         await pagina.select('#Tipo', '2');

//         // Ingresar el número de asunto
//         await pagina.type('#Asunto', '268');

//         // Ingresar el año
//         await pagina.type('#Anio', '2016');

//         // Hacer clic en el botón "Buscar"
//         await pagina.click('.boton.btnBuscar');

//         // Tomar una captura de pantalla de la tabla
//         await pagina.waitForSelector('#container');
//         await pagina.screenshot({ path: 'captura.png' });

//         // // Verificar si el número de expediente y el año coinciden en la tabla
//         // const fila = await pagina.$('tbody tr');
//         // const textoFila = await pagina.evaluate(el => el.textContent, fila);
//         // if (textoFila.includes('0268/2016')) {
//         //     console.log('El número de expediente y año coinciden en la tabla: coincide');
//         // } else {
//         //     console.log('El número de expediente y año no coinciden en la tabla: no coincide');
//         // }

        
     
//         // Obtener el valor actual del número de expediente y año del formulario
//         const valorNumeroExpediente = await pagina.$eval('#numero_expediente', input => input.value);
//         const valorAnio = await pagina.$eval('#anio', input => input.value);

//         // Comparar los valores obtenidos con los valores proporcionados por el usuario
//         if (valorNumeroExpediente === numeroExpediente && valorAnio === anio) {
//             return true;
//         } else {
//             return false;
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         return false;
//     }
// }


// //hacerBusqueda();
// module.exports = hacerBusqueda;



// const puppeteer = require('puppeteer');

// const hacerBusqueda = async (numeroExpediente, anio) => {
//     try {
//         // Iniciar el navegador con la opción headless en false
//         const navegador = await puppeteer.launch({ headless: false });
//         const pagina = await navegador.newPage();

//         // Navegar a la página
//         await pagina.goto('https://stjsonora.gob.mx/ListaAcuerdos/');

//         // Esperar a que se cargue la página y el elemento esté disponible
//         await pagina.waitForSelector('#select2-IdUnidad-container');

//         // Hacer clic en el elemento "Seleccione el Juzgado"
//         await pagina.click('#select2-IdUnidad-container');

//         // Esperar a que aparezca la lista de opciones
//         await pagina.waitForSelector('.select2-results__option');

//         // Obtener todas las opciones de la lista
//         const opciones = await pagina.$$('.select2-results__option');

//         // Buscar la opción "HERMOSILLO - JUZGADO TERCERO DE PRIMERA INSTANCIA DE LO CIVIL DE HERMOSILLO"
//         for (const opcion of opciones) {
//             const textoOpcion = await pagina.evaluate(el => el.textContent, opcion);
//             if (textoOpcion.includes('HERMOSILLO - JUZGADO TERCERO DE PRIMERA INSTANCIA DE LO CIVIL DE HERMOSILLO')) {
//                 await opcion.click();
//                 break;
//             }
//         }

//         // Seleccionar "Acuerdos por Expediente" en el Tipo de Consulta
//         await pagina.select('#Tipo', '2');

//         // Ingresar el número de asunto
//         await pagina.type('#Asunto', numeroExpediente);

//         // Ingresar el año
//         await pagina.type('#Anio', anio);

//         // Hacer clic en el botón "Buscar"
//         await pagina.click('.boton.btnBuscar');

//         // Tomar una captura de pantalla de la tabla
//         await pagina.waitForSelector('#container');
//         await pagina.screenshot({ path: 'captura.png' });
        

//         // Obtener el valor actual del número de expediente y año del formulario
//         const valorNumeroExpediente = await pagina.$eval('#numero_expediente', input => input.value);
//         const valorAnio = await pagina.$eval('#anio', input => input.value);

//         // Comparar los valores obtenidos con los valores proporcionados por el usuario
//         if (valorNumeroExpediente === numeroExpediente && valorAnio === anio) {
//             return true;
//         } else {
//             return false;
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         return false;
//     }
// }

// module.exports = hacerBusqueda;




const puppeteer = require('puppeteer');

const hacerBusqueda = async (numeroExpediente, anio) => {
    try {
        // Iniciar el navegador con la opción headless en false
        const navegador = await puppeteer.launch({ headless: false });
        const pagina = await navegador.newPage();

        // Navegar a la página
        await pagina.goto('https://stjsonora.gob.mx/ListaAcuerdos/');

        // Esperar a que se cargue la página y el elemento esté disponible
        await pagina.waitForSelector('#select2-IdUnidad-container');

        // Hacer clic en el elemento "Seleccione el Juzgado"
        await pagina.click('#select2-IdUnidad-container');

        // Esperar a que aparezca la lista de opciones
        await pagina.waitForSelector('.select2-results__option');

        // Obtener todas las opciones de la lista
        const opciones = await pagina.$$('.select2-results__option');

        // Buscar la opción "HERMOSILLO - JUZGADO TERCERO DE PRIMERA INSTANCIA DE LO CIVIL DE HERMOSILLO"
        for (const opcion of opciones) {
            const textoOpcion = await pagina.evaluate(el => el.textContent, opcion);
            if (textoOpcion.includes('HERMOSILLO - JUZGADO TERCERO DE PRIMERA INSTANCIA DE LO CIVIL DE HERMOSILLO')) {
                await opcion.click();
                break;
            }
        }

        // Seleccionar "Acuerdos por Expediente" en el Tipo de Consulta
        await pagina.select('#Tipo', '2');

        // Ingresar el número de asunto
        await pagina.type('#Asunto', numeroExpediente);

        // Ingresar el año
        await pagina.type('#Anio', anio);

        // Hacer clic en el botón "Buscar"
        await pagina.click('.boton.btnBuscar');

        // Tomar una captura de pantalla de la tabla
        await pagina.waitForSelector('#container');
        await pagina.screenshot({ path: 'captura.png' });

        // Verificar si el número de expediente y el año coinciden en la tabla
        const fila = await pagina.$('tbody tr');
        const textoFila = await pagina.evaluate(el => el.textContent, fila);
        
        let data = await extraerDatos(pagina);
        navegador.close()
        return mapResponse(data, numeroExpediente, anio)
    } catch (error) {
        console.error('Error:', error);
        return false;
    }
};

async function extraerDatos(pagina) {
    const tableData = await pagina.evaluate(() => {
        const table = document.querySelector('table'); // Selecciona la tabla    
        // Obtiene las filas de la tabla
        const rows = Array.from(table.querySelectorAll('tr'));
        // Recorre cada fila y obtiene los datos de las celdas
        const data = rows.map(row => {
          const cells = Array.from(row.querySelectorAll('td')); // Selecciona las celdas de la fila
          return cells.map(cell => cell.innerText); // Obtiene el texto de cada celda
        });
    
        return data;
      });
      return tableData
}

function mapResponse(data, numeroExpediente, anio) {
    let response = []
    for (let  i = 0;  i < data.length;  i++) {
        let d = data[i];
        if ( d.length > 0 && d[2] != undefined) {
            if (d[2].includes(numeroExpediente + '/' + anio)) {
                res = {
                    anio: d[0],
                    secretaria: d[1],
                    asunto: d[2],
                    partes: d[3],
                    sistesisresultado: d[4]
                }
                response.push(res)
            }
        }    
    }
    return response
}


module.exports = hacerBusqueda;
