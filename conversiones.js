//Aquí declaramos nuestras constantes para no estar llamando los elementes por el ID cada vez que los necesitemos

//constantes de longitud
const metros = document.getElementById("inputMeters")
const centimetros = document.getElementById("inputCm")
const kilometro = document.getElementById("inputKm")
const milla = document.getElementById("inputMiles")
const pulgada = document.getElementById("inputPulgadas")
const pie = document.getElementById("inputFeet")

//constantes de masa
const kilogramos = document.getElementById("inputKilogramos")
const gramos = document.getElementById("inputGramo")
const libras = document.getElementById("inputLibra")
const onza = document.getElementById("inputOnzas")

//constantes de tiempo
const segundo = document.getElementById("inputSegundos")
const minuto = document.getElementById("inputMins")
const hora = document.getElementById("inputHoras")
const dia = document.getElementById("inputDias")
const years = document.getElementById("inputYear")

//Aquí hacemos todas las conversiones de longitud, para cada diferente tipo de longitud es una función diferente.
function meters(valMts) {
    centimetros.value = (valMts * 100).toFixed()
    kilometro.value = (valMts / 1000).toFixed(6)
    milla.value = (valMts / 1609).toFixed(6)
    pulgada.value = (valMts * 39.37).toFixed(3)
    pie.value = (valMts * 3.28).toFixed(3)
    limpiarInputsLongitud(valMts)
}

function centimetro(valCm) {
    metros.value = (valCm / 100).toFixed(3)
    kilometro.value = (valCm / 100000).toFixed(6)
    milla.value = (valCm / 160934).toFixed(6)
    pulgada.value = (valCm / 2.54).toFixed(3)
    pie.value = (valCm / 30.48).toFixed(3)
    limpiarInputsLongitud(valCm)
}

function kilometros(valKm) {
    metros.value = (valKm * 1000).toFixed()
    centimetros.value = (valKm * 100000).toFixed()
    milla.value = (valKm / 1.609).toFixed(3)
    pulgada.value = (valKm * 39370).toFixed()
    pie.value = (valKm * 3281).toFixed()
    limpiarInputsLongitud(valKm)
}

function millas(valMilla) {
    metros.value = (valMilla * 1609).toFixed()
    centimetros.value = (valMilla * 160934).toFixed()
    kilometro.value = (valMilla * 1.609).toFixed(3)
    pulgada.value = (valMilla * 63360).toFixed()
    pie.value = (valMilla * 5280).toFixed(3)
    limpiarInputsLongitud(valMilla)
}

function pulgadas(valPulgada) {
    metros.value = (valPulgada / 39.37).toFixed(3)
    centimetros.value = (valPulgada * 2.54).toFixed(3)
    kilometro.value = (valPulgada / 39370).toFixed(6)
    milla.value = (valPulgada / 63360).toFixed(6)
    pie.value = (valPulgada / 12).toFixed(3)
    limpiarInputsLongitud(valPulgada)
}

function pies(valPie) {
    centimetros.value = (valPie * 30.48).toFixed(3)
    metros.value = (valPie / 3.28).toFixed(3)
    kilometro.value = (valPie / 3281).toFixed(6)
    milla.value = (valPie / 5280).toFixed(6)
    pulgada.value = (valPie * 12).toFixed()
    limpiarInputsLongitud(valPie)
}

//esta funcion nos sirve para que cuando querramos borrar los resultados, borrando cualquiera de los valores en los inputs se formatee todol
function limpiarInputsLongitud(val) {
    if (val == '') {
        metros.value = ''
        centimetros.value = ''
        kilometro.value = ''
        milla.value = ''
        pulgada.value = ''
        pie.value = ''
    }
}
//Aquí hacemos todas las conversiones de masa, para cada diferente tipo de masa es una función diferente.

function kilogramo(valKg) {
    gramos.value = (valKg * 1000).toFixed(3)
    libras.value = (valKg / 2.205).toFixed(3)
    onza.value = (valKg * 35.274).toFixed(3)
    limpiarInputsMasa(valKg)
}

function gramo(valGramo) {
    kilogramos.value = (valGramo * 1000).toFixed(3)
    libras.value = (valGramo / 454).toFixed(3)
    onza.value = (valGramo * 28.35).toFixed(3)
    limpiarInputsMasa(valGramo)
}

function libra(valLibra) {
    kilogramos.value = (valLibra / 2.205).toFixed(3)
    gramos.value = (valLibra * 454).toFixed(3)
    onza.value = (valLibra * 16).toFixed(3)
    limpiarInputsMasa(valLibra)
}

function onzas(valOnza) {
    kilogramos.value = (valOnza / 35.274).toFixed(3)
    gramos.value = (valOnza * 28.35).toFixed(3)
    libras.value = (valOnza / 16).toFixed(3)
    limpiarInputsMasa(valOnza)
}

//esta funcion nos sirve para que cuando querramos borrar los resultados, borrando cualquiera de los valores en los inputs se formatee todol
function limpiarInputsMasa(val) {
    if (val == '') {
        kilogramos.value = ''
        gramos.value = ''
        libras.value = ''
        onza.value = ''
    }
}
//Aquí hacemos todas las conversiones de tiempo, para cada diferente tipo de tiempo es una función diferente

function segundos(valSegundos) {
    minuto.value = (valSegundos / 60).toFixed(3)
    hora.value = (valSegundos / 3600).toFixed(6)
    dia.value = (valSegundos / 86400).toFixed(8)
    years.value = (valSegundos / 31536000).toFixed(8)
    limpiarInputsTiempo(valSegundos)
}

function minutos(valMins) {
    segundo.value = (valMins * 60)
    hora.value = (valMins / 60).toFixed(3)
    dia.value = (valMins / 1440).toFixed(6)
    years.value = (valMins / 525960).toFixed(8)
    limpiarInputsTiempo(valMins)
}

function horas(valHora) {
    segundo.value = (valHora * 3600)
    minuto.value = (valHora * 60)
    dia.value = (valHora / 24).toFixed(3)
    years.value = (valHora / 8766).toFixed(6)
    limpiarInputsTiempo(valHora)
}

function dias(valDia) {
    segundo.value = (valDia * 86400)
    minuto.value = (valDia * 1440)
    hora.value = (valDia * 24)
    years.value = (valDia / 365).toFixed(6)
    limpiarInputsTiempo(valDia)
}

function year(valYear) {
    segundo.value = (valYear * 31536000)
    minuto.value = (valYear * 525960)
    hora.value = (valYear * 8766)
    dia.value = (valYear * 365)
    limpiarInputsTiempo(valYear)
}

//esta funcion nos sirve para que cuando querramos borrar los resultados, borrando cualquiera de los valores en los inputs se formatee todol
function limpiarInputsTiempo(val) {
    if (val == '') {
        segundo.value = ''
        minuto.value = ''
        hora.value = ''
        dia.value = ''
        years.value = ''
    }
}