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








### Boundless thanks to Chris Kellogg
the most patient API/backend Architect; the Link to my Navi  