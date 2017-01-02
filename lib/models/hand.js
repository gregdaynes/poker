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
            this.score = 0;
            this.winner = null;
            this.class = null;

            this.classHand();
            this.sortCards();
        }

        addCard(card) {
            this.cards = this.cards.concat([card]);
            this.cardValues = this.getCardValues();
            this.cardSuits = this.getCardSuits();

            this.classHand();
            this.sortCards();
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
            const values = (this.isStraight() && this.isFlush()) ? true : false

            if (values) {
                this.score = 9;
                this.class = 'Straight Flush';
            }

            return values;
        }

        is4Kind() {
            const values = this.cardValues
                .reduce(_.findMultiplesOfValue, [])
                .filter(val => val === 4)

            if (values) {
                this.score = 8;
                this.class = '4 Of A Kind';
            }

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

            if (values.length === 0) {
                this.score = 7;
                this.class = 'Full House';
                return true;
            }

            return false;
        }

        isStraight() {
            const series = this.cardValues
                .sort(_.properSort)
                .reduce((acc, card) => {
                    if (acc === 0) return card;
                    if (acc === -1) return -1;

                    return ((acc + 1) === card) ? card : -1;
                }, 0);

            if (series != -1) {
                this.score = 6;
                this.class = 'Straight';
                return true;
            }

            return false;

        }

        isFlush() {
            const suits = this.cards
                .sort(_.properSort)
                .reduce((acc, card) => acc.concat([card.suit]), [])
                .filter(_.uniqueValues)

            if (suits.length === 1) {
                this.score = 5;
                this.class = 'Flush';
                return true;
            }

            return false;
        }

        is3Kind() {
            const values = this.cardValues
                .reduce(_.findMultiplesOfValue, [])
                .filter(val => val === 3)

            if (values.length) {
                this.score = 4;
                this.class = '3 Of A Kind';
            }

            return (values.length) ? true : false;

        }

        is2Pair() {
            const values = this.cardValues
                .reduce(_.findMultiplesOfValue, [])
                .filter(val => val === 2);

            if (values.length === 2) {
                this.score = 3;
                this.class = '2 Pair';
                return true;
            }

            return false;
        }

        isPair() {
            const values = this.cardValues
                .reduce(_.findMultiplesOfValue, [])
                .filter(val => val === 2);

            if (values.length === 1) {
                this.score = 2;
                this.class = 'Pair';
                return true;
            }

            return false;
        }

        highCard() {
            const values = this.cardValues
                .sort(_.properSort)
                .reduce((highCard, element) => {
                    return (element > highCard) ? element : highCard;
                }, 0)

            this.score = 1;
            this.class = 'High Card';

            return values;
        }

        classHand() {
            this.score = 0;

            if (this.isStraightFlush()) return;

            if (this.is4Kind()) return;

            if (this.isFullHouse()) return;

            if (this.isStraight()) return;

            if (this.isFlush()) return;

            if (this.is3Kind()) return;

            if (this.is2Pair()) return;

            if (this.isPair()) return;

            if (this.highCard()) return;
        }

        setWinner() {
            this.winner = true;
        }

        sortCards() {
            return this.cardValues.sort(_.properSort).reverse();
        }

        toString() {
            return this.cards.sort((a, b) => a.value - b.value)
                .reverse()
                .reduce((acc, card) => acc.concat([card.card]), [])
                .join(' ');
        }

    }

})();

