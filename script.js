document.getElementById("recargaForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const diamantes = document.querySelector('input[name="diamantes"]:checked').value;
  const playerID = document.getElementById("playerID").value;
  const playerName = document.getElementById("playerName").value;
  const contact = document.getElementById("contact").value;
  const paymentMethod = document.getElementById("paymentMethod").value;

  const message = `Pedido de Recarga:\nDiamantes: ${diamantes}\nID do Jogador: ${playerID}\nNome do Jogador: ${playerName}\nWhatsApp: ${contact}\nMétodo de Pagamento: ${paymentMethod}`;

  const whatsappUrl = `https://wa.me/244930441438?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank");
});

function validateID() {
  const playerID = document.getElementById("playerID").value;
  const playerName = document.getElementById("playerName").value;
  const validationMessage = document.getElementById("validationMessage");
  const submitButton = document.getElementById("submitButton");

  if (playerID && playerName) {
    validationMessage.innerHTML = `ID do Jogador: ${playerID} | Nome do Jogador: ${playerName}`;
    submitButton.disabled = false;
  } else {
    validationMessage.innerHTML = "Por favor, insira seu ID e Nome corretamente.";
    submitButton.disabled = true;
  }
}