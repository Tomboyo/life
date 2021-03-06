"use strict";

function map(matrix, callback) {
    return matrix.map((column, x) =>
        column.map((cell, y) =>
            callback(x, y, cell)))
}

function ifPresent(matrix, x, y, callback) {
    if (matrix == undefined)
        return undefined
    if (matrix[x] == undefined)
        return undefined
    if(matrix[x][y] == undefined)
        return undefined
    return callback(matrix[x][y])
}

function stringify(matrix) {
    return matrix.map((row) => row.join(" "))
            .join("\n")
}

module.exports = {
    'map': map,
    'ifPresent': ifPresent,
    'stringify': stringify
}
