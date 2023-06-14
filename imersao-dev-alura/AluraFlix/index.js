function  adicionarFilme(){
    var campoFilmeFavorito = document.querySelector("#filme")
    var filmeFavorito = campoFilmeFavorito.value
    if(filmeFavorito.endsWith('.jpg') || filmeFavorito.endsWith('.png')){
      listarFilmeNaTela(filmeFavorito)
    }else{
      alert("Imagem Inválida!")
    }
    campoFilmeFavorito.value = ""
  }
  
  function listarFilmeNaTela(filme){
    var listarFilmes = document.querySelector("#listafilmes")
    var elementoFilme = "<img src=" + filme + ">"
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
  }