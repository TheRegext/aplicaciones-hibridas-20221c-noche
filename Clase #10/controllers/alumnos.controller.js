import { readFile, writeFile } from 'fs' // importanto las funciones espesificas
import * as AlumnosService from '../services/alumnos.service.js'

export function viewAll (req, res) {
  readFile('data/alumnos.json', function (err, data) {
    const alumnos = err ? [] : JSON.parse(data.toString())

    res.render('alumnos', { alumnos })
  })
}

export function viewOne (req, res) {
  const id = parseInt(req.query.id)

  // busco el alumnos
  AlumnosService.findByID(id).then(function (alumno) {
    console.log('Alumno: ', alumno)
    // Si existe, lo muestro
    if (alumno) {
      res.render('alumnos/alumno', { alumno })
    } else { // Si no, muetro error
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
