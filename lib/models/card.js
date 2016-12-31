/**
 * Card
 *
 * card     string  [value][suit]
 * value    integer 1-14
 * suit     string  C D H S
 */

const cardValues = {
    A: [1,14],
    J: 11,
    Q: 12,
    K: 13,
};

module.exports = (function Card() {

    return class Card {

        constructor(cardNotation) {
            const card = cardNotation.split('');

            this.card = cardNotation;
            this.value = this._determinValue(card[0]);
            this.suit = card[1];
        }

        value() {
            return this.value;
        }

        suit() {
            return this.suit;
        }

        _determinValue(value) {
            return (cardValues[value]) ? cardValues[value] : parseInt(value);
        }
    }

})();
