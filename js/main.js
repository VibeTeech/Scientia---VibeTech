//ao clicar na disciplina, seleciona o banco de questoes da disciplina
//captura todos os elementos <li> dentro da lista pelo seu ID
const itensLista = document.querySelectorAll('#listaDisciplinas li');

// EVENTO AO CLICAR 
itensLista.forEach(function(item) {
    item.addEventListener('click', function() {
        //GUARDAR ID DA LISTA SELECIONADA
        let guardaDisciplina = item.innerText;
        console.log(guardaDisciplina);
    });
});

// BOTÃO APÓS SELECIONAR A DISCIPLINA QUE DESEJA REALZIAR
const botaoContinuar = document.getElementById('botaoSim');

// EVENTO AO CLICAR
botaoSim.addEventListener('click', function() {
    // PAGINA DE PERGUNTAS
    const novaPagina = "./prova.html";
    
    window.location.href = novaPagina;
});
