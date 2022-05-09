let jogador, vencedor = null;

let jogadorSelecionado = document.getElementById('jogador-selecionado');
let vencedorSelecionado = document.getElementById('vencedor-selecionado');
let quadrados = document.getElementsByClassName('quadrado');


mudarJogador('X')

function escolherQuadrado(id) {
    console.log(id)

    if (vencedor !== null) {
        return;
    }

    var square = document.getElementById(id);
    
    if (square.innerHTML !== '-') {
        return
    }

    square.innerHTML = jogador;
    square.style.color = '#000';

    if(jogador === 'X') {
        jogador = 'O'
    }else {
        jogador = 'X'
    }

    mudarJogador(jogador)
    checaVencedor()

}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor(quadrado1, quadrado2, quadrado3) {
    var quadrado1 = quadrados[0]
    var quadrado2 = quadrados[1]
    var quadrado3 = quadrados[2]
    var quadrado4 = quadrados[3]
    var quadrado5 = quadrados[4]
    var quadrado6 = quadrados[5]
    var quadrado7 = quadrados[6]
    var quadrado8 = quadrados[7]
    var quadrado9 = quadrados[8]

 /*   switch (quadrado1, quadrado2, quadrado3) {
        case checaSequencia(quadrado1, quadrado2, quadrado3):
            mudaCorQuadrado(quadrado1, quadrado2, quadrado3)
            mudarVencedor(quadrado1)
        break;
        case checaSequencia(quadrado4, quadrado5, quadrado6):
            mudaCorQuadrado(quadrado4, quadrado5, quadrado6)
            mudarVencedor(quadrado4)
        break;
        case checaSequencia(quadrado7, quadrado8, quadrado9):
            mudaCorQuadrado(quadrado7, quadrado8, quadrado9)
            mudarVencedor(quadrado7)
        break;
        case checaSequencia(quadrado1, quadrado4, quadrado7):
            mudaCorQuadrado(quadrado1, quadrado4, quadrado7)
            mudarVencedor(quadrado1)
        break;
        case (checaSequencia(quadrado2, quadrado5, quadrado8)):
            mudaCorQuadrado(quadrado2, quadrado5, quadrado8)
            mudarVencedor(quadrado2)    
        break;
        case checaSequencia(quadrado3, quadrado6, quadrado9):
            mudaCorQuadrado(quadrado3, quadrado6, quadrado9)
            mudarVencedor(quadrado3)
        break;
        case checaSequencia(quadrado1, quadrado5, quadrado9):
            mudaCorQuadrado(quadrado1, quadrado5, quadrado9)
            mudarVencedor(quadrado1)
        break;
        case checaSequencia(quadrado3, quadrado5, quadrado7):
            mudaCorQuadrado(quadrado3, quadrado5, quadrado7)
            mudarVencedor(quadrado3)
        break;
        default: false
        
    }*/

    if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3)
        mudarVencedor(quadrado1)
        return;
    }

    if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
        mudaCorQuadrado(quadrado4, quadrado5, quadrado6)
        mudarVencedor(quadrado4)
        return;
    }

    if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
        mudaCorQuadrado(quadrado7, quadrado8, quadrado9)
        mudarVencedor(quadrado7)
        return;
    }

    if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
        mudaCorQuadrado(quadrado1, quadrado4, quadrado7)
        mudarVencedor(quadrado1)
        return;
    }

    if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
        mudaCorQuadrado(quadrado2, quadrado5, quadrado8)
        mudarVencedor(quadrado2)
        return;
    }

    if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
        mudaCorQuadrado(quadrado3, quadrado6, quadrado9)
        mudarVencedor(quadrado3)
        return;
    }

    if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
        mudaCorQuadrado(quadrado1, quadrado5, quadrado9)
        mudarVencedor(quadrado1)
        return;
    }

    if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
        mudaCorQuadrado(quadrado3, quadrado5, quadrado7)
        mudarVencedor(quadrado3)
        return;
    }
}

function mudarVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudaCorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = '#0f0'
    quadrado2.style.background = '#0f0'
    quadrado3.style.background = '#0f0'
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
    let eIgual = false

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        eIgual = true;
    }

    return eIgual;
}

function reset() {
    vencedor = null 
    vencedorSelecionado.innerHTML = '';

    for (let i = 1; i <= 9; i++) {
        var square = document.getElementById(i);
        square.style.background = '#feefef'
        square.style.color = '#feefef'
        square.innerHTML = '-'
    }

    mudarJogador('X')
}