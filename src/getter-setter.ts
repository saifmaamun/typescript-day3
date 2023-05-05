class User{
    constructor(public name:string, readonly email:string, private _password:string, private _gem:number){

    }
// getter

    get password(){
        return this._password;
    }


    // getPassword(){
    //     console.log(`password: ${this._password}`)
    // }

    //setter
    set addingGem(amount:number){
        this._gem = this._gem + amount
    } 
    
    // addGem(amount:number){
    //     this._gem = this._gem + amount
    // }
}

const userX = new User('saif','saif@gmail.com', 'asd21635465as$',12)


// can access the private properties
console.log(userX.password)
// can set private properties
userX.addingGem = 8
console.log(userX.password,userX)

