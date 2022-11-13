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


async function traerGatitos(apiURL) {
    const respuesta = await fetch(apiURL);
    const data = await respuesta.json();

    return data[0].url;
}

const mostrarGatitos = async(apiURL) => {
    try {
        const gatetes = await traerGatitos(`${apiURL}`);
         
    } catch (error) {

    }
}