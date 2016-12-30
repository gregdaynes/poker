const cardValues = {
    A: [1,14],
    J: 11,
    Q: 12,
    K: 13,
};

module.exports = exports

// all cards in hand same suit
exports.isFlush = function isFlush(hand) {
    const cards = hand.split(' ');

    const suits = cards.reduce((acc, card) => {
        return acc.concat([getCardSuit(card)]);
    }, []);

    return (uniqueSuits(suits).length === 1) ? true : false;
}

// all cards in hand in sequence
exports.isStraight = function isStraight(hand) {
    const cards = hand.split(' ');
    const values = getCardsAsInts(cards);

    const straight = values.sort(properSort).reduce((acc, card) => {
        card = getCardInt(card);

        if (acc === null) return parseInt(card); // initial card
        if (acc === -1) return -1; // break in chain, always return -1

        return (card === (acc + 1)) ? card : -1;
    }, null);

    return (straight !== -1) ? true : false;
}

exports.isKind = function isKind(count, hand) {
    const cards = hand.split(' ');
    const values = getCardsAsInts(cards);

    const x = values.reduce((acc, val) => {
        if (!acc[val]) acc[val] = 1;
        else acc[val] += 1;

        return acc;
    }, {});


    const y = Object.keys(x).filter(val => {
        return x[val] === count;
    });

    console.log(count, hand, y);

    return (y.length) ? true : false;
}

function getCardSuit(card) {
    return card.split('').reverse()[0];
}

function getCardsAsInts(cards) {
    return cards.reduce((acc, card) => {
        return acc.concat([getCardInt(getCardValue(card))]);
    }, []);
}

function getCardValue(card) {
    card = card.split('').reverse();
    card.splice(0, 1); // remove suit

    return card.reverse().join('');
}

function getCardInt(card) {
    const foundValue = cardValues[card];

    return (foundValue) ? foundValue : parseInt(card);
}

function uniqueSuits(suits) {
    return [...(new Set(suits))];
}

function properSort(a, b) {
    return a - b;
}
// const handCount = 5;
// const playerCount = 5;

// const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
// const suits = ['S', 'D', 'H', 'C'];

// const scorers = [
//     { points: 9, func: 'highCard' },
//     { points: 8, func: 'onePair' },
//     { points: 7, func: 'twoPair' },
//     { points: 6, func: 'threeOfAKind' },
//     { points: 5, func: 'Straight' },
//     { points: 4, func: 'flush' },
//     { points: 3, func: 'fullHouse' },
//     { points: 2, func: 'fourOfAKind' },
//     { points: 1, func: 'straightFlush' },
//     { points: 0, func: 'fiveOfAKind' },
// ]


// exports.createDeck = function createDeck() {
//     return suits.reduce((acc, suit) =>
//         acc.concat(this.createSet(suit)), []);
// }

// exports.createSet = function createSet(suit) {
//     return unique(cards).map(card => ({ suit, card }));
// }

// exports.createHands = function createHands(players, cardsPerHand) {
//     const playerHands = [];
//
//     players = (players) ? players : playerCount;
//     cardsPerHand = (cardsPerHand) ? cardsPerHand : handCount;
//
//     let deck = this.createDeck();
//     let n = handCount * playerCount;
//
//     for (c = 0; c < cardsPerHand; c ++) {
//         for (p = 0; p < players; p ++) {
//             const x = this.rand(1, deck.length);
//             let card = deck[x];
//
//             if (!deck[x]) card = deck.pop();
//             else deck.splice(x, 1);
//
//             if (!playerHands[p]) playerHands[p] = [];
//
//             playerHands[p] = playerHands[p].concat([card]);
//         }
//     }
//
//     return playerHands;
// }

// exports.rand = function rand(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// exports.highCard = function(hands) {
//     console.log(hand);
//
//     return 9;
// }

// function unique(arr) {
//     return [...(new Set(arr))];
// }

// function indexOfCard(card) {
//     return cards.map((n, i) => { if (card === n) { return i; }})
//         .filter(entry => entry !== undefined);
// }

// function highValue(cardValue) {
//     return Math.max.apply(null, cardValue);
// }
