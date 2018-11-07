var filtro = document.querySelector("#filtrar-tabela");
filtro.addEventListener("input", function(){
    var visivel = true;
    if (this.value.length > 0)
    {
        console.log("informou algo");
        var pacientes = document.querySelectorAll(".paciente")
        var expressao = new RegExp(this.value,"i");
        for(var i = 0; i < pacientes.length; i++)
        {
           var paciente = pacientes[i];
           var nome = paciente.querySelector(".info-nome").textContent;
           var visivel = expressao.test(nome);
           controlarVisibilidadePaciente(paciente, visivel)  
        }
    }
    else 
    {
        document.querySelectorAll(".paciente").forEach(function(paciente){ controlarVisibilidadePaciente(paciente,visivel) });
    }
});

function controlarVisibilidadePaciente(paciente, visivel)
{
    if (visivel)
        paciente.classList.remove("invisivel");
    else 
        paciente.classList.add("invisivel");
}

