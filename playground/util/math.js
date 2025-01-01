const add = function(a, b) {
    return (a + b)
}

const sub = function(a, b) {
    return (a - b)
}

const multi = function(a, b) {
    return (a * b)
}

module.exports = {
    addNum:add,
    sub,
    multi
}

module.exports.div = function(a, b) {
    return (a / b)
}

module.exports.mod = (a, b) => (a % b)