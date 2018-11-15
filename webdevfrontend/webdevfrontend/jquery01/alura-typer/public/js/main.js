init();

function init()
{
  atualizaContadoresTexto();
  bindAll();
}

function atualizaContadoresTexto()
{
    var frase = $(".frase").text();
    var numeroPalavras = frase.split(" ").length;
    $("#tamannho-frase").text(numeroPalavras);
}


function bindAll()
{
    $(".campo-digitacao").on("input",atualizaContadoresCampoDigitado);
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