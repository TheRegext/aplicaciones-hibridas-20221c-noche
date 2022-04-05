// const calculadora = require('./calculadora.js') // CommonJS
import { sumar as sumar2, PI }  from './calculadora.js' // ES6
//const calculadora = require('./calculadora.js')
function sumar(n1, n2) {
    console.log(n1 + n2)
}

console.log(sumar2(2, 10))
console.log(PI)
