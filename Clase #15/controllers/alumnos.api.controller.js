import * as AlumnosModel from '../services/alumnos.service.js'

function getByID (req, res) {
  const id = parseInt(req.params.idAlumno)

  AlumnosModel.findByID(id)
    .then(function (alumno) {
      if (alumno) {
        res.status(200).json(alumno)
      } else {
        res.status(404).json({ message: `El alumno #${id} no se encuentra` })
      }
    })
}

function getAll (req, res) {
  AlumnosModel.find()
    .then(function (alumnos) {
      res.status(200).json(alumnos)
    })
}

function create (req, res) {
  const alumno = req.body

  AlumnosModel.create(alumno)
    .then(function (newAlumno) {
      res.status(201).json(newAlumno)
    })
    .catch(function (err) {
      res.status(500).json({ err })
    })
}

function remove (req, res) {
  const id = parseInt(req.params.idAlumno)

  AlumnosModel.remove(id)
    .then(function (alumno) {
      if (alumno) {
        res.status(200).json(alumno)
      } else {
        res.status(404).json({ message: `El alumno #${id} no se encuentra` })
      }
    })
    .catch(function (err) {
      res.status(500).json({ err })
    })
}

function replace (req, res) {
  const id = parseInt(req.params.idAlumno)
  const alumno = req.body

  AlumnosModel.replace(id, alumno)
    .then(function (alumno) {
      if (alumno) {
        res.status(200).json(alumno)
      } else {
        res.status(404).json({ message: `El alumno #${id} no se encuentra` })
      }
    })
    .catch(function (err) {
      res.status(500).json({ err })
    })
}

export {
  getByID,
  getAll,
  create,
  remove,
  replace
}
