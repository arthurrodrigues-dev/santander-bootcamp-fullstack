type heroi = {
    name: string,
    vulgo: string
}

function printaObjetos(pessoa: heroi) {
    console.log(pessoa);
}

printaObjetos({
    name: "bruce wayne",
    vulgo: "batman"
})

// ts functions

function addNumber(x: number, y: number): number {
    return x + y
}

function addToHello(name: string): string {
    return `Hello ${name}`
}

function CallToPhone(phone: number | string): number | string {
    return phone
}

async function getDatabase(id: number): Promise<string> {
    return "felipe"
}

let soma: number = addNumber(4, 7)
console.log(soma);

console.log(addToHello("Arthur"));

console.log(CallToPhone("1234"));

// interfaces (type x interface)

type robot = {
    id: number,
    name: string
}

interface robot2 {
    readonly id: string | number,
    name: string,
    sayHello(): string
}

const bot1: robot = {
    id: 1,
    name: "megaman"
}

class Pessoa implements robot2 {
    id: string | number
    name: string

    constructor(id: string | number, name: string) {
        this.id = id
        this.name = name
    }

    sayHello(): string {
        return `hello ${this.name}`
    }
}

const p = new Pessoa(1, "Guts")
console.log(p.sayHello());

