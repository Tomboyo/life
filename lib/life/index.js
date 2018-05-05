"use strict";

var alive = "ALIVE";
var dead = "DEAD"

function life() {
    return [
        [dead, dead, dead],
        [dead, dead, dead],
        [dead, dead, dead]
    ];
}

life.alive = alive;
life.dead = dead;

module.exports = life;
