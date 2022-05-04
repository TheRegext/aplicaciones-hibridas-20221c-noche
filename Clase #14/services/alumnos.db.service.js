import MongoDB from 'mongodb'
const client = new MongoDB.MongoClient('mongodb://localhost:27017')

async function find () {
  return client.connect()
    .then(async function () {
      const db = client.db('ClaseMongo') // Obtener la base de datos
      const alumnos = await db.collection('Alumnos').find().toArray()
      client.close()
      return alumnos
    })
    .catch(function () {
      console.log('NO Me pude conectar')
    })
}

export {
  find
}
