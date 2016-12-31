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
    const values = this.getCardsAsInts(cards);

    const straight = values.sort(this.properSort).reduce((acc, card) => {
        card = getCardInt(card);

        if (acc === null) return parseInt(card); // initial card
        if (acc === -1) return -1; // break in chain, always return -1

        return (card === (acc + 1)) ? card : -1;
    }, null);

    return (straight !== -1) ? true : false;
}

exports.isKind = function isKind(count, hand) {
    const cards = hand.split(' ');
    const values = this.getCardsAsInts(cards);

    const groupedValues = values.reduce((acc, val) => {
        if (!acc[val]) acc[val] = 1;
        else acc[val] += 1;

        return acc;
    }, {});


    const matchingKind = Object.keys(groupedValues).filter(val => {
        return groupedValues[val] === count;
    });

    return (matchingKind.length) ? true : false;
}

// 3 of a kind and a pair
exports.isFullHouse = function isFullHouse(hand) {
    const cards = hand.split(' ');
    const values = this.getCardsAsInts(cards);

    const groupedValues = values.reduce((acc, val) => {
        if (!acc[val]) acc[val] = 1;
        else acc[val] += 1;

        return acc;
    }, {});

    if (Object.keys(groupedValues).length !== 2) return false;

    const reducer = Object.keys(groupedValues).reduce((acc, key) => {
        const group = groupedValues[key];

        const placement = acc.indexOf(group);
        if (placement > -1) acc.splice(placement, 1);

        return acc;
    }, [2, 3]);


    return (!reducer.length) ? true : false;
}

exports.isPair = function isKind(count, hand) {
    const cards = hand.split(' ');
    const values = this.getCardsAsInts(cards);

    const groupedValues = values.reduce((acc, val) => {
        if (!acc[val]) acc[val] = 1;
        else acc[val] += 1;

        return acc;
    }, {});


    const matchingKind = Object.keys(groupedValues).filter(val => {
        return groupedValues[val] === 2;
    });

    return (matchingKind.length === count) ? true : false;
}

exports.highCard = function highCard(hand) {
    const cards = hand.split(' ');
    const values = this.getCardsAsInts(cards).sort(this.properSort);

    return values[values.length - 1];
}


function getCardSuit(card) {
    return card.split('').reverse()[0];
}

exports.getCardsAsInts = function getCardsAsInts(cards) {
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

exports.properSort = function properSort(a, b) {
    return a - b;
}