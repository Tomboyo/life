"use strict";

var matrices = require('../matrices');

const alive = "ALIVE";
const dead = "DEAD"

function life(matrix) {
    return matrices.map(matrix, (x, y, cell) => nextState(
            cell,
            getNeighborList(matrix, x, y)
                    .reduce(countAlive, 0)));
}

function getNeighborList(matrix, x, y) {
    return [
        [x - 1, y],
        [x + 1, y],
        [x, y - 1],
        [x, y + 1]
    ].reduce((list, point) => {
        matrices.ifPresent(matrix, point[0], point[1], v => list.push(v));
        return list;
    }, []);
}

function countAlive(count, current) {
    return count + (isAlive(current) ? 1 : 0);
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
