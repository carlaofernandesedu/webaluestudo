function initFrase()
{
    bindControlesFrase();
}

function bindControlesFrase()
{
   $("#botao-frase").on("click",obtemFrases);
}

function obtemFrases()
{
    $.get("http://localhost:3000/frases",trocaFraseAleatoria);
}

function trocaFraseAleatoria(data)
{
    var aleatorio = Math.floor(Math.random() * data.length);
    var item = data[aleatorio];
    $(".frase").text(item.texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(item.tempo);
}

function atualizaTamanhoFrase() {
    var frase = $(".frase").text();
    var numPalavras  = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numPalavras);
}

