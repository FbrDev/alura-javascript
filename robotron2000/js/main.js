const nomeUsuario = prompt("Digite seu nome:");
document.addEventListener("DOMContentLoaded", function() {
    dizOi(nomeUsuario);
});

const robotron = document.querySelector("#robotron")
const robotronsPaths = [
    "img/robotrons/Amarelo.png",
    "img/robotrons/Branco.png",
    "img/robotrons/Preto.png",
    "img/robotrons/Rosa.png",
    "img/robotrons/Vermelho.png",
    "img/robotrons/Azul.png"
  ];
  let currentImageIndex = 0;
  
  robotron.addEventListener("click", () => {
    robotron.setAttribute("src", robotronsPaths[currentImageIndex]);
    currentImageIndex = (currentImageIndex + 1) % robotronsPaths.length;
  });

function dizOi(nome) {
    const texto = "Olá, " + nome + " eu sou o Robotron 2000! \n Preciso da sua ajuda para montar um robô, \n precisamos combater a invasão alienígena. \n Vamos lá?";

    var indice = 0;
    function digitar() {
        var elemento = document.getElementById("falaRobo");
        elemento.innerHTML += texto.charAt(indice);
        indice++;

        if (indice < texto.length) {
        setTimeout(digitar, 50);
        }
    }
    digitar();
}

const controle = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica]")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
        atualizaEstatistica(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatistica(peca) {
    estatistica.forEach( (elemento ) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}