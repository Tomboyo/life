"use strict";

var assert = require('assert');
var life = require('.');
var a = life.alive;
var d = life.dead;

describe('life', () => {
    context('when given a cell with fewer then 2 living neighbors', () => {
        let input = [
            [a, d, d],
            [d, a, d],
            [d, a, d]
        ];

        it('kills the cell', () => {
            let expected = [
                [d, d, d],
                [d, d, d],
                [d, d, d]
            ];
            
            assert.deepStrictEqual(life(input), expected);
        });
    });

    context('when given a cell with 2 or 3 neighbors', () => {
        let input = [
            [a, a, a],
            [a, a, a],
            [d, d, d]
        ];

        it('lets the cell live', () => {
            let expected = input;
            assert.deepStrictEqual(life(input), expected);
        });
    });
});
