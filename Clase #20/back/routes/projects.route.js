import express from 'express'
import * as controller from '../controllers/projects.controller.js'
import { authorization } from '../middlewares/auth.middlewares.js'

const router = express.Router()

router.all('/api/projects', authorization)
router.all('/api/projects/*', authorization)

router.get('/api/projects', [], controller.find)
router.get('/api/projects/:idProject', controller.findByID)
router.post('/api/projects', [], controller.create)

export default router
