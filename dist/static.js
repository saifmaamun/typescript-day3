"use strict";
class Counter {
    static increment() {
        return (Counter.counter += 1);
    }
    static decrement() {
        return (Counter.counter -= 1);
        // return (Counter.counter--);
    }
}
Counter.counter = 0;
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.decrement());
