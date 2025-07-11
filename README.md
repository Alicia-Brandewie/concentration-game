# Concentation Game



## Attributions


### referenced "Javascript-bowswer-game-tic-tac-toe-lab" 
for inital html, css, and JS setup


### Help from Ben on working through: 

cardEls.forEach((card) => {
    card.addEventListener("click",(event) => {
        if (firstCardClicked === undefined) {
            firstCardClicked = event.target.innerText;
            console.log(firstCardClicked)
        } else {
            secondCardClicked = event.target.innerText;
            console.log(secondCardClicked)
        };
        if (firstCardClicked === secondCardClicked) {
            console.log(event.target.innerText)
        } else {
            console.log("Not a Match")

        }

### Help from Glenn for breaking out firstCardClicked & secondCardClicked

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
        

### Help from Glenn on the tries count
tries++ autoincriments 

plus referenced:
    https://generalassembly.instructure.com/courses/821/pages/dom-events-video?module_item_id=75306

    and
    https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
    for how to count clicks

    and 
    https://generalassembly.instructure.com/courses/821/pages/intro-to-the-dom?module_item_id=75305 
    for the updating the DOM 

plus debugging help from Ashley for syntax errors then POOF it worked







### HOW TO FLIP CARDS
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

### RANDAMIZING CARD ARRAY FOR SHUFFLE CARDS 

//randomizer logic from rock-paper-scissors?
    //https://generalassembly.instructure.com/courses/821/pages/javascript-browser-game-rock-paper-scissors?module_item_id=75307
// and MDN docs math.random() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//as well as googled for "shuffle deck of cards javascript"
    //https://www.geeksforgeeks.org/javascript/javascript-program-to-shuffle-deck-of-cards/
    //https://www.geeksforgeeks.org/dsa/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/


from sharon for 'flip' https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_class

### APPLYING SHUFFLED ARRAY TO USER'S VIEW
Devin walked me through the peices of the forEach I'd started & taught me array.from

cardEls.forEach((card, banana) => {
    CARDS = Array.from(ans) // array.from makes a string into an array 
    card.textContent = CARDS[banana]
    if(banana === 0){console.dir(Array.from(ans))}
}) // this function is from working with Devin
        // console.dir makes the whole object visible, like a directory
            //vs .log which is just the array


### Reset button

// reset button styling https://generalassembly.instructure.com/courses/821/pages/javascript-browser-game-rock-paper-scissors?module_item_id=75307
 
//Devin helped me clean up & understand my 
    resetButtonElement.addEventListener('click', resetGame);

### Boundless thanks to Chris Kellogg
the most patient API/backend Architect; the Link to my Navi  