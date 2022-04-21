import * as AlumnosModel from '../services/alumnos.service.js'

function getByID (req, res) {
  const id = parseInt(req.params.idAlumno)

  console.log(id)

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
  const id = parseInt(req.params.idAlumno)

  console.log(id)

  AlumnosModel.find()
    .then(function (alumnos) {
      res.status(200).json(alumnos)
    })
}

export {
  getByID,
  getAll
}
