// const elDogButton = document.querySelector("#dog-button");
// const elDogImage = document.querySelector("#dog-image");

// elDogButton.onclick = async () => {
//     const response = await fetch("https://random.dog/woof.json");
//     const data = await response.json();
//     elDogImage.src = data.url;
// }


///////////////////

// Haal de HTML elementen op (worden DOM objecten).
const elPokemonButton = document.querySelector("#pokemon-button");
const elPokemonImage = document.querySelector("#pokemon-image");
const elPokemonName = document.querySelector("#pokemon-name");

// Op het moment dat er op de knop wordt geklikt.
elPokemonButton.onclick = async () => {
    // Reset the velden
    elPokemonImage.classList = "hidden";
    elPokemonImage.src = "";
    elPokemonName.textContent = "";

    // Krijg een random getal tussen 1 en 1000
    const randomId = Math.floor(Math.random() * 1000) + 1;

    // Dit zijn de regels waar het allemaal om draait.
    // We doen een request naar de PokeAPI om data van een pokémon op te halen.
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + randomId);
    // Deze response zetten we om naar een JSON, het formaat dat de API gebruikt.
    const data = await response.json();
    console.log(data);

    elPokemonImage.src = data.sprites.other["official-artwork"].front_default;

    setTimeout(function () {
        elPokemonImage.classList = "";
        elPokemonName.textContent = data.name;
    }, 3000);
}