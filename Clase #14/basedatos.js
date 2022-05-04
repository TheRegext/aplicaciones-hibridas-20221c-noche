import MongoDB from 'mongodb'
const client = new MongoDB.MongoClient('mongodb://localhost:27017')

client.connect()
  .then(async function () {
    console.log('Me pude conectar')
    const db = client.db('ClaseMongo') // Obtener la base de datos
    const alumnos = await db.collection('Alumnos').find().toArray()
    console.log(alumnos)
    client.close()
  })
  .catch(function () {
    console.log('NO Me pude conectar')
  })
