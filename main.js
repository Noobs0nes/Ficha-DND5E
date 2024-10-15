const botaoA = document.querySelector("button");
let json = require("./players.json");
let json =await  Response(await fetch(new Request("./players.JSON")));
botaoA.onclick = () => {
  var nome = prompt("Qual seu nome?",null);
  botaoA.textContent = JSON.stringify(json);
}
