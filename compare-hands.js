const classifyHand = require('./classify-hand');

module.exports = exports;

exports.compare = function compare(hand1, hand2) {
    hand1 = scoreHand(hand1); 
    hand2 = scoreHand(hand2); 

    if (getHighClass(hand1) === getHighClass(hand2)) {
        return groupSortCompare(hand1, hand2).hand;
    } else if (getHighClass(hand1) > getHighClass(hand2)) {
        return hand1.hand;
    } else {
        return hand2.hand;
    }
}

function scoreHand(hand) {
    return {
        hand,

        straightFlush: (classifyHand.isFlush(hand) && classifyHand.isStraight) ? 9 : false,
        is4Kind: classifyHand.isKind(4, hand) ? 8 : false,
        isFullHouse: classifyHand.isFullHouse(hand) ? 7 : false,
        flush: classifyHand.isFlush(hand) ? 6 : false,
        straight: classifyHand.isStraight(hand) ? 5 : false,
        is3Kind: classifyHand.isKind(3, hand) ? 4 : false,
        is2Pair: classifyHand.isPair(2, hand) ? 3 : false,
        isPair: classifyHand.isPair(1, hand) ? 2 : false,
        highCard: classifyHand.highCard(hand) ? 1: false,
    };
}

function getHighClass(hand) {
    return Object.keys(hand).reduce((acc, key) => {
        return (hand[key] > acc) ? hand[key] : acc;
    }, 0);
}

function groupSortCompare(hand1, hand2) {
    groupedHand1 = groupReverseSort(group(classifyHand.getCardsAsInts(hand1.hand.split(' ')).sort(classifyHand.properSort).reverse()));
    groupedHand2 = groupReverseSort(group(classifyHand.getCardsAsInts(hand2.hand.split(' ')).sort(classifyHand.properSort).reverse()));

    for (i = 0; i<groupedHand1.length; i++) {
        console.log(groupedHand1[i], groupedHand2[i]);
        return (groupedHand1[i] > groupedHand2[i]) ? hand1 : hand2;
    }
}

function group(hand) {
    return hand.reduce((acc, card) => {
        if (!acc[card]) acc[card] = [card];
        else acc[card] = acc[card].concat([card]);

        return acc;
    }, {});
}

function groupReverseSort(groups) {
    return Object.keys(groups).map(group => groups[group])
        .sort((a, b) => {
            return a.length - b.length;
        })
        .reverse()
        .reduce((acc, item) => acc.concat(item), []);
}
