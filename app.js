/*-------------- Constants -------------*/
const CARDS =
[0, 1,  2,  3,
 4, 5,  6,  7,
 8, 9, 10, 11,
12, 13, 14, 15]

const WINNING_PAIRS = 8;
    
const MAXIMUM_TRIES = 10

/*---------- Variables (state) ---------*/
let board

let firstCardClicked
    // undefined, so falsey
let secondCardClicked 
    // undefined, so falsey
let match
    //boolean
let pairsCount
    // count from 0 to 8
let triesCountDown
    //count down from 10
   // let lose = numberTries > MAXIMUM_TRIES; // is this necessary with let won?
let won
   //boolean 
let message
    // string
let playAgain
    // boolean


/*----- Cached Element References  -----*/

const cardEls = document.querySelectorAll(".card")
console.log(cardEls);

/*-------------- Functions -------------*/

// can't add event listner to array, have to loop trhough them; DOM events to loop through node list like this with for each 
// then add event listener to that function

cardEls.forEach((card) => {
    card.addEventListener("click",(event) => {
        console.log(event.target.innerText); // place holder, replace with logic 
        // compare 
        //add more functions, decisions to make 
        //first card or second
        console.log(firstCardClicked); 
        console.log(secondCardClicked);
        if (firstCardClicked === undefined) {
            firstCardClicked = event.target.innerText;
            console.log(firstCardClicked)
        } else {
            secondCardClicked = event.target.innerText;
            console.log(secondCardClicked)
        }
        

        // if first card, how do store value to compare later
        //if second card, how to compare to first card
        //what to do if they do match
        //what to do if they don't match 
    });
});




/*----------- Event Listeners ----------*/







/* code grave yard
// const initialize = () => {
//     board = ["", "", "", "", "", "", "", "", "", "","", "", "", "", "", ""];
//     cardA = "";
//     cardB = "";
//     match = false;
//     pairs = 0;
//     tries = 10;
//     won = false;
//     message = "";
//     playAgain = false;

//     render();
// };
// console.log (initialize)


// const render = () => {
//     updateBoard()
//     updateMatch()
//     updatePairsCount()
//     updateTriesCountDown()
//     updateMessage()
// }

//initialize()

*/