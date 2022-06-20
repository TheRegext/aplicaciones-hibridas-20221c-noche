import express from 'express'
import * as controller from '../controllers/projects.controller.js'
import { authorization } from '../middlewares/auth.middlewares.js'

const router = express.Router()

function setUser (req, res, next) {
  req.user = {
    _id: '5c8f8f8f8f8f8f8f8f8f8f8f',
    name: 'Brian Lara'
  }
  next()
}

router.all('/api/projects/*', authorization)

router.get('/api/projects', [], controller.find)
router.get('/api/projects/:idProject', [setUser], controller.findByID)
router.post('/api/projects', [], controller.create)

export default router
