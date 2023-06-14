const btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenarPorPreco.addEventListener('click', ordenarPorPreco);

function ordenarPorPreco(){
    let livrosOrdernados = livros.sort((a,b) => a.preco - b.preco);
    exibirLivros(livrosOrdernados);
}