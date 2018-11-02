console.log("Fui carregado de um arquivo externo");

var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var pacientePrimeiro = document.querySelector("#primeiro-paciente");
var tdpeso = pacientePrimeiro.querySelector(".info-peso");
var peso = tdpeso.textContent;
var tdaltura = pacientePrimeiro.querySelector(".info-altura");
var altura = tdaltura.textContent;
var imc = pacientePrimeiro.querySelector(".info-imc");

var alturaEhValida = true;
var pesoEhValido = true;

if(peso<=0 || peso > 1000)
{
    imc.textContent = "Peso Inválido";
    pesoEhValido =false;
}
  
if(altura<=0 || altura >3.0)
{
    imc.textContent = "Altura Inválida";
    alturaEhValida = false;
}

if(pesoEhValido && alturaEhValida)
{
    imc.textContent = peso / ( altura * altura);
}