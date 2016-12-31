module.exports = exports;

exports.properSort = function properSort(a, b) {
    return a - b
}

exports.uniqueValues = function uniqueValues(element, index, arr) {
    return (index === arr.indexOf(element)) ? 1 : 0;
}

exports.groupValues = function groupValues(acc, value, index, array) {
    // find element in acc
    if (!acc[value]) acc[value] = [value];
    else acc[value] = acc[value].concat([value]);

    return acc;
}

exports.findMultiplesOfValue = function findMultiplesOfValue(acc, val) {
    if (!acc[val]) acc[val] = 1;
    else acc[val] += 1;

    return acc;
}

