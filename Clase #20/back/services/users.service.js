import { database } from './database.js'
import bcrypt from 'bcrypt'

const COLLECTION_NAME = 'users'

async function create (user) {
  return database(async db => {
    const userOld = await db.collection(COLLECTION_NAME).findOne({ email: user.email })

    if (!userOld) {
      const salt = await bcrypt.genSalt(10)
      const passwordHash = await bcrypt.hash(user.password, salt)
      const userToCreate = {
        ...user,
        password: passwordHash
      }

      await db.collection(COLLECTION_NAME).insertOne(userToCreate)
      return userToCreate
    } else {
      throw new Error('User already exists')
    }
  })
}

async function login ({ email, password }) {
  return database(async db => {
    const user = await db.collection(COLLECTION_NAME).findOne({ email })
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password)
      if (isPasswordValid) {
        return { ...user, password: undefined }
      }
    }
  })
}

export {
  create,
  login
}
