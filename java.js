document.getElementById('diamantes').addEventListener('change', function() {
    const preco = this.options[this.selectedIndex].dataset.preco;
    document.getElementById('preco-total').textContent = `Preço total: ${preco} Kz`;
});

document.getElementById('pedido-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const idJogador = document.getElementById('id-jogador').value;
    const nomeJogador = document.getElementById('nome-jogador').value;

    if (!idJogador || !nomeJogador) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const diamantes = document.getElementById('diamantes').value;
    const preco = document.querySelector(`#diamantes option[value="${diamantes}"]`).dataset.preco;
    const metodoPagamento = document.getElementById('metodo-pagamento').value;

    const mensagem = `Pedido de Diamantes:\nQuantidade: ${diamantes} Diamantes\nPreço: ${preco} Kz\nID do Jogador: ${idJogador}\nNome do Jogador: ${nomeJogador}\nMétodo de Pagamento: ${metodoPagamento}`;
    const linkWhatsApp = `https://wa.me/244930441438?text=${encodeURIComponent(mensagem)}`;

    window.location.href = linkWhatsApp;
});
