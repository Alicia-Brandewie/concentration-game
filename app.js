/*-------------- Constants -------------*/
const CARDS =
[0, 1,  2,  3,
 4, 5,  6,  7,
 8, 9, 10, 11,
12, 13, 14, 15]

const WINNING_PAIRS = 8;
    
const MAXIMUM_TRIES = 16

/*---------- Variables (state) ---------*/
let board

let firstCardClicked
    // undefined, so falsey
let secondCardClicked 
    // undefined, so falsey

let pairsCount = 0

let tries = 0

/*----- Cached Element References  -----*/

const cardEls = document.querySelectorAll(".card")
//console.log(cardEls);

/*-------------- Functions -------------*/
//break check logic out of the below function (that's the win logic);
const bannana = () => {
    if (firstCardClicked === secondCardClicked) {
            console.log(event.target.innerText)
            //add logic & add what happens for user
                //(this?)return pairsCount++
        } else {
            console.log("Not a Match")
          //add logic & add what happens for user
        }
        firstCardClicked = undefined // this is resetting 
        secondCardClicked = undefined // this is resetting 
        tries++ //autoincrements them
        //NEXT: if tries === (logic)/conditionals, decided where to put this 
            //see line 67
    };

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
        




        //GLEN recommendation: calculaor homework, how we saved variables in the math 
    });
});


let apple = () =>{
    if (tries === 16){ //but how to handle when (tries === 16 &&& pairs === 8)
        console.log("Lost--try again!")
    } else {
        console.log("Keep going")
    }
};
apple() // HOKAY defining this function & invoking it resulted in 
//the initiation of the page printing "Keep going"
//HOW DO I get line 42 to record the tries and compare it in apple()

//GLENN NEXT STEPS: 1- track pairs (addition logic) (this is victory for tonight), 2- count down tries & 3 how to flip cards (that'll take a day-day.5), 4- shuffling cards, 5-THEN win logic 
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