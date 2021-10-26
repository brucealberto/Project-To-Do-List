// Requisito 5
let listaTarefasOl = document.getElementById('lista-tarefas')
let tarefasInput = document.getElementById('texto-tarefa');
let btnAdicionar = document.getElementById('criar-tarefa')
let paragrafo = document.getElementById('funcionamento')


function adicionarTarefa(){
  let itemLista = document.createElement('li');
  itemLista.className = 'itens-lista'
  itemLista.innerText = tarefasInput.value
  listaTarefasOl.appendChild(itemLista);
  tarefasInput.value = ''
  
}
btnAdicionar.addEventListener('click',adicionarTarefa);

function criarItemLista(){
  
}

//btnCriarTarefa.addEventListener('click')