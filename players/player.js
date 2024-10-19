let host =  document.location.host ;
let prefix = "http://" + host +"/players/";
let sufix = ".html";
let title = document.location.href.replace(prefix,'').replace(sufix,'').toUpperCase();
document.querySelector("title").innerText = title;
document.getElementById("tituloPagina").textContent = title;
