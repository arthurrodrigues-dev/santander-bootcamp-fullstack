"use strict";
function printaObjetos(pessoa) {
    console.log(pessoa);
}
printaObjetos({
    name: "bruce wayne",
    vulgo: "batman"
});
// ts functions
function addNumber(x, y) {
    return x + y;
}
function addToHello(name) {
    return `Hello ${name}`;
}
function CallToPhone(phone) {
    return phone;
}
let soma = addNumber(4, 7);
console.log(soma);
console.log(addToHello("Arthur"));
console.log(CallToPhone("1234"));
