// primitive types: boolean, number, string

let isON: boolean = false
let Name: string = "Arthur"
let age: number = 30
let height: number = 1.8

// special types
//null
//undefined
let nulll: null = null
let undefinedd: undefined = undefined

// any, void
let retorno:void
let returnView:any = false

//object

let product: object = {
    name: "felipe",
    cidade: "sp",
    idade: 30
}

type ProdutoLoja = {
    nome: string,
    preco: number,
    unidades: number
}

let meuProduto: ProdutoLoja = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 5
}

// Arrays

let dados: string[] = ["felipe", "ana", "adriana"]
let dados2: Array<string> = ["felipe", "ana", "adriana"]

let infos: (string | number)[] = ["felipe", 30, "arthur", "adriana", 22]

// Tuples

let boleto:[string, number, number] = ["agua conta", 199.90, 323232343]

// Dates

let aniversario:Date = new Date("2022-12-01 05:00")
console.log(aniversario.toString());
