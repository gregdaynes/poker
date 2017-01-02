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
            this.score = null;
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
            return (this.isStraight() && this.isFlush()) ? true : false
        }

        is4Kind() {
            const values = this.cardValues
                .reduce(_.findMultiplesOfValue, [])
                .filter(value => value[1] === 4);

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
                .filter(val => val[1] === 3)

            return (values.length) ? true : false;
        }

        is2Pair() {
            const values = this.cardValues
                .reduce(_.findMultiplesOfValue, [])
                .filter(val => val[1] === 2);

            return (values.length === 2) ? true : false;
        }

        isPair() {
            const values = this.cardValues
                .reduce(_.findMultiplesOfValue, [])
                .filter(val => val[1] === 2);

            return (values.length === 1) ? true : false;
        }

        highCard() {
            const values = this.cardValues
                .sort(_.properSort)
                .reduce((highCard, element) => {
                    return (element > highCard) ? element : highCard;
                }, 0)

            return values;
        }

        classHand() {
            if (this.isStraightFlush()) {
                this.score = 9;
                this.class = 'Straight Flush';
            }

            else if (this.is4Kind()) {
                this.score = 8;
                this.class = '4 Of A Kind';
            }

            else if (this.isFullHouse()) {
                this.score = 7;
                this.class = 'Full House';
            }

            else if (this.isStraight()) {
                this.score = 6;
                this.class = 'Straight';
            }

            else if (this.isFlush()) {
                this.score = 5;
                this.class = 'Flush';
            }

            else if (this.is3Kind()) {
                this.score = 4;
                this.class = '3 Of A Kind'
            }
            
            else if (this.is2Pair()) {
                this.score = 3;
                this.class = '2 Pair';
            }

            else if (this.isPair()) {
                this.score = 2;
                this.class = 'Pair';
            }

            else if (this.highCard()) {
                this.score = 1;
                this.class = 'High card';
            }

            return { score: this.score, class: this.class };
        }

        setWinner() {
            return this.winner = true;
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

