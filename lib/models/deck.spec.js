/* global describe expect it */
const Card = require('./card');
const Deck = require('./deck');
const _ = require('../helpers');

describe('deck', () => {

    describe('deck construction', () => {
        const deck = new Deck();

        it('should have 52 cards', () =>
            expect(deck.cards.length).toBe(52));

        it('should contain cards', () =>
            expect(deck.cards[_.rand(deck.count())]).toBeInstanceOf(Card));
    });


    describe('#dealCard', () => {
        const deck = new Deck();
        const card = deck.dealCard();

        it('should be a card', () =>
            expect(card).toBeInstanceOf(Card));

        it('should have removed 1 item from the deck', () =>
            expect(deck.count()).toBe(51));
    });


    describe('#remainingCards', () => {
        const deck = new Deck();

        it('should return cards in deck', () =>
            expect(deck.remainingCards().length).toBe(52));

        it('should contain instances of card', () =>
            expect(deck.remainingCards()[_.rand(deck.count())]).toBeInstanceOf(Card));
    });


    describe('#peek', () => {
        const deck = new Deck();

        it('should return a card', () =>
            expect(deck.peek()).toBeInstanceOf(Card));
        
        it('shoudl not remove card from the deck', () => {
            deck.peek();
            expect(deck.count()).toBe(52);
        });

    });

    
    describe('#count', () => {
        const deck = new Deck();

        it('should return the number of cards in deck', () =>
            expect(deck.count()).toBe(deck.cards.length));
    });

    
    describe('#shuffle', () => {
        const deck = new Deck();
        const firstCard = deck.cards[0];

        it('', () => {
            deck.shuffle();

            expect(deck.peek()).not.toBe(firstCard);
            expect(deck.peek()).toBeInstanceOf(Card);
        });
    });

});
