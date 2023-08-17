const btn = document.getElementById("btn");
const inputField = document.getElementById("inp");
const display = document.getElementById("display");
const warn = document.getElementById("warn");
let nizDel = document.querySelectorAll(".deleter");

const deleteToDo = (par) => {
    par.style.display = "none";
}

const addToDo = () => {
    let toDo = document.createElement("p");
    if (inputField.value != "" && inputField.value != null) {
        toDo.innerHTML = `${inputField.value} <span class="deleter">X</span>`;
        display.appendChild(toDo);
        inputField.value = "";
        warn.innerHTML = ""
        brisanje();
    } else {
        warn.innerHTML = "Please fill the input field above !";
    }
}
const crossing = (p)=>{
    p.style.textDecoration="line-through";
  }
  
const brisanje = () => {
    btn.addEventListener("click", addToDo);
    let nizParagrafa = document.querySelectorAll("#display p");
    //nizParagrafa.forEach(par=>{
   //     par.addEventListener("click",crossing(par))
   // })
    nizParagrafa.forEach(paragraf => {
        let spance = paragraf.querySelector("span");
        spance.addEventListener("click", () => {
            deleteToDo(paragraf);
            nizParagrafa = document.querySelectorAll("#display p");
            console.log("enega")
        })
    })
}
brisanje();

