alert("\n\nDesafio acerte o número secreto. \n\nVocê tem 3 Chances!\n\nVamos lá...")

var numeroSecreto = parseInt(Math.random() * 10)
var tentativas = 3

while (tentativas > 0){
  var chute = parseInt(prompt("\n\nDigite um número de 0 a 10"))
  
  if(numeroSecreto == chute){
    alert("Acertou")
    reload()
    break
  } else if(chute > numeroSecreto){
    alert("\n\nO número secreto é menor")
    tentativas = tentativas - 1
  } else if(chute < numeroSecreto){
    alert("\n\nO número secreto é maior")
    tentativas = tentativas - 1
  }
}

if (chute != numeroSecreto){
  alert("\n\nSuas Tentativas Acabaram. O número secreto era: " + numeroSecreto)
  reload()
}