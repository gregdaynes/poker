module.exports = exports;

exports.properSort = (a, b) => a - b;

exports.uniqueValues = (e, i, a) => (i === a.indexOf(e)) ? 1 : 0;

exports.rand = (max, min = 0) => Math.floor(Math.random() * (max - min) + min);

exports.groupValues = (acc, value, index, array) => {
    if (!acc[value]) acc[value] = [value];
    else acc[value] = acc[value].concat([value]);

    return acc;
}

exports.findMultiplesOfValue = (acc, val) => {
    if (!acc[val]) acc[val] = 1;
    else acc[val] += 1;

    return acc;
}


