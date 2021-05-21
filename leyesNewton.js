const pesoW = document.getElementById("peso")
const anguloG = document.getElementById("angulo")
const opciones = document.getElementById("opciones")
const toRadians = rad => rad * Math.PI / 180



$('#limpiar').click(function() {})

$(calcular).click(function() {
    const calcTension = (peso, angulo, opcion) => {
        let resultado = 0
        if (opcion == 1 || opcion == 4) {
            angulo = 90 - angulo
            resultado = (peso * Math.cos(toRadians(angulo)))
            console.log(resultado)
            return resultado
        } else if (opcion == 2) {
            resultado = peso / Math.sin(toRadians(angulo))
            console.log(resultado)
            return resultado
        } else if (opcion == 3) {
            resultado = peso / Math.sin(toRadians(angulo)) * Math.cos(toRadians(angulo))
            console.log(resultado)
            return resultado
        }
    }
    let results = calcTension(pesoW.value, anguloG.value, opciones.value).toFixed(3)
    respuestas(results)
})


function respuestas(resultados) {
    $("#respuestas").html(
        `<div class="col-6 text-end"><span>R//${resultados}</span>`
    )
}