let Largura = document.querySelector ("#iplargura");
let Comprimento = document.querySelector ("#ipcomprimento");
let btcalcular = document.querySelector ("#btcalcular");
let Resultadoimo = document.querySelector ("#Resultadoimo");

function calcular1 (){
    let valor1 = Number (iplargura.value);
    let valor2 = Number (ipcomprimento.value);
    let result = valor1 * valor2; 
    Resultadoimo.textContent = String (result + " "+"metros quadrados") ;
}

btcalcular.onclick = function(){
    calcular1();
}

let ipcavalos = document.querySelector ("#ipcavalos");
let btcalcular1 = document.querySelector ("#btcalcular1");
let resultadocavalo = document.querySelector ("#resultadocavalo");

function Cavalos (){
    let cavalos = Number (ipcavalos.value);
    let result1 = cavalos * 4;
    resultadocavalo.textContent = (result1 + " " +"Ferraduras" )

}
 
btcalcular1.onclick = function (){
    Cavalos();
}

let ippaes = document.querySelector ("#ippaes");
let ipbroas = document.querySelector ("#ipbroas");
let btpadaria = document.querySelector ("#btpadaria");
let totalvendido = document.querySelector ("#totalvendido");
let resultadopou = document.querySelector ("#resultadopou");

function calcular2 (){
    let paes1 = Number (ippaes.value);
    let broas1 = Number (ipbroas.value);
    let result2 = (paes1 * 0.12 ) + (broas1 * 1.50 );
    totalvendido.textContent = String (result2 +" "+" Total vendido");
    let result3 = result2 * 0.10;
    resultadopou.textContent = String (result3 + " "+ "Para Guardar na Poupanca")


}

btpadaria.onclick = function(){
    calcular2 ();
}

let ipnome = document.querySelector ("#ipnome");
let ipidade = document.querySelector ("#ipidade");
let btidade = document.querySelector ("#btidade");
let resultadoidade = document.querySelector ("#resultadoidade");

function calcularIdade (){
    let nome1 = String (ipnome.value);
    let idade1 = Number (ipidade.value); 
    let result4 = idade1 * 365;
    resultadoidade.textContent = String (nome1+" "+"Voce ja viveu"+" "+result4+" "+"Dias" );

}
btidade.onclick = function(){
    calcularIdade();
}

let ipvalor1 = document.querySelector ("#ipvalor1");
let ippreco = document.querySelector ("#ippreco");
let btgasolina = document.querySelector ("#btgasolina");
let resultgasolina = document.querySelector ("#resultgasolina");

function Gasolina (){
    let valorg1 = Number (ipvalor1.value);
    let preco1 = Number (ippreco.value);
    let result5 = valorg1 / preco1; 
    resultgasolina.textContent = String (result5+" "+"Litros")

}
btgasolina.onclick = function(){
    Gasolina();
}


let ippeso = document.querySelector ("#ippeso");
let btpeso = document.querySelector ("#btpeso");
let resultkg = document.querySelector ("#resultkg");

function calcularkg (){
 
    let peso1 = Number (ippeso.value)
    let result6 = ( peso1 / 1000) * 12.00 ;
    resultkg.textContent = String (result6+" "+"Reais")

}
btpeso.onclick = function(){
    calcularkg();
}

let ipdia = document.querySelector ("#ipdia");
let ipmes = document.querySelector ("#ipmes");
let btmes = document.querySelector ("#btmes");
let resutmes = document.querySelector ("#resutmes");

function calcularmes (){
    let dias = Number (ipdia.value);
    let meses = Number (ipmes.value);
    let result7 = (meses - 1) * 30 + dias;
    resutmes.textContent = String (result7+" "+"Dias")
}
btmes.onclick = function (){
    calcularmes();
}

let ipcamisap = document.querySelector ("#ipcamisap");
let ipcamisam = document.querySelector ("#ipcamisam");
let ipcamisag = document.querySelector ("#ipcamisag");
let btcamisa = document.querySelector ("#btcamisa");
let resultcamisa = document.querySelector ("#resultcamisa");

function calcularcamisa (){
    let camisa1 = Number (ipcamisap.value);
    let camisa2 = Number (ipcamisam.value);
    let camisa3 = Number (ipcamisag.value);
    let result8 = (camisa1 * 10 ) + (camisa2 * 12) + (camisa3 * 15);
    resultcamisa.textContent = String (result8 + " "+"Reais") 
}
btcamisa.onclick = function (){
    calcularcamisa();
}


let ipx1 = document.querySelector ("#ipx1");
let ipy1 = document.querySelector ("#ipy1");
let ipx2 = document.querySelector ("#ipx2");
let ipy2 = document.querySelector ("#ipy2");
let btxy = document.querySelector ("#btxy");
let resultadoxy = document.querySelector ("#resultadoxy");

// calcular a diferenca entre as cordenadas
function calcularxy (){
    let x1 = Number (ipx1.value);
    let y1 = Number (ipy1.value);
    let x2 = Number (ipx2.value);
    let y2 = Number (ipy2.value);
    let deltax = x2 - x1
    let deltay = y2 - y1
    let distancias =  (deltax * deltax) + (deltay * deltay);
    resultadoxy.textContent = String (distancias)
}
btxy.onclick = function(){
    calcularxy();
}

let ipdiassem = document.querySelector ("#ipdiassem");
let btfabrica = document.querySelector ("#btfabrica");
let ipresulttrabalhox1 = document.querySelector ("#resulttrabalho");

function calculardias (){
    let dias = Number (ipdiassem.value);
    let anos = (dias / (30 * 12 ));
    dias %= (30 * 12);

    let meses = dias / 30 ;
    dias %= 30;

    let resultado = "";
    if (anos > 0) {
        resultado += anos + " ano(s), ";
    }
    if (meses > 0) {
        resultado += meses + " mes(es), ";
    }
    resultado += dias + " dia(s).";
    resulttrabalho.textContent = (resultado);

}
btfabrica.onclick = function(){
    calculardias();
}


let ipsalario = document.querySelector ("#ipsalario");
let btsalario = document.querySelector ("#btsalario");
let resultadosalario = document.querySelector ("#resultadosalario");

function calcularsalario(){
    let salario1 = Number (ipsalario.value);
    let result9 = (salario1 / 100) * 115;
    let result10 = result9 - 0.8; 
    resultadosalario.textContent = String ("Salario inicial"+" "+salario1+" "+"Salario com aumento"+" "+result9+" "+"Salario com desconto"+" "+result10)
}

btsalario.onclick = function (){
    calcularsalario();
}

let ipnumero1 = document.querySelector ("#ipnumero1");
let btcentena = document.querySelector ("#btcentena");
let resultadocentena = document.querySelector ("#resultadocentena");

function calcularcentenas (){
   let numero100 = Number (ipnumero1.value)
   let centena = (numero100 / 100);
   let resto = numero100 % 100;
   let dezena = (resto / 10);
   let unidade = resto % 10;

   resultadocentena.textContent = String ("Centena: " + centena + ", Dezena: " + dezena + ", Unidade: " + unidade);
}

btcentena.onclick = function(){
    calcularcentenas();
}



let ipareapizza = document.querySelector ("#ipareapizza");
let btcalcularpizza = document.querySelector ("#btcalcularpizza1");
let resultadopizza = document.querySelector ("#resultadopizza1");

function calcularpizza (){
    let pizza1 = Number (ipareapizza.value);
    let pi = 3.14;

    var area1 = pi * pizza1 * pizza1;
    resultadopizza1.textContent = String ("A area da pizza e: " + area1);

}

btcalcularpizza1.onclick = function(){
    calcularpizza();
}

let totalconta = document.querySelector ("#totalconta");
let btcontas = document.querySelector ("#btcontas");
let resultadoConta1 = document.querySelector ("#resultadoConta1");


function dividirConta (){

    let total1 = parseFloat (totalconta.value);
    let valordividido = Math.floor (total1 / 3);
    let valorcentavos = total1 % 3;
    let valordividocomcentavos = valorcentavos + valordividido;

    resultadoConta1.textContent = String ("Valor para Carlos"+" "+valordividido+" "+
    "Valor para Andre"+" "+valordividido+" "+"Valor para Felipe"+" "+valordividocomcentavos)

}

btcontas.onclick = function(){
    dividirConta();
}
