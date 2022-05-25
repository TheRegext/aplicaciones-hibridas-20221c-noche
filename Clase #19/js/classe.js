class Contador{
    constructor(){
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
    }

    sumar(){
        this.cant++
        this.label.innerText = this.cant
    }
}


const con1 = new Contador()

const con2 = new Contador()

/*

function fun(){
    console.log("P:", this)
}

const obj = {
    k: 14,
    suma: fun
}

fun()
window.fun()

obj.suma()

*/