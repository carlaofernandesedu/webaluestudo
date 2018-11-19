var tempoInicial = $("#tempo-digitacao").text(); 

function init()
{
  atualizaContadoresTexto();
  bindAll();
  unbindBotaoReiniciar();
}

function bindAll()
{
    $(".campo-digitacao").on("input",atualizaContadoresEBordas);
    bindCampoDigitacaoCronometro();
}

function bindBotaoReiniciar()
{
    $("#botao-reiniciar").on("click",reiniciaJogo);
}

function unbindBotaoReiniciar()
{
    $("#botao-reiniciar").off("click");
}

function bindBotaoRemoverItemPlacar(item)
{
    item.find(".botao-remover").click(removeItemDoPlacar);
}

function atualizaContadoresEBordas()
{
    atualizaContadoresCampoDigitado();
    atualizaBordaCampoDigitado();
}

function bindCampoDigitacaoCronometro()
{
    $(".campo-digitacao").one("focus",inicializaConometro);
}

function atualizaBordaCampoDigitado()
{
    var campoDigitado = $(".campo-digitacao");
    var valordigitado = campoDigitado.val();
    var frase = $(".frase").text();
    if (valordigitado.length > 0)
    { 
        //if (valordigitado == frase.substr(0,valordigitado.length))
        if (frase.startsWith(valordigitado))
        
        {
            campoDigitado.removeClass("borda-valorerrado");
            campoDigitado.addClass("borda-valorcorreto");
        }
        else 
        {
            campoDigitado.removeClass("borda-valorcorreto");
            campoDigitado.addClass("borda-valorerrado");
        }
    }
    else 
    {
        campoDigitado.removeClass("borda-valorcorreto");
        campoDigitado.removeClass("borda-valorerrado");
    }
}

function atualizaContadoresTexto()
{
    var frase = $(".frase").text();
    var numeroPalavras = frase.split(" ").length;
    $("#tamanho-frase").text(numeroPalavras);
}

function atualizaContadoresCampoDigitado() {
    var campoDigitado = $(".campo-digitacao").val();
    // var numeroPalavras = campoDigitado.split(" ").length;
    // var numeroCaracteres = campoDigitado.length;
    //Aplicando melhoria com Expressao Regular 
    var numeroPalavras = campoDigitado.split(/\S+/).length -1;
    var numeroCaracteres = campoDigitado.replace(/\s+/g,'').length;
    $("#contador-palavras").text(numeroPalavras);
    $("#contador-caracteres").text(numeroCaracteres);
}
function inicializaConometro() {
    var tempoDigitacao = $("#tempo-digitacao");
    //$("#botao-reiniciar").attr("disabled",true);
    var tempoRestante = tempoDigitacao.text();
    const intervaloExecucao = 1000;
    var cronometroID = setInterval(() => {
        tempoRestante--;
        tempoDigitacao.text(tempoRestante);
        if (tempoRestante < 1)
        {
            clearInterval(cronometroID);
            finalizaJogo();
    
        }
    }, intervaloExecucao);
}

function reiniciaJogo()
{
    var numeroPalavras = 0; 
    var numeroCaracteres = 0;
    var campoDigitacao = $(".campo-digitacao");
    campoDigitacao.attr("disabled",false);
    campoDigitacao.toggleClass("campo-desabilitado");
    campoDigitacao.removeClass("borda-valorcorreto");
    campoDigitacao.removeClass("borda-valorerrado");
    campoDigitacao.val("");
    $("#contador-palavras").text(numeroPalavras);
    $("#contador-caracteres").text(numeroCaracteres);
    $("#tempo-digitacao").text(tempoInicial);
    
    bindCampoDigitacaoCronometro();
}

function finalizaJogo()
{
    $(".campo-digitacao").attr("disabled",true);
    //$("#botao-reiniciar").attr("disabled",false);
    bindBotaoReiniciar();
    $(".campo-digitacao").toggleClass("campo-desabilitado");
    insereNoPlacar();
}

function criaItemNoPlacar(usuario,numeroPalavras) 
{
    var colunaUsuario =$("<td>").text(usuario);
    var colunaPalavras =$("<td>").text(numeroPalavras);
    var colunaRemover = $("<td>");
    var linkRemover = $("<a>").addClass("botao-remover").attr("href","#")
    var iconeRemover = $("<i>").addClass("icones").addClass("small").addClass("material-icons").text("delete");
    
    var linhaTabela = $("<tr>");
    linhaTabela.append(colunaUsuario);
    linhaTabela.append(colunaPalavras);
    linkRemover.append(iconeRemover);
    colunaRemover.append(linkRemover);
    linhaTabela.append(colunaRemover);
    return linhaTabela;
}

function insereNoPlacar()
{
  var placar = $(".placar");
  var usuario = "Carlos";
  var numeroPalavras = $("#contador-palavras").text();
  var corpoTabela = placar.find("tbody");
  var novaLinha = criaItemNoPlacar(usuario, numeroPalavras);
  bindBotaoRemoverItemPlacar(novaLinha);
  corpoTabela.append(novaLinha);
}

function removeItemDoPlacar()
{
    event.preventDefault();
    $(this).parent().parent().remove();
}

$(document).ready(function(){
    init();
});
  