const botaoA = document.querySelector("button");
const td11 = document.getElementById("abcd");
let json_var =await fetch("/players.JSON").json();
let header2 = document.createElement("h2");
header2.textContent = json_var.players[0].nome;
/*
botaoA.onclick = () => {
  //var nome = prompt("Qual seu nome?",null);
  alert(json_var);
  td11.textContent = JSON.stringify(json_var);
}*/
