const _ = require('helpers');

module.exports = exports;

exports.compare = (hand1, hand2) => {
    // compare classes of hands
    if (hand1.score !== hand2.score) {
        (hand1.score > hand2.score) ? hand1.setWinner() : hand2.setWinner();
        return;
    }

    const x = hand1.cardValues.reduce(_.groupValues, []).filter(v => v).reverse().reduce((a, b) => a.concat(b));
    const y = hand2.cardValues.reduce(_.groupValues, []).filter(v => v).reverse().reduce((a, b) => a.concat(b));

    for (let i = 0; i < x.length; i++) {
        if (x[i] !== y[i]) {
            if (x[i] > y[i]) hand1.setWinner();
            else hand2.setWinner();

            i = x.length;
        }
    }

    return { 'hand1': hand1.winner, 'hand2': hand2.winner };
}
