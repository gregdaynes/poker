/* global describe expect it */
const classifyHand = require('./classify-hand');

describe('hand', () => {
    it('should determin all cards are the same suit', () => {
        const hand1 = '2C 3C 4C 5C 6C';
        const hand2 = '2H 3S 4D 5D 6H';

        expect(classifyHand.isFlush(hand1)).toBe(true);
        expect(classifyHand.isFlush(hand2)).toBe(false);
    });

    it('should determin cards are sequential', () => {
        const hand1 = '2C 3C 4C 5C 6C';
        // const hand2 = 'AC 2C 3C 4C 5C';
        const hand3 = '9C 10C JC QC KC';
        const hand4 = '2C 3C 5C 7C 8C';

        expect(classifyHand.isStraight(hand1)).toBe(true);
        // expect(classifyHand.isStraight(hand2)).toBe(true);
        expect(classifyHand.isStraight(hand3)).toBe(true);
        expect(classifyHand.isStraight(hand4)).toBe(false);
    });

    it('should find four of a kind', () => {
        const hand1 = '2C 2H 2D 2S 3C';
        const hand2 = '3C 2H 2D 2S 3C';

        expect(classifyHand.isKind(4, hand1)).toBe(true);
        expect(classifyHand.isKind(4, hand2)).toBe(false);
    });

    it('should find 3 of a kind, and 1 pair', () => {
        const hand1 = '2C 2D 3D 3C 3H';
        const hand2 = '2C 4D 4D 4C 4H';
        const hand3 = '2C 6D 3D 3C 3H';

        expect(classifyHand.isFullHouse(hand1)).toBe(true);
        expect(classifyHand.isFullHouse(hand2)).toBe(false);
        expect(classifyHand.isFullHouse(hand3)).toBe(false);
    });

    it('should find three of a kind, but not four of a kind', () => {
        const hand1 = '2C 2H 2D 3S 3C';
        const hand2 = '3C 2H 2D 4S 3C';
        const hand3 = '3C 2H 2D 2S 2C';

        expect(classifyHand.isKind(3, hand1)).toBe(true);
        expect(classifyHand.isKind(3, hand2)).toBe(false);
        expect(classifyHand.isKind(3, hand3)).toBe(false);
    });

    it('should find two pairs only', () => {
        const hand1 = '4C 2H 2D 3S 3C';
        const hand2 = '3C 2H 2D 4S 3C';
        const hand3 = '3C 2H 2D 4S 6C';
        const hand4 = '2C 2D 3C 3H 3S';

        expect(classifyHand.isPair(2, hand1)).toBe(true);
        expect(classifyHand.isPair(2, hand2)).toBe(true);
        expect(classifyHand.isPair(2, hand3)).toBe(false);
        expect(classifyHand.isPair(2, hand4)).toBe(false);
    });

    it('should find one pairs only', () => {
        const hand1 = '2C 2H 2D 3S 3C';
        const hand2 = '3C 2H 2D 4S 3C';
        const hand3 = '3C 2H 2D 2S 2C';

        expect(classifyHand.isPair(1, hand1)).toBe(true);
        expect(classifyHand.isPair(1, hand2)).toBe(false);
        expect(classifyHand.isPair(1, hand3)).toBe(false);
    });

    it('should find the high card', () => {
        const hand1 = '2C 3C 4C 5C 6C'; // flush, but we'll still test
        const hand2 = '2C 5C 6H JH KH';
        const hand3 = '3C 3S 3H 3D 2D'; // 4 of a kind, but let's test anyways

        expect(classifyHand.highCard(hand1)).toBe(6);
        expect(classifyHand.highCard(hand2)).toBe(13);
        expect(classifyHand.highCard(hand3)).toBe(3);
    });
});

describe('scoring hand', () => {
    it('', () => {
        
    });
});
