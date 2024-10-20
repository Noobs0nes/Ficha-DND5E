function alteraVida(value){
    document.getElementById("vidaAtual").textContent = value;
    let total = document.getElementById("vidaTotal").textContent;
    let percent = Number(value)/Number(total)*100
    document.documentElement.style.setProperty("--WIDTHVIDA",percent+"%");   
}
let b = document.querySelector("button")
b.onclick = ()=>{
    let vida =prompt("vida");
    alteraVida(vida);    
}
