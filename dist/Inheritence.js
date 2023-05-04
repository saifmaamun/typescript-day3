"use strict";
class Common {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    makeSleep(hour) {
        return `${this.name} should sleep ${hour} hours`;
    }
}
class Student extends Common {
    constructor(name, age, classN) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.classN = classN;
    }
}
const stu1 = new Student('Sabit', 15, 9);
class Teacher extends Common {
    constructor(name, age, subject, education) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.subject = subject;
        this.education = education;
    }
    takeClass(hour) {
        return `${this.name} should take ${hour} hours class per month`;
    }
}
const teacher1 = new Teacher('Neloy', 26, 'ICT', 'M.Sc');
stu1.makeSleep(9);
teacher1.takeClass(120);
