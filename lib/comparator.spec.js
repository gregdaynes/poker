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
        deck = new Deck([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']);
        handOne = new Hand();
        handTwo = new Hand();

        for (let i = 0; i < 5; i++) {
            handOne.addCard(deck.dealCard());
            handTwo.addCard(deck.dealCard());
        }
    });

    for (let i = 0; i < 100; i++) {
        it('should play multiple 2 hand games. Picking a winner', () => {
            const results = Comparator.compare(handOne, handTwo);
        });
    }

    it('should play a draw game', () => {
        const drawHand1 = new Hand([
            new Card('2C'),
            new Card('3C'),
            new Card('4C'),
            new Card('5C'),
            new Card('6C'),
        ]);

        const drawHand2 = new Hand([
            new Card('2S'),
            new Card('3S'),
            new Card('4S'),
            new Card('5S'),
            new Card('6S'),
        ]);

        const results = Comparator.compare(drawHand1, drawHand2);

        expect(results.hand1).toBe(null);
        expect(results.hand2).toBe(null);
    });
 
});
