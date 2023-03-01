
// varaibles:
// info générales :
const infoParty =  document.querySelector(".info-Party");
const topScore = document.querySelector(".top-score");

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

// playerChoice : 

// player buttons :
let playerRockCard = document.querySelector("img#rock-card_player");
let playerLeafCard = document.querySelector("img#leaf-card_player");
let playerCissorsCard = document.querySelector("img#scissors-card_player");

// function playerChoice :

let playerChoice;

playerRockCard.addEventListener("click", () => {

    playerChoice = "pierre";
    console.log(`Le joueur à joué la carte ${playerChoice}`);

    playGame();
});

playerLeafCard.addEventListener("click", ()=>{

    playerChoice = "feuille";
    console.log(`Le joueur a joué la carte ${playerChoice}`);

    playGame();
})

playerCissorsCard.addEventListener("click", () =>{

    playerChoice = "ciseaux";
    console.log(`Le joueur a joué la carte ${playerChoice}`);

    playGame();
})


// computer choice :

// computer buttons :
let computerRockCard = document.querySelector("img#rock-card_player");
let computerLeafCard = document.querySelector("img#leaf-card_player");
let computerCissorsCard = document.querySelector("img#scissors-card_player");

// function random computerChoice :

function playGame() {
    const computerChoices = ["pierre", "feuille", "ciseaux"];
    const computerChoice = computerChoices[Math.floor(Math.random()*3)];


    // debug: 

    console.log(`Computer a joué ${computerChoice}`);

    switch (playerChoice) {
        case "pierre":
            if (computerChoice === "pierre") {
                console.log  `Égalité, personne ne remporte la manche !`
            }else if(computerChoice === "feuille"){
                console.log  `Perdu, vous perdez la manche !`
            }else if(computerChoice === "ciseaux"){
                console.log  `Gagné, vous remportez la manche !`
            }
            break;

            case "feuille":
                if(computerChoice === "pierre"){
                    console.log  `Gagné, vous remportez la manche !`
                }else if(computerChoice === "feuille"){
                     console.log `Égalité, personne ne remporte la manche !`
                }else if(computerChoice === "ciseaux"){
                     console.log `Perdu, vous perdez la manche !`
                }
                break;

                case "ciseaux":
                    if (computerChoice === "pierre") {
                        console.log  `Perdu ! vous perdez la manche !`
                    }else if(computerChoice === "feuille"){
                        console.log  `Gagné, vous remportez la manche !`
                    }else if(computerChoice === "ciseaux"){
                        console.log  `Égalité, personne ne remporte la manche !`
                    }
        default:
            break;
    }
    
}
