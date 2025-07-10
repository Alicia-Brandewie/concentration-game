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
            console.log(event.target)//event.target = specific thing you're clicking; target is the div of the event you're clicking over
            const cardFlip = event.target.classList.toggle("♻"); // .classlist gives a classlist of all things that belong to that, so targeting this classlist and want you [computer] to run this function
            event.target.innerText = "♻"
        });
});


// HOW TO FLIP CARDS
// using this tutorial https://dev.to/mugas/flip-cards-with-javascript-2ad0
    // and found the cursor here https://github.com/mugas/Movie-hero/commit/88af22692ea09d10aad00e5600fe9c479d1876ab#diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR26-R70
//WHEN firstCardClicked = secondCardClicked THEN pairs count increments up
    // user visual: cards 'disapear'
// OTHERWISE pairs count does not change
    // user visual: card 'flips back over'
//The tutorial version is a STRETCH GOAL cause it's fancy 3D;
    //the toggle function by itself will work fine,
    // it will 'toggle on' a different image and 'toggle' off
    //within the function that already exists 


// const flipCard = (event) =>{ // "event" from Ben
//     event.target.classList.toggle("flip"); // BEN: can't use this here...don't know 'this' yet, so pass the function through as a paremeter 
//     //toggle 
// }
// cardEls.forEach((card) =>card.addEventListener("click", flipCard))
//already have an event listener for card/s...
//try adding new classes card-front & card-back
//then making this function








//GLENN NEXT STEPS: 3 how to flip cards (that'll take a day-day.5), 4- shuffling cards, 5-THEN win logic 
// 
//lots of conditionals 





// // HOKAY this ↓ is part of the win/loose logic, so for last....
// let countTries = () =>{
//     if (tries === 10){ //but how to handle when (tries === 16 &&& pairs === 8)
//         // if (tries === 16 && pairs > 8 THEN lose function) etc 
//         console.log("Lost--try again!")
//     } else {
//         console.log("Keep going")
//     }
// };
// countTries() 



























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