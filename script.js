const horariosDisponiveis = [
  "08:00", "09:00", "10:00",
  "13:00", "14:00", "15:00",
  "16:00"
];

document.getElementById("data").addEventListener("change", () => {
  const selectHorario = document.getElementById("horario");
  selectHorario.innerHTML = "";

  horariosDisponiveis.forEach(horario => {
    const option = document.createElement("option");
    option.value = horario;
    option.textContent = horario;
    selectHorario.appendChild(option);
  });
});

document.getElementById("formAgendamento").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const email = document.getElementById("email").value.trim();
  const data = document.getElementById("data").value;
  const horario = document.getElementById("horario").value;

  if (!nome || !telefone || !email || !data || !horario) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const resumo = document.getElementById("resumo");
  resumo.style.display = "block";
  resumo.innerHTML = `
    <h3>Agendamento Confirmado!</h3>
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Telefone:</strong> ${telefone}</p>
    <p><strong>E-mail:</strong> ${email}</p>
    <p><strong>Data:</strong> ${new Date(data).toLocaleDateString('pt-BR')}</p>
    <p><strong>Horário:</strong> ${horario}</p>
  `;

  this.reset();
  document.getElementById("horario").innerHTML = '<option value="">Selecione a data primeiro</option>';
});