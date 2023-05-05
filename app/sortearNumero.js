const menorNumero = 1;
const maiorNumero = 1000;
const numeroSecreto = gerarNumeroAleatorio(1, 10);

function gerarNumeroAleatorio(min, max) {
    return parseInt(Math.random() * (maiorNumero + 1));
}

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorNumero;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorNumero;