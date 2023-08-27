class CardNews extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({mode: "open"})
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }

    build() {
        const componentRoot = document.createElement('div')
        componentRoot.setAttribute('class', 'card')

        const cardLeft = document.createElement('div')
        cardLeft.setAttribute('class', 'card_left')

        const autor = document.createElement('span')
        autor.textContent = 'By ' + (this.getAttribute('autor') || "Anonymous")

        const linkTitle = document.createElement('a')
        linkTitle.textContent = this.getAttribute('title') 
        linkTitle.href = this.getAttribute('link-url')

        const newsContent = document.createElement('p')
        newsContent.textContent = this.getAttribute('content')

        cardLeft.appendChild(autor)
        cardLeft.appendChild(linkTitle)
        cardLeft.appendChild(newsContent)

        const cardRight = document.createElement('div')
        cardRight.setAttribute('class', 'card_right')

        const newsImage = document.createElement('img')
        newsImage.src = this.getAttribute('photo')
        newsImage.alt = "foto da notícia"
        cardRight.appendChild(newsImage)

        componentRoot.appendChild(cardLeft)
        componentRoot.appendChild(cardRight)

        return componentRoot;
    }

    styles() {
        const style = document.createElement('style')
        style.textContent = `
            .card {
                width: 80%;
                display: flex;
                justify-content: space-between;
                -webkit-box-shadow: 0px 4px 15px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: 0px 4px 15px 0px rgba(0,0,0,0.75);
                box-shadow: 0px 4px 15px 0px rgba(0,0,0,0.75);
            }
            
            .card_left {
                display: flex;
                flex-direction: column;
                justify-content: center;   
                padding-left: 10px;
            }
            
            .card_left > a {
                margin-top: 5px;
                font-size: 25px;
                text-decoration: none;
                color: #000;
                font-weight: bold;
            }
            
            .card_left > span {
                font-weight: 400;
            } 
            
            .card_left > p {
                color: rgb(70, 70, 70);
            }
            
            img {
                width: 200px;
                height: 100%;
            }
        `

        return style
    }
}

customElements.define('card-news', CardNews)