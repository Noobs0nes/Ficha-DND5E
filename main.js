const botaoA = document.querySelector("button");
const td11 = document.getElementById("abcd");
//let json_var =await fetch(new Request("./players.JSON")).json();

botaoA.onclick = () => {
  var nome = prompt("Qual seu nome?",null);
  td11.textContent = nome;
  //botaoA.textContent = JSON.stringify(json);
}
