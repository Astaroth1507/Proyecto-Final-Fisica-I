const vPmagnitud = document.getElementById("magnitudV1")
const vPgrado = document.getElementById("gradoV1")
const vSmagnitud = document.getElementById("magnitudV2")
const vSgrado = document.getElementById("gradoV2")
const vTmagnitud = document.getElementById("magnitudV3")
const vTgrado = document.getElementById("gradoV3")
const vCmagnitud = document.getElementById("magnitudV4")
const vCgrado = document.getElementById("gradoV4")
const cuadranteVectorUno = document.getElementById("cuadranteV1")
const cuadranteVectorDos = document.getElementById("cuadranteV2")
const cuadranteVectorTres = document.getElementById("cuadranteV3")
const cuadranteVectorCuatro = document.getElementById("cuadranteV4")
const calcular = document.getElementById("calcular")
const limpiar = document.getElementById("limpiar")
const toRadians = rad => rad * Math.PI / 180
const componentesX = []
const componentesY = []


const descomposicionVPX = (magnitud, angulo, cuadrante) => {
    let resultadosEnX = (magnitud * (Math.cos(toRadians(angulo)))).toFixed(2)
    if (cuadrante == 2 || cuadrante == 3) {
        return resultadosEnX * -1
    } else if (cuadrante == 5 || cuadrante == 7) {
        return resultadosEnX * 0
    } else if (cuadrante == 6) {
        return magnitud;
    } else if (cuadrante == 8) {
        return magnitud * -1
    } else {
        return resultadosEnX
    }
}

const descomposicionVPY = (magnitud, angulo, cuadrante) => {
    let resultadosEnY = (magnitud * (Math.sin(toRadians(angulo)))).toFixed(2)
    if (cuadrante == 3 || cuadrante == 4) {
        return resultadosEnY * -1
    } else if (cuadrante == 6 || cuadrante == 8) {
        return resultadosEnY * 0
    } else if (cuadrante == 5) {
        return magnitud
    } else if (cuadrante == 7) {
        return magnitud * -1
    } else {
        return resultadosEnY
    }
}
const sumaVectores = (vectoresEnX, vectoresEnY) => {

}

$(calcular).click(function() {
    console.log("VECTORES EN X");
    componentesX.push(parseFloat(descomposicionVPX(vPmagnitud.value, vPgrado.value, cuadranteVectorUno.value)),
        parseFloat(descomposicionVPX(vSmagnitud.value, vSgrado.value, cuadranteVectorDos.value)),
        parseFloat(descomposicionVPX(vTmagnitud.value, vTgrado.value, cuadranteVectorTres.value)),
        parseFloat(descomposicionVPX(vCmagnitud.value, vCgrado.value, cuadranteVectorCuatro.value)))
    console.table(componentesX)
    console.log("VECTORES EN Y");
    componentesY.push(parseFloat(descomposicionVPY(vPmagnitud.value, vPgrado.value, cuadranteVectorUno.value)),
        parseFloat(descomposicionVPY(vSmagnitud.value, vSgrado.value, cuadranteVectorDos.value)),
        parseFloat(descomposicionVPY(vTmagnitud.value, vTgrado.value, cuadranteVectorTres.value)),
        parseFloat(descomposicionVPY(vCmagnitud.value, vCgrado.value, cuadranteVectorCuatro.value)))
    let sumaX = 0
    let sumaY = 0
    componentesX.forEach(element => {
        sumaX += element
    })
    componentesY.forEach(element => {
        sumaY += element
    })
    let vectorResultante = Math.sqrt((sumaX * sumaX) + (sumaY * sumaY)).toFixed(2)
    let anguloResultante = Math.atan(sumaY / sumaX) * (180 / Math.PI)
    console.log(anguloResultante)

    function anguloSHorizontal() {
        if (anguloResultante < 0 && anguloResultante > -90) {
            return (anguloResultante) + 180
        } else if (anguloResultante >= 0 && anguloResultante <= 90) {
            return (anguloResultante)
        } else if (anguloResultante > -90 && anguloResultante > -180) {
            return (anguloResultante) + 270
        } else {
            return (anguloResultante) + 360
        }
    }
    let anguloHorizontal = anguloSHorizontal()
    formulasDVectore()
    formulaYresultante(vectorResultante)
    respuestas(vectorResultante, anguloHorizontal.toFixed(2))
})

function formulasDVectore() {
    $("#descomposicionVectoresXY").html(
        `<div class="col-6 text-end">
        <img src="https://latex.codecogs.com/svg.image?x=cos\\theta&space;(h)" title="x=cos\\theta (h)">
        </div>
        <div class="col-6 text-start">
        <img src="https://latex.codecogs.com/svg.image?y=sin\\theta&space;(h)" title="y=sin\\theta (h)">
        </div>`
    )
}

function formulaYresultante() {
    $("#formulaResultantes").html(
        `<div class="col-6 text-end">
        <img src="https://latex.codecogs.com/svg.image?R=&space;\\sqrt[2]{x^{2}&plus;y^{2}}" title="R= \\sqrt[2]{x^{2}+y^{2}}">
        </div>
        <div class="col-6 text-start">
        <img src="https://latex.codecogs.com/svg.image?\\theta&space;=&space;tan^{-1}(\\frac{y}{x})" title="\\theta = tan^{-1}(\\frac{y}{x})">
        </div>`
    )
}

function respuestas(resultante, angulo) {
    $("#respuestas").html(
        `<div class="col-6 text-end"><span>R//${resultante},</span></div>
        <div class="col-6 text-start"><span>${angulo}</span>
        <img src="https://latex.codecogs.com/svg.image?\\measuredangle&space;" title="\\measuredangle " />
        </div>`
    )
}
$('#limpiar').click(function() {
    $('input').val(0)
})