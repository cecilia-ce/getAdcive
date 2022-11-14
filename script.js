const btn = document.getElementById("btn");
const adviceDiv = document.getElementById("advice-div");
const adviceText = document.createElement("p")

let text = "";
btn.addEventListener('click', (event) => {
    getAdvice();
});

function createText(message){
    if(text === ""){
        text = message
        adviceText.innerText = message
        adviceText.classList.add("advice-text")
        adviceDiv.appendChild(adviceText)
    }else{
        adviceText.innerText = message
    }
}

function getAdvice(){

    fetch("https://api.adviceslip.com/advice")
    .then(response => {response.json()
        .then( data => createText(data.slip.advice) )
    })
    .catch(e => alert("Erro:"+ e.message))

}

