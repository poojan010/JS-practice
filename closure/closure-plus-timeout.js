
function x() {
    for (var i = 0; i < 4; ++i) {
        setTimeout(function () {
            console.log(i)
        }, i * 1000)
    }
}
x()

// Output
// 0
// 1
// 2
// 3 

// Right ?

// NOOOO
// Output will be
// 4
// 4
// 4
// 4

// reason
// for() iterating 4 times. During each iteration a new function log() is created, which captures the variable i. setTimout() schedules log() for execution after i*1000ms.
// When for() cycle completes, i variable has value 4.
// setTimeout() executes the scheduled log() functions. log() reads the current value of variable i, which is 4, and logs to console 4.

// Solution - 1
// use let keyword, it creates a new binding
// every single time the function is called
function x() {
    for (let i = 0; i < 4; ++i) {
        setTimeout(function () {
            console.log(i)
        }, i * 1000)
    }
}
x()

// Solution - 2
// pass in the variable i so that each function 
// has access to the correct index
function x() {
    for (let i = 0; i < 4; ++i) {
        function close(new_i) {
            setTimeout(function () {
                console.log(new_i)
            }, new_i * 1000)
        }
        close(i);
    }
}
x()