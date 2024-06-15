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
            novaPagina = './prova_ingles.html'
            break
        case 'geografia':
            novaPagina = './prova_geografia.html'
            break
        case 'historia':
            novaPagina = './prova_historia1.html'
            break
        default:
            novaPagina = './menu.html'
            break
    }

    window.location.href = novaPagina
})


  