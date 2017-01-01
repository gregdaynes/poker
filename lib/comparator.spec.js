/* global describe it expect */

const Hand = require('./models/hand');
const Card = require('./models/card');
const Deck = require('./models/deck');
const Comparator = require('./comparator');

describe('comparator', () => {
    let deck;
    let handOne;
    let handTwo;

    beforeEach(() => {
        deck = new Deck();
        handOne = new Hand();
        handTwo = new Hand();

        for (let i = 0; i < 5; i++) {
            handOne.addCard(deck.dealCard());
            handTwo.addCard(deck.dealCard());
        }
    });


    it('should stuff', () => {
        console.log('Game 1', "\n", handOne.cards, "\n", handTwo.cards);

    });


    it('should stuff', () => {
        console.log('Game 2', "\n", handOne.cards, "\n", handTwo.cards);
    });

});
