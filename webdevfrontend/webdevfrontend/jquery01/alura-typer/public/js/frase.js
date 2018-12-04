
var urlObterFrases = "http://localhost:3000/frases";

function initFrase()
{
    bindControlesFrase();
}

function bindControlesFrase()
{
   $("#botao-frase").on("click",obtemFrases);
   $("#botao-frase-id").on("click",obtemFrasePorCodigo);
}

function obtemFrases()
{
    trataVisibilidadeImagemExecutandoAcaoObtemFrase();
    $.get(urlObterFrases,trocaFraseAleatoria)
    .fail(trataErroObtemFrase)
    .always(trataVisibilidadeImagemExecutandoAcaoObtemFrase);
}

function obtemFrasePorCodigo()
{
    var fraseId = $("#fraseid").val();
    var paramEnvio = {id: fraseId}
    trataVisibilidadeImagemExecutandoAcaoObtemFrase();
    $.get(urlObterFrases, paramEnvio, trocaFrasePorCodigo)
    .fail(trataErroObtemFrase)
    .always(trataVisibilidadeImagemExecutandoAcaoObtemFrase);
}

function trocaFraseAleatoria(data)
{
    var aleatorio = Math.floor(Math.random() * data.length);
    var item = data[aleatorio];
    $(".frase").text(item.texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(item.tempo);
}

function trocaFrasePorCodigo(data)
{
    $(".frase").text(data.texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo);
}

function trataVisibilidadeImagemExecutandoAcaoObtemFrase()
{
    $("#spinner").toggle();
}

function trataErroObtemFrase()
{
    $("#erro").toggle();
    setTimeout(function(){
        $("#erro").toggle();
    },2000);
}

function atualizaTamanhoFrase() {
    var frase = $(".frase").text();
    var numPalavras  = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numPalavras);
}

