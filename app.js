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



/*----- Cached Element References  -----*/

const cardEls = document.querySelectorAll(".card")
//console.log(cardEls);

/*-------------- Functions -------------*/
//break check logic out of the below function (that's the win logic);
const bannana = () => {
    if (firstCardClicked === secondCardClicked) {
            console.log(event.target.innerText)
            //add what happens for user
        } else {
            console.log("Not a Match")

        }
        firstCardClicked = undefined
        secondCardClicked = undefined // this is resetting 
}
//this got the matched pairs to work


cardEls.forEach((card) => {
    card.addEventListener("click",(event) => {
        if (firstCardClicked === undefined) {
            firstCardClicked = event.target.innerText;
            console.log(firstCardClicked)
        } else {
            secondCardClicked = event.target.innerText;
            console.log(secondCardClicked)
            bannana();
        };
        


        // if first card, how do store value to compare later
        //if second card, how to compare to first card
        //what to do if they do match
        //what to do if they don't match 

        //GLEN recommendation: calculaor homework, how we saved variables in the math 
    });
});


//NEXT: 1- count down tries, 2- track pairs (addition logic), 3 how to flip cards (that'll take a day-day.5), 4- shuffling cards, 5-THEN win logic 
// 
//lots of conditionals 

/*----------- Event Listeners ----------*/

//moved up into function section





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