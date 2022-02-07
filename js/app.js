

let sumar = () =>{
    
    const forma = document.getElementById("forma");

    let opA = forma["operandoA"];
    let opB = forma["operandoB"];

    let res = opA.value + opB.value;

    document.getElementById("resultado").innerHTML = `Resultado de la suma: ${res}`

}
