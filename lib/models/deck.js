const _ = require('../helpers');
const Card = require('./card');

/**
 * Deck
 *
 * dealCard card
 * remainingCards   array   Card
 * peek Card    
 * count    int count of remaining cards in deck
 * shuffle  array   array of Cards in new randomized order
 */

const cardValues = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
const cardSuits = ['C', 'S', 'H', 'D'];

module.exports = (() => {

    return class Deck {
        constructor() {
            this.cards = this._createDeck();
        }

        _createDeck() {
            return cardSuits.map(s => cardValues.map(v => `${v}${s}`))
                .reduceRight((a, b) => a.concat(b))
                .map(card => new Card(card));
        }

        dealCard() {
            const rand = _.rand(this.cards.length);
            const card = this.cards[rand];

            this.cards.splice(rand, 1);

            return card;
        }

        remainingCards() {
            return this.cards;
        }

        peek() {
            return this.cards[0];
        }

        count() {
            return this.cards.length;
        }

        shuffle() {
            // Knuth-Fisher-Yates shuffle
            for (let i = this.count(); i > 0; i--) {
                let n = _.rand(this.count());
                [this.cards[i - 1], this.cards[n]] = [this.cards[n], this.cards[i - 1]];
            }

            return this.cards;
        }
    }

})();

