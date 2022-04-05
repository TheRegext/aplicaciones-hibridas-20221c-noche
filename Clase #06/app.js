import express from 'express'
import { readFile, writeFile } from 'fs'

const app = express() // crea el objeto de la aplicacion

// \ contrabarra y se utiliza para escapar caracteres

// app.use('/img', express.static('img'))
// app.use('/', express.static('html'))
app.use('/', express.static('public'))
app.use(express.urlencoded({ extended: false }))

app.post('/save', function (req, res) {
  readFile('./data/alumnos.json', function (err, data) {
    const alumnos = (err) ? [] : JSON.parse(data.toString())

    alumnos.push({
      name: req.body.name
    })

    writeFile('./data/alumnos.json', JSON.stringify(alumnos), function (err) {
      console.log(err)
    })

    res.send('Se agrego correctamente...')
  })
})

app.get('/alumnos', function (req, res) {
  readFile('./data/alumnos.json', function (err, data) {
    if (!err) {
      const digimons = JSON.parse(data.toString())
      res.write('<html><body><ul>')

      for (let i = 0; i < digimons.length; i++) {
        res.write(`<li>
        Nombre: ${digimons[i].name}
        </li>`)
      }

      res.write('</ul></body></html>')

      res.end()
    }
  })
})

// Escucha el puerto y si funcioa, ejecuta la funcion
app.listen(2022, function () {
  console.log('Me conecte al puerto! http://localhost:2022 ')
})
