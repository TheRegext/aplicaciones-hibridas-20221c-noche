const http = require('http') // Incluye el modulo HTTP de Node
const fs = require('fs')// incluye el modulo de File System

// req - request: todo lo que me envia el cliente
// res - response: todo lo que le enviamos al cliente
http.createServer(function(req, res){
    // se encarga de atender las peticiones de los recursos
    let recurso = req.url
    console.log("Entre a la peticion: ", recurso)
    
    if(recurso === '/pedro.html'){
        // Funcion asincrona
        fs.readFile('./html/pedro.html', function(err, data){
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
    else if(recurso === '/digimon.html'){
        fs.readFile('./data/digimon.json', function(err, data){
            const digimons = JSON.parse(data.toString())
            // console.log(digimons)
            
            res.write('<html><body><ul>')

            for(let i=0; i<digimons.length; i++){
                res.write(`
                    <li>
                    <img src="${digimons[i].img}" alt="${digimons[i].name}" />
                    Nombre: ${digimons[i].name}
                    </li>
                `)
            }
            
            res.write('</ul></body></html>')
            res.end()

        })
    }
    else if(recurso === '/juan.html'){
        res.write('<p>hola juan</p>')
        res.end()
    }
    else{
        res.write('<p>hola 404</p>')
        res.end()
    }
    
    
    console.log("Termine la peticion")
    
}).listen(1617)


