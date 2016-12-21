const handCount = 5;
const playerCount = 5;

const playerHands = [];
const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
const suits = ['S', 'D', 'H', 'C'];

(function play() {
    createHands();

    scoreHands();
})()

function createDeck() {
    return deck = suits.reduce((acc, suit) =>
        acc.concat(createSet(suit)), []);
}

function createSet(suit) {
    return cards.map(card => ({ suit, card }));
}

function createHands() {
    let deck = createDeck();
    let n = handCount * playerCount;

    for (c = 0; c < handCount; c ++) {
        for (p = 0; p < playerCount; p ++) {
            const x = rand(1, deck.length);
            let card = deck[x];

            if (!deck[x]) card = deck.pop();
            else deck.splice(x, 1);

            if (!playerHands[p]) playerHands[p] = [];

            playerHands[p] = playerHands[p].concat([card]);
        }
    }
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function scoreHands() {
    console.log(playerHands); 
}
