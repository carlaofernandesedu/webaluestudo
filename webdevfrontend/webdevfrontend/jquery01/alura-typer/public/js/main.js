init();

function init()
{
  atualizaContadoresTexto();
  bindAll();
}

function bindAll()
{
    $(".campo-digitacao").on("input",atualizaContadoresCampoDigitado);
    $(".campo-digitacao").one("focus",inicializaConometro);
}

function atualizaContadoresTexto()
{
    var frase = $(".frase").text();
    var numeroPalavras = frase.split(" ").length;
    $("#tamannho-frase").text(numeroPalavras);
}

function inicializaConometro() {
    var tempoDigitacao = $("#tempo-digitacao");
    var tempoRestante = tempoDigitacao.text();
    const intervaloExecucao = 1000;
    var cronometroID = setInterval(() => {
        tempoRestante--;
        tempoDigitacao.text(tempoRestante);
        if (tempoRestante < 1)
        {
            clearInterval(cronometroID);
            $(".campo-digitacao").attr("disabled",true);
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