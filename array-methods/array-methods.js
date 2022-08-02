

// Polyfill for filter
Array.prototype.myFilter = function (callback, context) {

    var arr = [];

    for (var i = 0; i < this.length; ++i) {
        if (callback.call(context, this[i], i, this)) {
            arr.push(this[i]);
        }
    }

    return arr;
}
const arrData1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const res1 = arrData1.myFilter((element) => {
    return (element % 2 === 0)
})

console.log(res1)

// polyfill for map
Array.prototype.myMap = function (callback, context) {

    var arr = [];

    for (var i = 0; i < this.length; ++i) {
        var item = callback.call(context, this[i], i, this)
        arr.push(item);
    }

    return arr;
}
const arrData2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const res2 = arrData2.myMap((element) => {
    return (element * 2)
})

console.log(res2)


// polyfill for reduce
Array.prototype.myReduce = function (callback, initialValue = null) {

    var accumulator = initialValue;

    for (var i = 0; i < this.length; ++i) {
        accumulator = callback(accumulator, this[i], i, this)
    }

    return accumulator
}
const arrData3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const res3 = arrData3.myReduce((acc, curr) => acc + curr)

console.log(res3)