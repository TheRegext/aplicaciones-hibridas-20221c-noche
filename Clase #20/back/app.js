import express from 'express'
import { createServer } from 'http'
import ProjectRoute from './routes/projects.route.js'
import UserRoute from './routes/users.route.js'
import cors from 'cors'
import * as SocketIO from 'socket.io'

const app = express() // crea el objeto de la aplicacion
const server = createServer(app)

const io = new SocketIO.Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  },
  transports: ['websocket']
})

app.use(cors()) // permite que se puedan hacer peticiones desde cualquier origen

app.use(express.json())
app.use('/', ProjectRoute)
app.use('/api/', UserRoute)

io.on('connection', (socket) => {
  socket.emit('message', 'Welcome to the chat app')
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

// Escucha el puerto y si funcioa, ejecuta la funcion
server.listen(2022, function () {
  console.log('Me conecte al puerto! http://localhost:2022 ')
})
