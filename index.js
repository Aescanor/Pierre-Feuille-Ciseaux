
// varaibles:
// info générales :

const infoParty =  document.querySelector(".info-Party");
const topScore = document.querySelector(".top-score");


// Feature - Player tag :
const inpPseudo = document.querySelector("input.pseudo");
const playerTag = document.querySelector("p.player-Tag");
const btnPlayerTag = document.querySelector("button.btnPlayerTag")

btnPlayerTag.addEventListener("click", () => {

    checkPlayerTag()
})

function checkPlayerTag() {

    RegExpPlayerTag = /[a-z 0-9]{2,8}/gi;

    if (inpPseudo.value.match(RegExpPlayerTag)) {
      
      let pseudo =  inpPseudo.value;
      
    // transform the first letter to UpperCase()
     return  playerTag.innerHTML = `Bienvenue ${pseudo.charAt(0).toUpperCase()}${pseudo.slice(1)}`
        
    }else if (inpPseudo.value !== (RegExpPlayerTag))
    
    playerTag.innerHTML = `La saisie est invalide, veuillez saisir au minimum 2 caractères alphanumériques.`
}

/*****/



// I - fonction startGame : 

let timer = document.querySelector(".timer")

const btnStartingGame = document.querySelector('button.letPlay');

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
                infoParty.innerHTML =  `Égalité, personne ne remporte la manche !`
            }else if(computerChoice === "feuille"){
                infoParty.innerHTML =  `Perdu, vous perdez la manche !`
            }else if(computerChoice === "ciseaux"){
                infoParty.innerHTML =  `Gagné, vous remportez la manche !`
            }
            break;

            case "feuille":
                if(computerChoice === "pierre"){
                    infoParty.innerHTML =  `Gagné, vous remportez la manche !`
                }else if(computerChoice === "feuille"){
                    infoParty.innerHTML = `Égalité, personne ne remporte la manche !`
                }else if(computerChoice === "ciseaux"){
                    infoParty.innerHTML = `Perdu, vous perdez la manche !`
                }

                break;
                case "ciseaux":
                    if (computerChoice === "pierre") {
                        infoParty.innerHTML =  `Perdu ! vous perdez la manche !`
                    }else if(computerChoice === "feuille"){
                        infoParty.innerHTML =  `Gagné, vous remportez la manche !`
                    }else if(computerChoice === "ciseaux"){
                        infoParty.innerHTML =  `Égalité, personne ne remporte la manche !`
                    }
        default:
            break;
    }
    
}
