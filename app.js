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

