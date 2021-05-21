const pesoW = document.getElementById("peso")
const anguloG = document.getElementById("angulo")
const opciones = document.getElementById("opciones")
const masaG = document.getElementById("masa")
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