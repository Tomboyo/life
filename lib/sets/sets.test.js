"use strict"

const assert = require('assert')
const sets = require('.')

describe('Sets', () => {
    describe('equal', () => {
        it('the sets must be the same size', () => {
            let a = new Set([1])
            let b = new Set([1, 2])

            assert(sets.equal(a, a))
            assert(!sets.equal(a, b))
        })

        it('the sets must contain the same elements', () => {
            let a = new Set([1, 2, 3])
            let b = new Set([1, 3, 2])
            let c = new Set([1, 3, 5])

            assert(sets.equal(a, b))
            assert(!sets.equal(a, c))
        })
    })
})