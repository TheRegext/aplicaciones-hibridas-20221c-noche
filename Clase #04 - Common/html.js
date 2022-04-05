const fs = require('fs')

module.exports = {
    extension: 'html'
}

function enviarHTML(path, res){
    fs.readFile(path, function(err, data){
        if(!err){
            res.write(data)
            res.end()
        }
        else{
            res.write('Algo salio mal...')
            res.end()
        }
        console.log("Termine de leer el archivo", data)
    })
}

module.exports.enviarHTML = enviarHTML

/*
let edad = 40

const object = {
    edad,
    nombre: "Pedro"
}

console.log(object)

*/