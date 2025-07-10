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
            //console.log(event.target)//event.target = specific thing you're clicking; target is the div of the event you're clicking over
            const cardFlip = event.target.classList.toggle("↷"); // .classlist gives a classlist of all things that belong to that, so targeting this classlist and want you [computer] to run this function
            event.target.innerText = "↷"
            //this turns cards from "face up" to "face down"
            //so need to change initial state = cards 'face down'
            //and add flip logic to what happens when two cards are selected (stay flipped over? Stretch goal = dissapear) above in the match/not a match function (flip back over)
        });
});



// SHUFFLING CARDS
//randomizer logic from rock-paper-scissors?
    //https://generalassembly.instructure.com/courses/821/pages/javascript-browser-game-rock-paper-scissors?module_item_id=75307
// and MDN docs math.random() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//as well as googled for "shuffle deck of cards javascript"
    //https://www.geeksforgeeks.org/javascript/javascript-program-to-shuffle-deck-of-cards/
    //https://www.geeksforgeeks.org/dsa/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/

// let shuffleCards = () => {
//     const banana = Math.floor(Math.random() * CARDS.length);
//     shuffledCards = CARDS[banana]
//     console.log(banana)
// } 



// JavaScript Program to shuffle a given array 

// A function to print an array 
function shuffleCards (CARDS)
{ 
    let ans = '';
    for (let i = 0; i < CARDS.length; i++)
    {
        ans += CARDS[i] + " "; 
    }
    console.log(ans); 
} 

// A function to generate a random 
// permutation of arr
function randomize (CARDS) 
{

    // Start from the last element and swap 
    // one by one. We don't need to run for 
    // the first element that's why i > 0 
    for (let i = CARDS.length - 1; i > 0; i--)
    {
    
        // Pick a random index from 0 to i inclusive
        let j = Math.floor(Math.random() * (i + 1)); 

        // Swap arr[i] with the element 
        // at random index 
        [CARDS[i], CARDS[j]] = [CARDS[j], CARDS[i]];
    } 
} 

// Driver Code
randomize (CARDS); 
printArray(CARDS); 

// This code is contributed by rohitsingh07052.










































//GLENN NEXT STEPS: [reset button],  5-THEN win logic 
    // reset button styling https://generalassembly.instructure.com/courses/821/pages/javascript-browser-game-rock-paper-scissors?module_item_id=75307
//then fixes & edge cases (click the same card after it's matched?)
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