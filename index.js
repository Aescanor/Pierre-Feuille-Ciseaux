// Variables genérales :

// info text Party: 
const infoParty = document.querySelector(".info-Party");

// info text Computer: 
const infoComputer = document.querySelector("p.info-Computer")

// Feature - Player tag :
const inpPseudo = document.querySelector("input.pseudo");
const playerTag = document.querySelector("p.player-Tag");
const btnPlayerTag = document.querySelector("button.btnPlayerTag")

// Features - Scores :
// Feature - playerScore :
let topPlayerScore = document.querySelector(".playerScore");
// variable scorePlayer :
let playerScore = 0;

//Feature - computerScore :
const topComputerScore = document.querySelector(".computerScore");
// variable computerScore: 
let computerScore = 0;

// Feature - remainingParties :
const remainingParties = document.querySelector(".remaining-parties");
// variable winnerIs :
let partiesCounter = 5;

// player buttons :
const playerRockCard = document.querySelector("img#rock-card_player");
const playerLeafCard = document.querySelector("img#leaf-card_player");
const playerCissorsCard = document.querySelector("img#scissors-card_player");

const infoPlayer = document.querySelector("p.info-Player")

// computer buttons :
let computerRockCard = document.querySelector("img#rock-card_player");
let computerLeafCard = document.querySelector("img#leaf-card_player");
let computerCissorsCard = document.querySelector("img#scissors-card_player");


/**************************************************************** */

// I - Feature - PlayerTag :
btnPlayerTag.addEventListener("click", () => {

    checkPlayerTag()
})

function checkPlayerTag() {

    RegExpPlayerTag = /[a-z 0-9]{2,8}/gi;

    if (inpPseudo.value.match(RegExpPlayerTag)) {

        const pseudo = inpPseudo.value;

        // transform the first letter to UpperCase()
        return playerTag.innerHTML = `Bienvenue ${pseudo.charAt(0).toUpperCase()}${pseudo.slice(1)}`
        return playerSideTag.innerHTML = `${pseudo.charAt(0).toUpperCase()}${pseudo.slice(1)}`;

    } else if (inpPseudo.value !== (RegExpPlayerTag))

        playerTag.innerHTML = `La saisie est invalide, veuillez saisir au minimum 2 caractères alphanumériques.`
}

/**************************************************************** */

// I - Fonction startGame : 

const timer = document.querySelector(".timer")

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

// II - game logic :

// playerChoice : 

// function playerChoice :

let playerChoice;

playerRockCard.addEventListener("click", () => {

    playerChoice = "pierre";
    infoPlayer.innerHTML = (`Le joueur à joué la carte ${playerChoice}`);

    winnerIs()
    playGame();
});

playerLeafCard.addEventListener("click", () => {

    playerChoice = "feuille";
    infoPlayer.innerHTML = (`Le joueur a joué la carte ${playerChoice}`);

    winnerIs()
    playGame();
})

playerCissorsCard.addEventListener("click", () => {

    playerChoice = "ciseaux";
    infoPlayer.innerHTML = (`Le joueur a joué la carte ${playerChoice}`);

    winnerIs()
    playGame();
})


// Fonction controle des scores et parties restantes :

// la variable stockera le gagnant 
let winner;

// function winnerIs : 
function winnerIs() {

    partiesCounter--;
    remainingParties.innerHTML = `${partiesCounter}`;

    if (partiesCounter == 0) {
        if (`${playerScore}` > `${computerScore}`) {
            winner = `${pseudo.value}`
            infoParty.innerHTML = `${winner} remporte le jeux`
            alert(`${winner} remporte le jeux`)

            if (confirm(`Voulez-vous faire une nouvelle partie ?`)) {
                location.reload();
            }
    

        }else if (computerScore > playerScore){
            winner = `Computer`
            infoParty.innerHTML = `${winner} remporte le jeux`
            alert(`Computer remporte le jeux`)

            if (confirm(`Voulez-vous faire une nouvelle partie ?`)) {
                location.reload();
            }
    
        }
    }
}

// function playGame() :

// computer choice :
// randomChoicesComputer :
function playGame() {
    const computerChoices = ["pierre", "feuille", "ciseaux"];
    const computerChoice = computerChoices[Math.floor(Math.random() * 3)];

    // info text Computer: 
    infoComputer.innerHTML = (`Computer a joué ${computerChoice}`);


    // Functions incrementsScores :
    // player :
    function incrementScorePlayer() {
        playerScore += 1;
        topPlayerScore.innerHTML = `${playerScore}`;

        winnerIs()
    }

    // computer :
    function incrementScoreComputer() {
        computerScore += 1;
        topComputerScore.innerHTML = `${computerScore}`

        winnerIs()
    }


    switch (playerChoice) {
        case "pierre":
            if (computerChoice === "pierre") {
                infoParty.innerHTML = `Égalité, personne ne remporte la manche !`

            } else if (computerChoice === "feuille") {
                infoParty.innerHTML = `Perdu, vous perdez la manche !`
                incrementScoreComputer()

            } else if (computerChoice === "ciseaux") {
                infoParty.innerHTML = `Gagné, vous remportez la manche !`
                incrementScorePlayer();
            }
            break;

        case "feuille":
            if (computerChoice === "pierre") {
                infoParty.innerHTML = `Gagné, vous remportez la manche !`
                incrementScorePlayer();

            } else if (computerChoice === "feuille") {
                infoParty.innerHTML = `Égalité, personne ne remporte la manche !`

            } else if (computerChoice === "ciseaux") {
                infoParty.innerHTML = `Perdu, vous perdez la manche !`
                incrementScoreComputer()
            }
            break;

        case "ciseaux":
            if (computerChoice === "pierre") {
                infoParty.innerHTML = `Perdu ! vous perdez la manche !`
                incrementScoreComputer()

            } else if (computerChoice === "feuille") {
                infoParty.innerHTML = `Gagné, vous remportez la manche !`
                incrementScorePlayer();

            } else if (computerChoice === "ciseaux") {
                infoParty.innerHTML = `Égalité, personne ne remporte la manche !`
            }
            break;

        default:
            break;
    }

}


// TEST/


