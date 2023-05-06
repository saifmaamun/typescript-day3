"use strict";
class Customer {
    roll() {
        console.log(`i am the customer`);
    }
}
class Buyer extends Customer {
    roll() {
        console.log(`i am the Buyer`);
    }
}
class Seller extends Customer {
    roll() {
        console.log(`i am the Seller`);
    }
}
const c1 = new Customer;
const c2 = new Buyer;
const c3 = new Seller;
function getRoll(param) {
    param.roll();
}
getRoll(c1);
getRoll(c2);
getRoll(c3);
class Shape {
    getArea() {
        return 0;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
}
class Rectangle extends Shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.height * this.width;
    }
}
function getAreaOfShape(param) {
    console.log(param.getArea());
}
getAreaOfShape(new Shape());
getAreaOfShape(new Circle(8));
getAreaOfShape(new Rectangle(8, 12));
