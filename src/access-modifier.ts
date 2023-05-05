const clg=(param:any):void=>{
    console.log(param);
}


class BankAccount{
    constructor(readonly id:number,public name:string,private _balance:number, protected _branch:string){

    }

    getBalance(){
        clg(`balance is ${this._balance}`)
    }
    depositeBalance(amount:number){
        this._balance = this._balance + amount
    }
}

class StudentAccount extends BankAccount{
    test(){
        clg(this._branch)
        clg(this.depositeBalance)
        clg(this.getBalance)
        clg(this.id)
        clg(this.name)
        // private properties will not appear in this extends
        // we will use read only and private
    }
}


const myBankAccount = new BankAccount(1,'Maamun',500,'dhaka')
clg(myBankAccount)

clg(myBankAccount)