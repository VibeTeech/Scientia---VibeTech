const itensLista = document.querySelectorAll('#listaDisciplinas li')

let disciplinaSelecionada = ''

itensLista.forEach(function(item) {
    item.addEventListener('click', function(){
        disciplinaSelecionada = item.id
        console.log(disciplinaSelecionada)
    })
})

const botaoContinuar = document.getElementById('botaoSim')

botaoContinuar.addEventListener('click', function() {
    let novaPagina = ''
    switch(disciplinaSelecionada){
        case 'ingles':
            novaPagina = './provas/ingles/prova_ingles.html'
            break
        case 'geografia':
            novaPagina = './provas/geografia/prova_geografia.html'
            break
        case 'historia':
            novaPagina = './provas/historia/prova_historia.html'
            break
        default:
            novaPagina = './menu.html'
            break
    }

    window.location.href = novaPagina
})