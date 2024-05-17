let ipvalor1 = document.querySelector("#ipvalor1");
let ipvalor2 = document.querySelector("#ipvalor2");
let ipvalor3 = document.querySelector("#ipvalor3");
let btSomar = document.querySelector("#btSomar");
let h3Resultado = document.querySelector("#h3Resultado1");
let h3Resultado2 = document.querySelector("#h3Resultado2");
let h3Resultado3 = document.querySelector("#h3Resultado3");
let h3Resultado4 = document.querySelector("#h3Resultado4");

function somarvalores() {
    let valor1 = Number(ipvalor1.value);
    let valor2 = Number(ipvalor2.value);
    let valor3 = Number(ipvalor3.value);
    let resultado = (valor1 + valor2 + valor3) / 3 ;
    h3Resultado1.textContent = String(resultado);
    
    let resultado1 = (3 * valor1) + (2 * valor2) + (5 * valor3  ) / 10;
    h3Resultado2.textContent = String(resultado1);

    let resultado3 = resultado + resultado1 ;
    h3Resultado3.textContent = String(resultado3);

    let resultado4 = resultado + resultado1 / 2;
    h3Resultado4.textContent = String(resultado4);

}

btSomar.onclick = function () {
    somarvalores();
}