import { readFile, writeFile } from 'fs' // importanto las funciones espesificas

export function viewAll (req, res) {
  readFile('data/alumnos.json', function (err, data) {
    const alumnos = err ? [] : JSON.parse(data.toString())

    res.render('alumnos', { alumnos })
  })
}
export function viewOne (req, res) {
  const id = parseInt(req.query.id)

  // Leer el archivo alumnos.json
  readFile('./data/alumnos.json', function (err, data) {
    const alumnos = err ? [] : JSON.parse(data.toString())
    // Busco con el ID el alumno en esa lista
    let alumno = null
    for (let i = 0; i < alumnos.length; i++) {
      if (alumnos[i].id === id) {
        alumno = alumnos[i]
      }
    }
    // Verifico de encuentro el alumno
    if (alumno) {
      // Muestro el alumno
      res.send(`
        <html>
        <body>
          <h1>${alumno.name}</h1>
          <p>Numero: #${alumno.id}</p>
        </body>
        </html>
        `)
    } else { // Else
      // Muestro un mensaje 404
      res.status(404).send(`El alumnos #${id} no existe...`)
    }
  })
}

export function create (req, res) {
  readFile('./data/alumnos.json', function (err, data) {
    const alumnos = (err) ? [] : JSON.parse(data.toString())

    alumnos.push({
      id: alumnos.length + 1,
      name: req.body.name
    })

    writeFile('./data/alumnos.json', JSON.stringify(alumnos), function (err) {
      console.log(err)
    })

    res.redirect('/alumnos')
  })
}

export default {
  viewAll,
  viewOne,
  create
}
