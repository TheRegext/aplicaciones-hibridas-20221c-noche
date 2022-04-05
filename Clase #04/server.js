import { createServer } from 'http'
import { readFile } from 'fs'



function enviarHTML(path, res) {
    readFile(path, function (err, data) {
        if (!err) {
            res.write(data)
            res.end()
        }
        else {
            res.write('Algo salio mal...')
            res.end()
        }
        console.log("Termine de leer el archivo", data)
    })
}

// req - request: todo lo que me envia el cliente
// res - response: todo lo que le enviamos al cliente
createServer(function (req, res) {
    // se encarga de atender las peticiones de los recursos
    let recurso = req.url
    console.log("Entre a la peticion: ", recurso)

    if (recurso === '/pedro.html') {
        html.enviarHTML('./html/pedro.html', res)
    }
    else if (recurso === '/juan.html') {
        html.enviarHTML('./html/juan.html', res)
    }
    else if (recurso === '/jose.html') {
        res.write('<p>hola Jose como estas?</p>')
        res.end();
    }
    else {
        res.write('<p>hola 404</p>')
        res.end()
    }


    console.log("Termine la peticion")

}).listen(1617)


