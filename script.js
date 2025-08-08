const griddisplay = document.querySelector("#grid");
const resultdisplay = document.querySelector("#score");

const cardArray = [
    {
    name: "a-spade",
    img:"./assets/a-spade.png"
    },{
    name: "a1-dimond",
    img:"./assets/a1-dimond1.png"
    },{
    name: "ten-spade",
    img:"./assets/ten-spade.png"
    },
     {
    name: "a-spade",
    img:"./assets/a-spade.png"
    },{
    name: "a1-dimond",
    img:"./assets/a1-dimond1.png"
    },{
    name: "ten-spade",
    img:"./assets/ten-spade.png"
    }
]

cardArray.sort(()=>0.5-Math.random())

board();
function board(){
    for (let i=0; i<cardArray.length; i++){
       const card = document.createElement("img");
       card.setAttribute("src","./assets/front-image.png");
       card.setAttribute("data-id",i);
       card.addEventListener("click",flipcard);
       griddisplay.appendChild(card);
    }
    console.log(cardArray)
}

cardchosen = [];
cardchosenid = [];

function flipcard(){
    const cardId = this.getAttribute("data-id")
    this.setAttribute("src",cardArray[cardId].img);
    cardchosenid.push(cardId);
    cardchosen.push(cardArray[cardId].name);

    if (cardchosen.length===2)
    {
        setTimeout(checkmatch,500);
    }

}
cardswon = [];

function checkmatch(){
    const cards = document.querySelectorAll("img");

    if (cardchosen[0]==cardchosen[1])
    {
        alert("You have found a match");
        cards[cardchosenid[0]].setAttribute("src","./assets/win1.png");
        cards[cardchosenid[1]].setAttribute("src","./assets/win1.png");
        cards[cardchosenid[0]].removeEventListener("click",flipcard);
        cards[cardchosenid[1]].removeEventListener("click",flipcard);
        cardswon.push(cardchosen)
        resultdisplay.innerHTML = cardswon.length;
    
    } 
    else{
        cards[cardchosenid[0]].setAttribute("src","./assets/front-image.png");
        cards[cardchosenid[1]].setAttribute("src","./assets/front-image.png");
    } 
     cardchosen = [];
    cardchosenid = []; 

    if (cardswon.length == cardArray.length/2)
    {
        resultdisplay.innerHTML = "You have successfully completed the game."
    }
}
