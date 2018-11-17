var tempoInicial = $("#tempo-digitacao").text(); 

function init()
{
  atualizaContadoresTexto();
  bindAll();
}

function bindAll()
{
    $(".campo-digitacao").on("input",atualizaContadoresCampoDigitado);
    bindCampoDigitacaoCronometro();
    $("#botao-reiniciar").click(reiniciaJogo);
}

function bindCampoDigitacaoCronometro()
{
    $(".campo-digitacao").one("focus",inicializaConometro);
}

function atualizaContadoresTexto()
{
    var frase = $(".frase").text();
    var numeroPalavras = frase.split(" ").length;
    $("#tamanho-frase").text(numeroPalavras);
}

function inicializaConometro() {
    var tempoDigitacao = $("#tempo-digitacao");
    $("#botao-reiniciar").attr("disabled",true);
    var tempoRestante = tempoDigitacao.text();
    const intervaloExecucao = 1000;
    var cronometroID = setInterval(() => {
        tempoRestante--;
        tempoDigitacao.text(tempoRestante);
        if (tempoRestante < 1)
        {
            clearInterval(cronometroID);
            $(".campo-digitacao").attr("disabled",true);
            $("#botao-reiniciar").attr("disabled",false);
        }
    }, intervaloExecucao);
}

function atualizaContadoresCampoDigitado() {
    var campoDigitado = $(this).val();
    // var numeroPalavras = campoDigitado.split(" ").length;
    // var numeroCaracteres = campoDigitado.length;
    //Aplicando melhoria com Expressao Regular 
    var numeroPalavras = campoDigitado.split(/\S+/).length -1;
    var numeroCaracteres = campoDigitado.replace(/\s+/g,'').length;
    $("#contador-palavras").text(numeroPalavras);
    $("#contador-caracteres").text(numeroCaracteres);
}

function reiniciaJogo()
{
    var numeroPalavras = 0; 
    var numeroCaracteres = 0;
    var campoDigitacao = $(".campo-digitacao");
    campoDigitacao.attr("disabled",false);
    campoDigitacao.val("");
    $("#contador-palavras").text(numeroPalavras);
    $("#contador-caracteres").text(numeroCaracteres);
    $("#tempo-digitacao").text(tempoInicial);
    bindCampoDigitacaoCronometro();
}

$(document).ready(function(){
    init();
});
  