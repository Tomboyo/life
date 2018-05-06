"use strict";

var assert = require('assert')
var life = require('.')
var a = life.alive
var d = life.dead

describe('life', () => {
    let scoreStub = (x) => () => x

    context('given a living cell', () => {

        context('with < 2 living neighbors', () => {
            it('kills the cell', () => {
                assert.equal(life(
                        [[life.alive]],
                        scoreStub(0))[0][0],
                    life.dead,
                    'cells with 0 neighbors die')

                assert.equal(life(
                        [[life.alive]],
                        scoreStub(1))[0][0],
                    life.dead,
                    'cells with 1 neighbor die')
            })
        })

        context('with 2 or 3 living neighbors', () => {
            it('leaves the cell alive', () => {
                assert.equal(life(
                        [[life.alive]],
                        scoreStub(2))[0][0],
                    life.alive,
                    'cells with 2 neighbors persist')

                assert.equal(life(
                        [[life.alive]],
                        scoreStub(3))[0][0],
                    life.alive,
                    'cells with 3 neighbors persist')
            })
        })

        context('with > 3 neighbors', () => {
            it('kills the cell', () => {
                for (let i = 4; i < 9; i++) {
                    assert.equal(life(
                            [[life.alive]],
                            scoreStub(i))[0][0],
                        life.dead,
                        `cells with ${i} neighbors die`
                    )
                }
            })
        })
    })

    context('when given a dead cell', () => {
        context('with < 3 neighbors', () => {
            it('leaves the cell dead', () => {
                for(let i = 0; i < 3; i++) {
                    assert.equal(life(
                            [[life.dead]],
                            scoreStub(i))[0][0],
                        life.dead,
                        `dead cells with ${i} neighbors remain dead`)
                }
            });
        });

        context('with 3 neighbors', () => {
            it('makes the cell alive', () => {
                assert.equal(life(
                        [[life.dead]],
                        scoreStub(3))[0][0],
                    life.alive,
                    'dead cells with 3 neighbors become alive')
            })
        })

        context('with > 3 neighbors', () => {
            it('leaves the cell dead', () => {
                for(let i = 4; i < 9; i++) {
                    assert.equal(life(
                            [[life.dead]],
                            scoreStub(i))[0][0],
                        life.dead,
                        `dead cells with ${i} neighbors remain dead`)
                }
            })
        })
    })
})
