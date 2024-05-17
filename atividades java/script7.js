let ipvalor1 = document.querySelector ("#ipvalor1");
let ipvalor2 = document.querySelector ("#ipvalor2");
let ipvalor3 = document.querySelector ("#ipvalor3");
let btcalcular = document.querySelector ("#btcalcular");
let h3resultado = document.querySelector ("#h3resultado");

function calcular(){

let valor1 = Number (ipvalor1.value)
let valor2 = Number (ipvalor1.value)
let valor3 = Number (ipvalor1.value)

// media aritimetica 
let mediaAritmetica = (valor1 + valor2 + valor3) / 3 ;

//media ponderada dos numero (pesos 3,2 e 5)
let somavalorespesos = (valor1 * 3 )+(valor1 * 2 )+(valor1 * 5);
let somapesos = 3 + 2 + 5 ;
let mediaponderada = somavalorespesos / somapesos ;

// soma das duas medias 

let somamediass = mediaAritmetica + mediaponderada ;

// media das medias 
 
let mediaMEdias = somamediass / 2 ;

h3resultado.innerHTML = 

" Media aritmetica: "+mediaAritmetica+"<br>"+
" Media ponderada: "+mediaponderada+" <br>"+
" Soma das Medias: "+somamediass+"<br>"+
"Media das Medias: "+mediaMEdias;

}

btcalcular.onclick = function (){
    calcular();
}


// Função para retornar o menor entre quatro valores
function menorEntreQuatro() {
    var valores = [];
    for (var i = 1; i <= 4; i++) {
      valores.push(parseFloat(document.getElementById("valor" + i).value));
    }
    var menor = Math.min.apply(null, valores);
    document.getElementById("resultadoMenor").innerHTML = "Menor valor: " + menor;
  }

  // Função para verificar se um número é ímpar
  function verificarImpar() {
    var numero = parseInt(document.getElementById("numero").value);
    var mensagem = numero % 2 === 1 ? "O número é ímpar." : "O número não é ímpar.";
    document.getElementById("resultadoImpar").innerHTML = mensagem;
  }

  // Função para retornar o nome do produto a partir do código
  function nomeDoProduto() {
    var codigo = document.getElementById("codigo").value;
    var produto;
    if (codigo === "001") {
      produto = "Parafuso";
    } else if (codigo === "002") {
      produto = "Porca";
    } else if (codigo === "003") {
      produto = "Prego";
    } else {
      produto = "Diversos";
    }
    document.getElementById("resultadoProduto").innerHTML = "Nome do produto: " + produto;
  }
