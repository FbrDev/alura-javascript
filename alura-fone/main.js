const inputTelefone = document.querySelector("input[type='tel']");

function DigitarTelefone(valor) {
  inputTelefone.value += valor;
}

const listaDeTeclas = document.querySelectorAll(".teclado input");

for (i = 0; i < listaDeTeclas.length; i++) {
  const tecla = listaDeTeclas[i];
  tecla.onclick = function () {
    DigitarTelefone(tecla.value);
  };

  tecla.onkeydown = function (evento) {
    
    if (evento.code === "Enter" || evento.code === "Space") {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}

const btnDeleta = document.querySelector("#buttonDeleta");
btnDeleta.onclick = function () {
  inputTelefone.value = "";
};