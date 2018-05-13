"use strict"

let setTimeout = require('timers').setTimeout
var matrices = require('./matrices')
var life = require('./life')

let a = life.alive;
let d = life.dead;

let input = [
    [d, d, d, d, d, d, d],
    [d, d, a, d, d, d, d],
    [d, d, d, a, d, d, d],
    [d, a, a, a, d, d, d],
    [d, d, d, d, d, d, d],
    [d, d, d, d, d, d, d],
    [d, d, d, d, d, d, d]
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
        console.log(matrices.stringify(render(matrix)))
        matrix = advance(matrix)
        await sleep(1000)
    } while (true)
}

//main(initial)
console.log(matrices.stringify(render(input)))
console.log(matrices.stringify(render(advance(input))))
console.log(matrices.stringify(render(advance(advance(input)))))