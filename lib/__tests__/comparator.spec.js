/* global describe it expect */

const Hand = require('models/hand');
const Card = require('models/card');
// const Deck = require('models/deck');
const Comparator = require('comparator');
const $ = require('prebuilt-hands');

describe('comparator', () => {

    /**/
    describe('Straight Flush', () => {
        it('should determin Straight Flush is higher than Four Of A Kind', () => {
            const hands = [$.fourKind, $.straightFlush];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Straight Flush is higher than Full House', () => {
            const hands = [$.fullHouse, $.straightFlush];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Straight Flush is higher than Straight', () => {
            const hands = [$.straight, $.straightFlush];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Straight Flush Flush is higher than Flush', () => {
            const hands = [$.flush, $.straightFlush];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Straight Flush is higher than Three Of A Kind', () => {
            const hands = [$.threeKind, $.straightFlush];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Straight Flush is higher than Two Pair', () => {
            const hands = [$.twoPair, $.straightFlush];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Straight Flush is higher than One Pair', () => {
            const hands = [$.onePair, $.straightFlush];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Straight Flush is higher than High Card', () => {
            const hands = [$.highCard, $.straightFlush];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });
    }); /**/

    /**/
    describe('Four Of a Kind', () => {
        it('should determin Straight Flush is higher than Four Of A Kind', () =>  {
            const hands = [$.fourKind, $.straightFlush];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Four Of A Kind is higher than Full House', () =>  {
            const hands = [$.fullHouse, $.fourKind];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Four Of A Kind is higher than Straight', () =>  {
            const hands = [$.straight, $.fourKind];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Four Of A Kind is higher than Flush', () => {
            const hands = [$.flush, $.fourKind];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Four Of A Kind is higher than Three Of A Kind', () => {
            const hands = [$.threeKind, $.fourKind];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Four Of A Kind is higher than Two Pair', () => {
            const hands = [$.twoPair, $.fourKind];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Four Of A Kind is higher than One Pair', () =>{
            const hands = [$.onePair, $.fourKind];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Four Of A Kind is higher than High Card', () => {
            const hands = [$.highCard, $.fourKind];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });
    }); /**/

    /**/
    describe('Full House', () => {
        it('should determin Straight Flush is higher than Full House', () => {
            const hands = [$.fullHouse, $.straightFlush];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Four Of A Kind is higher than Full House', () =>{
            const hands = [$.fullHouse, $.fourKind];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Full House is higher than Straight', () =>{
            const hands = [$.straight, $.fullHouse];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Full House is higher than Flush', () => {
            const hands = [$.flush, $.fullHouse];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Full House is higher than Three Of A Kind', () => {
            const hands = [$.threeKind, $.fullHouse];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Full House is higher than Two Pair', () =>{
            const hands = [$.twoPair, $.fullHouse];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Full House is higher than One Pair', () =>{
            const hands = [$.onePair, $.fullHouse];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Full House is higher than High Card', () =>{
            const hands = [$.highCard, $.fullHouse];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });
    }); /**/

    /**/
    describe('Straight', () => {
        it('should determin Straight Flush is higher than Straight', () => {
            const hands = [$.straight, $.straightFlush];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Four Of A Kind is higher than Straight', () =>{
            const hands = [$.straight, $.fourKind];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Full House is higher than Straight', () =>{
            const hands = [$.straight, $.fullHouse];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Straight is higher than Three Of A Kind', () =>  {
            const hands = [$.threeKind, $.straight];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Straight is higher than Two Pair', () =>{
            const hands = [$.twoPair, $.straight];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Straight is higher than One Pair', () =>{
            const hands = [$.onePair, $.straight];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Straight is higher than High Card', () =>{
            const hands = [$.highCard, $.straight];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });
    }); /**/

    /**/
    describe('Flush', () => {
        it('should determin Straight Flush is higher than Flush', () => {
            const hands = [$.flush, $.straightFlush];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Four Of A Kind is higher than Flush', () =>{
            const hands = [$.flush, $.fourKind];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Full House is higher than flush', () =>{
            const hands = [$.flush, $.fullHouse];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Straight is higher than Flush', () =>{
            const hands = [$.flush, $.straight];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Flush is higher than Three Of A Kind', () =>{
            const hands = [$.threeKind, $.flush];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Flush is higher than Two Pair', () =>{
            const hands = [$.twoPair, $.flush];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Flush is higher than One Pair', () =>{
            const hands = [$.onePair, $.flush];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Flush is higher than High Card', () =>{
            const hands = [$.highCard, $.flush];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });
    }); /**/

    /** /
    describe('Three Of A Kind', () => {
        it('should determin Straight Flush is higher than Three Of A Kind', () => {
            const hands = [$.threeKind, $.straightFlush];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Four Of A Kind is higher than Three Of A Kind', () =>{
            const hands = [$.threeKind, $.fourKind];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Full House is higher than Three Of A Kind', () =>{
            const hands = [$.threeKind, $.fullHouse];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Straight is higher than Three Of A Kind', () =>{
            const hands = [$.threeKind, $.straight];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Flush is higher than Three Of A Kind', () =>{
            const hands = [$.threeKind, $.flush];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Three Of A Kind is higher than Two Pair', () =>{
            const hands = [$.twoPair, $.threeKind];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Three Of A Kind is higher than One Pair', () =>{
            const hands = [$.onePair, $.threeKind];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Three Of A Kind is higher than High Card', () =>{
            const hands = [$.highCard, $.threeKind];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });
    }); /**/

    /**/
    describe('Two Pair', () => {
        it('should determin Straight Flush is higher than Two Pair', () => {
            const hands = [$.twoPair, $.straightFlush];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Four Of A Kind is higher than Two Pair', () =>{
            const hands = [$.twoPair, $.fourKind];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Full House is higher than Two Pair', () =>{
            const hands = [$.twoPair, $.fullHouse];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Straight is higher than Two Pair', () =>{
            const hands = [$.twoPair, $.straight];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Flush is higher than Two Pair', () =>{
            const hands = [$.twoPair, $.flush];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Three Of A Kind is higher than Two Pair', () =>{
            const hands = [$.twoPair, $.threeKind];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Two Pair is higher than One Pair', () =>{
            const hands = [$.onePair, $.twoPair];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Two Pair is higher than High Card', () =>{
            const hands = [$.highCard, $.twoPair];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });
    }); /**/

    /**/
    describe('One Pair', () => {
        it('should determin Straight Flush is higher than One Pair', () =>{
            const hands = [$.onePair, $.straightFlush];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Four Of A Kind is higher than One Pair', () =>{
            const hands = [$.onePair, $.fourKind];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Full House is higher than One Pair', () =>{
            const hands = [$.onePair, $.fullHouse];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Straight is higher than One Pair', () =>{
            const hands = [$.onePair, $.straight];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Flush is higher than One Pair', () =>{
            const hands = [$.onePair, $.flush];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Three Of A Kind is higher than One Pair', () =>{
            const hands = [$.onePair, $.threeKind];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Two Pair is higher than One Pair', () =>{
            const hands = [$.onePair, $.twoPair];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin One Pair is higher than High Card', () =>{
            const hands = [$.highCard, $.onePair];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });
    }); /**/

    /**/
    describe('High Card', () => {
        it('should determin Straight Flush is higher than High Card', () => {
            const hands = [$.highCard, $.straightFlush];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Four Of A Kind is higher than High Card', () =>{
            const hands = [$.highCard, $.fourKind];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Full House is higher than High Card', () =>{
            const hands = [$.highCard, $.fullHouse];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Straight is higher than High Card', () =>{
            const hands = [$.highCard, $.straight];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Flush is higher than High Card', () =>{
            const hands = [$.highCard, $.flush];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Three Of A Kind is higher than High Card', () =>{
            const hands = [$.highCard, $.threeKind];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin Two Pair is higher than High Card', () =>{
            const hands = [$.highCard, $.twoPair];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });

        it('should determin One Pair is higher than High Card', () =>{
            const hands = [$.highCard, $.onePair];
            const operation = [hands[0], hands[1]].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([hands[0], hands[1]].map(hand => hand.cardValues).toString());
        });
    }); /**/

    /**/
    describe('Hands With Same Class', () => {

        it('should determin Straight Flush King is higher than Straigh Flush 6', () => {
            const handA = $.straightFlush;
            const handB = $.straightFlushHigh;

            const operation = [handA, handB].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([handA, handB].map(hand => hand.cardValues).toString());
        });

        it('should determin Four Kind King is higher than Four Kind 2', () => {
            const handA = $.fourKind;
            const handB = $.fourKindHigh;

            const operation = [handA, handB].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([handA, handB].map(hand => hand.cardValues).toString());
        });

        it('should determin House Full Of 4 is higher than House Full Of 2', () => {
            const handA = $.fullHouse;
            const handB = $.fullHouseHigh;;

            const operation = [handA, handB].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([handA, handB].map(hand => hand.cardValues).toString());
        });

        it('should determin Straight K is higher than Straight 6', () => {
            const handA = $.straight;
            const handB = $.straightHigh;

            const operation = [handA, handB].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([handA, handB].map(hand => hand.cardValues).toString());
        });

        it('should determin Flush K is higher than Flush 10', () => {
            const handA = $.flush;
            const handB = $.flushHigh;

            const operation = [handA, handB].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([handA, handB].map(hand => hand.cardValues).toString());
        });

        it('should determin Three Of A Kind K is higher than Three Of A Kind 2', () => {
            const handA = $.threeKind;
            const handB = $.threeKindHigh;

            const operation = [handA, handB].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([handA, handB].map(hand => hand.cardValues).toString());
        });

        it('should determin Two Pair 6 K is higher than Two Pair J 2', () => {
            const handA = $.twoPair;
            const handB = $.twoPairHigh;

            const operation = [handA, handB].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([handA, handB].map(hand => hand.cardValues).toString());
        });

        it('should determin One Pair Q is higher than One Pair J', () => {
            const handA = $.onePair;
            const handB = $.onePairHigh;

            const operation = [handA, handB].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([handA, handB].map(hand => hand.cardValues).toString());
        });

        it('should determin High Card K is higher than High card Q', () => {
            const handA = $.highCard;
            const handB = $.highCardHigh;

            const operation = [handA, handB].sort(Comparator).map(hand => hand.cardValues).toString();
            expect(operation).toBe([handA, handB].map(hand => hand.cardValues).toString());
        });
    }); /**/

});
