const API = "https://api.thecatapi.com/v1/images/search?limit=3&api_key=live_ehGicg6RazPr5LRt68uOav3QHOvJcsqWQb6vjIgfQG80ZZb5Z0Aog8vh2PBKtRr5";
const favorites_API = "https://api.thecatapi.com/v1/favourites";  



const botonsito = document.getElementById("BOTOM");
const spanError = document.getElementById("error");

let dataRANDOM;


async function traerGatitos(apiURL) {
    const respuesta = await fetch(API);
    const data = await respuesta.json();
    dataRANDOM = await data;

    const aidys = await data[0];

    console.log("AIDYS",aidys)

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


        /* 
                const h2 = document.createElement('h2');
        const h2Text = document.createTextNode('Gatos aleatorios');
        const Section = document.getElementById("allcontent");

        
        h2.appendChild(h2Text);
        Section.appendChild(h2)
        Section.innerHTML = "";
*/


        const botonprimero = await document.getElementById('botonprimero');
        const botonsegundo = await document.getElementById('botonsegundo');
        const botontercero = await document.getElementById('botontercero');

        botonprimero.onclick = () => {guardarFavoritosGatitos(data[0].id)}
        botonsegundo.onclick = () => {guardarFavoritosGatitos(data[1].id)}
        botontercero.onclick = () => {guardarFavoritosGatitos(data[2].id)}

        
        favoritosGatitos()

}
}


async function favoritosGatitos() {
    const respuesta = await fetch(favorites_API, {
        headers: {'content-type':'application/json',
        "x-api-key":"live_49av3KtjwvLIIrxkImZnNg0hk5ReJK57Qj9Bo8i5fhQzVHALmCG3AxVXhnNiICev"}
    });

    const dataFAV = await respuesta.json();
   


    if(respuesta.status !==200) {
        spanError.innerHTML = "Hubo un error" + respuesta.status;
     }else{
          const Section = document.getElementById("favorites");
        Section.innerHTML = "";

        console.log("DATA",dataFAV)
        console.log(dataFAV.message)

        const h2 = document.createElement('h2');
        const h2Text = document.createTextNode('Gatos Favoritos');
        //const Section = document.getElementById("favorites");

        
        const sectionFather = document.createElement('section');
        sectionFather.setAttribute('class', "sectionFather")

        dataFAV.forEach(michi => {
           
            ;

            const article = document.createElement('article');
            const img = document.createElement('img');
            const buttonAdd = document.createElement('button');
            const binText = document.createTextNode('Sacar michi')
            
            article.setAttribute('class', "containerMichisFav")
            console.log(michi.image.url)
            buttonAdd.appendChild(binText);
            buttonAdd.onclick = () => {borrarGatos(michi.id);}

            img.src = michi.image.url; 
            img.width = 300;
            article.appendChild(img);
            article.appendChild(buttonAdd);

            sectionFather.appendChild(article)
            
        }) 
        const section = document.getElementById('favorites');
        section.appendChild(sectionFather)

       

    }
    console.log("AAAAAAAAAAAH"+respuesta.status)
}


function botonGUARDO(iD) {
    console.log("MICHI GUARDADO");
    console.log(dataRANDOM)
    const data_random = dataRANDOM;

    const gato = iD;
    console.log(gato)

    guardarFavoritosGatitos(gato)
}

async function actualizarGatos() {

    const Section = document.getElementById("favorites");
    Section.innerHTML = "";


    const h2 = document.createElement('h2');
    const h2Text = document.createTextNode('Gatos Favoritos');
    //const Section = document.getElementById("favorites");

    
    h2.appendChild(h2Text);
    Section.appendChild(h2);
}

async function guardarFavoritosGatitos(ID) {

    console.log("GUARDAR FAV => ID = " + ID)

    const respt = await fetch("https://api.thecatapi.com/v1/favourites", {
        method: 'POST',
        headers:{'x-api-key':'live_49av3KtjwvLIIrxkImZnNg0hk5ReJK57Qj9Bo8i5fhQzVHALmCG3AxVXhnNiICev',
        'content-type':'application/json'},
        body: JSON.stringify({
            "image_id":ID
        })
    })
    const datax = respt.json() 
    

    if(respt.status !==200) {
        console.log(datax.message)
    } else {
        console.log("DATAX EN FAV => "+datax)
        favoritosGatitos()
    }
}

async function borrarGatos(id) {
    //console.log(id)
    const res = await fetch(`https://api.thecatapi.com/v1/favourites/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type':'application/jason',
            'x-api-key': 'live_49av3KtjwvLIIrxkImZnNg0hk5ReJK57Qj9Bo8i5fhQzVHALmCG3AxVXhnNiICev'
        },
        
    })

    const datos = await res.json()
    if(res.status !==200) {
        console.log("error " + res.status)
     }else{
        console.log("DATA",datos)
        console.log(datos.message)
        favoritosGatitos()
     }


}

async function thanosGatitos() {
    const respt = await fetch(favorites_API, {
        headers: {'content-type':'application/json',
        "x-api-key":"live_49av3KtjwvLIIrxkImZnNg0hk5ReJK57Qj9Bo8i5fhQzVHALmCG3AxVXhnNiICev"}
    });

    const dataFAV = await respt.json();

    console.log("DATA ",dataFAV)

    dataFAV.forEach( michito => {

        if(michito.id != "100111878" | michito.id != "100112064") {
            borrarGatos(michito.id)
        }
        //console.log(michito.id)
      
    })

    const data = await rest.json()


    console.log("SAVE");
    console.log(rest)
    if(rest.status !==200) {
        spanError.innerHTML = "Hubo un error" + rest.status + data.messages;
     }else{
        console.log("michi guradado en favoritos")
        favoritosGatitos()
     }
    
}

botonsito.addEventListener("click",traerGatitos(API));
