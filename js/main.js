function saveAnswer(question, answer) {
    localStorage.setItem(question, answer);
}

function resetQuiz() {
    for (let i = 1; i <= 3; i++) {
        localStorage.removeItem(`question${i}`);
    }
    localStorage.removeItem('currentSubject'); // Resetar o nome da disciplina também
}

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM completamente carregado e analisado');
    
    // Adicionar listener para salvar respostas
    document.querySelectorAll('input[type=radio]').forEach(radio => {
        radio.addEventListener('change', (event) => {
            saveAnswer(event.target.name, event.target.value);
        });
    });

    // Configurar navegação entre disciplinas
    const itensLista = document.querySelectorAll('#listaDisciplinas li');
    let disciplinaSelecionada = '';

    itensLista.forEach(function(item) {
        item.addEventListener('click', function(){
            disciplinaSelecionada = item.id;
            console.log(disciplinaSelecionada);
        });
    });

    const botaoContinuar = document.getElementById('botaoSim');
    botaoContinuar.addEventListener('click', function() {
        resetQuiz(); // Reseta as respostas anteriores
        localStorage.setItem('currentSubject', disciplinaSelecionada); // Salva a disciplina atual
        let novaPagina = '';
        switch(disciplinaSelecionada){
            case 'ingles':
                novaPagina = './provas/ingles/prova_ingles.html';
                break;
            case 'geografia':
                novaPagina = './provas/geografia/prova_geografia.html';
                break;
            case 'historia':
                novaPagina = './provas/historia/prova_historia.html';
                break;
            default:
                novaPagina = './menu.html';
                break;
        }
        window.location.href = novaPagina;
    });
});
