const botaoA = document.querySelector("button");
const td11 = document.getElementById("abcd");
//import data from "./players.JSON";
let header2 = document.querySelector("h2");
header2.textContent = "Não sei oq ta acontecendo!";
botaoA.onclick = () => {
  alert("Botão clicado!")
  let json_var = data;
  alert("Deu boa?")
  header2.textContent = json_var.players[0].nome;
  //var nome = prompt("Qual seu nome?",null);
  alert(json_var);
  td11.textContent = JSON.stringify(json_var);
}
