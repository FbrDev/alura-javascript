const botoes = document.querySelectorAll('.btn');
botoes.forEach(botao => botao.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? FiltrarDisponibilidade() : FiltrarCategoria(categoria);
    exibirLivros(livrosFiltrados);
    if(categoria == 'disponivel'){
        var precoTotal = livrosFiltrados.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2);
        exibirValorTotal(precoTotal);
    }
}

function FiltrarCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function FiltrarDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotal(precoTotal){
    elementoValorTotal.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${precoTotal}</span></p>
    </div>
    `;
}