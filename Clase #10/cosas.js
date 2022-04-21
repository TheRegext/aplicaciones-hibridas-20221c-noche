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
