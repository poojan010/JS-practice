
/** Create Function that implements stack data structure */
function createStack() {
    return {
        items: [],
        push(item) {
            this.items.push(item);
        },
        pop() {
            return this.items.pop();
        }
    };
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5
stack.items; // => [10]


// above function works well 
// but Anyone can modify items array directly because stack.items property is exposed.
// so encalpsulation is broken

// Re-factor above function that can achieve Encapsulation
function createStack() {
    const items = [];
    return {
        push(item) {
            items.push(item);
        },
        pop() {
            return items.pop();
        }
    };
}
const newStack = createStack();
newStack.push(10);
newStack.push(5);
newStack.pop(); // => 5
newStack.items; // => undefined