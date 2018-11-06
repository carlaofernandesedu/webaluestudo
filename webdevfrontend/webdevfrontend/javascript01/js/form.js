var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);

    var erros = validarPaciente(paciente);

    if (erros.length > 0)
    {
        mostrarMensagensErros(erros);
        return;
    } 

    var pacienteTr = montaTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();
});

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function validarPaciente(paciente)
{
    var erros = [];
    if(paciente.nome.length == 0) erros.push("Informe o nome do paciente!"); 
    if(paciente.peso.length == 0) erros.push("Informe o peso do paciente!");
    if(paciente.altura.length == 0) erros.push("Informe o altura do paciente!");
    if(paciente.gordura.length == 0) erros.push("Informe o gordura do paciente!");
    if(!validarPeso(paciente.peso)) erros.push("Peso invalido");
    if(!validarAltura(paciente.altura)) erros.push("Altura invalida");
    return erros;
}

function mostrarMensagensErros(erros)
{
    var mensagens = document.querySelector("#mensagens-erro");
    mensagens.innerHTML = "";
    erros.forEach(function(item){
        var mensagem = document.createElement("li");
        mensagem.textContent = item;
        mensagens.appendChild(mensagem);
    });
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}
