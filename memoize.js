

const calc = (n) => {
    let sum = 0;
    for (let i = 0; i <= n; ++i) sum += i;
    return sum;
}

const memoize = (func) => {

    const res = {}

    return function () {
        let context = this, args = arguments;
        var argsCache = JSON.stringify(args);
        if (!res[argsCache]) {
            res[argsCache] = func.apply(context, args)
        }
        return res[argsCache];
    }

}

const mempizeCalc = memoize(calc)

console.time()
console.log("abc", mempizeCalc(100000000))
console.timeEnd()

console.time()
console.log("abc", mempizeCalc(100000000))
console.timeEnd()