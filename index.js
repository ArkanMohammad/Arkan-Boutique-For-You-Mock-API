const API_URL = "https://6a3817d1c105017aa639a51f.mockapi.io/ArkanBoutiqueForYou/dresses";
async function getDresses(){
    try{
        const response = await fetch(API_URL);
        if(!response.ok){
            throw new Error("fetch data is failed");
        }
        const dresses = await response.json();
        console.log(dresses);
        displayDress(dresses);
    }
    catch(error){
        console.log(error);
    }
}
const dressContainer = document.getElementById("dressContainer");
const loadingMessage = document.getElementById("loadingMessage");
function displayDress(dresses){
    loadingMessage.textContent = "";
    if(dresses.length === 0){
        loadingMessage.textContent = "no dresses available in STOCK";
        return;
    }
    //create a new Card for the dresses
    dresses.forEach(dress=>{
        const card = document.createElement("section");
        card.classList.add("dress-card");
        card.innerHTML = `
        <img src = "${dress.image}" alt = "${dress.name}"
        <section>
        <p> Color : ${dress.color}</p>
        <p> size : ${dress.color}</p>
        <p> price : ${dress.price} $</p>modelHeight
        <p> modelHeight : ${dress.modelHeight}</p>
        </section>
        `
        //add the dress to DOM
        dressContainer.appendChild(card);
    });
}
getDresses();
