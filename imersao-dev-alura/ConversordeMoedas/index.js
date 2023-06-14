var troca = document.querySelector(".dolar")

var dolar = parseFloat(prompt("Qual o valor do dolar hoje?"))

var valorDolar = parseFloat(prompt("Qual o valor em dolar que você quer converter?"))

var valorEmReal = (valorDolar * dolar).toFixed(2)

troca.innerHTML = "R$:" + valorEmReal