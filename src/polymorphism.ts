class Customer{
    roll():void{
        console.log(`i am the customer`)
    }
}

class Buyer extends Customer{
    roll():void{
        console.log(`i am the Buyer`)
    }
}


class Seller extends Customer{
    roll():void{
        console.log(`i am the Seller`)
    }
}


const c1 = new Customer;
const c2 = new Buyer;
const c3 = new Seller;


function getRoll(param:Customer){
    param.roll()
}


getRoll(c1)
getRoll(c2)
getRoll(c3)




class Shape{
    getArea():number{
        return 0
    }
}

class Circle extends Shape{
    constructor(readonly radius:number){
        super()
    }
    getArea():number{
        return Math.PI *this.radius**2
    }
}

class Rectangle extends Shape{
    constructor(readonly height:number, readonly width:number){
        super()
    }
    getArea():number{
        return this.height * this.width
    }
}


function getAreaOfShape(param:Shape){
   console.log(param.getArea())
}


getAreaOfShape(new Shape())
getAreaOfShape(new Circle(8))
getAreaOfShape(new Rectangle(8,12))