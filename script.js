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
  colorList();
}
btnAdicionar.addEventListener('click', adicionarTarefa)

function colorList() {
  let itemList = document.getElementsByClassName('itens-lista');
  for (let index = 0; index < itemList.length; index += 1) {
    itemList[index].addEventListener('click', (event) => {
      for (let index1 = 0; index1 < itemList.length; index1 += 1) {
        itemList[index1].style.backgroundColor = 'white'
      }

      itemList[index].style.backgroundColor = 'rgb(128,128,128)'
    });
  }
}
// itemList.addEventListener('click', (event) => {
//   for (let index = 0; index < itemList.length; index += 1) {
//     itemList[index].style.backgroundColor = 'white'
//   }

//   this.style.backgroundColor = 'rgb(128,128,128)'

// if(itemLista = event.target){
//   itemLista.classList.add('itens-lista')
//   itemLista.style.backgroundColor = 'rgb(128,128,128)'

// } else {
//   itemLista.classList.remove('itens-lista')
//   itemLista.style.backgroundColor = 'white'
//   console.log(itemLista = event.target);
// }
//   })
// }

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

let btnApagar = document.getElementById('apaga-tudo')
btnApagar.addEventListener('click', apagar)

function apagar() {

  listaTarefasOl.innerHTML = ''

}
