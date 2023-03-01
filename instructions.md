Instructions :

    Créez un fichier HTML avec un bouton pour démarrer le jeu et une zone de texte pour afficher le résultat.

    Créez un fichier JavaScript pour gérer la logique du jeu.

    Dans le fichier JavaScript, déclarez une variable pour stocker le choix de l'utilisateur et une autre pour stocker le choix de l'ordinateur.

    Utilisez la fonction Math.random() pour générer un nombre aléatoire entre 0 et 2 pour représenter le choix de l'ordinateur. Vous pouvez utiliser un tableau pour associer un chiffre à chaque option du jeu (pierre, papier ou ciseaux).

    Demandez à l'utilisateur de faire son choix en cliquant sur un des trois boutons correspondant à chaque option (pierre, papier ou ciseaux). Vous pouvez utiliser un addEventListener pour écouter les clics sur les boutons.

    Comparez le choix de l'utilisateur avec le choix de l'ordinateur pour déterminer le résultat du jeu. Vous pouvez utiliser une structure de contrôle de flux, telle qu'une instruction switch, pour comparer les choix.

    Affichez le résultat du jeu dans la zone de texte HTML en utilisant la méthode innerHTML.

    Réglement du jeux : 

                <h2>Régles du jeux:</h2>

            <h3>Force de chaque forme au Pierre – Feuille – Ciseaux :</h3>
            <ul>
                <li>La pierre écrase les ciseaux et gagne.</li>
                <li>La feuille enveloppe la pierre et gagne.</li>
                <li>Les ciseaux découpent la feuille et gagnent.</li>
            </ul>

            <p> A partir de là chaque forme en bat une autre et perd contre une autre. Voici les forces en général au
             Shifumi.</p>

             <h3>Comment jouer au Shi Fu Mi :</h3>

             <p>Le jeu se joue généralement en duel même s’il est possible de s’affronter à plusieurs. <br> Pour commencer les joueurs comptent jusqu’à trois en mettant la main dans le dos. Une fois à trois les joueurs révèlent leur main (pierre, feuille ou ciseaux) en même temps. <br> La plus forte des formes l’emporte et le joueur marque le point gagnant. <br> Si les deux joueurs utilisent la même forme c’est un match nul. <br> A savoir que le jeu se déroule généralement en une manche gagnante. Mais pour plus de plaisir de jeu, il est bien de jouer au meilleur des trois manches (le premier a deux points remporte la partie) ou cinq manches (premier à trois points). 
               <br> A vous de décider !</p>
        </div>


        ``Js const startButton = document.querySelector('#start-btn');
const rockButton = document.querySelector('#rock-btn');
const paperButton = document.querySelector('#paper-btn');
const scissorsButton = document.querySelector('#scissors-btn');
const resultText = document.querySelector('#result');

let userChoice;

rockButton.addEventListener('click', () => {
  userChoice = 'rock';
  playGame();
});

paperButton.addEventListener('click', () => {
  userChoice = 'paper';
  playGame();
});

scissorsButton.addEventListener('click', () => {
  userChoice = 'scissors';
  playGame();
});

function playGame() {
  const computerChoices = ['rock', 'paper', 'scissors'];
  const computerChoice = computerChoices[Math.floor(Math.random() * 3)];

  switch(userChoice) {
    case 'rock':
      if (computerChoice === 'rock') {
        resultText.innerHTML = 'Tie!';
      } else if (computerChoice === 'paper') {
        resultText.innerHTML = 'You lose!';
      } else {
        resultText.innerHTML = 'You win!';
      }
      break;
    case 'paper':
      if (computerChoice === 'rock') {
        resultText.innerHTML = 'You win!';
      } else if (computerChoice === 'paper') {
        resultText.innerHTML = 'Tie!';
      } else {
        resultText.innerHTML = 'You lose!';
      }
      break;
    case 'scissors':
      if (computerChoice === 'rock') {
        resultText.innerHTML = 'You lose!';
      } else if (computerChoice === 'paper') {
        resultText.innerHTML = 'You win!';
      } else {
        resultText.innerHTML = 'Tie!';
      }
      break;
  }
}``
