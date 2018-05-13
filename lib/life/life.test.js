"use strict";

const assert = require('assert')
const life = require('.')
const sets = require('../sets')

describe('life', () => {
    let scoreStub = (x) => () => x

    context('given a living cell', () => {

        context('with score < 2', () => {
            it('kills the cell', () => {
                for (let n = 0; n < 2; n++) {
                    let advance = life.new(undefined, scoreStub(n))
                    assert.equal(
                            advance([[life.alive]])[0][0],
                            life.dead,
                            `living cells with score = ${n} die`)
                }
            })
        })

        context('with score == 2 or score == 3', () => {
            it('leaves the cell alive', () => {
                for (let n = 2; n < 4; n++) {
                    let advance = life.new(undefined, scoreStub(n))
                    assert.equal(
                            advance([[life.alive]])[0][0],
                            life.alive,
                            `living cells with score = ${n} persist`)
                }
            })
        })

        context('with score > 3', () => {
            it('kills the cell', () => {
                for (let n = 4; n < 9; n++) {
                    let advance = life.new(undefined, scoreStub(n))
                    assert.equal(
                            advance([[life.alive]])[0][0],
                            life.dead,
                            `living cells with score = ${n} die`)
                }
            })
        })
    })

    context('when given a dead cell', () => {
        context('with score < 3', () => {
            it('leaves the cell dead', () => {
                for(let n = 0; n < 3; n++) {
                    let advance = life.new(undefined, scoreStub(n))
                    assert.equal(
                            advance([[life.dead]])[0][0],
                            life.dead,
                            `dead cells with score = ${n} remain dead`)
                }
            })
        })

        context('with score = 3', () => {
            it('makes the cell alive', () => {
                let advance = life.new(undefined, scoreStub(3))
                assert.equal(
                        advance([[life.dead]])[0][0],
                        life.alive,
                        'dead cells with score = 3 become alive')
            })
        })

        context('with score > 3', () => {
            it('leaves the cell dead', () => {
                for(let n = 4; n < 9; n++) {
                    let advance = life.new(undefined, scoreStub(n))
                    assert.equal(
                            advance([[life.dead]])[0][0],
                            life.dead,
                            `dead cells with score = ${n} remain dead`)
                }
            })
        })
    })

    it('visits neighbors to determine score', () => {
        let neighbors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        let visited = []
        let scoreSpy = (neighbors) => visited = neighbors
        let advance = life.new(
            () => neighbors,
            scoreSpy)
        
        advance([[life.alive]])

        assert(sets.equal(
                new Set(visited),
                new Set(neighbors)))
    })
})
