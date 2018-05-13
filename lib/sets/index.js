"use strict"

function equal(a, b) {
    if (a.size != b.size)
        return false
    
    for (let v of a) {
        if (!b.has(v))
            return false
    }

    return true
}

module.exports = {
    'equal': equal
}