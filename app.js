
// Array para armazenar os nomes adicionados
let amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    // Validação: campo vazio
    if (nome === "") {
        alert("Por favor, digite um nome válido!");
        return;
    }

    // Adiciona o nome no array
    amigos.push(nome);

    // Atualiza a lista exibida na tela
    atualizarLista();

    // Limpa o campo de entrada
    input.value = "";
}

// Função para atualizar a lista visível na tela
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');

    // Limpa a lista antes de renderizar
    lista.innerHTML = "";

    // Cria um <li> para cada nome
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    // Validação: lista vazia
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear!");
        return;
    }

    // Sorteio aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    // Exibe o resultado na tela
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
}
