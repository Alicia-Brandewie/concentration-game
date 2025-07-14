/*-------------- Constants -------------*/
let CARDS =
    ["♡", "♡", "♥", "♥",
    "❀", "❀", "✿", "✿",
    "✧", "✧", "✦", "✦",
    "🌣", "🌣", "☀", "☀"]

/*---------- Variables (state) ---------*/
let click = 0

let firstCardClicked

let firstCardId

let secondCardClicked

let secondCardId

let pairs = 0

let tries = 0

let randomizedSymbols = '';

let gameOver = false

/*----- Cached Element References  -----*/

const cardEls = document.querySelectorAll(".card")

const cardbacksElement = document.querySelectorAll(".cardBack")

const triesElement = document.querySelector("#visual-count-tries")

const pairsElement = document.querySelector("#visual-count-pairs")

const bannerMessage = document.querySelector("#banner-message")

const startBoard = document.querySelector(".board")

/*-------------- Functions -------------*/
function shuffleCards(CARDS) {
    for (let i = 0; i < CARDS.length; i++) {
        randomizedSymbols += CARDS[i];
    }
    //console.log("randomized symbols: " + randomizedSymbols);
}

function randomize(CARDS) {
    for (let i = CARDS.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [CARDS[i], CARDS[j]] = [CARDS[j], CARDS[i]];
    }
}
randomize(CARDS);
shuffleCards(CARDS);

cardEls.forEach((card, banana) => {
    CARDS = Array.from(randomizedSymbols)  
    card.textContent = CARDS[banana]
//    if (banana === 0) 
       // {console.dir(Array.from(randomizedSymbols))}

const checkforMatch = () => {
    if (firstCardClicked === secondCardClicked) {
        pairs++
        pairsElement.textContent = "Pairs: " + pairs;
       // console.log("Match!")

    } else {
      //  console.log("Not a Match")
        cardEls[firstCardId].classList.toggle('hidden')
        cardEls[secondCardId].classList.toggle('hidden')
    }
    tries++
    triesElement.textContent = "Tries: " + tries;
  //  console.log(triesElement.textContent)
    endingTheGame()
};

cardEls.forEach((card) => {
    card.addEventListener("click", (event) => {
        console.log(click)

        if (!gameOver) {
            if (click > 1) {
                click = 0
                checkforMatch()

                firstCardClicked = undefined
                secondCardClicked = undefined
            }

            if (firstCardClicked === undefined) {
                firstCardClicked = event.target.innerText;

                firstCardId = event.target.id
                cardEls[firstCardId].classList.toggle('hidden')
                click++
              //  console.log(firstCardId)
                //console.log("first card clicked " + firstCardClicked)
            } else {
                secondCardClicked = event.target.innerText;
                secondCardId = event.target.id
                cardEls[secondCardId].classList.toggle('hidden')
               // console.log(secondCardId)
             //   console.log("second card clicked " + secondCardClicked)
                click++
            };
        }
    });
});


const resetButtonElement = document.querySelector('#resetButton')

const resetGame = () => {
    window.location.reload()
}
resetButtonElement.addEventListener('click', resetGame);

const endingTheGame = () => {
    if (pairs === 8 && tries <= 10) {
        bannerMessage.innerText = "Winner!"
        gameOver = true
    } else if (pairs < 8 && tries === 10) {
        bannerMessage.textContent = "Lose. Try again!"
        gameOver = true
    }
}

/*----------- Code Grave Yard ----------*/
//then fixes & edge cases (click the same card after it's matched?)
   //make the reset button pretty https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button
    // make matched cards 'disappear'?
// // ASK Orville for "glow feature when a match is made" feature

