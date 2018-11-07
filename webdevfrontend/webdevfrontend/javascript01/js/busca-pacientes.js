var pesquisa = document.querySelector("#buscar-pacientes");
pesquisa.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();
    var msgErro = document.querySelector("#erro-buscarpacientes");
    msgErro.classList.add("invisivel");
    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){
            
            if (xhr.status == 200)
            {
                var pacientes = JSON.parse(xhr.responseText);
                pacientes.forEach(function(paciente){adicionaRegistroNaTabela(paciente);});
                
            }
            else 
            {
                msgErro.classList.remove("invisivel");
                msgErro.textContent = "Erro codigo:" + xhr.status + " desricao" + xhr.statusText;
                
            }
    });

    xhr.send();
});