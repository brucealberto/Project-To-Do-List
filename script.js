
let listaTarefasOl = document.getElementById('lista-tarefas')
let tarefasInput = document.getElementById('texto-tarefa');
let btnAdicionar = document.getElementById('criar-tarefa')
let paragrafo = document.getElementById('funcionamento')


function adicionarTarefa() {
  let itemLista = document.createElement('li');
  itemLista.className = 'itens-lista'
  itemLista.innerText = tarefasInput.value
  listaTarefasOl.appendChild(itemLista);
  tarefasInput.value = ''

  itemLista.addEventListener('click', (event) => {
    itemLista.style.backgroundColor = 'rgb(128,128,128)'
  })
}
btnAdicionar.addEventListener('click', adicionarTarefa);


// function corCinza() {
//   let itemLi = document.querySelectorAll('.itens-lista');
//   //itemLista.style.backgroundColor = 'gray'
//   for (index = 0; index < itemLi.length; index += 1) {
//     let teste = itemLi[index]
//     if (let) {
//     // listaTarefasOl.appendChild(itemLi);
//     teste.style.backgroundColor = 'gray';
//   }
//   }

// }
// addEventListener('click', corCinza);
