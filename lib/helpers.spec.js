/* global describe it expect */

const _ = require('./helpers');

describe('helpers.js', () => {

    describe('#properSort', () => {
        it('should order an array of 1-12, not 1 10 11 12 2 3...', () => {
            const array = [12,11,10,9,8,7,6,5,4,3,2,1];
            const correctOrder = [1,2,3,4,5,6,7,8,9,10,11,12];

            expect(array.sort(_.properSort).toString()).toBe(correctOrder.toString());
            expect(array.sort().toString()).not.toBe(correctOrder.toString());
        });
    });


    describe('#uniqueValues', () => {
        it('should remove duplicate entries from array', () => {
            const array = [1, 2, 3, 2, 3, 5, 1];
            const correctArray = [1, 2, 3, 5].toString();

            expect(array.filter(_.uniqueValues).sort().toString()).toBe(correctArray);
        });
    });


    describe('#rand', () => {
        it('should return an int between max and min', () => {
            expect(_.rand(10)).toBeLessThanOrEqual(10);
            expect(_.rand(10, 5)).toBeGreaterThanOrEqual(5);
        });
    });


    describe('#groupValues', () => {
        it('', () => {
            const array = [1, 2, 3, 2, 3, 5, 1];
            const correctArray = [ [ 1, 1 ], [ 2, 2 ], [ 3, 3 ], [ 5 ] ].toString();

            const procedure = array
                .reduce(_.groupValues, [])
                .filter(_.uniqueValues)
                .toString();

            expect(procedure).toBe(correctArray);
        });
    });


    describe('#findMultiplesOfValue', () => {
        it('', () => {
            const array = [1, 2, 3, 2, 3, 5, 1];
            const correctArray = [ [ 1, 2 ], [ 2, 2 ], [ 3, 2 ], [ 5, 1 ] ].toString();

            expect(array.reduce(_.findMultiplesOfValue, []).toString()).toBe(correctArray);
        });
    });
});
