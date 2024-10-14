const botaoA = document.getElementById("botaoA");
botaoA.onClick = () => {
  document.getElementById("name_var").innerHTML = prompt("Diga seu nome");
}
