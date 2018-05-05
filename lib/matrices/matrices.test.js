"use strict";

var matrices = require('.');
var assert = require('assert');

describe('map', () => {
    it('applies mapping to elements', () => {
        let input = [
            [1, 2, 3],
            [4, 5, 6]
        ];

        let expected = [
            [2, 4,  6 ],
            [8, 10, 12]
        ];

        assert.deepStrictEqual(
                expected,
                matrices.map(input, (x, y, v) => 2 * v));
    });

    it('applies callback with matrix coordinates', () => {
        let input = [
            [[0, 0], [0, 1]],
            [[1, 0], [1, 1]]
        ];

        let expected = input;
        assert.deepStrictEqual(
                expected,
                matrices.map(input, (x, y, v) => [x, y]));
    });
});

describe('ifPresent', () => {
    it('invokes callback if value is defined', () => {
        assert(matrices.ifPresent([[1]], 0, 0, () => true));
    });

    it('does not invoke callback if value is undefined', () => {
        matrices.ifPresent([[]], 0, 0, () => assert(false));
        matrices.ifPresent([[]], 1, 0, () => assert(false));
        matrices.ifPresent([[1]], 0, 1, () => assert(false));
        matrices.ifPresent(undefined, 0, 0, () => assert(false));
    });
});
