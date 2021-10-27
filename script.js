const listaTarefasOl = document.getElementById('lista-tarefas');
const tarefasInput = document.getElementById('texto-tarefa');
const btnAdicionar = document.getElementById('criar-tarefa');

function adicionarTarefa() {
  const itemLista = document.createElement('li');
  itemLista.className = 'itens-lista';
  itemLista.innerText = tarefasInput.value;
  listaTarefasOl.appendChild(itemLista);
  tarefasInput.value = '';
  colorList();
}
btnAdicionar.addEventListener('click', adicionarTarefa);

function colorList() {
  const itemList = document.getElementsByClassName('itens-lista');
  for (let index = 0; index < itemList.length; index += 1) {
    itemList[index].addEventListener('click', () => {
      for (let index1 = 0; index1 < itemList.length; index1 += 1) {
        itemList[index1].style.backgroundColor = 'white';
      }

      itemList[index].style.backgroundColor = 'rgb(128,128,128)';
    });
  }
}

listaTarefasOl.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});

function apagar() {
  listaTarefasOl.innerHTML = '';
}

const btnApagar = document.getElementById('apaga-tudo');
btnApagar.addEventListener('click', apagar);
