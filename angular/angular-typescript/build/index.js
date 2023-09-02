"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "felipe";
    });
}
let soma = addNumber(4, 7);
console.log(soma);
console.log(addToHello("Arthur"));
console.log(CallToPhone("1234"));
const bot1 = {
    id: 1,
    name: "megaman"
};
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `hello ${this.name}`;
    }
}
const p = new Pessoa(1, "Guts");
console.log(p.sayHello());
