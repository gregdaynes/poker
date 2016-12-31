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
                .reduce(groupValues, [])
                .reduce((acc, value) => acc.concat(value), [])
                .filter(uniqueValues)
                .length;
        }

        isStraight() {
            return this.cardValues
                .sort(this.properSort)
                .reduce((acc, card) => {
                    if (acc === 0) return card;
                    if (acc === -1) return -1;

                    return ((acc + 1) === card) ? card : -1;
                }, 0);
        }

        isFlush() {
            return this.cards
                .sort(this.properSort)
                .reduce((acc, card) => acc.concat([card.suit]), [])
                .filter(uniqueValues)
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

        }

        isPair() {

        }

        highCard() {
            return this.cardValues
                .sort(this.properSort)
                .reduce((highCard, element) => {
                    return (element > highCard) ? element : highCard;
                }, 0)
        }

    }

})();

function properSort(a, b) {
    return a - b
}

function uniqueValues(element, index, arr) {
    return (index === arr.indexOf(element)) ? 1 : 0;
}

function groupValues(acc, value, index, array) {
    // find element in acc
    if (!acc[value]) acc[value] = [value];
    else acc[value] = acc[value].concat([value]);

    return acc;
}

