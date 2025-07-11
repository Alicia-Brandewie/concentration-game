/*-------------- Constants -------------*/

let CARDS =
    ["♡", "♡", "♥", "♥",
        "❀", "❀", "✿", "✿",
        "✧", "✧", "✦", "✦",
        "🌣", "🌣", "☀", "☀"]

const WINNING_PAIRS = 8;

const MAXIMUM_TRIES = 10

/*---------- Variables (state) ---------*/

let firstCardClicked

let secondCardClicked

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

//TOGGLE HIDDEN CLASS, so start-board is 'on top of ' the other card & click turns it off
        //randel, 1) work on making the .start-board disappear, then 2) add it on top of shuffled board


        //classes are seperated by spaces in HTML, hence no 'space' in nameing things

startBoard.addEventListener("click", (event) => {
 if (event.target.classList.contains('card'))
    event.target.classList.toggle('hidden')
    console.log("clicked")

});


//FIRST VERSION WITH RANDALL & included 2 versions of div in HTML
// startBoard.addEventListener("click", (event) => {
//     if (event.target.classList.contains("cardBack")) {
//         //parenthes is boolean so if it exists it is true, no need to check 
//         cardEls[event.target.id].classList.toggle('hidden')
//         console.log("cardfront Toggled")   
               
//         cardbacksElement[event.target.id].classList.toggle('hidden')
//                 console.log("cardback Toggled")

//     } else if  (event.target.classList.contains("card")) {
//         cardbacksElement[event.target.id].classList.toggle('hidden') 
//         cardEls[event.target.id].classList.toggle('hidden')
//         console.log("else if Toggled")

//     }
//     console.log(event.target)
// }
// );



     //   function toggelHidden () {}

        //then pass the clickMatch function through it afterwards (so no change to that logic...yet...need to update the click toggle there & what happens after match/not match happened)


// function cardbackFaceUp(cardEls) {
//     cardEls.classList.add.toggle("↷")
//     console.log(cardbacksElement)
// }  



// function cardbackFaceUp() {
//     element = document.getElementsById(".card")
//     element.classList.toggle("mystyle")
// }

//const 



function shuffleCards(CARDS) {
    for (let i = 0; i < CARDS.length; i++) {
        randomizedSymbols += CARDS[i]; // original version of this had a + " ";, which was adding spaces between the unicode characters & leaving every-other circle blank, removed it and things worked
    }
    console.log("randomized symbols: " + randomizedSymbols);
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
    CARDS = Array.from(randomizedSymbols) // array.from makes a string into an array 
    card.textContent = CARDS[banana]
    if(banana === 0){console.dir(Array.from(randomizedSymbols))}
}) // this function is from working with Devin
        // console.dir makes the whole object visible, like a directory
            //vs .log which is just the array


// //break check logic out of the below function (that's the win logic);
const checkforMatch = () => {
    if (firstCardClicked === secondCardClicked) {
        pairs++ 
        pairsElement.textContent = "Pairs: " + pairs;
        console.log("Match!")
        //update visual change for user
    } else {
        console.log("Not a Match")
        //update visual change for user
    }
    firstCardClicked = undefined 
    secondCardClicked = undefined 
    tries++ 
    triesElement.textContent = "Tries: " + tries;
    console.log(triesElement.textContent)
    //NEXT: if tries === (logic)/conditionals, decided where to put this 
endingTheGame()
};
// //putting endingTheGame here didn't work

// cardEls.forEach((card) => {
//     card.addEventListener("click", (event) => {
//         if (!gameOver){
//         if (firstCardClicked === undefined) {
//             firstCardClicked = event.target.innerText;
//             console.log("first card clicked " + firstCardClicked)
//         } else {
//             secondCardClicked = event.target.innerText;
//             console.log("second card clicked " + secondCardClicked)
//             checkforMatch();
//         };
//         const cardFlip = event.target.classList.toggle("+", "mystyle"); // .classlist gives a classlist of all things that belong to that, so targeting this classlist and want you [computer] to run this function
//         // toggle is in the INTRO TO THE DOM, ELEMENT ATTRIBUTES, https://generalassembly.instructure.com/courses/821/pages/intro-to-the-dom?module_item_id=75305
//         event.target.innerText = "+"
//         //so need to change initial state = cards 'face down'
//         //and add flip logic to what happens when two cards are selected (stay flipped over? Stretch goal = dissapear) above in the match/not a match function (flip back over)
//     }});
// });









/*-------------- Workspace -------------*/

//[reset button]
// reset button styling https://generalassembly.instructure.com/courses/821/pages/javascript-browser-game-rock-paper-scissors?module_item_id=75307

const resetButtonElement =document.querySelector('#resetButton')
   // console.log(resetButtonElement) // checks out



const resetGame = () => {
    window.location.reload()
        //to change all the cards to backs up
        //give all cards same class that = the uniform back & toggle that off with every click 





    // firstCardClicked = undefined
    // secondCardClicked = undefined
    // pairs = 0
    // pairsElement.textContent = "Pairs: 0"
    // tries = 0
    // triesElement.textContent = "Tries: 0"
    // console.log("reset game has been clicked")
    // bannerMessage.textContent = "Find the 8 matching pairs! You have 10 tries."
    //set the cards 'back' to face down AND shuffle the cards
}
resetButtonElement.addEventListener('click', resetGame);
//WAIT -- I want the reset button to return the board to it's initial state
    //so I need an initial state to begin with....?
        //make the button pretty https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button




//GLENN NEXT STEPS: [reset button],  
//then fixes & edge cases (click the same card after it's matched?)
    // like an initalize state?

const endingTheGame = () =>{
 //   console.log(pairs)
   // console.log(tries)
   // console.log(bannerMessage)
    if (pairs === 8 && tries <= 10) {
       bannerMessage.innerText = "Winner!" //well both innertext and textContent work now *shrug*
        gameOver = true
    //console.log("Winner!")
     } else if (pairs < 8 && tries === 10) {
         bannerMessage.textContent = "Lose. Try again!"
        gameOver = true
         //console.log("Lose. Try again!")
     } 
     //ADD STOPPING LOGIC HERE?
}




// ASK Orville for "glow feature when a match is made" feature
//lots of conditionals 

//display hidden in css to make cards that are matched "disappear" without changing the board layout











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
