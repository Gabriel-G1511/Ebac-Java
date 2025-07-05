document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const telefone = document.getElementById("telefone").value.trim();

  // Validação simples
  if (!nome || !telefone) {
    alert("Preencha todos os campos corretamente.");
    return;
  }

  // Validar telefone: só números e tamanho 8-15 dígitos
  const telefoneRegex = /^\d{8,15}$/;
  if (!telefoneRegex.test(telefone)) {
    alert("Telefone inválido. Use apenas números, entre 8 e 15 dígitos.");
    return;
  }

  const novaLinha = document.createElement("tr");
  novaLinha.innerHTML = `<td>${nome}</td><td>${telefone}</td>`;

  document.getElementById("tabela").appendChild(novaLinha);

  this.reset();
});
