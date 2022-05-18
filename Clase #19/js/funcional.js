function Contador(){
    this.cant=0
    this.label = document.createElement('span')
    this.button = document.createElement('button')

    document.body.appendChild(this.label)
    document.body.appendChild(this.button)

    this.label.innerText = this.cant
    this.button.innerText = "+"

    this.button.addEventListener('click', ()=>{
        this.sumar()
    })

    this.button.addEventListener('click', function(){
        this.style.color = "#F0F"
    })

    this.sumar = function(){
        this.cant++
        this.label.innerText = this.cant
    }
}

const cont1 = new Contador()
const cont2 = new Contador()
const cont3 = new Contador()


