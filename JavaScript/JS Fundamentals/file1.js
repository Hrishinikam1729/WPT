//variables

// var || let || const

// var - Global
// Re-assign
// Access anywhere

// let - Local
// Re-assign
// accessed within its scope/block

// const - Local
// Cannot be Re-assigned
// accessed within its scope/block

let a = {
    firstName: 'Hrishi',
    lastName: 'Nikam',
    education: 'B.E.',
    hobby: "reading",
    money: 55,
}



while (a.money != 55) {

    console.log(a.money)
}





function sayHello(a) {

    function add(b, c) {
        return b + c;
    }

    console.log(add(1, 2));
    return 'hello ' + a
}


let u = sayHello('Chinmay')
u


//----------------------------------------

function addn(...num) {
    console.log(num[0] + 1)

}

addn('hrishi', 'mukesh')


//----------------------------------------------
//High-Order Function
//Below add function is accepting a function as an argument so it is a High-Order Function
//And funcCB is a CallBack Function


function add(num1, num2, funcCB) {
    let result = num1 + num2
    funcCB(result)
}

add(2, 3, function(val) {
    console.log(val)
})


const div = (num3, num4, CB) => {
    let result1 = num3 / num4
    CB(result1)
}

div(8, 4, (val1) => console.log(val1))

//-----------------------------------------------


let arr = [1, 2, 3, 4, 5, 6, 7]

let newArr = arr.map((num) => arr[num] * 2)

console.log(newArr)