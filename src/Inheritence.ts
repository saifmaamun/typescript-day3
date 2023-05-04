class Common{
    constructor(public name:string, public age:number){

    }
    makeSleep(hour:number):string{
        return `${this.name} should sleep ${hour} hours`
    }
}

class Student extends Common{
    constructor(public name:string, public age:number, public classN:number){
        super(name, age)
    }
}

const stu1 = new Student('Sabit',15,9)


class Teacher extends Common{
    constructor(public name:string, public age:number, public subject:string, public education:string,){
        super(name, age)
    }
    takeClass(hour:number):string{
        return `${this.name} should take ${hour} hours class per month`
    }

}

const teacher1 = new Teacher('Neloy',26,'ICT','M.Sc')
stu1.makeSleep(9)
teacher1.takeClass(120)
