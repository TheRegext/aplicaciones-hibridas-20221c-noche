import { database, ObjectId } from './database.js'

const find = async (collection) =>
  database(async db => await db.collection(collection).find({}).toArray())

const findByID = async (idProject, collection) =>
  database(async db => await db.collection(collection).findOne({ _id: new ObjectId(idProject) }))

export {
  find,
  findByID
}
