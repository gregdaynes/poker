/* global describe expect it */
const handScorer = require('./index');

// describe('#rand', () => {
//     it('should generate a random number', () => {
//         expect(app.rand(1, 100)).toBeLessThanOrEqual(100);
//         expect(app.rand(1,1)).toBe(1);
//         expect(app.rand(1,0)).toThrow();
//     });
// });

// describe('#createSet', () => {
//
//     it('should contain 13 cards', () => {
//         const suit = 'S'; 
//         const set = app.createSet('S');
//
//         expect(set.length).toBe(13);
//         expect(set[0].suit).toBe('S');
//         // needs test for index of certain card
//     });
// });

// describe('#createDeck', () => {
//     it('should contain 52 entries', () => {
//         const deck = app.createDeck();
//         const i = app.rand(1, deck.length);
//         expect(deck.length).toBe(52);
//         expect(deck[i].suit).toBeDefined();
//         expect(deck[i].card).toBeDefined();
//     });
// });

// describe('#createHands', () => {
//     it('should deal x hands containing y cards', () => {
//         const x = 5;
//         const y = 3;
//         const hands = app.createHands(x, y);
//
//         expect(hands.length).toBe(x);
//         expect(hands[0].length).toBe(y);
//         expect(hands[0][0].suit).toBeDefined();
//         expect(hands[0][0].card).toBeDefined();
//     });
// });

// describe('#scoreHands', () => {
//
//         it('should score the player with the card as a 9', () => {
//             const scoredHands = app.scoreHands(hands);
//
//             expect(scoredHands).toBeInstanceOf(Array);
//             expect(scoredHands.length).toBe(2);
//             expect(scoredHands.filter(scoredHand => scoredHand.score === 9)[0]).toBeDefined();
//         });
//     
//     });
//
// });

// describe('@highCard', () => {
//     const hand1 = [ 
//         { suit: 'C', card: 2 },
//         { suit: 'H', card: 9 },
//         { suit: 'S', card: 'A' },
//         { suit: 'S', card: 9 },
//         { suit: 'D', card: 10 }
//     ];
//
//     const hand2 = [
//         { suit: 'C', card: 6 },
//         { suit: 'H', card: 7 },
//         { suit: 'H', card: 5 },
//         { suit: 'S', card: 5 },
//         { suit: 'C', card: 'J' },
//     ];
//
//     it('should score hand 1 as a 9 for SA, when it is the only hand', () => {
//         expect(app.highCard([hand1, hand2])).toContainEqual({ score: 9, hand: hand1 });
//     });
//
// });

describe('hand', () => {
    it('should determin all cards are the same suit', () => {
        const hand1 = '2C 3C 4C 5C 6C';
        const hand2 = '2H 3S 4D 5D 6H';
        expect(handScorer.isFlush(hand1)).toBe(true);
        expect(handScorer.isFlush(hand2)).toBe(false);
    });

    it('should determin cards are sequential', () => {
        const hand1 = '2C 3C 4C 5C 6C';
        // const hand2 = 'AC 2C 3C 4C 5C';
        const hand3 = '9C 10C JC QC KC';
        const hand4 = '2C 3C 5C 7C 8C';

        expect(handScorer.isStraight(hand1)).toBe(true);
        // expect(handScorer.isStraight(hand2)).toBe(true);
        expect(handScorer.isStraight(hand3)).toBe(true);
        expect(handScorer.isStraight(hand4)).toBe(false);
    });

    it('should find four of a kind', () => {
        const hand1 = '2C 2H 2D 2S 3C';
        const hand2 = '3C 2H 2D 2S 3C';

        expect(handScorer.isKind(4, hand1)).toBe(true);
        expect(handScorer.isKind(4, hand2)).toBe(false);
    });

    it('should find four of a kind', () => {
        const hand1 = '2C 2H 2D 2S 3C';
        const hand2 = '3C 2H 2D 2S 3C';

        expect(handScorer.isKind(4, hand1)).toBe(true);
        expect(handScorer.isKind(4, hand2)).toBe(false);
    });

    it('should find three of a kind, but not four of a kind', () => {
        const hand1 = '2C 2H 2D 3S 3C';
        const hand2 = '3C 2H 2D 4S 3C';
        const hand3 = '3C 2H 2D 2S 2C';

        expect(handScorer.isKind(3, hand1)).toBe(true);
        expect(handScorer.isKind(3, hand2)).toBe(false);
        expect(handScorer.isKind(3, hand3)).toBe(false);
    });

    it('should find pairs only', () => {
        const hand1 = '2C 2H 2D 3S 3C';
        const hand2 = '3C 2H 2D 4S 3C';
        const hand3 = '3C 2H 2D 2S 2C';

        expect(handScorer.isKind(2, hand1)).toBe(true);
        expect(handScorer.isKind(2, hand2)).toBe(true);
        expect(handScorer.isKind(2, hand3)).toBe(false);
    });

    it('should find the high card', () => {

    });
});


