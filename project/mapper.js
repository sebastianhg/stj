const {juzgados, anios} = require("./definiciones.js")
const HacerBusqueda = require("./scraping.js")

async function GetExpedientes(titular, numeroExpediente, anio) {
    let r = []
    for (let i = 0; i < juzgados.length; i++) {
        const j = juzgados[i];
        console.log("revisando el juzagado, expediente, titular, anio", j, numeroExpediente, titular, anio)
        let res = await expedientes(j, titular, numeroExpediente, anio)
        r = r.concat(res)
    }
    return r
}

async function expedientes(juzgado, titular, numeroExpediente, anio) {
    let validAnios = (anio == null || anio == "")
    let validAsunto = (numeroExpediente == null || numeroExpediente == "")
    
    if (validAnios  && validAsunto) {
        return await getExpedientesByAnioAndExpediente(juzgado, titular)
    }
    
    if (validAnios) {
        return await executeByAnios(juzgado, titular, numeroExpediente)
    }
    
    if (validAsunto) {
        return await executeByExpedientes(juzgado, titular, anio)
    }

    return await executeWithAllInfo(juzgado, titular, numeroExpediente, anio)
}   

async function executeWithAllInfo(juzgado, titular, numeroExpediente, anio) {
    let response = await HacerBusqueda(juzgado, titular, numeroExpediente, anio)
    return response
}

async function getExpedientesByAnioAndExpediente(juzgado, titular) {
    let res = []
    for (let index = 0; index < anios.length; index++) {
        for (let i = 1; i < 9999; i++) {
            let a = i.toString().padStart(4, "0");
            if (a.length == 4) {
                let response = await HacerBusqueda(juzgado, titular, a, anios[index])
                let data = await response.json();
                res = res.concat(data.resultado);
            }
        }
    }
    return res
}

async function executeByAnios(juzgado, titular, numeroExpediente) {
    let res = []
    for (let index = 0; index < anios.length; index++) {
        n = anios[index]
        let response = await HacerBusqueda(juzgado, titular, numeroExpediente,  n)
        res = res.concat(response)
    }
    return res
}

async function executeByExpedientes(juzgado, titular, anio) {
    let res = []
    for (let i = 1; i < 9999; i++) {
        let a = i.toString().padStart(4, "0")
        if(a.length == 4) {
            let response = await HacerBusqueda(juzgado, titular, a, anio)
            res = res.concat(response)
        }
    }
    return res
}

module.exports = GetExpedientes
