"use strict";

var assert = require('assert');
var life = require('.');
var a = life.alive;
var d = life.dead;

describe('life', () => {
    context('given a living cell', () => {
        context('with 0 living neighbors', () => {
            it('kills the cell', () => {
                let input = [
                    [d, d, d],
                    [d, a, d],
                    [d, d, d]
                ];

                assert.equal(d, life(input)[1][1]);
            });
        });

        context('with 1 living neighbor', () => {
            it('kills the cell', () => {
                let input = [
                    [d, d, d],
                    [d, a, a],
                    [d, d, d]
                ];

                assert.equal(d, life(input)[1][1]);
            });
        });

        context('with 2 living neighbors', () => {
            it('leaves the cell alive', () => {
                let input = [
                    [d, d, d],
                    [a, a, a],
                    [d, d, d]
                ];

                assert.equal(a, life(input)[1][1]);
            });
        });

        context('with 3 living neighbors', () => {
            it('leaves the cell alive', () => {
                let input = [
                    [d, d, d],
                    [a, a, a],
                    [d, a, d]
                ];

                assert.equal(a, life(input)[1][1]);
            });
        });
    });
});
