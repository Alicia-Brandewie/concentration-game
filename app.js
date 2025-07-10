/*-------------- Constants -------------*/
let CARDS =
    ["♡", "♡", "♥", "♥",
        "❀", "❀", "✿", "✿",
        "✧", "✧", "✦", "✦",
        "🌣", "🌣", "☀", "☀"]

const WINNING_PAIRS = 8;

const MAXIMUM_TRIES = 10

/*---------- Variables (state) ---------*/
let cards1

let board

let firstCardClicked

let secondCardClicked

let pairs = 0

let tries = 0

/*----- Cached Element References  -----*/

const boardElement = document.querySelector(".board")

const cardEls = document.querySelectorAll(".card")

const triesElement = document.querySelector("#visual-count-tries")

const pairsElement = document.querySelector("#visual-count-pairs")


/*-------------- Functions -------------*/

console.log(cardEls)

let ans = ''; //taking this out of the function means it exists globally
//RANDOMIZATION OF ARRAY WORKS
function shuffleCards(CARDS) {

    for (let i = 0; i < CARDS.length; i++) {
        ans += CARDS[i]; // original version of this had a + " ";, which was adding spaces between the unicode characters & leaving every-other circle blank, removed it and things worked
    }
    console.log(ans);
}
// A function to generate a random 
// permutation of arr
function randomize(CARDS) {
    // Start from the last element and swap 
    // one by one. We don't need to run for 
    // the first element that's why i > 0 
    for (let i = CARDS.length - 1; i > 0; i--) {
        // Pick a random index from 0 to i inclusive
        let j = Math.floor(Math.random() * (i + 1));
        // Swap arr[i] with the element 
        // at random index 
        [CARDS[i], CARDS[j]] = [CARDS[j], CARDS[i]];
    }
} // This code is contributed by rohitsingh07052.
// Driver Code
randomize(CARDS);
shuffleCards(CARDS);


cardEls.forEach((card, banana) => {
    CARDS = Array.from(ans) // array.from makes a string into an array 
    card.textContent = CARDS[banana]
    if(banana === 0){console.dir(Array.from(ans))}
}) // this function is from working with Devin
        // console.dir makes the whole object visible, like a directory
            //vs .log which is just the array


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
    card.addEventListener("click", (event) => {
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
        // toggle is in the INTRO TO THE DOM, ELEMENT ATTRIBUTES, https://generalassembly.instructure.com/courses/821/pages/intro-to-the-dom?module_item_id=75305
        event.target.innerText = "↷"
        //this turns cards from "face up" to "face down"
        //so need to change initial state = cards 'face down'
        //and add flip logic to what happens when two cards are selected (stay flipped over? Stretch goal = dissapear) above in the match/not a match function (flip back over)
    });
});



/*-------------- Workspace -------------*/

//[reset button]
// reset button styling https://generalassembly.instructure.com/courses/821/pages/javascript-browser-game-rock-paper-scissors?module_item_id=75307

const resetButtonElement =document.querySelector('#resetButton')
   // console.log(resetButtonElement) // checks out

const resetGame = () => {
    firstCardClicked = undefined
    secondCardClicked = undefined
    pairs = 0
    tries = 0
}
resetButtonElement.addEventListener('click', (event) => {
    resetGame(event)
    console.log("reset button clicked")
});






//GLENN NEXT STEPS: [reset button],  5-THEN win logic 
//then fixes & edge cases (click the same card after it's matched?)
    // like an initalize state?

// ASK Orville for "glow feature when a match is made" feature
//lots of conditionals 














/*----------- Code Grave Yard ----------*/

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
