function sumar(lista){
    let suma = 0
    for(let i=0; i<lista.length; i++){
        suma += lista[i]
    }
    return suma;
}

function sumar_impares(lista){
    let suma = 0
    for(let i=0; i<lista.length; i++){
        suma += lista[i]%2 != 0 ? lista[i] : 0
    }
    return suma;
}

function sumar_pares(lista){
    let suma = 0
    for(let i=0; i<lista.length; i++){
        suma += lista[i]%2 == 0 ? lista[i] : 0
    }
    return suma;
}


function sumar_pro(lista, criterio){
    let suma = 0
    for(let i=0; i<lista.length; i++){
        suma += criterio(lista[i])
    }
    return suma;
}


const lista = [1,3, 4, 5]
console.log(lista.reduce((suma, num) => suma + num, 0)) // JavaScript Intermedio

console.log(lista.reduce(function(suma, num){ 
    return suma + num
}, 0))


// console.log(sumar_impares(lista))
console.log(sumar_pro(lista, (num) => num % 2 == 0 ? num : 0))

console.log(sumar_pro(lista, function(num){
    return num % 2 != 0 ? num : 0
}))