// const myDiv = document.createElement("div");

// myDiv.classList = "color-red";

// const myParagraph = document.createElement("p");
// myParagraph.textContent = "Hallo";

// myDiv.appendChild(myParagraph);

// document.body.appendChild(myDiv);


// const inputGuess = document.getElementById("input-guess");
const inputGuess = document.querySelector("#input-guess");

const steen = document.querySelector("#steen");
const papier = document.querySelector("#papier");
const schaar = document.querySelector("#schaar");


function makeChoice(e) {
    console.log(e);
    console.log("Ik heb geklikt op " + e.target.id);
}

steen.onclick = makeChoice;
papier.onclick = makeChoice;
schaar.onclick = makeChoice;