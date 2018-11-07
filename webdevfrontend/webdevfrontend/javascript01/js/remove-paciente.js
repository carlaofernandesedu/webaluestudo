var tabela = document.querySelector("#tabela-pacientes");
tabela.addEventListener("dblclick",function(event){
    var elementoAlvo = event.target;
    if (elementoAlvo.tagName == 'TD')
    {
        console.log("voce clicou em td");
        elementoAlvo.parentNode.classList.add("fadeOut");
        setTimeout(function(){elementoAlvo.parentNode.remove();},500);
        
    }
});