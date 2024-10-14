const botaoA = document.querySelector("button");

botaoA.onclick = () => {
  var nome = prompt("Qual seu nome?",null);
  document.querySelector("abcd").textContent = nome;
}
