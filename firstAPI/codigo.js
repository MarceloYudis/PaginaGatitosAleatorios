document.write("lol")
const API = "https://api.thecatapi.com/v1/images/search"

const botonsito = document.getElementById("BOTOM");


async function traerGatitos(apiURL) {
    const respuesta = await fetch(API);
    const data = await respuesta.json();

   const gatetes = await data[0].url;
   const imagen = await document.querySelector('img');
        imagen.src = gatetes;
}

const mostrarGatitos = async(url) => {
    try {
        const gatetes = await traerGatitos(url);
        const imagen = document.querySelector('img');
        imagen.src = gatetes;
         
    } catch (error) {

    }
}

botonsito.addEventListener("click",traerGatitos(API));

// function invocarGatitos() {
// fetch(API)
// .then(response => response.json())
// .then(data => {
//     const IMGAgatito = data[0].url;
//     const imagen = document.querySelector('img');
//     imagen.src = IMGAgatito;
// })
// }

