import * as service from '../services/projects.service.js'

function find (req, res) {
  return service.find()
    .then(projects => {
      res.json(projects)
    })
}

function findByID (req, res) {
  console.log(req.user)
  return service.findByID(req.params.idProject)
    .then(project => {
      res.json(project)
    })
}

function create (req, res) {
  const project = req.body

  return service.create(project)
    .then(project => {
      res.json(project)
    })
}

export {
  find,
  create,
  findByID
}
