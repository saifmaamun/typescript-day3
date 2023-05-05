const clg=(param:any):void=>{
    console.log(param);
}


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