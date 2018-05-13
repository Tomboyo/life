"use strict"

let setTimeout = require('timers').setTimeout
var matrices = require('../lib/matrices')
var life = require('../lib/life')

let a = life.alive;
let _ = life.dead;

let input = [
    [_, _, _, _, _, _, _],
    [_, _, a, _, _, _, _],
    [_, _, _, a, _, _, _],
    [_, a, a, a, _, _, _],
    [_, _, _, _, _, _, _],
    [_, _, _, _, _, _, _],
    [_, _, _, _, _, _, _]
]

let advance = life.new()

function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis))
}

function render(matrix) {
    return matrices.map(matrix, (x, y, value) => {
        if (value == life.alive)
            return 'a'
        return '.'
    })
}

async function main(matrix) {
    do {
        console.log(matrices.stringify(render(matrix)), "\n")
        matrix = advance(matrix)
        await sleep(1000)
    } while (true)
}

main(input)