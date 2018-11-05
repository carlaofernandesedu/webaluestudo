var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var paciente = obterDadosDoFormulario(form);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(criarTr(paciente));
    form.reset();

});

function obterDadosDoFormulario(form)
{
    paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc : calculaImc(form.peso.value,form.altura.value)
    }

    return paciente;
}

function criarTr(paciente)
{
    var elemento = document.createElement("tr");
    elemento.appendChild(criarTd(paciente.nome,"info-nome"));
    elemento.appendChild(criarTd(paciente.peso,"info-peso"));
    elemento.appendChild(criarTd(paciente.altura,"info-altura"));
    elemento.appendChild(criarTd(paciente.gordura,"info-gordura"));
    elemento.appendChild(criarTd(calculaImc(paciente.peso,paciente.altura),"info-imc"));
    return elemento;
}

function criarTd(conteudo, classe)
{
    var elemento = document.createElement("td")
    elemento.classList.add(classe);
    elemento.textContent = conteudo;
    return elemento;
}
