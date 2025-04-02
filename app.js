//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigosList = "";

//criando a função adicionar nome a lista
function salvarNome() {
   amigosList = document.getElementById("nome").value;
    if (amigos == "") {
        alert("Inserir nome");
    } else {
        listaDeAmigos.push(amigos);
        document.getElementById("nome").value = "";
        atualizarLista();
    }
}

