/**
 * Card
 *
 * notation string [value][suit]
 * value    integer 1-14
 * suit     string  C D H S
 */

const cardValues = {
    A: [1,14],
    J: 11,
    Q: 12,
    K: 13,
};

module.exports = (() => {

    return class Card {

        constructor(notation) {
            this.notation = notation;
        }

        get value() {
            const symbol = this.notation.split('').reverse();
            symbol.shift();
            const value = symbol.reverse().join('');

            return (cardValues[value]) ? cardValues[value] : parseInt(value);
        }

        get suit() {
            return this.notation.split('').reverse()[0];
        }
    }

})();
