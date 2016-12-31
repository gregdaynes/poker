const Card = require('./models/card');
const Hand = require('./models/hand');

const dealtCards = [
    new Card('2H'),
    new Card('2C'),
    new Card('2D'),
    new Card('4S'),
    new Card('5D'),
];

const dealtHand = new Hand(dealtCards);

// console.log(dealtHand.isStraight());
// console.log(dealtHand.isFlush());
// console.log(dealtHand.isStraightFlush());
// console.log(dealtHand.is4Kind());
console.log(dealtHand.is3Kind());
