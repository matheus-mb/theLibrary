import { livros } from "./data/livros.js";
import  ehUmCPF  from "./validar-cpf.js"
import  ehMaiorDeIdade  from "./validar-idade.js"

let livrosHTML = '';

livros.forEach((livro) => {
  livrosHTML += `
    <div class="livro" id="${livro.categoria}">
      <img src="${livro.imagem}" alt="Capa do livro ${livro.nome}">
      <h2 class="nome_livro">${livro.nome}</h2>
      <button class="btn_comprar">COMPRAR</button>
    </div>
  `;
});

document.querySelector('.itens_catalogo').innerHTML = livrosHTML;

// Adicione um evento de clique aos itens de filtro
const listaFiltro = document.getElementById('listaFiltro');
listaFiltro.addEventListener('click', (event) => {
  if (event.target.classList.contains('filtro')) {
    const categoriaSelecionada = event.target.id;

    // Filtra os livros com base na categoria selecionada
    const livrosFiltrados = livros.filter((livro) => livro.categoria === categoriaSelecionada);

    // Atualiza o HTML da lista de livros com os livros filtrados
    let livrosFiltradosHTML = '';
    livrosFiltrados.forEach((livro) => {
      livrosFiltradosHTML += `
        <div class="livro" id="${livro.categoria}">
          <img src="${livro.imagem}" alt="Capa do livro ${livro.nome}">
          <h2 class="nome_livro">${livro.nome}</h2>
          <button class="btn_comprar">COMPRAR</button>
        </div>
      `;
    });

    document.querySelector('.itens_catalogo').innerHTML = livrosFiltradosHTML;
  }
});