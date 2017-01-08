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
