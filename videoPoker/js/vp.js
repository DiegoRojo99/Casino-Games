var deckCards = []
var fiveCards = []
var heldCards = []

function makeDeck(){
    let type=""
    let value=0
    for(let i=1; i<14; i++){
        if(i===1){
            value="A"
        }else if(i<11){
            value=i
        }else if(i===11){
            value="J"
        }else if(i===12){
            value="Q"
        }else if(i===13){
            value="K"
        }

        for(let j=0; j<4; j++){
            if(j===0){
                type="C"
            }else if(j===1){
                type="D"
            }else if(j===2){
                type="H"
            }else if(j===3){
                type="S"
            }
            deckCards.push(value+"-"+type)
            
        }
    }
}

function shuffleCards(){
    deckCards=shuffle(deckCards)
}
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

function getCards(){
    makeDeck()
    shuffleCards()
    for(let a=0; a<5; a++){
        fiveCards[a]=deckCards.pop()
    }
}

function updateCardImages(){
    console.log("AQUI ESTAMOS")
    getCards()

    document.getElementById("card1").src=getImageSRC(fiveCards.pop())
    document.getElementById("card2").src=getImageSRC(fiveCards.pop())
    document.getElementById("card3").src=getImageSRC(fiveCards.pop())
    document.getElementById("card4").src=getImageSRC(fiveCards.pop())
    document.getElementById("card5").src=getImageSRC(fiveCards.pop())

}

function getImageSRC(cardName){
    return "./../img/cards/"+cardName+".png"
}

window.onload = function() {
    console.log("AQUI DEBERIAMOS ESTAR")
    document.getElementById("dealButton").addEventListener("click",updateCardImages)
  };