const botaoA = document.querySelector("button");
let json = require("./players.json");
botaoA.onclick = () => {
  var nome = prompt("Qual seu nome?",null);
  document.querySelector("abcd").textContent = JSON.stringify(json);
}
