const botaoA = document.querySelector("button");
const td11 = document.getElementById("abcd");
let json_var =await fetch(new Request("https://github.com/Noobs0nes/Ficha-DND5E/blob/main/players.JSON")).json();

botaoA.onclick = () => {
  //var nome = prompt("Qual seu nome?",null);
  alert(json_var);
  td11.textContent = JSON.stringify(json_var);
}
