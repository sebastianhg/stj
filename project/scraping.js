const puppeteer = require('puppeteer');

const HacerBusqueda = async (juzgado, titular, numeroExpediente, anio) => {
    try {
        const navegador = await puppeteer.launch({  headless: 'new',});
        const pagina = await navegador.newPage();
        await pagina.goto('https://stjsonora.gob.mx/ListaAcuerdos/');
        await pagina.waitForSelector('#select2-IdUnidad-container');
        await pagina.click('#select2-IdUnidad-container');
        await pagina.waitForSelector('.select2-results__option');

        const opciones = await pagina.$$('.select2-results__option');
        for (const opcion of opciones) {
            const textoOpcion = await pagina.evaluate(el => el.textContent, opcion);
            if (textoOpcion.includes(juzgado)) {
                await opcion.click();
                break;
            }
        }

        await pagina.select('#Tipo', '2');
        await pagina.type('#Asunto', numeroExpediente);
        await pagina.type('#Anio', anio);
        await pagina.click('.boton.btnBuscar');
        await pagina.waitForSelector('#container');
        await pagina.screenshot({ path: 'captura.png' });
        let data = await extraerDatos(pagina);
        console.log("data response", data)
        navegador.close()
        return mapResponse(data, numeroExpediente, anio, titular)
    } catch (error) {
        console.error('Error:', error);
        return false;
    }
};

async function extraerDatos(pagina) {
    const tableData = await pagina.evaluate(() => {
        const rows = Array.from(document.querySelectorAll('tr'));
        const data = rows.map(row => {
            const cells = Array.from(row.querySelectorAll('td'));
            return cells.map(cell => cell.innerText);
        });
        return data
      });
      return tableData
}

function mapResponse(data, numeroExpediente, anio,nombre,) {
    let response = []
    for (let  i = 0;  i < data.length;  i++) {
        let d = data[i];
        if ( d.length > 0 && d[2] != undefined && d[3] != undefined) {
            console.log("d[2]!!", d[2])
            console.log("d[3]!!", d[3])
            if (d[2].includes(numeroExpediente + '/' + anio)) {
                if (eval(buildValidationName(nombre))) {
                    console.log("validacion de nombre", eval(buildValidationName(nombre)))
                    console.log("response", res)
                    let res = {
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
    }
    return response
}


function buildValidationName(nombre) {
    nombre = nombre.toUpperCase().replace(/\s+/g, ' ');
    nombre = nombre.split(" ")
    code = ``
    for (let i = 0; i < nombre.length; i++) {
        const e = nombre[i];
        if ( code != "" && i != nombre.length ) {
            code += ` ||`    
        } 
        code += ` d[3].includes(`
        code += `"${e}"` 
        code += `)`
    }

    console.log("code", code)
    return code
}


module.exports = HacerBusqueda;
