function a () {
  console.log('Funcion A')
  return 5
}

function b () {
  console.log('Funcion B')
  return a()
}

function c () {
  console.log('Funcion C')
}

c()
console.log(b())

async function h () {
  console.log('Funcion H')
  return 5
}

h()
  .then(function (r) {
    console.log('Termine', r)
  })
  .catch(function (data) {
    console.log('ERRRER', data)
  })

console.log('Hola estoy despues del h')

const otro ={
  edad: 30
}

const pepe = {
  id: 120,
  name: 'super pepe',
  edad: otro
}

const juan = {...pepe}

juan.id = 10
juan.edad.edad = 10

console.log(juan)
console.log(pepe)


let { id, name } = pepe // desectructuracion de objetos

id = 1538

console.log({...pepe})

console.log(pepe)

const datos = [5, 6, 9, 8, 7]

const [a, b, c, d, e] = datos

console.log(b)


{
  let j = 30

  if(j === 30){
    let j = 20
    console.log(j) // 20
    console.log("Estoy en el IF")
  }
  console.log(j) // 30
}

console.log(j)







