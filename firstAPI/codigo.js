document.write("lol")
const API = "https://api.thecatapi.com/v1/images/search"

const botonsito = document.getElementById("BOTOM")
botonsito.addEventListener("click",invocarGatitos())

function invocarGatitos() {
fetch(API)
.then(response => response.json())
.then(data => {
    const IMGAgatito = data[0].url;
    const imagen = document.querySelector('img');
    imagen.src = IMGAgatito;
})
}