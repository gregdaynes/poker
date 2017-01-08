/* global describe expect it */

const Card = require('models/card');

describe('card', () => {
    const fourHearts = new Card('4H');

    it('should have a value', () => 
        expect(fourHearts.value).toBe(4));

    it('should have a suit', () => 
        expect(fourHearts.suit).toBe('H'));

    it('should have the original card notation', () => 
        expect(fourHearts.notation).toBe('4H'));


    describe('#getValue', () => it('should get the value as an int', () => 
        expect(fourHearts.value).toBe(4)));


    describe('#getSuit', () => it('should get the suit as a single letter', () => {
        expect(fourHearts.suit).toMatch(/[SCDH]/);
        expect(fourHearts.suit.split('').length).toBe(1);
    }));

});
