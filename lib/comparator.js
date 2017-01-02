const _ = require('./helpers');

module.exports = exports;

exports.compare = (hand1, hand2) => {
    // compare classes of hands
    if (hand1.score !== hand2.score) {
        (hand1.score > hand2.score) ? hand1.setWinner() : hand2.setWinner();
        return;
    }

    // same class
    let testing = false;
    let i = 0;

    while (testing === false) {
        if (hand1.cardValues[i] !== hand2.cardValues[i]) {
            if (hand1.cardValues[i] > hand2.cardValues[i]) hand1.setWinner();
            else hand2.setWinner();

            testing = true;
            return;
        }

        i++;
    }
}
