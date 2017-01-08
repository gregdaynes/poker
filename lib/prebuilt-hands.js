const Hand = require('models/hand');
const Card = require('models/card');

module.exports = exports;

exports.straightFlush = new Hand([
    new Card('2C'),
    new Card('3C'),
    new Card('4C'),
    new Card('5C'),
    new Card('6C'),
]);

exports.straightFlushHigh = new Hand([
    new Card('KC'),
    new Card('QC'),
    new Card('JC'),
    new Card('10C'),
    new Card('9C'),
]);

exports.fourKind = new Hand([
    new Card('2C'),
    new Card('2D'),
    new Card('2S'),
    new Card('2H'),
    new Card('QH'),
]);

exports.fourKindHigh = new Hand([
    new Card('KC'),
    new Card('KD'),
    new Card('KS'),
    new Card('KH'),
    new Card('QH'),
]);

exports.fullHouse = new Hand([
    new Card('2C'),
    new Card('2D'),
    new Card('2S'),
    new Card('3H'),
    new Card('3S'),
]);

exports.fullHouseHigh = new Hand([
    new Card('4C'),
    new Card('4D'),
    new Card('4S'),
    new Card('3H'),
    new Card('3S'),
]);

exports.straight = new Hand([
    new Card('2C'),
    new Card('3D'),
    new Card('4S'),
    new Card('5H'),
    new Card('6S'),
]);

exports.straightHigh = new Hand([
    new Card('9C'),
    new Card('10D'),
    new Card('JS'),
    new Card('QH'),
    new Card('KS'),
]);

exports.flush = new Hand([
    new Card('2C'),
    new Card('3C'),
    new Card('8C'),
    new Card('5C'),
    new Card('10C'),
]);

exports.flushHigh = new Hand([
    new Card('2C'),
    new Card('3C'),
    new Card('8C'),
    new Card('5C'),
    new Card('KC'),
]);

exports.threeKind = new Hand([
    new Card('2C'),
    new Card('2D'),
    new Card('2S'),
    new Card('3H'),
    new Card('5S'),
]);

exports.threeKindHigh = new Hand([
    new Card('KC'),
    new Card('KD'),
    new Card('KS'),
    new Card('3H'),
    new Card('5S'),
]);

exports.twoPair = new Hand([
    new Card('2C'),
    new Card('2D'),
    new Card('6S'),
    new Card('JH'),
    new Card('JD'),
]);

exports.twoPairHigh = new Hand([
    new Card('6C'),
    new Card('6D'),
    new Card('5S'),
    new Card('KH'),
    new Card('KD'),
]);

exports.onePair = new Hand([
    new Card('2C'),
    new Card('3D'),
    new Card('6S'),
    new Card('JH'),
    new Card('JD'),
]);

exports.onePairHigh = new Hand([
    new Card('2C'),
    new Card('3D'),
    new Card('6S'),
    new Card('QH'),
    new Card('QD'),
]);

exports.highCard = new Hand([
    new Card('2C'),
    new Card('QH'),
    new Card('6S'),
    new Card('JH'),
    new Card('5D'),
]);

exports.highCardHigh = new Hand([
    new Card('2C'),
    new Card('KH'),
    new Card('6S'),
    new Card('JH'),
    new Card('5D'),
]);
