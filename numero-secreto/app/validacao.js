function verificaSeOChutePossuiValorValido(chute){
    const numero = +chute;

    if(chute.toUpperCase().replace('.', '') === "GAME OVER"){
        document.body.innerHTML = `
            <h2>GAME OVER</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button class="btn-jogar" id="jogar-novamente">Jogar novamente</button>
        `;
        return;
    }

    if (chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return;
    }

    if(numeroForMaiorOuMenorQueOValorMaximoOuMinimo(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorNumero} e ${maiorNumero} </div>`;
        return;
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button class="btn-jogar" id="jogar-novamente">Jogar novamente</button>
        `;
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    }else{
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorMaximoOuMinimo(numero) {
    return numero > maiorNumero || numero < menorNumero;
}

document.body.addEventListener('click', (e) => {
    if(e.target.id === 'jogar-novamente'){
        window.location.reload();
    }
});