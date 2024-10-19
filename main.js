const botaoA = document.querySelector("button");
const td11 = document.getElementById("abcd");
let header2 = document.querySelector("h2");
localStorage.setItem("ObjetoPlayers",{
  "buck":{
    "raça":{
      "humano":{
        "bonus":{ 
          "stats":[["STR","DEX","CON","INT","WIS","CHA"],
                   [  1  ,  1  ,  1  ,  1  ,  1  ,  1  ]],
          "any": true
        }
      }
    },
    "vida":{
      "atual":34,
      "total":34
    },
    "spells":{
      "slots":{
        "1":4,
        "2":3,
        "3":3
      },
      "list":{
        "1":["WIP"],
        "2":["WIP"],
        "3":["WIP"],
        "4":["WIP"],
        "5":["WIP"],
        "6":["WIP"],
        "7":["WIP"],
        "8":["WIP"],
        "9":["WIP"]
      }
    }

  }
})