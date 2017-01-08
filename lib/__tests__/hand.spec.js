/* global describe expect it */
const _ = require('helpers');
const Card = require('models/card');
const Hand = require('models/hand');
const $ = require('prebuilt-hands');

describe('hand', () => {


    it('should be a hand', () => 
        expect($.highCard).toBeInstanceOf(Hand));


    describe('@cards', () => {
        it('should have the correct number of cards in hand', () => {
            expect($.highCard.cards.length).toBe(5);
        });
    });


    describe('@cardValues', () => {
        it('should be an array', () => 
            expect($.highCard.cardValues).toBeInstanceOf(Array));

        it('should contain the same values as constructed with', () => {
            expect($.highCard.cardValues).toContain(2);
            expect($.highCard.cardValues).toContain(13);
            expect($.highCard.cardValues).toContain(5);
            expect($.highCard.cardValues).toContain(11);
            expect($.highCard.cardValues).toContain(6);
        });
    });


    describe('@cardSuits', () => {
        it('should be an array', () => 
            expect($.highCard.cardSuits).toBeInstanceOf(Array));

        it('should contain at least 1 of H D C OR S', () => {
            expect($.highCard.cardSuits[_.rand($.highCard.cardSuits.length)]).toMatch(/[HDCS]/);
        });
    });


    describe('#addCard', () => {
        const hand = new Hand([ new Card('2C'), ]);

        it('should have 1 card in hand', () => 
            expect(hand.cards.length).toBe(1));

        it('should add a card to suits, values, and cards', () => {
            hand.addCard = new Card('3C');
            expect(hand.cards.length).toBe(2);
        });
    });


    describe('#class', () => {
        it('should determin a high straight flush', () =>
            expect($.straightFlushHigh.class).toBe('Straight Flush'));
        it('should determin a straight flush', () =>
            expect($.straightFlush.class).toBe('Straight Flush'));
        it('should determin a four of a kind', () =>
            expect($.fourKind.class).toBe('Four Of A Kind'));
        it('should determin a full house', () => 
            expect($.fullHouse.class).toBe('Full House'));
        it('should determin a straight', () =>
            expect($.straight.class).toBe('Straight'));
        it('should determin a flush', () =>
            expect($.flush.class).toBe('Flush'));
        it('should determin a three of a kind', () =>
            expect($.threeKind.class).toBe('Three Of A Kind'));
        it('should determin two pairs', () =>
            expect($.twoPair.class).toBe('Two Pair'));
        it('should determin one pair', () => 
            expect($.onePair.class).toBe('One Pair'));
        it('should determin high card', () =>
            expect($.highCard.class).toBe('High Card'));
    });

});


