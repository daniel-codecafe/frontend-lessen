// const elDogButton = document.querySelector("#dog-button");
// const elDogImage = document.querySelector("#dog-image");

// elDogButton.onclick = async () => {
//     const response = await fetch("https://random.dog/woof.json");
//     const data = await response.json();
//     elDogImage.src = data.url;
// }

//////////////////////////
//////////////////////////
//////////////////////////

const elPokemonButton = document.querySelector("#pokemon-button");
const elPokemonInput = document.querySelector("#pokemon-input");
const elPokemonImage = document.querySelector("#pokemon-image");
const elPokemonName = document.querySelector("#pokemon-name");

const revealPokemon = async (data) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            elPokemonImage.classList = "";
            elPokemonName.textContent = data.name;
            resolve();
        }, 3000);
    });
}

elPokemonInput.onkeyup = async function (e) {
    // Op het moment dat er enter wordt gedrukt...
    if (e.key === 'Enter' || e.keyCode === 13) {
        debugger;
        elPokemonImage.classList = "hidden";
        elPokemonImage.src = "";
        elPokemonName.textContent = "";
        // const randomId = Math.floor(Math.random() * 1000) + 1;
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + this.value);
        const data = await response.json();
        console.log(data);
        elPokemonImage.src = data.sprites.other["official-artwork"].front_default;
        await revealPokemon(data);
        document.querySelector("#tekst").textContent = "Tadaaa!";
    }
};


elPokemonButton.onclick = async () => {
    elPokemonImage.classList = "hidden";
    elPokemonImage.src = "";
    elPokemonName.textContent = "";
    const randomId = Math.floor(Math.random() * 1000) + 1;
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + randomId);
    const data = await response.json();
    console.log(data);
    elPokemonImage.src = data.sprites.other["official-artwork"].front_default;
    await revealPokemon(data);
    document.querySelector("#tekst").textContent = "Tadaaa!";
}