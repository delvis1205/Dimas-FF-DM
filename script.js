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

            form.onsubmit = function (event) {
                event.preventDefault();
                
                const contact = document.getElementById('contact').value;
                const username = document.getElementById('username').value;
                const playerId = document.getElementById('playerId').value;
                const paymentMethods = Array.from(document.querySelectorAll('input[name="paymentMethod"]:checked'))
                    .map(el => el.value).join(', ');

                const message = `Saudações DM pedido!\n\nDiamantes: ${selectedDiamonds}\nPreço: ${selectedPrice} Kz\nContato: ${contact}\nNome do Jogador: ${username}\nID do Jogador: ${playerId}\nMétodos de Pagamento: ${paymentMethods}`;

                window.open(`https://wa.me/+244930441438?text=${encodeURIComponent(message)}`, '_blank');
                form.reset();
                diamondOptions.forEach(opt => opt.style.backgroundColor = '#333');
            };
        });
    });
});
