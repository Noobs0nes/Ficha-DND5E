import css_call from "./css_call.js"
function alteraVida(value){
    document.getElementById("vidaAtual").textContent = value;
    let total = document.getElementById("vidaTotal").textContent;
    let percent = Number(value)/Number(total)*100
    css_call.changeCssVar(percent);

    
}