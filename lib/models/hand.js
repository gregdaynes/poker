const _ = require('../helpers');
/**
 * Hand
 *
 * cards        array    card
 * addCards     instance card
 * cardValues   array    string
 * cardSuits    array    integer
 */

const Constants = {
    'Straight Flush': 9,
    'Four Of A Kind': 8,
    'Full House': 7,
    'Straight': 6,
    'Flush': 5,
    'Three Of A Kind': 4,
    'Two Pair': 3,
    'One Pair': 2,
    'High Card': 1,
};

module.exports = (() => {

    return class Hand {

        constructor(cards) {
            this.cards = (cards) ? [...cards] : [];
        }

        set addCard(card) {
            this.cards = this.cards.concat([card]);
        }

        get cardValues() {
            return this.cards.map(card => card.value);
        }

        get cardSuits() {
            return this.cards.map(card => card.suit);
        }

        get class() {
            if (this._straightFlush) return 'Straight Flush';
            if (this._fourKind) return 'Four Of A Kind';
            if (this._fullHouse) return 'Full House';
            if (this._straight) return 'Straight';
            if (this._flush) return 'Flush';
            if (this._threeKind) return 'Three Of A Kind';
            if (this._twoPair) return 'Two Pair';
            if (this._pair) return 'One Pair';
            return 'High Card';
        }

        get score() {
            return Constants[this.class];
        }

    // Private methods below -----------

        get _straightFlush() {
            return (this._straight && this._flush);
        }

        get _fourKind() {
            return this._kind(4);
        }

        get _threeKind() {
            return this._kind(3);
        }

        get _fullHouse() {
            const values = this.cardValues
                .reduce(_.groupValues, [])
                .filter(arr => arr.length === 3 || arr.length === 2)
                .reduce((acc, element) => {
                    const foundInAcc = acc.indexOf(element.length);
                    if (foundInAcc >= 0) acc.splice(foundInAcc, 1);

                    return acc;
                }, [2, 3]);

            return (values.length === 0);
        }

        get _straight() {
            const series = this.cardValues
                .sort(_.numericalSort)
                .reduce((acc, card) => {
                    if (acc === 0) return card;
                    if (acc === -1) return -1;

                    return ((acc + 1) === card) ? card : -1;
                }, 0);

            return (series != -1);
        }

        get _flush() {
            const suits = this.cards
                .sort(_.numericalSort)
                .reduce((acc, card, index, array) => 
                    acc.concat([card.suit]), [])
                .filter(_.uniqueValues);

            return (suits.length === 1);
        }

        get _twoPair() {
            const values = this.cardValues
                .reduce(_.findMultiplesOfValue, [])
                .filter(val => val[1] === 2);

            return (values.length === 2) ? true : false;
        }

        get _pair() {
            const values = this.cardValues
                .reduce(_.findMultiplesOfValue, [])
                .filter(val => val[1] === 2);

            return (values.length === 1) ? true : false;
        }

        _kind(numberOfSameCards) {
            return (this.cardValues
                .reduce(_.findMultiplesOfValue, [])
                .filter(cardGroups => cardGroups[1] === numberOfSameCards)
                .length);
        }
    }

})();

