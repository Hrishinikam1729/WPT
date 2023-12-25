function add(a, b) {
    console.log(a + b);
}

function sub(a, b) {
    console.log(a - b)
}

// module.exports = add

module.exports = {
    addFunc: add,
    subFunc: sub
}