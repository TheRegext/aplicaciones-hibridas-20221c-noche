import { ObjectId, MongoClient } from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017')

async function find () {
  await client.connect()
  const db = client.db('NocheProjects')
  const collection = db.collection('Projects')
  const projects = await collection.find({}).toArray()
  // await client.close()
  return projects
}

async function create (project) {
  await client.connect()
  const db = client.db('NocheProjects')
  const collection = db.collection('Projects')
  await collection.insertOne(project)
  // await client.close()
  return project
}

async function findByID (idProject) {
  await client.connect()
  const db = client.db('NocheProjects')
  const collection = db.collection('Projects')
  const project = await collection.findOne({ _id: ObjectId(idProject) })
  // await client.close()
  return project
}

async function findByName (name) {
  await client.connect()
  const db = client.db('NocheProjects')
  const collection = db.collection('Projects')
  const project = await collection.findOne({ name: name })
  // await client.close()
  return project
}

export {
  find,
  create,
  findByID,
  findByName
}
