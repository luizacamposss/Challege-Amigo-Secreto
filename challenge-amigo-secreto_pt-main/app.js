// O objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
document.addEventListener("DOMContentLoaded", function () {
    const amigos = [];

    // Adiciona um novo amigo à lista
    function adicionarAmigo() {
        const input = document.getElementById("amigo");
        const nome = input.value.trim();

        if (!nome) {
            alert("Digite um nome válido!");
            return;
        }

        if (amigos.includes(nome)) {
            alert("Esse nome já foi adicionado!");
            return;
        }

        amigos.push(nome);
        atualizarLista();
        input.value = "";
    }

    // Atualiza a lista visível de amigos
    function atualizarLista() {
        const lista = document.getElementById("listaAmigos");
        lista.innerHTML = amigos.map(nome => `<li>${nome}</li>`).join("");
    }

    // Realiza o sorteio e exibe os resultados
    function sortearAmigo() {
        if (amigos.length < 2) {
            alert("Adicione pelo menos dois amigos para sortear!");
            return;
        }

        const sorteio = [...amigos];
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = "";

        amigos.forEach(amigo => {
            let amigoSorteado;

            do {
                amigoSorteado = sorteio[Math.floor(Math.random() * sorteio.length)];
            } while (amigo === amigoSorteado);

            // Remove o sorteado da lista
            sorteio.splice(sorteio.indexOf(amigoSorteado), 1);

            const li = document.createElement("li");
            li.textContent = `${amigo} tirou ${amigoSorteado}`;
            resultado.appendChild(li);
        });
    }

    // Expondo funções ao escopo global
    window.adicionarAmigo = adicionarAmigo;
    window.sortearAmigo = sortearAmigo;
});
