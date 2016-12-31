const Card = require('./models/card');
const Hand = require('./models/hand');

const dealtCards = [
    new Card('2C'),
    new Card('3C'),
    new Card('4C'),
    new Card('5D'),
    new Card('6C'),
];

const dealtHand = new Hand(dealtCards);

console.log(dealtHand.isStraightFlush());
console.log(dealtHand.is4Kind());
console.log(dealtHand.isFullHouse());
console.log(dealtHand.isStraight());
console.log(dealtHand.isFlush());
console.log(dealtHand.is3Kind());
console.log(dealtHand.is2Pair());
console.log(dealtHand.isPair());
