class Counter{
    static counter:number=0;

    static increment():number{
        return(Counter.counter += 1);
    }
    static decrement():number{
        return(Counter.counter -= 1);
        // return (Counter.counter--);
    }
}


console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.decrement());