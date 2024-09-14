document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('orderForm');
    const diamondOptions = document.querySelectorAll('.diamond-option');
    
    let selectedDiamonds = 0;
    let selectedPrice = 0;

    diamondOptions.forEach(option => {
        option.addEventListener('click', function () {
            selectedDiamonds = this.getAttribute('data-diamonds');
            selectedPrice = this.getAttribute('data-price');

            diamondOptions.forEach(opt => opt.style.backgroundColor = '#333');
            this.style.backgroundColor = '#444';
        });
    });

    form.onsubmit = function (event) {
        event.preventDefault();
        
        const contact = document.getElementById('contact').value;
        const username = document.getElementById('username').value;
        const playerId = document.getElementById('playerId').value;
        const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

        const message = `Olá DM! Meu Novo pedido!\n\nDiamantes: ${selectedDiamonds}\nPreço: ${selectedPrice} Kz\nContato: ${contact}\nNome do Jogador: ${username}\nID do Jogador: ${playerId}\nMétodo de Pagamento: ${paymentMethod}`;

        window.open(`https://wa.me/+244930441438?text=${encodeURIComponent(message)}`, '_blank');
        form.reset();
        diamondOptions.forEach(opt => opt.style.backgroundColor = '#333');
    };
});
