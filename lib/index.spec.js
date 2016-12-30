/* global describe expect it */
const handScorer = require('./index');

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

    it('should find three of a kind, but not four of a kind', () => {
        const hand1 = '2C 2H 2D 3S 3C';
        const hand2 = '3C 2H 2D 4S 3C';
        const hand3 = '3C 2H 2D 2S 2C';

        expect(handScorer.isKind(3, hand1)).toBe(true);
        expect(handScorer.isKind(3, hand2)).toBe(false);
        expect(handScorer.isKind(3, hand3)).toBe(false);
    });

    it('should find two pairs only', () => {
        const hand1 = '4C 2H 2D 3S 3C';
        const hand2 = '3C 2H 2D 4S 3C';
        const hand3 = '3C 2H 2D 4S 6C';

        expect(handScorer.isPair(2, hand1)).toBe(true);
        expect(handScorer.isPair(2, hand2)).toBe(true);
        expect(handScorer.isPair(2, hand3)).toBe(false);
    });

    it('should find one pairs only', () => {
        const hand1 = '2C 2H 2D 3S 3C';
        const hand2 = '3C 2H 2D 4S 3C';
        const hand3 = '3C 2H 2D 2S 2C';

        expect(handScorer.isPair(1, hand1)).toBe(true);
        expect(handScorer.isPair(1, hand2)).toBe(false);
        expect(handScorer.isPair(1, hand3)).toBe(false);
    });

    it('should find the high card', () => {
        const hand1 = '2C 3C 4C 5C 6C'; // flush, but we'll still test
        const hand2 = '2C 5C 6H JH KH';
        const hand3 = '3C 3S 3H 3D 2D'; // 4 of a kind, but let's test anyways

        expect(handScorer.highCard(hand1)).toBe(6);
        expect(handScorer.highCard(hand2)).toBe(13);
        expect(handScorer.highCard(hand3)).toBe(3);
    });
});

describe('scoring hand', () => {
    it('', () => {
        
    });
});
