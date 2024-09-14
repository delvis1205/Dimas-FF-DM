document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('orderForm');
    const diamondOptions = document.querySelectorAll('.diamond-option');
    const loadNowButton = document.getElementById('loadNowButton');
    
    let selectedDiamonds = '';
    let selectedPrice = '';

    diamondOptions.forEach(option => {
        option.addEventListener('click', function () {
            selectedDiamonds = this.getAttribute('data-diamonds');
            selectedPrice = this.getAttribute('data-price');

            diamondOptions.forEach(opt => opt.style.backgroundColor = '#333');
            this.style.backgroundColor = '#444';
        });
    });

    loadNowButton.addEventListener('click', function () {
        if (!selectedDiamonds) {
            alert('Por favor, selecione uma quantidade de diamantes.');
            return;
        }

        const contact = document.getElementById('contact').value;
        const username = document.getElementById('username').value;
        const playerId = document.getElementById('playerId').value;
        const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');

        if (!paymentMethod) {
            alert('Por favor, selecione um método de pagamento.');
            return;
        }

        const paymentMethodValue = paymentMethod.value;
        const message = `Novo pedido!\n\nDiamantes: ${selectedDiamonds}\nPreço: ${selectedPrice} Kz\nContato: ${contact}\nNome do Jogador: ${username}\nID do Jogador: ${playerId}\nMétodo de Pagamento: ${paymentMethodValue}`;
