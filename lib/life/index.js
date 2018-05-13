"use strict"

var matrices = require('../matrices')

const alive = "ALIVE"
const dead = "DEAD"

function newLife(
    getNeighbors = get8Neighbors,
    scoreNeighbors = countAlive
) {
    return (matrix) => advance(matrix, getNeighbors, scoreNeighbors)
}

function advance(
        matrix,
        getNeighbors,
        scoreNeighbors,
) {
    return matrices.map(matrix, (x, y, cell) => nextState(
            cell,
            scoreNeighbors(getNeighbors(matrix, x, y))))
}

function get8Neighbors(matrix, x, y) {
    return [
        [x - 1, y - 1], [x, y - 1], [x + 1, y - 1],
        [x - 1, y],                 [x + 1, y],
        [x - 1, y + 1], [x, y + 1], [x + 1, y + 1]
    ].reduce((list, point) => {
        matrices.ifPresent(matrix, point[0], point[1], v => list.push(v))
        return list
    }, [])
}

function countAlive(neighbors) {
    return neighbors.reduce((sum, current) =>
            isAlive(current) ? sum + 1 : sum, 0)
}

function isAlive(cell) {
    return alive == cell
}

function nextState(cell, neighbors) {
    if (isAlive(cell)) {
        if (neighbors < 2 || neighbors > 3)
            return dead
        return cell
    } else {
        if (neighbors == 3)
            return alive
        return cell
    }
}

module.exports = {
    'alive': alive,
    'dead': dead,
    'new': newLife
}