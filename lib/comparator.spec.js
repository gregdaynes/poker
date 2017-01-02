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
        deck = new Deck([2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']);
        handOne = new Hand();
        handTwo = new Hand();

        for (let i = 0; i < 5; i++) {
            handOne.addCard(deck.dealCard());
            handTwo.addCard(deck.dealCard());
        }
    });


    for (let i = 0; i < 10; i++) {
        it('should play multiple 2 hand games. Picking a winner', () => {
            const results = Comparator.compare(handOne, handTwo);
            console.log(`Game ${i + 1} - ${(handOne.winner) ? 'Hand1' : 'Hand2'} \n`
                      + `${handOne.class} ${handOne.toString()} \n`
                      + `${handTwo.class} ${handTwo.toString()}`);

            expect(handOne.winner).not.toBe(handTwo.winner);
        });
    }
});
