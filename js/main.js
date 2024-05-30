//ao clicar na disciplina, seleciona o banco de questoes da disciplina


// BOTÃO APÓS SELECIONAR A DISCIPLINA QUE DESEJA REALZIAR
const botaoContinuar = document.getElementById('botaoSim');

// EVENTO AO CLICAR
botaoSim.addEventListener('click', function() {
    // PAGINA DE PERGUNTAS
    const novaPagina = "https://www.google.com.br/?hl=pt-BR";
    
    window.location.href = novaPagina;
});