// variables générales : 




// I - fonction startGame : 

const btnStartingGame = document.querySelector('button[type = "submit"]');

btnStartingGame.addEventListener("click", function startGame(){
    
    let startGameTimer = 10;
    
    startGame = setInterval(function (){
        if(startGameTimer > 0){
            startGameTimer--
            infoParty.innerHTML = `Début de la partie dans ${startGameTimer} secondes`
        }
        else{
            clearInterval(startGame)
            infoParty.innerHTML = `C'est l'heure du duel "référence à Yu Gi OH :)"`
        }
},1000)
})


// II - logique du jeux :

// tableau de valeur :
const cards = {
    0 : "rock-card",
    1 : "leaf-card",
    2 : "scissors-card",
}

// test tab : :
console.log(cards[0])


// choix de l'ordinateur :

function computerChoice(){
    return Math.floor(Math.random() * 4 )
}

console.log(computerChoice())


console.log(computerChoice.value)

// création de 2 variables pour stocker le choix joueur et pc :
// let playerChoice = playerCard.selected;
// let computerChoice = computerCard.selected;

// player buttons :
let playerRockCard = document.querySelector("img#rock-card_player");
let playerLeafCard = document.querySelector("img#leaf-card_player");
let playerCissorsCard = document.querySelector("img#scissors-card_player");

// computer buttons :
let computerRockCard = document.querySelector("img#rock-card_player");
let computerLeafCard = document.querySelector("img#leaf-card_player");
let computerCissorsCard = document.querySelector("img#scissors-card_player");


// cardsSelected : 

// infos party: 
const topScore = document.querySelector(".result")
const infoParty = document.querySelector("p.info-Party");

// playerRockCard : 
if (playerRockCard && computerRockCard) {
    
    infoParty.textContent = `Égalité`
    topScore.innerHTML = `+0`
    
} else if (playerRockCard && computerLeafCard) {

    infoParty.textContent = `Computer remporte la manche`
    topScore.innerHTML = `+0`

} else if (playerRockCard && computerCissorsCard) {

    infoParty.textContent = `Vous remportez la manche`
    topScore.innerHTML = `+1`

    // playerLeafCard :
} else if (playerLeafCard && computerLeafCard) {

    infoParty.textContent = `Égalité`
    topScore.innerHTML = `+0`

    
}else if (playerLeafCard && computerCissorsCard){
    
    infoParty.textContent = `Computer remporte la manche`
    topScore.innerHTML = `+0`

} else if (playerLeafCard && computerRockCard) {

    infoParty.textContent = `Vous remportez la manche`
    topScore.innerHTML = `+1`

    // playerCissorsCard :
}else if(playerCissorsCard && computerCissorsCard){

    infoParty.textContent = `Égalité`
    topScore.innerHTML = `+0`

}else if(playerCissorsCard && computerRockCard){

    infoParty.textContent = `Computer remporte la manche`
    topScore.innerHTML = `+0`

}else if(playerCissorsCard && computerLeafCard){

    infoParty.textContent = `Vous remportez la manche`
    topScore.innerHTML = `+1`
}
