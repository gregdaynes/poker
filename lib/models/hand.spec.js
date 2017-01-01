/* global describe expect it */
const _ = require('../helpers');
const Card = require('./card');
const Hand = require('./hand');

describe('hand', () => {

    it('should be a hand', () => expect(highCard).toBeInstanceOf(Hand));

    describe('@cards', () => {
        it('should have the correct number of cards in hand', () => {
            expect(highCard.cards.length).toBe(5);
        });
    });


    describe('@cardValues', () => {
        it('should be an array', () => expect(highCard.cardValues).toBeInstanceOf(Array));
        it('should contain the same values as constructed with', () => {
            expect(highCard.cardValues).toContain(2);
            expect(highCard.cardValues).toContain(13);
            expect(highCard.cardValues).toContain(5);
            expect(highCard.cardValues).toContain(11);
            expect(highCard.cardValues).toContain(6);
        });
    });


    describe('@cardSuits', () => {
        it('should be an array', () => expect(highCard.cardSuits).toBeInstanceOf(Array));
        it('should contain at least 1 of H D C OR S', () => {
            expect(highCard.cardSuits[_.rand(highCard.cardSuits.length)]).toMatch(/[HDCS]/);
        });
    });


    describe('#addCard', () => {
        const hand = new Hand([ new Card('2C'), ]);

        it('should have 1 card in hand', () => expect(hand.count()).toBe(1));

        it('should add a card to suits, values, and cards', () => {
            hand.addCard(new Card('3C'));
            expect(hand.count()).toBe(2);
        });
    });


    describe('#isStraightFlush', () => {
        it('should determin a straight flush is true', () => {
            expect(straightFlush.isStraightFlush()).toBe(true);
            expect(fourKind.isStraightFlush()).toBe(false);
            expect(fullHouse.isStraightFlush()).toBe(false);
            expect(straight.isStraightFlush()).toBe(false);
            expect(flush.isStraightFlush()).toBe(false);
            expect(threeKind.isStraightFlush()).toBe(false);
            expect(twoPair.isStraightFlush()).toBe(false);
            expect(onePair.isStraightFlush()).toBe(false);
            expect(highCard.isStraightFlush()).toBe(false);
        });
    });


    describe('#is4Kind', () => {
        it('should determin four of a kind is true', () => {
            expect(straightFlush.is4Kind()).toBe(false);
            expect(fourKind.is4Kind()).toBe(true);
            expect(fullHouse.is4Kind()).toBe(false);
            expect(straight.is4Kind()).toBe(false);
            expect(flush.is4Kind()).toBe(false);
            expect(threeKind.is4Kind()).toBe(false);
            expect(twoPair.is4Kind()).toBe(false);
            expect(onePair.is4Kind()).toBe(false);
            expect(highCard.is4Kind()).toBe(false);
        });
    });


    describe('#isFullHouse', () => {
        it('should determin fullhouse is true', () => {
            expect(straightFlush.isFullHouse()).toBe(false);
            expect(fourKind.isFullHouse()).toBe(false);
            expect(fullHouse.isFullHouse()).toBe(true);
            expect(straight.isFullHouse()).toBe(false);
            expect(flush.isFullHouse()).toBe(false);
            expect(threeKind.isFullHouse()).toBe(false);
            expect(twoPair.isFullHouse()).toBe(false);
            expect(onePair.isFullHouse()).toBe(false);
            expect(highCard.isFullHouse()).toBe(false);
        });
    });


    describe('#isStright', () => {
        it('should determin straight is true', () => {
            expect(straightFlush.isStraight()).toBe(true);
            expect(fourKind.isStraight()).toBe(false);
            expect(fullHouse.isStraight()).toBe(false);
            expect(straight.isStraight()).toBe(true);
            expect(flush.isStraight()).toBe(false);
            expect(threeKind.isStraight()).toBe(false);
            expect(twoPair.isStraight()).toBe(false);
            expect(onePair.isStraight()).toBe(false);
            expect(highCard.isStraight()).toBe(false);
        });
    });


    describe('#isFlush', () => {
        it('should determin flush is true', () => {
            expect(straightFlush.isFlush()).toBe(true);
            expect(fourKind.isFlush()).toBe(false);
            expect(fullHouse.isFlush()).toBe(false);
            expect(straight.isFlush()).toBe(false);
            expect(flush.isFlush()).toBe(true);
            expect(threeKind.isFlush()).toBe(false);
            expect(twoPair.isFlush()).toBe(false);
            expect(onePair.isFlush()).toBe(false);
            expect(highCard.isFlush()).toBe(false);
        });
    });


    describe('#is3Kind', () => {
        it('should determin 3 of a kind is true', () => {
            expect(straightFlush.is3Kind()).toBe(false);
            expect(fourKind.is3Kind()).toBe(false);
            expect(fullHouse.is3Kind()).toBe(true);
            expect(straight.is3Kind()).toBe(false);
            expect(flush.is3Kind()).toBe(false);
            expect(threeKind.is3Kind()).toBe(true);
            expect(twoPair.is3Kind()).toBe(false);
            expect(onePair.is3Kind()).toBe(false);
            expect(highCard.is3Kind()).toBe(false);
        });
    });


    describe('#is2Pair', () => {
        it('should determin two pairs is true', () => {
            expect(straightFlush.is2Pair()).toBe(false);
            expect(fourKind.is2Pair()).toBe(false);
            expect(fullHouse.is2Pair()).toBe(false);
            expect(straight.is2Pair()).toBe(false);
            expect(flush.is2Pair()).toBe(false);
            expect(threeKind.is2Pair()).toBe(false);
            expect(twoPair.is2Pair()).toBe(true);
            expect(onePair.is2Pair()).toBe(false);
            expect(highCard.is2Pair()).toBe(false);
        });
    });


    describe('#isPair', () => {
        it('should determin one pair is true', () => {
            expect(straightFlush.isPair()).toBe(false);
            expect(fourKind.isPair()).toBe(false);
            expect(fullHouse.isPair()).toBe(true);
            expect(straight.isPair()).toBe(false);
            expect(flush.isPair()).toBe(false);
            expect(threeKind.isPair()).toBe(false);
            expect(twoPair.isPair()).toBe(false);
            expect(onePair.isPair()).toBe(true);
            expect(highCard.isPair()).toBe(false);
        });
    });


    describe('#highCard', () => {
        it('should determin high card of each hand', () => {
            expect(straightFlush.highCard()).toBe(6);
            expect(fourKind.highCard()).toBe(12);
            expect(fullHouse.highCard()).toBe(3);
            expect(straight.highCard()).toBe(6);
            expect(flush.highCard()).toBe(13);
            expect(threeKind.highCard()).toBe(5);
            expect(twoPair.highCard()).toBe(11);
            expect(onePair.highCard()).toBe(11);
            expect(highCard.highCard()).toBe(13);
        });
    });
});

// -------------------------------------

const straightFlush = new Hand([
    new Card('2C'),
    new Card('3C'),
    new Card('4C'),
    new Card('5C'),
    new Card('6C'),
]);

const fourKind = new Hand([
    new Card('2C'),
    new Card('2D'),
    new Card('2S'),
    new Card('2H'),
    new Card('QH'),
]);

const fullHouse = new Hand([
    new Card('2C'),
    new Card('2D'),
    new Card('2S'),
    new Card('3H'),
    new Card('3S'),
]);

const straight = new Hand([
    new Card('2C'),
    new Card('3D'),
    new Card('4S'),
    new Card('5H'),
    new Card('6S'),
]);

const flush = new Hand([
    new Card('2C'),
    new Card('3C'),
    new Card('8C'),
    new Card('5C'),
    new Card('KC'),
]);

const threeKind = new Hand([
    new Card('2C'),
    new Card('2D'),
    new Card('2S'),
    new Card('3H'),
    new Card('5S'),
]);

const twoPair = new Hand([
    new Card('2C'),
    new Card('2D'),
    new Card('6S'),
    new Card('JH'),
    new Card('JD'),
]);

const onePair = new Hand([
    new Card('2C'),
    new Card('3D'),
    new Card('6S'),
    new Card('JH'),
    new Card('JD'),
]);

const highCard = new Hand([
    new Card('2C'),
    new Card('KH'),
    new Card('6S'),
    new Card('JH'),
    new Card('5D'),
]);
