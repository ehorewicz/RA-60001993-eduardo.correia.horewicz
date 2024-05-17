let ipvalor1 = document.querySelector("#ipvalor1");

let btSomar = document.querySelector("#btSomar");
let h3Resultado= document.querySelector("#h3Resultado");

function somarvalores(){
    let valor1 = Number (ipvalor1.value);
    let resultado = (valor1 / 100) * 101 ;
    h3Resultado.textContent = String (resultado);
}

btSomar.onclick = function (){
    somarvalores();
}
