// info text Party: 
const infoParty = document.querySelector(".info-Party");

// info text Player: 
const infoPlayer = document.querySelector("p.info-Player")

// info text Computer: 
const infoComputer = document.querySelector("p.info-Computer")

// Feature - Player tag :
const inpPseudo = document.querySelector("input.pseudo");
const playerTag = document.querySelector("p.player-Tag");
const btnPlayerTag = document.querySelector("button.btnPlayerTag")

const playerSideTag = document.querySelector(".playerSideTag")


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


// computer buttons :
let computerRockCard = document.querySelector("img#rock-card_computer");
let computerLeafCard = document.querySelector("img#leaf-card_computer");
let computerCissorsCard = document.querySelector("img#scissors-card_computer");


/***************************************************** */
/****************** FUNCTION PLAYERTAG *****************/
/***************************************************** */

//Feature - PlayerTag :
btnPlayerTag.addEventListener("click", () => {

    checkPlayerTag()
})

function checkPlayerTag() {

    RegExpPlayerTag = /[a-z 0-9]{2,8}/gi;

    if (inpPseudo.value.match(RegExpPlayerTag)) {

        const pseudo = inpPseudo.value;

        playerSideTag.innerHTML = `${pseudo}`
        
        return playerTag.innerHTML = `Bienvenue ${pseudo.charAt(0).toUpperCase()}${pseudo.slice(1)}`

    } else if (inpPseudo.value !== (RegExpPlayerTag)) {

        playerTag.innerHTML = `La saisie est invalide, veuillez saisir au minimum 2 caractères alphanumériques.`

    } 
}

/***************************************************** */
/****************** FUNCTION STARTGAME *****************/
/***************************************************** */

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
            timer.innerHTML = `C'est l'heure du duel "référence à Yu Gi OH 🤓"`
        }
    }, 1000)

    btnStartingGame.style.display = "none"
})

/***************************************************** */
/******************** GAME LOGIC ***********************/
/***************************************************** */

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

/***************************************************** */
/****************** FUNCTIONS WINNERIS *****************/
/***************************************************** */

let winner;

// function winnerIs : 
function winnerIs() {

    partiesCounter--;
    remainingParties.innerHTML = `${partiesCounter}`;

    if (partiesCounter === 0 && `${playerScore}` > `${computerScore}`) {
        winner = `${pseudo.value}`
        infoParty.innerHTML = `${winner} remporte le jeux`
        alert(`${winner} remporte le jeux`)
        if (confirm(`Voulez-vous faire une nouvelle partie ?`)) {
            location.reload();
        }

    } else if (partiesCounter === 0 && `${playerScore}` < `${computerScore}`) {
        winner = `Computer`
        infoParty.innerHTML = `${winner} remporte le jeux`
        alert(`${winner} remporte le jeux`)
        if (confirm(`Voulez-vous faire une nouvelle partie ?`)) {
            location.reload();
        }

    } else if (partiesCounter === 0 && `${playerScore}` === `${computerScore}`) {
        infoParty.innerHTML = `Le jeux se termine sur un match nul !`
        alert(`Le jeux se termine sur un match nul !`)
        if (confirm(`Voulez-vous faire une nouvelle partie ?`)) {
            location.reload();
        }

    }
}
/***************************************************** */
/****************** FUNCTION PLAYGAME *****************/
/***************************************************** */

// computer choice :
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

    }

    // computer :
    function incrementScoreComputer() {
        computerScore += 1;
        topComputerScore.innerHTML = `${computerScore}`

    }


    switch (playerChoice) {
        case "pierre":
            if (computerChoice === "pierre") {
                infoParty.innerHTML = `Égalité, personne ne remporte la manche !`
                selectedComputerCards()


            } else if (computerChoice === "feuille") {
                infoParty.innerHTML = `Perdu, vous perdez la manche !`
                selectedComputerCards()
                incrementScoreComputer()

            } else if (computerChoice === "ciseaux") {
                infoParty.innerHTML = `Gagné, vous remportez la manche !`
                selectedComputerCards()
                incrementScorePlayer();
            }
            break;

        case "feuille":
            if (computerChoice === "pierre") {
                infoParty.innerHTML = `Gagné, vous remportez la manche !`
                selectedComputerCards()
                incrementScorePlayer();

            } else if (computerChoice === "feuille") {
                infoParty.innerHTML = `Égalité, personne ne remporte la manche !`
                selectedComputerCards()

            } else if (computerChoice === "ciseaux") {
                infoParty.innerHTML = `Perdu, vous perdez la manche !`
                selectedComputerCards()
                incrementScoreComputer()
            }
            break;

        case "ciseaux":
            if (computerChoice === "pierre") {
                infoParty.innerHTML = `Perdu ! vous perdez la manche !`
                selectedComputerCards()
                incrementScoreComputer()

            } else if (computerChoice === "feuille") {
                infoParty.innerHTML = `Gagné, vous remportez la manche !`
                selectedComputerCards()
                incrementScorePlayer();

            } else if (computerChoice === "ciseaux") {
                infoParty.innerHTML = `Égalité, personne ne remporte la manche !`
                selectedComputerCards()
            }
            break;

        default:
            break;
    }

    /**************************************************************** */

    // function selectedComputerCards :
    function selectedComputerCards() {
        if (computerChoice === "pierre") {
            computerLeafCard.classList.remove("active-card")
            computerCissorsCard.classList.remove("active-card")
            computerRockCard.classList.add("active-card")

        } else if (computerChoice === "feuille") {
            computerRockCard.classList.remove("active-card")
            computerCissorsCard.classList.remove("active-card")
            computerLeafCard.classList.add("active-card")

        } else if (computerChoice === "ciseaux") {
            computerRockCard.classList.remove("active-card")
            computerLeafCard.classList.remove("active-card")
            computerCissorsCard.classList.add("active-card")

        }
    }
}

