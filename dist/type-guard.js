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
