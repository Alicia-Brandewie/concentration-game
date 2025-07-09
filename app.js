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

let pairs = 0

let tries = 0

/*----- Cached Element References  -----*/

const cardEls = document.querySelectorAll(".card")
//console.log(cardEls);

const triesElement = document.querySelector("#visual-count-tries") 
//can't have spaces in id name, so "#visual count tries" caused a null error because computer was looking at three seperate ids

const pairsElement = document.querySelector("#visual-count-pairs")
/*-------------- Functions -------------*/
//break check logic out of the below function (that's the win logic);
const checkforMatch = () => {
    if (firstCardClicked === secondCardClicked) {
            pairs++ // does this work?
            pairsElement.textContent = "Pairs: " + pairs;
            console.log("Match!")
            //update visual change for user
        } else {
            console.log("Not a Match")
          //update visual change for user
        }
        firstCardClicked = undefined // this is resetting 
        secondCardClicked = undefined // this is resetting 
        tries++ //autoincrements them
        triesElement.textContent = "Tries: " + tries;//add countTries here?
                console.log(triesElement.textContent)
        //NEXT: if tries === (logic)/conditionals, decided where to put this 
            //see line 67
    };

    cardEls.forEach((card) => {
        card.addEventListener("click",(event) => {
            if (firstCardClicked === undefined) {
                firstCardClicked = event.target.innerText;
                console.log("first card clicked " + firstCardClicked)
            } else {
                secondCardClicked = event.target.innerText;
                console.log("second card clicked " + secondCardClicked)
                checkforMatch();
            };//GLEN recommendation: calculaor homework, how we saved variables in the math 
    });
});


// COUNTING PAIRS

//WHEN firstCardClicked = secondCardClicked THEN pairs count increments up
    // user visual: cards 'disapear'
// OTHERWISE pairs count does not change
    // user visual: card 'flips back over'



// Didn't need this ↓ because placed the logic inside of the match function 
// const countPairs = () => {
//     if (firstCardClicked === secondCardClicked) {
//         pairs++
//         console.log ("Pair!")
//     } else {
//         console.log("Nope, try again.")
//     }



// };






//GLENN NEXT STEPS: 2- track pairs (addition logic), 3 how to flip cards (that'll take a day-day.5), 4- shuffling cards, 5-THEN win logic 
// 
//lots of conditionals 





// HOKAY this ↓ is part of the win/loose logic, so for last....
let countTries = () =>{
    if (tries === 10){ //but how to handle when (tries === 16 &&& pairs === 8)
        // if (tries === 16 && pairs > 8 THEN lose function) etc 
        console.log("Lost--try again!")
    } else {
        console.log("Keep going")
    }
};
countTries() 



























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