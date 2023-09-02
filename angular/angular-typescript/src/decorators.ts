// decorators

// function ExibirNome(target: any) {
//     console.log(target);
// }

// @ExibirNome
// class Funcionario {}

// @ExibirNome
// class Quincas{}

function apiVersion(version: string) {
    return (target: any) => {
        Object.assign(target.prototype, {__version: version, __name: "arthur"})
    }
} 

function minLength(length: number) {
    return (target:any, key: string) => {
        let _value = target[key]

        const getter = () => _value
        const setter = (value: string) => {
            if (value.length < length) {
                throw new Error(`Tamanho menor do que ${length}`)
            } else {
                _value = value
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        })
    }
}

@apiVersion("1.10")
class Api {
    @minLength(10)
    name: string

    constructor(name: string) {
        this.name = name
    }
}

const api = new Api("1")
console.log(api.name);
