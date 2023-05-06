"use strict";
function clg(params) {
    console.log(params);
}
class StudentC {
    constructor(name, classN, group) {
        this.name = name;
        this.classN = classN;
        this.group = group;
    }
    declear() {
        console.log(`i am ${this.name}`);
    }
    ;
    study() {
        console.log(`study hard`);
    }
}
const student = new StudentC('Saif', 10, 'science');
// clg(student);
// abstract class
class StudentAC {
    constructor() {
    }
    study() {
        console.log(`study hard`);
    }
}
class StudentCreate extends StudentAC {
    constructor(name, classN, group) {
        super();
        this.name = name;
        this.classN = classN;
        this.group = group;
    }
    declare() {
        clg(`this ${this.group} group is awesome`);
    }
    //getters
    get _name() {
        return this.name;
    }
    get _classN() {
        return this.classN;
    }
}
const student1 = new StudentCreate('John', 10, 'science');
clg(student1);
clg(student1.classN);
clg(student1.declare());
clg(student1.group);
clg(student1.name);
clg(student1.study());
clg(student1._classN);
clg(student1._name);
