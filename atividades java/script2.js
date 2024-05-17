let ipvalor1 = document.querySelector("#ipvalor1");
let ipvalor2 = document.querySelector("#ipvalor2");
let btSomar = document.querySelector("#btSomar");
let h3Resultado= document.querySelector("#h3Resultado");

function somarvalores(){
    let valor1 = Number (ipvalor1.value);
    let valor2 = Number (ipvalor2.value);
    let resultado = (valor1 / 1000) * valor2;
    h3Resultado.textContent = String (resultado);
}

btSubtrair.onclick = function (){
    somarvalores();
}
