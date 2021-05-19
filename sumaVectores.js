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
const toRadians = rad => rad * (Math.PI / 180)

const descomposicionVPX = (magnitud, angulo, cuadrante) => {
    let resultadosEnX = (magnitud * (Math.cos(toRadians(angulo)))).toFixed(3)
    if (cuadrante == 2 || cuadrante == 3) {
        return resultadosEnX * -1
    }
    return resultadosEnX

}

const descomposicionVPY = (magnitud, angulo, cuadrante) => {
    let resultadosEnY = (magnitud * (Math.sin(toRadians(angulo)))).toFixed(3)
    if (cuadrante == 3 || cuadrante == 4) {
        return resultadosEnY * -1
    }
    return resultadosEnY
}


$(calcular).click(function() {
    console.log("ESTE DE AQUI ES EL VECTOR 1");
    console.log(descomposicionVPX(vPmagnitud.value, vPgrado.value, cuadranteVectorUno.value));
    console.log("-------------------------------------------------------------------");
    console.log(descomposicionVPY(vPmagnitud.value, vPgrado.value, cuadranteVectorUno.value));
    console.log("ESTE DE AQUI ES EL VECTOR 2");
    console.log(descomposicionVPX(vSmagnitud.value, vSgrado.value, cuadranteVectorDos.value));
    console.log("-------------------------------------------------------------------");
    console.log(descomposicionVPY(vSmagnitud.value, vSgrado.value, cuadranteVectorDos.value));
    console.log("ESTE DE AQUI ES EL VECTOR 3");
    console.log(descomposicionVPX(vTmagnitud.value, vTgrado.value, cuadranteVectorTres.value));
    console.log("-------------------------------------------------------------------");
    console.log(descomposicionVPY(vTmagnitud.value, vTgrado.value, cuadranteVectorTres.value));
    console.log("ESTE DE AQUI ES EL VECTOR 4");
    console.log(descomposicionVPX(vCmagnitud.value, vCgrado.value, cuadranteVectorCuatro.value));
    console.log("-------------------------------------------------------------------");
    console.log(descomposicionVPY(vCmagnitud.value, vCgrado.value, cuadranteVectorCuatro.value))
})