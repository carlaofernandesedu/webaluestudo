var tempoInicial = $("#tempo-digitacao").text();
// var campo = $(".campo-digitacao");

function init()
{
    atualizaTamanhoFrase();
    exibePlacarAtualizado();
    bindControlesPrincipais();
    inicializaSelectize();
    inicializaToolTipster();
}

function bindControlesPrincipais()
{
    $(".campo-digitacao").on("input",inicializaContadores);
    bindControleInicializaCronometro();
    $(".campo-digitacao").on("input",inicializaMarcadores);
    $("#botao-reiniciar").click(reiniciaJogo);
}

function bindControleInicializaCronometro()
{
    $(".campo-digitacao").one("focus",inicializaCronometro);
}


function inicializaContadores() {
    var conteudo = $(".campo-digitacao").val();
    var qtdPalavras = conteudo.split(/\S+/).length - 1;
    $("#contador-palavras").text(qtdPalavras);
    var qtdCaracteres = conteudo.length;
    $("#contador-caracteres").text(qtdCaracteres);  
}

function inicializaCronometro() {
    var tempoRestante = $("#tempo-digitacao").text();
   	var cronometroID = setInterval(function() {
    		tempoRestante--;
    		$("#tempo-digitacao").text(tempoRestante);
    		if (tempoRestante < 1) {
                clearInterval(cronometroID);
                finalizaJogo();
    		}
    	}, 1000);
}

function inicializaMarcadores() {
    var frase = $(".frase").text();
    var campo = $(".campo-digitacao");
    var digitado = campo.val();
    var comparavel = frase.substr(0, digitado.length);

        if (digitado == comparavel) {
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");
        } else {
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
        }
}

function inicializaSelectize()
{
    $("#usuarios").selectize({
        create: true,
        sortField: 'text'
    });
}

function inicializaToolTipster()
{
    $(".tooltip").tooltipster({
        trigger:"custom"
    });
}

function finalizaJogo() {
    var campo = $(".campo-digitacao");
    campo.attr("disabled", true);
    campo.toggleClass("campo-desativado");
    inserePlacar();
}

function reiniciaJogo() {
    var campo= $(".campo-digitacao");
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text(0);
    $("#contador-caracteres").text(0);
    $("#tempo-digitacao").text(tempoInicial);
    bindControleInicializaCronometro();
    campo.toggleClass("campo-desativado");
    campo.removeClass("borda-vermelha");
    campo.removeClass("borda-verde");
}

function atualizaTempoInicial(tempo) {
    $("#tempo-digitacao").text(tempo);
    tempoInicial =tempo;
}

$(function() {
    init();
    initFrase();
    initPlacar();
 });