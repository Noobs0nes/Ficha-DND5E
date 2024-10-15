const botaoA = document.querySelector("button");

let json_var =await fetch(new Request("./players.JSON")).json();

botaoA.onclick = () => {
  var nome = prompt("Qual seu nome?",null);
  botaoA.textContent = JSON.stringify(json);
}
