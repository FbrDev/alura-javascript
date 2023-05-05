const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-BR';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    var chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
    verificaSeOChutePossuiValorValido(chute);
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute.replace('.', '')}</span>`;
}

recognition.addEventListener('end', () => recognition.start()); 