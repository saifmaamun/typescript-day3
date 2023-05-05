"use strict";
const clg = (param) => {
    console.log(param);
};
function addNumber(n1, n2) {
    if (typeof n1 == 'number' && typeof n2 == 'number') {
        return n1 * 10 + n2 * 1;
    }
    else {
        return n1.toString() + n2.toString();
    }
}
function checkAdmin(user) {
    if ('role' in user) {
        return `Im an ${user.role}`;
    }
    else {
        return `im a normal user`;
    }
}
const user1 = {
    name: 'Dakat',
};
const admin1 = {
    name: 'CID',
    role: 'Admin'
};
console.log(checkAdmin(user1));
console.log(checkAdmin(admin1));
// instaceof guard
class Crush {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    publish() {
        console.log(`im the crush`);
    }
}
class GF extends Crush {
    constructor(name, age, role) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.role = role;
    }
    announceGF() {
        console.log(`im the ${this.role}`);
    }
}
class Wife extends Crush {
    constructor(name, age, role) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.role = role;
    }
    announceWife() {
        console.log(`im the ${this.role}`);
    }
}
class LiveTogather extends Crush {
    constructor(name, age, role) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.role = role;
    }
    announcePartner() {
        console.log(`im the ${this.role}`);
    }
}
function isGF(partner) {
    return partner instanceof GF;
}
function isWife(partner) {
    return partner instanceof Wife;
}
function getPartner(partner) {
    if (isGF(partner)) {
        partner.announceGF();
    }
    else if (isWife(partner)) {
        partner.announceWife();
    }
    else {
        partner.publish();
    }
}
const gf1 = new GF('Edita', 14, 'GF');
const wife1 = new Wife('Edu', 18, 'Wife');
const lt1 = new LiveTogather('Akku', 21, 'Live Togather');
getPartner(gf1);
getPartner(wife1);
getPartner(lt1);
