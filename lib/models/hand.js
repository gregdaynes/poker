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

module.exports = (function Hand() {

    return class Hand {

        constructor(cards) {
            this.cards = [...cards];
            this.cardValues = this.getCardValues();
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
                .reduce((acc, val) => {
                    if (!acc[val]) acc[val] = 1;
                    else acc[val] += 1;

                    return acc;
                }, [])
                .filter(val => val === 4)

            return (values.length) ? true : false;
        }

        isFullHouse() {
            return this.cardValues
                .reduce(_.groupValues, [])
                .reduce((acc, value) => acc.concat(value), [])
                .filter(_.uniqueValues)
                .length;
        }

        isStraight() {
            return this.cardValues
                .sort(_.properSort)
                .reduce((acc, card) => {
                    if (acc === 0) return card;
                    if (acc === -1) return -1;

                    return ((acc + 1) === card) ? card : -1;
                }, 0);
        }

        isFlush() {
            return this.cards
                .sort(_.properSort)
                .reduce((acc, card) => acc.concat([card.suit]), [])
                .filter(_.uniqueValues)
                .length;
        }

        is3Kind() {
            const values = this.cardValues
                .reduce((acc, val) => {
                    if (!acc[val]) acc[val] = 1;
                    else acc[val] += 1;

                    return acc;
                }, [])
                .filter(val => val === 3)

            return (values.length) ? true : false;

        }

        is2Pair() {
            const values = this.cardValues
                .reduce((acc, val) => {
                    if (!acc[val]) acc[val] = 1;
                    else acc[val] += 1;

                    return acc;
                }, [])
                .filter(val => val === 2);

            return (values.length === 2) ? true : false;
        }

        isPair() {
            const values = this.cardValues
                .reduce((acc, val) => {
                    if (!acc[val]) acc[val] = 1;
                    else acc[val] += 1;

                    return acc;
                }, [])
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
