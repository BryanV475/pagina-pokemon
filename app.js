//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const contenedor = document.querySelector("#contenedor");

// const nuevaImg = document.createElement("img");
// nuevaImg.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png";

// contenedor.appendChild(nuevaImg);
const urlBase="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i <= 898; i++) {
    const pokemon = document.createElement("div");
    pokemon.classList.add("pokemon");
    const etiqueta = document.createElement("span");
    etiqueta.innerText = `#${i}`;
    const nuevaImg = document.createElement("img");
    nuevaImg.src = `${urlBase}${i}.png`;
    //contenedor.appendChild(nuevaImg);
    pokemon.appendChild(nuevaImg);
    pokemon.appendChild(etiqueta);
    contenedor.appendChild(pokemon);
}

