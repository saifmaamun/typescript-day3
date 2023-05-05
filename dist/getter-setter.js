"use strict";
class User {
    constructor(name, email, _password, _gem) {
        this.name = name;
        this.email = email;
        this._password = _password;
        this._gem = _gem;
    }
    // getter
    get password() {
        return this._password;
    }
    // getPassword(){
    //     console.log(`password: ${this._password}`)
    // }
    //setter
    set addingGem(amount) {
        this._gem = this._gem + amount;
    }
}
const userX = new User('saif', 'saif@gmail.com', 'asd21635465as$', 12);
console.log(userX.password);
