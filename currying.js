//currying in javascript

// func(a,b) => func(a)(b)

function func(a) {
    return function (b) {
        console.log(a, b);
    }
}

func(5)(6)


//Infinite currying
// add(5)(6)(4)(3)();

function add(a) {
    return function (b) {
        if (b) return add(a + b);
        return a;
    }
}

console.log(add(5)(6)(4)(3)(2)())

