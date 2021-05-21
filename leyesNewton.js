const pesoW = document.getElementById("peso")
const anguloG = document.getElementById("angulo")
const opciones = document.getElementById("opciones")
const masaG = document.getElementById("masa")
const peso3N = document.getElementById("pesoN3")
const angulo3N = document.getElementById("anguloN3")
const friccion = document.getElementById("fCinetica")
const opcion = document.getElementById("opcion")
const toRadians = rad => rad * Math.PI / 180




$(calcular).click(function() {
    const calcTension = (peso, angulo, masa, opcion) => {
        let resultado = 0
        if (opcion == 1 || opcion == 4) {
            if (masa > 0) {
                angulo = 90 - angulo
                resultado = masa * 9.8 * Math.cos(toRadians(angulo))
                return resultado
            } else {
                angulo = 90 - angulo
                resultado = (peso * Math.cos(toRadians(angulo)))
                console.log(resultado)
                return resultado
            }
        } else if (opcion == 2) {
            if (masa > 0) {
                resultado = (masa * 9.8) / Math.sin(toRadians(angulo))
                return resultado
            } else {
                resultado = peso / Math.sin(toRadians(angulo))
                console.log(resultado)
                return resultado
            }
        } else if (opcion == 3) {
            if (masa > 0) {
                resultado = (masa * 9.8) / Math.sin(toRadians(angulo)) * Math.cos(toRadians(angulo))
                return resultado
            } else {
                resultado = peso / Math.sin(toRadians(angulo)) * Math.cos(toRadians(angulo))
                console.log(resultado)
                return resultado
            }
        } else if (opcion == 5) {
            resultado = peso / 2
            return resultado
        }
    }
    let results = calcTension(pesoW.value, anguloG.value, masaG.value, opciones.value).toFixed(3)
    respuestas(results)
})


function respuestas(resultados) {
    $("#respuestas").html(
        `<div class="col-6 text-end"><span>R//${resultados}</span>`
    )
}


//TERCERA LEY DE NEWTON
$(calcularN3).click(function() {
    const calcPesoN3 = (peso, angulo, friccion, op) => {
        let resultado = 0
        let Wx = 0
        let Wy = 0
        let fric = 0
        if (op == 1) {
            angulo = 90 - angulo
            Wx = Math.cos(toRadians(angulo)) * peso
            Wy = Math.sin(toRadians(angulo)) * peso
            fric = friccion * Wy
            resultado = fric + Wx
            return resultado
        }
    }
    let resultadoN3 = calcPesoN3(peso3N.value, angulo3N.value, friccion.value, opcion.value).toFixed(3)
    respuestasT(resultadoN3)
})

function respuestasT(resultadosN3) {
    $("#respuestasN3").html(
        `<div class="col-6 text-end"><span>R//${resultadosN3}</span>`
    )
}