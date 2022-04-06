import express from 'express'
import { readFile, writeFile } from 'fs'
// import fs from 'fs'

const app = express() // crea el objeto de la aplicacion

app.use('/', express.static('public'))
app.use(express.urlencoded({ extended: false }))

app.post('/save', function (req, res) {
  readFile('./data/alumnos.json', function (err, data) {
    const alumnos = (err) ? [] : JSON.parse(data.toString())
    /*
      for(let i = 0; i < alumnos.length; i++) {
        id = i
      }

      id = alumnos.length // Estaria correcto
    */

    alumnos.push({
      id: alumnos.length + 1, 
      name: req.body.name
    })

    writeFile('./data/alumnos.json', JSON.stringify(alumnos), function (err) {
      console.log(err)
    })

    //res.send('Se agrego correctamente...')
    res.redirect('/alumnos')
  })
})

app.get('/alumnos', function (req, res) {
  readFile('./data/alumnos.json', function (err, data) {
      const alumnos = err ? [] : JSON.parse(data.toString())
      res.write(`
      <html>
        <body>
        <a href="/nuevo.html">Agregar Nuevo</a>
        <ul>
        `)

      for (let i = 0; i < alumnos.length; i++) {
        res.write(`<li>
        Nombre: ${alumnos[i].name} <a href="/alumnos/ver?id=${alumnos[i].id}">Ver</a>
        </li>`)
      }

      res.write('</ul></body></html>')

      res.end()

  })
})

app.get('/alumnos/ver', function(req, res){
  const id = parseInt(req.query.id)
  
  // Leer el archivo alumnos.json
  readFile('./data/alumnos.json', function(err, data){
    const alumnos = err ? [] : JSON.parse(data.toString())
    // Busco con el ID el alumno en esa lista
    let alumno = null
    for(let i = 0; i < alumnos.length; i++) {
      if(alumnos[i].id === id){
        alumno = alumnos[i]
      }
    }
    // Verifico de encuentro el alumno
    if(alumno){
      // Muestro el alumno
      res.send(`
      <html>
      <body>
        <h1>${alumno.name}</h1>
        <p>Numero: #${alumno.id}</p>
      </body>
      </html>
      `)
    }
    //Else
    else{
      // Muestro un mensaje 404
      res.status(404).send(`El alumnos #${id} no existe...`)
    }
  })
})

// Escucha el puerto y si funcioa, ejecuta la funcion
app.listen(2022, function () {
  console.log('Me conecte al puerto! http://localhost:2022 ')
})

/*
let cant = 0

app.get('/count', function(req, res){
  cant ++ 
  res.send(`Cantidad: ${cant}`)
})
*/