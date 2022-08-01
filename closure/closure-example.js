
function createIncrement() {
    let count = 0;
    function increment() {
        count++;
    }
    let message = `Count is ${count}`;
    function log() {
        console.log(message);
    }

    return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged?
// obviusly 3 right ?

// Nooooo.
// 'Count is 0' is logged to console.
// Reason :
// message variable exists within the scope of createIncrement() function. Its initial value is 'Count is 0'. However, even if count variable has been incremented a few times, message variable always holds 'Count is 0'.

// So how to log() function to return the message having the actual count value ?

// Answer : 
// function log() {
//     let message = `Count is ${count}`;
//     console.log(message);
// }
//so on every (log) function call a new message variable will be created with latest modification of count variable from outer scope.