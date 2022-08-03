// Debouncing in javascript

// Api call fn
const getData = async () => {
    console.log("fetching data....")
}


const debounce = (func, delay) => {
    let timer;
    return function () {
        let context = this, args = arguments;
        clearInterval(timer);
        timer = setTimeout(() => {
            func.apply(context, args);
        }, delay)
    }
}

const debounceGetData = debounce(getData, 3000)