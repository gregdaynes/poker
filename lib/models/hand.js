const _ = require('../helpers');
/**
 * Hand
 *
 * cards    array   card
 * isStraightFlush
 * is4Kind
 * isFullHouse
 * isStraight
 * isFlush
 * is3Kind
 * is2Pair
 * isPair
 * highCard
 */

module.exports = (() => {

    return class Hand {

        constructor(cards) {
            this.cards = (cards) ? [...cards] : [];
            this.cardValues = this.getCardValues();
            this.cardSuits = this.getCardSuits();
        }

        addCard(card) {
            this.cards = this.cards.concat([card]);
            this.cardValues = this.getCardValues();
            this.cardSuits = this.getCardSuits();
        }

        count() {
            return this.cards.length;
        }

        getCardValues() {
            return this.cards.map(card => card.value);
        }

        getCardSuits() {
            return this.cards.map(card => card.suit);
        }

        isStraightFlush() {
            return (this.isStraight() && this.isFlush()) ? true : false
        }

        is4Kind() {
            const values = this.cardValues
                .reduce(_.findMultiplesOfValue, [])
                .filter(val => val === 4)

            return (values.length) ? true : false;
        }

        isFullHouse() {
            const values = this.cardValues
                .reduce(_.groupValues, [])
                .filter(arr => arr.length === 3 || arr.length === 2)
                .reduce((acc, element) => {
                    const foundInAcc = acc.indexOf(element.length);
                    if (foundInAcc >= 0) acc.splice(foundInAcc, 1);

                    return acc;
                }, [2, 3]);

            return (values.length === 0) ? true : false;
        }

        isStraight() {
            const series = this.cardValues
                .sort(_.properSort)
                .reduce((acc, card) => {
                    if (acc === 0) return card;
                    if (acc === -1) return -1;

                    return ((acc + 1) === card) ? card : -1;
                }, 0);

            return (series != -1) ? true : false;
        }

        isFlush() {
            const suits = this.cards
                .sort(_.properSort)
                .reduce((acc, card) => acc.concat([card.suit]), [])
                .filter(_.uniqueValues)

            return (suits.length === 1) ? true : false;
        }

        is3Kind() {
            const values = this.cardValues
                .reduce(_.findMultiplesOfValue, [])
                .filter(val => val === 3)

            return (values.length) ? true : false;

        }

        is2Pair() {
            const values = this.cardValues
                .reduce(_.findMultiplesOfValue, [])
                .filter(val => val === 2);

            return (values.length === 2) ? true : false;
        }

        isPair() {
            const values = this.cardValues
                .reduce(_.findMultiplesOfValue, [])
                .filter(val => val === 2);

            return (values.length === 1) ? true : false;
        }

        highCard() {
            return this.cardValues
                .sort(_.properSort)
                .reduce((highCard, element) => {
                    return (element > highCard) ? element : highCard;
                }, 0)
        }

    }

})();

