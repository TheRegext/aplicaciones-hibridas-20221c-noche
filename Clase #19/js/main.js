for(let i = 0; i < 5; i++){
    let cant = 0
    const par = document.createElement('span')
    const boton = document.createElement('button')

    par.innerText = '0'
    boton.innerText = "+"

    document.body.appendChild(par)
    document.body.appendChild(boton)

    boton.addEventListener('click', function(){
        cant ++
        par.innerText = cant
    })
}

