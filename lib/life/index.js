"use strict";

var matrices = require('../matrices');

const alive = "ALIVE";
const dead = "DEAD"

function life(
        matrix,
        score = countAlive,
        getNeighbors = getNeighborList,
        advance = nextState) {
    return matrices.map(matrix, (x, y, cell) => advance(
            cell,
            score(getNeighbors(matrix, x, y))));
}

function getNeighborList(matrix, x, y) {
    return [
        [x - 1, y - 1], [x, y - 1], [x + 1, y - 1],
        [x - 1, y],                 [x + 1, y],
        [x - 1, y + 1], [x, y + 1], [x + 1, y + 1]
    ].reduce((list, point) => {
        matrices.ifPresent(matrix, point[0], point[1], v => list.push(v));
        return list;
    }, []);
}

function countAlive(neighbors) {
    return neighbors.reduce((sum, current) =>
            isAlive(current) ? sum + 1 : sum);
}

function isAlive(cell) {
    return alive == cell;
}

function nextState(cell, neighbors) {
    if (isAlive(cell)) {
        if (neighbors < 2)
            return dead;
        return cell;
    } else {
        return dead;
    }
}

life.alive = alive;
life.dead = dead;

module.exports = life;
