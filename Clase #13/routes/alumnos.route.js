import express from 'express' // imporando el objeto express por defecto
import alumnosController from '../controllers/alumnos.controller.js'
import * as ApiController from '../controllers/alumnos.api.controller.js'

const route = express.Router()

// Las rutas no representan archivos
// Consumiendo un recurso

route.get('/alumnos', alumnosController.viewAll)
route.get('/alumnos/ver', alumnosController.viewOne)
route.post('/save', alumnosController.create)

// api/alumnos/das
// req.params.idAlumno --> das
route.get('/api/alumnos/:idAlumno', ApiController.getByID)
route.get('/api/alumnos', ApiController.getAll)
route.post('/api/alumnos', ApiController.create)

route.delete('/api/alumnos/:idAlumno', ApiController.remove)

// req.params.idAlumno --> ####
// req.params.idMateria --> ####
// route.get('/api/alumnos/:idAlumno/materias/:idMateria', ApiController.getByID)
// route.get('/api/materias/:idMateria', ApiController.getByID)

// route.get('/api/materias/:idMateria/alumnos/:idAlumno', ApiController.getByID)

// alumnos/2/materias/9 -- 404
// materias/9 -- 200

export default route
