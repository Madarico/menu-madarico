fetch('menu.json')
.then(res => res.json())
.then(data => {

    const container = document.getElementById('menu');

    const supportMap = {
        "STARTER":"starter.png",
        "WRAP": "wrap.png",
        "CLUB SANDWICH": "club.png",
        "SMASH CLUB": "smash.png",
        "SPECIAL MAD": "special.png",
        "BURGER": "burger.png",
        "BUN SEA": "bunsea.png",
        "GRILL MASTER": "grill.png",
        "GREEN ZONE": "green.png",
        "PINSE": "pinse.png",
        "DESSERT": "dessert.png",
        "BEVANDE": "bevande.png",
        "BIRRE": "birre.png",
        "VINI": "vini.png",
        "DRINK": "drink.png",
        
    };

    for (const categoria in data) {

        // BLOCCO
        const bloccoCategoria = document.createElement('div');
        bloccoCategoria.classList.add('categoria');

        // CARD CATEGORIA
        const card = document.createElement('div');
        card.classList.add('card-categoria');

        const supporto = document.createElement('img');
        supporto.src = "immagini/" + (supportMap[categoria] || "starter.png");
        supporto.classList.add('categoria-supporto');

        card.appendChild(supporto);
    
       // LISTA PIATTI
        const listaPiatti = document.createElement('div');
        listaPiatti.classList.add('lista-piatti');

        card.addEventListener("click", () => {
            listaPiatti.classList.toggle("aperta");
            card.classList.toggle("attiva");
        });

        // PIATTI
        data[categoria].forEach(piatto => {

            const item = document.createElement('div');
            item.classList.add('piatto');
            
        item.innerHTML = `
        <strong>${piatto.nome}</strong>
        <div class="ingredienti">${piatto.ingredienti}</div>
        <div class="prezzo">${piatto.prezzo}</div>
        `;

            item.onclick = () => mostraFoto(piatto);

            listaPiatti.appendChild(item);
        });

        bloccoCategoria.appendChild(card);
        bloccoCategoria.appendChild(listaPiatti);

        container.appendChild(bloccoCategoria);
    }

});

function entraMenu(){

window.location.href = "menu.html";

}

function mostraFoto(piatto){

const popup = document.createElement("div");
popup.classList.add("popup");

popup.innerHTML = `

<div class="popup-content">

<span class="close">&times;</span>

<img src="${piatto.foto}" class="popup-img">

<h2>${piatto.nome}</h2>

<p>${piatto.ingredienti}</p>

<div class="popup-prezzo">${piatto.prezzo}</div>

</div>

`;

document.body.appendChild(popup);

popup.querySelector(".close").onclick = () => popup.remove();

popup.onclick = (e)=>{
if(e.target === popup) popup.remove();
}

}