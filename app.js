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

//criando função amigoSecreto 
let amigoSecreto = [];
function amigoSecreto() {
    let amigoSecreto = document.getElementById("amigo").value;
    if (amigoSecreto == "") {
        alert("Inserir nome do amigo secreto");
    } else {
        listaAmigos.push(amigoSecreto);
        document.getElementById("amigo").value ="";
        atualizarLista();
    }
}
