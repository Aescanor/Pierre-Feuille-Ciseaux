
const btnStartingGame = document.querySelector('button[type = "submit"]');


btnStartingGame.addEventListener("click", function startGame(){

// décompte 1 2 3 au click :



})


// logique du jeux :
const topScore = document.querySelector(".result")
const infoParty = document.querySelector("p.info-Party");

let playerRockCard = document.querySelector("img#rock-card_player");
let playerLeafCard = document.querySelector("img#leaf-card_player");
let playerCissorsCard = document.querySelector("img#scissors-card_player");

let computerRockCard = document.querySelector("img#rock-card_player");
let computerLeafCard = document.querySelector("img#leaf-card_player");
let computerCissorsCard = document.querySelector("img#scissors-card_player");


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