$(calcular).click(function() {
    console.log(descomposicionVPX(vPmagnitud.value, vPgrado.value));
    console.log(descomposicionVPY(vPmagnitud.value, vPgrado.value))
    console.log("vector numero 2");
    console.log(descomposicionVSX(vSmagnitud.value, vSgrado.value));
    console.log(descomposicionVSY(vSmagnitud.value, vSgrado.value));

})

// function descomposicionVectores(magnitud, angulo) {
//     /* console.log(`Grados: ${magnitud}, Magnitud: ${angulo}`);
//     let resulatadoMag = magnitud * (Math.cos(toRadians(angulo)));
//      console.log(`Resultante: ${resultadoMag}`);*/
//     return magnitud * (Math.cos(toRadians(angulo)));
// }
//VECTOR UNO
const descomposicionVPX = (magnitud, angulo, cuadrante) => magnitud * (Math.cos(toRadians(angulo)));
const descomposicionVPY = (magnitud, angulo, cuadrante) => magnitud * (Math.sin(toRadians(angulo)))

const toRadians = rad => rad * (Math.PI / 180)





const descomposicionVPX = (magnitud, angulo, cuadrante) => {
        let resultadosEnX = magnitud * (Math.cos(toRadians(angulo)))
        if (cuadrante == 2 || cuadrante == 3) {
            return resultadosEnX * -1
        }
        return resultadosEnX

    } // function descomposicionVectores(magnitud, angulo) {
    //     /* console.log(`Grados: ${magnitud}, Magnitud: ${angulo}`);
    //     let resulatadoMag = magnitud * (Math.cos(toRadians(angulo)));
    //      console.log(`Resultante: ${resultadoMag}`);*/
    //     return magnitud * (Math.cos(toRadians(angulo)));
    // }