import express from 'express' // imporando el objeto express por defecto
import alumnosController from '../controllers/alumnos.controller.js'

const route = express.Router()

route.get('/alumnos', alumnosController.viewAll)
route.get('/alumnos/ver', alumnosController.viewOne)
route.post('/save', alumnosController.create)

export default route