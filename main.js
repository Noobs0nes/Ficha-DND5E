const botaoA = document.querySelector("button");
const td11 = document.getElementById("abcd");
let header2 = document.querySelector("h2");
header2.textContent = "Não sei oq ta acontecendo!";
botaoA.onclick = () => {
  requ
  let json_var = Request('./players.JSON');
  alert("Botão clicado!")
  header2.textContent = json_var.players[0].nome;
  //var nome = prompt("Qual seu nome?",null);
  alert(json_var);
  td11.textContent = JSON.stringify(json_var);
}
