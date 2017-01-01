const compareHands = require('./compare-hands');

describe('comparing hands', () => {

    it('should score straight flush higher than straight', () => {
        const hand1 = '2C 3C 4C 5C 6C'; // straight flush
        const hand2 = '2S 3S 4H 5D 6D'; // stright
        expect(compareHands.compare(hand1, hand2)).toBe(hand1);
    });

    it('should score full house higher than pair', () => {
        const hand1 = '8S 8D 2H 4H 7H'; // a pair
        const hand2 = '2S 2C 3H 3D 3S'; // full house
        expect(compareHands.compare(hand1, hand2)).toBe(hand2);
    });

    it('should score 2 pair higher than pair', () => {
        const hand1 = '8S 8D 2H 4H 4C'; // 2 pair
        const hand2 = '2S 8C 3H 3D 9S'; // 1 pair
        expect(compareHands.compare(hand1, hand2)).toBe(hand1);
    });

    it('should score pair higher than highCard', () => {
        const hand1 = '2S 3D 6H 8H 9C'; // high card
        const hand2 = '2S 8C 3H 3D 3C'; // 1 pair
        expect(compareHands.compare(hand1, hand2)).toBe(hand2);
    });

    it('should score highest card', () => {
        const hand1 = '2S 3D 6H 8H 9C'; // high card
        const hand2 = '2S 8C 3H 9D KC'; // high card k
        expect(compareHands.compare(hand1, hand2)).toBe(hand2);
    });

    it('should score highest card of same pair', () => {
        const hand1 = '2C 2H 6H 8H QC'; // high card
        const hand2 = '2S 2D 6C 8D KC'; // high card k
        expect(compareHands.compare(hand1, hand2)).toBe(hand2);
    });

    it('should score high pair', () => {
        const hand1 = '5C 5H 6H 8H QC'; // high card
        const hand2 = '3S 3D 6C 8D KC'; // high card k
        expect(compareHands.compare(hand1, hand2)).toBe(hand2);
    });

    it('should score high card with 4 of a kind', () => {
        const hand1 = '5C 5H 5H 5H QC'; // high card
        const hand2 = '5S 5h 5C 5D KC'; // high card k
        expect(compareHands.compare(hand1, hand2)).toBe(hand2);
    });

    it('should score high card in a flush', () => {
        const hand1 = '2C 3C 4C 5C 6C';
        const hand2 = '3C 4C 5C 6C 7C';
        expect(compareHands.compare(hand1, hand2)).toBe(hand2);
    });

    it('', () => {
        const hand1 = '2C 2C 2C 3C 3C';
        const hand2 = '2C 2C 2C 4C 4C';
        expect(compareHands.compare(hand1, hand2)).toBe(hand2);
    });

    it('', () => {
        const hand1 = '3C 3D 4H 4D 5H';
        const hand2 = '2C 2D KC KD QD';
        expect(compareHands.compare(hand1, hand2)).toBe(hand2);
    });
});
