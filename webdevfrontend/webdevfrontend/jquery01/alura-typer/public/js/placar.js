function initPlacar()
{
  bindControlesPlacar();
}

function bindControlesPlacar()
{
    $("#botao-placar").click(mostraPlacar);
}


function mostraPlacar() {
    $(".placar").stop().slideToggle(600);
}

function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Douglas";
    var numPalavras = $("#contador-palavras").text();
    var linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-remover").click(removeLinha);
    corpoTabela.append(linha);
    $(".placar").slideToggle(600);
    scrollPlacar();
}

function scrollPlacar()
{
    var posicaoPlacar = $(".placar").offset().top;
    alert(posicaoPlacar);
    //posicaoPlacar = posicaoPlacar + 300;
    // $("body").animate({
    //   scrollTop:  "1600px"
    // });
    $("body").scrollTop(posicaoPlacar);
}

function novaLinha(usuario, palavras) {
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").addClass("botao-remover").attr("href", "#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");
    link.append(icone);
    colunaRemover.append(link);
    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);
    return linha;
}

function removeLinha() {
    event.preventDefault();
    var linha = $(this).parent().parent();
    linha.fadeOut(1000);
    setTimeout(() => {
        linha.remove();
    }, 1000);
}

 