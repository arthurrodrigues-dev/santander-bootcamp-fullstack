class TituloDinamico extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({mode: "open"})
        
        // component's base
        const componentRoot = document.createElement('h1')
        componentRoot.textContent = 'Texto aleatório'

        // component style
        const style = document.createElement('style')
        style.textContent = `
            h1 {
                color: red;
            }
        
        `
        // send to shadow
        shadow.appendChild(componentRoot)
        shadow.appendChild(style)
    }
}

customElements.define('titulo-dinamico', TituloDinamico)