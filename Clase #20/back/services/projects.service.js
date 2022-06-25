import { database } from './database.js'
import * as service from './services.js'

const COLLECTION_NAME = 'projects'

const find = async () => service.find(COLLECTION_NAME)

const findByID = async idProject => service.findByID(idProject, COLLECTION_NAME)

const create = async project =>
  database(async db => await db.collection(COLLECTION_NAME).insertOne(project))

export {
  find,
  create,
  findByID
}
