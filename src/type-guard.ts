// const clg=(param:any):void=>{
//     console.log(param);
// }


// keyof guard

type AlphaNumeric=string | number

function addNumber(n1:AlphaNumeric, n2:AlphaNumeric):AlphaNumeric{
    if (typeof n1=='number' && typeof n2=='number'){
        return n1*10+n2*1
    }
    else{
        return n1.toString()+n2.toString();
    }
}

// clg(addNumber('4','5'))
// clg(addNumber(4,5))

// in guard
interface NormalUser{
    name:string;
}

interface AdminUser{
    name:string;
    role:'Admin';
}

function checkAdmin(user:NormalUser | AdminUser){
    if ('role' in user){
        return `Im an ${user.role}`
    }
    else{
        return `im a normal user`
    }
}


const user1:NormalUser={
    name:'Dakat',
}

const admin1:AdminUser={
    name:'CID',
    role: 'Admin'
}


console.log(checkAdmin(user1))
console.log(checkAdmin(admin1))



// instaceof guard


class Crush{
    constructor(public name:string, public age:number){

    }
    publish(){
        console.log(`im the crush`)
    }
}

class GF extends Crush{
    constructor(public name:string, public age:number, public role:string){
        super(name, age)
    }
    announceGF(){
        console.log(`im the ${this.role}`)
    }
}
class Wife extends Crush{
    constructor(public name:string, public age:number, public role:string){
        super(name, age)
    }
    announceWife(){
        console.log(`im the ${this.role}`)
    }
}
class LiveTogather extends Crush{
    constructor(public name:string, public age:number, public role:string){
        super(name, age)
    }
    announcePartner(){
        console.log(`im the ${this.role}`)
    }
}


function isGF(partner:Crush): partner is GF{
    return partner instanceof GF;
}
function isWife(partner:Crush): partner is Wife{
    return partner instanceof Wife;
}


function getPartner(partner:Crush){
    if (isGF(partner)){
        partner.announceGF();
    }
    else if (isWife(partner)){
        partner.announceWife()
    }
    else{
        partner.publish()
    }
}

const gf1 =new GF('Edita',14,'GF');
const wife1 = new Wife('Edu',18,'Wife');
const lt1 = new LiveTogather('Akku',21,'Live Togather');

getPartner(gf1)
getPartner(wife1)
getPartner(lt1)