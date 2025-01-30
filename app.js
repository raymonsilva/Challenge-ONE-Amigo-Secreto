let amigos = [];

function adicionarAmigo() {
    let amigoInput = document.getElementById('amigo');
    if (!amigoInput) {
        alert('Elemento com id "amigo" não encontrado');
        return;
    }
    let amigo = amigoInput.value.trim();

    if (amigo === '') {
        alert('Por favor, insira um nome');
        return;
    }

    amigos.push(amigo);
    amigoInput.value = '';
    exibirAmigos();
}

function exibirAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione amigos antes de sortear!');
        return;
    }

    let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById('resultado').textContent = `Amigo Secreto: ${amigoSecreto}`;
}

document.getElementById('adicionar').addEventListener('click', adicionarAmigo);
document.getElementById('sortear').addEventListener('click', sortearAmigoSecreto);
