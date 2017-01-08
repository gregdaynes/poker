const _ = require('helpers');

module.exports = function comparator(a, b) {
    if (a.score !== b.score) {
        return a.score - b.score;
    }

    let results = 0;

    for(let i = 0; i < a.cardValues.length; i++) {
        const aValues = sort(a);
        const bValues = sort(b);

        if (aValues[i] === bValues[i]) break;

        if (aValues[i] > bValues[i]) {
            results = 1;
            i = a.cardValues.length;
        }
        else if (aValues[i] < bValues[i]) {
            results = -1;
            i = a.cardValues.length;
        }
    }

    return results;
}


function sort(hand) {
    return hand.cardValues.sort(_.numericalSort).reverse();
}


// function sort() {
//     return [...arguments]
//         .map(hand => {
//             hand.cardValues
//                 .sort(_.numericalSort)
//                 .reverse();
//
//             return hand;
//         });
// }

/** 
 * this is shit, the whole comparator should return -1 0 1
 * it shouldn't be setting anything, or changing models
 */
// exports.compare = (hand1, hand2) => {
//     // compare classes of hands
//     if (hand1.score !== hand2.score) {
//         (hand1.score > hand2.score) ? hand1.setWinner() : hand2.setWinner();
//         return;
//     }
//
//     const x = hand1.cardValues.reduce(_.groupValues, []).filter(v => v).reverse().reduce((a, b) => a.concat(b));
//     const y = hand2.cardValues.reduce(_.groupValues, []).filter(v => v).reverse().reduce((a, b) => a.concat(b));
//
//     for (let i = 0; i < x.length; i++) {
//         if (x[i] !== y[i]) {
//             if (x[i] > y[i]) hand1.setWinner();
//             else hand2.setWinner();
//
//             i = x.length;
//         }
//     }
//
//     return { 'hand1': hand1.winner, 'hand2': hand2.winner };
// }
