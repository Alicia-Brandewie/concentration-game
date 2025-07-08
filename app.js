/*-------------- Constants -------------*/
const cards =
[0, 1,  2,  3,
 4, 5,  6,  7,
 8, 9, 10, 11,
12, 13, 14, 15]


/*---------- Variables (state) ---------*/
let board

let cardA 
    // index value
let cardB 
    // index value
let match
    //boolean
let pairs
    // number, X of 8
let tries
    // number, 10-x remaining
let won
   //boolean 
let message
    // string
let playAgain
    // boolean


/*----- Cached Element References  -----*/

const cardEls = document.querySelectorAll(".card")
console.log(cardEls)


/*-------------- Functions -------------*/

const initialize = () => {
    board = ["", "", "", "", "", "", "", "", "", "","", "", "", "", "", ""];
    cardA = "";
    cardB = "";
    match = false;
    pairs = 0;
    tries = 10;
    won = false;
    message = "";
    playAgain = false;

    render();
};
console.log (initialize)

const render = () => {
    updateBoard()
    updateMatch()
    updatePairs()
    updateTries()
    updateMessage()
}


initialize()

/*----------- Event Listeners ----------*/

