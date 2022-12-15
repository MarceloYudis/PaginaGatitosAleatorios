const API = "https://api.thecatapi.com/v1/images/search?limit=3&api_key=live_ehGicg6RazPr5LRt68uOav3QHOvJcsqWQb6vjIgfQG80ZZb5Z0Aog8vh2PBKtRr5"
const favorites_API = "https://api.thecatapi.com/v1/favourites?api_key=live_ehGicg6RazPr5LRt68uOav3QHOvJcsqWQb6vjIgfQG80ZZb5Z0Aog8vh2PBKtRr5";   

const botonsito = document.getElementById("BOTOM");
const spanError = document.getElementById("error");

async function traerGatitos(apiURL) {
    const respuesta = await fetch(API);
    const data = await respuesta.json();

   const gatetes0 = await data[0].url;
   const gatetes1 = await data[1].url;
   const gatetes2 = await data[2].url;

    if(respuesta.status !==200) {
        spanError.innerHTML = "Hubo un error" + respuesta.status;
    } else {
        const imagen0 = await document.getElementById('img0');
        imagen0.src = gatetes0;
    
        const imagen1 = await document.getElementById('img1');
        imagen1.src = gatetes1;
        const imagen2 = await document.getElementById('img2');
        imagen2.src = gatetes2;

        data.forEach(michi => {
          
            const article = document.createElement('article');
            const img = document.createElement('img');
            const buttonAdd = document.createElement('button');
            const binText = document.createTextNode('Sacar michi')

        })
    }
    console.log(respuesta.status)
}

async function favoritosGatitos() {
    const respuesta = await fetch(favorites_API);
    const data = await respuesta.json();

    const favGatito = await data[0].url;

    if(respuesta.status !==200) {
        spanError.innerHTML = "Hubo un error" + respuesta.status;
     }else{

     }
}

async function guardarFavoritosGatitos() {
    const rest = await fetch(favorites_API, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',

        },
        body: JSON.stringify({
            image_id: "n7"
        })
    })
    console.log(rest);
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