const cards = ["Guadalupe", "Ollie", "Aki"]

function writeCards(cards, eventName){
  let newArray = [];
  for (let i = 0; i < cards.length; i++){
   newArray.push(`Thank you, ${cards[i]}, for the wonderful ${eventName} gift!`);
     }
  return newArray;
}

function countDown(num){
  let i = num
  while (i >= 0){
    console.log(i--);
  }
}
