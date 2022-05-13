import fs from 'fs'

async function findByID (id) {
  // Leer el archivo alumnos.json
  return find()
    .then(function (alumnos) {
      for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i].id === id) {
          console.log('Lo encontre!', alumnos[i])
          return alumnos[i]
        }
      }
    })
}

async function find (deleted = false) {
  // Leer el archivo alumnos.json
  return fs.promises.readFile('./data/alumnos.json')
    .then(function (bytes) {
      return JSON.parse(bytes.toString())
    })
    .then(function (alumnos) {
      if (deleted) {
        return alumnos
      }

      let alumnosSinEleminar = []

      for (let i = 0; i < alumnos.length; i++) {
        if (!alumnos[i].deleted) {
          alumnosSinEleminar.push(alumnos[i])
        }
      }

      return alumnosSinEleminar
    })
    .catch(function (data) {
      return []
    })
}

async function create (alumno) {
  let newAlumno = null
  return find(true)
    .then(function (alumnos) {
      newAlumno = { ...alumno, id: alumnos.length + 1 }
      alumnos.push(newAlumno)
      return fs.promises.writeFile('./data/alumnos.json', JSON.stringify(alumnos))
    })
    .then(function () {
      return newAlumno
    })
}

async function remove (id) {
  let alumno = null
  return find(true)
    .then(function (alumnos) {
      for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i].id === id) {
          alumno = alumnos[i]
        }
      }

      if (alumno) {
        alumno.deleted = true
        return fs.promises.writeFile('./data/alumnos.json', JSON.stringify(alumnos))
      }
    })
    .then(function () {
      return alumno
    })
}

async function replace (id, alumnoData) {
  let alumno = null
  return find()
    .then(function (alumnos) {
      let index = -1
      for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i].id === id) {
          index = i
        }
      }
      if (index !== -1) {
        alumno = alumnos[index] = {
          ...alumnoData,
          id
        }

        return fs.promises.writeFile('./data/alumnos.json', JSON.stringify(alumnos))
      }
    })
    .then(function () {
      return alumno
    })
}

async function update (id, alumnoData) {
  let alumno = null
  return find()
    .then(function (alumnos) {
      let index = -1
      for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i].id === id) {
          index = i
        }
      }
      if (index !== -1) {
        alumno = alumnos[index] = {
          ...alumnos[index],
          ...alumnoData,
          id
        }

        return fs.promises.writeFile('./data/alumnos.json', JSON.stringify(alumnos))
      }
    })
    .then(function () {
      return alumno
    })
}

export {
  findByID,
  find,
  create,
  remove,
  replace,
  update
}
