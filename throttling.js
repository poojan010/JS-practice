// Throttling in javascript

// Api call fn
const getData = async () => {
    console.log("fetching data....")
}


const throttling = (func, delay) => {
    let flag = true;
    return function () {
        if (flag) {
            func.apply(this, arguments);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, delay)
        }
    }
}

const throttlingGetData = throttling(getData, 1000)