import {MongoClient, ObjectId} from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
.then(async function(){
    console.log("Conectado...")

    const db = client.db("EJEMPLO_MONGO")
    const collection = db.collection("Instrumentos")

    /*
    const instrumento = {
        name: "Guitarra",
        type:"Cuerda",
        _id: "Hola"
    }

    await db.collection("Instrumentos").insertOne(instrumento)
    */

    // Filtrar
    // const instrumentos = await collection.find({type: 'Tecla'}).toArray()

    // Eliminar
    // await collection.deleteOne({_id: "Hola"})

    /*
    // Actualizar
    await collection.updateOne({_id: ObjectId("627b0c48d370a96c74c996e2")}, {
        $set: {type: "Cuerda"},
        $unset: {name:''}
    })
    */

    // Reemplazar
    await collection.replaceOne({_id: ObjectId("627b0c48d370a96c74c996e2")}, {type: "Cuerda", name:"Arpa"})

   const instrumentos = await collection.find().toArray()
   console.log(instrumentos) // 

    client.close()
})
.catch(function(){
    console.log("Algo salio mal...")
})