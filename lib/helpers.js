module.exports = exports;

exports.properSort = (a, b) => a - b;

exports.uniqueValues = (e, i, a) => (i === a.indexOf(e));

exports.rand = (max, min = 0) => Math.floor(Math.random() * (max - min) + min);

exports.groupValues = (acc, value, index, array) => {
    if (!acc[value]) acc[value] = [value];
    else acc[value] = acc[value].concat([value]);

    return acc;
}

exports.findMultiplesOfValue = (acc, val, index, arr) => {
    // get index of
    const i = acc.map((b, i) => (b[0] === val) ? i : -1).filter(i => i >= 0);

    if (acc[i]) acc[i][1]++;
    else acc.push([val, 1]);

    return acc;
}

