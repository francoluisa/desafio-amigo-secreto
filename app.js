let amigos = [];

function adicionarAmigo(){
    let novoAmigo = document.getElementById('amigo').value;
    if (novoAmigo == "") {
        alert('Por favor, insira um nome válido.');
    }
    amigos.push(novoAmigo);
    console.log(amigos);
    limparCampo();
    atualizarLista();
    listarAmigos();
}

function limparCampo () {
    novoAmigo = document.getElementById('amigo');
    novoAmigo.value = '';
}

function atualizarLista (){
    let listaNomes = document.getElementById('listaAmigos');
    listaNomes.innerHTML = '';
}

function listarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = amigos[i];
        listaAmigos.appendChild(li);
    }    
}

function sortearAmigo () {
    if (amigos == '') {
        alert('Por favor, insira um nomes a lista.');
    }
    let nomeSorteado = Math.floor(Math.random() * amigos.length);
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O Amigo secreto sorteado é ${amigos[nomeSorteado]}`;
}