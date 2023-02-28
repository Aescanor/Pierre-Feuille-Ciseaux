
// I - fonction startGame : 

let timer = document.querySelector(".timer")

const btnStartingGame = document.querySelector('button[type = "submit"]');

btnStartingGame.addEventListener("click", function startGame() {

    let startGameTimer = 10;

    startGame = setInterval(function () {
        if (startGameTimer > 0) {
            startGameTimer--
            timer.innerHTML = `Début de la partie dans ${startGameTimer} secondes`
        }
        else {
            clearInterval(startGame)
            timer.innerHTML = `C'est l'heure du duel "référence à Yu Gi OH :)"`
        }
    }, 1000)
})

// II - logique du jeux :

// computer choice :

// tableau des cartes SHI FU MI :
const cardsTab = [
    "rock-card",
    "leaf-card",
    "scissors-card",
]

// function random computerChoice :
function computerChoice() {
    let randomComputerChoice = Math.floor(Math.random() * (cardsTab.length) | 0)

    let computerChoiceValue = cardsTab[randomComputerChoice]
    console.log(`Le choix de l'ordinateur est ${computerChoiceValue}`)
}

computerChoice()


// création de 2 variables pour stocker le choix joueur et pc :
// let computerPlayedCard = `${computerChoiceValue}`;
// let playerChoice = playerCard.selected;

// player buttons :
let playerRockCard = document.querySelector("img#rock-card_player");
let playerLeafCard = document.querySelector("img#leaf-card_player");
let playerCissorsCard = document.querySelector("img#scissors-card_player");

// computer buttons :
let computerRockCard = document.querySelector("img#rock-card_player");
let computerLeafCard = document.querySelector("img#leaf-card_player");
let computerCissorsCard = document.querySelector("img#scissors-card_player");


// playerChoice : 

// selectedCards :

playerRockCard.addEventListener("click", function selectedCard() {

    playerRockCard = cardsTab[0];

    console.log(`Valeur de la carte du joeur : ${playerRockCard}`);

    infoParty.innerHTML = (`Le joueur a joué la ${cardsTab[0]}`);

    console.log(`Le joueur a joué la ${cardsTab[0]}`);

})

playerLeafCard.addEventListener("click", function selectedCard() {

    playerLeafCard = cardsTab[1];

    console.log(`Valeur de la carte du joeur : ${playerLeafCard}`);

    infoParty.innerHTML = (`Le joueur a joué la ${cardsTab[1]}`);

    console.log(`Le joueur a joué la ${cardsTab[1]}`);
})

playerCissorsCard.addEventListener("click", function selectedCard() {

    playerCissorsCard = cardsTab[2]

    console.log(`Valeur de la carte du joeur : ${playerCissorsCard}`);

    infoParty.innerHTML = (`Le joueur a joué la ${cardsTab[2]}`)

    console.log(`Le joueur a joué la ${cardsTab[2]}`);
})


// infos party: 
const infoParty = document.querySelector("p.info-Party");
const topScore = document.querySelector(".result")

function selectedCards() {


}
