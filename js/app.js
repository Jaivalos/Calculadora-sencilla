

let sumar = () =>{
    
    const forma = document.getElementById("forma");

    let opA = forma["operandoA"];
    let opB = forma["operandoB"];

    let res = parseInt(opA.value) + parseInt(opB.value);

    isNaN( res ) ? res = "La operacion no incluye numeros" : res = res;

    document.getElementById("resultado").innerHTML = `Resultado de la suma: ${res}`

}
