function clg(params: any){
    console.log(params)
}

// abstract interface

interface IStudent{
    name:string;
    classN:number;
    group:string;
    declear():void;
}


class StudentC implements IStudent{
    constructor(public name:string,public classN:number,public group:string){
        
    }
    declear():void{
        console.log(`i am ${this.name}`)
    };
    study(){
        console.log(`study hard`)
    }
}

const student=new StudentC('Saif',10,'science');

// clg(student);

// abstract class
abstract class StudentAC{
    abstract name:string;
    abstract classN:number;
    abstract group:string;
    constructor(){
        
    }
    abstract declare():void;
    study(){
        console.log(`study hard`)
    }
}

class StudentCreate extends StudentAC{
    constructor(public name: string, public classN: number, public group: string){
        super();
    }
    declare():void{
        clg(`this ${this.group} group is awesome`)
    }
    //getters
    get _name():string{
        return this.name
    }
    get _classN():number{
        return this.classN;
    }
   
}

const student1=new StudentCreate('John',10,'science');
clg(student1);
clg(student1.classN);
clg(student1.declare());
clg(student1.group);
clg(student1.name);
clg(student1.study());
clg(student1._classN);
clg(student1._name);