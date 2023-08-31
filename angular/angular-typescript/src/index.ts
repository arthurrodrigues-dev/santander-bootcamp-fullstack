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

