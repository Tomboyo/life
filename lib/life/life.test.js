"use strict";

var assert = require('assert');
var life = require('.');
var a = life.alive;
var d = life.dead;

describe('life', () => {
    context('given a living cell', () => {
        let scoreStub = (x) => () => x;
        let matrix = [[life.alive]];

        context('with < 2 living neighbors', () => {
            it('kills the cell', () => {
                assert.equal(life(
                        matrix,
                        scoreStub(0))[0][0],
                    life.dead,
                    'cells with 0 neighbors die');

                assert.equal(life(
                        matrix,
                        scoreStub(1))[0][0],
                    life.dead,
                    'cells with 1 neighbor die');
            });
        });

        context('with 2 or 3 living neighbors', () => {
            it('leaves the cell alive', () => {
                assert.equal(life(
                        matrix,
                        scoreStub(2))[0][0],
                    life.alive,
                    'cells with 2 neighbors persist');

                assert.equal(life(
                        matrix,
                        scoreStub(3))[0][0],
                    life.alive,
                    'cells with 3 neighbors persist');
            });
        });

        context('with > 3 neighbors', () => {
            it('kills the cell', () => {
                for (let i = 4; i < 9; i++) {
                    assert.equal(life(
                        [[life.alive]],
                        scoreStub(i))[0][0],
                        life.dead,
                        `cells with ${i} neighbors die`
                    );
                }
            })
        })
    });
});
