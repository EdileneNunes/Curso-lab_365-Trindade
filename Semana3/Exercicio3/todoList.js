
let lista = [];
//Função para cadastrar tarefa
function adicionarTarefa() {
  let nomeTarefa = document.getElementById("adicionar").value;
  // Verifica se os campos estão com dados digitados
  if (nomeTarefa == "") {
    alert(" O campo nome da tarefa é obrigatório!");
  } else {
    let tarefa = {
      tarefa: nomeTarefa,
    };
    // leva tarefa para localStorage
    let tarefaString = localStorage.getItem("chaveTarefa");
    lista = JSON.parse(tarefaString);
    if (lista == null) {
      lista = [];
    }

    lista.push(tarefa);
    localStorage.setItem("chaveTarefa", JSON.stringify(lista));
    alert("Registrado com sucesso!");
  }
}

function buscarTarefa() {
  let trazerTarefa = document.getElementById("buscar").value;

  let mostrarTarefa = ''
  lista = JSON.parse(localStorage.getItem("chaveTarefa"));
  for (i = 0; i < lista.length; i++) {
    if (trazerTarefa == lista[i].tarefa){

        mostrarTarefa = (Object.values(lista[i])) + '<br>'

    }
  }
  document.getElementById('mostrar').innerHTML = mostrarTarefa
}

function alterarTarefa() {
    let selecionaTarefa = document.getElementById("tarefaAtual")
    lista = JSON.parse(localStorage.getItem("chaveTarefa"));
    for (i = 0; i <lista.length; i++) {
        if (selecionaTarefa.value == lista[i].tarefa) {
            let novaTarefa = document.getElementById("novaTarefa")
            lista[i].tarefa = novaTarefa.value
            alert("Tarefa Alterado com sucesso!!!!!!")
        }
    }
    localStorage.setItem('chaveTarefa', JSON.stringify(lista))
}

function deletarTarefa() {
  let excluirTarefa = document.getElementById("deletar");
  let posicaVetor;
  lista = JSON.parse(localStorage.getItem("chaveTarefa"));
  for (i = 0; i < lista.length; i++) {
    if (excluirTarefa.value == lista[i].tarefa) {
      posicaVetor = i;
      lista.splice(posicaVetor, 1);
      alert("Produto excluido com sucesso!!");
    }
  }
  localStorage.setItem('chaveTarefa', JSON.stringify(lista))
}



/*Faça uma lista de tarefas diárias (strings), e crie 4 funções diferentes.
Função que busca se a tarefa existe na lista.
Função que altera um item da lista.
Função que deleta um item da lista
Função que adiciona um item na lista*/