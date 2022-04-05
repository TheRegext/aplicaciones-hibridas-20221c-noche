//invoca el modulo de file sistem
import fs from 'fs'
export function interpretacionPeticionHtml(path, response){
    fs.readFile(path, function(err, data){
        if(!err){
            response.write(data)
            response.end()
        }else{
            response.write('Hubo un error al interpretar la petición del html')
            response.end()
        }
        console.log("Se terminó de leer el archivo solicitado", data)
    })
}
export function interpretacionJsFilms(path, response) {
    fs.readFile(path, function(err, data){
        if(!err){
            const film = JSON.parse(data.toString())
            response.write('<html><body><ul>')

                for(let i=0; i<film.length; i++){
                    response.write(`
                        <li>
                        Nombre: ${film[i].Title}
                        </li>
                        `)
                    }
                    console.log('exito')
                    response.write('</ul></body></html>')
                    response.end()
        }
        else{
            response.write('Hubo un error al interpretar la petición del html')
            response.end()
        }
        console.log("Se terminó de leer el archivo solicitado", data)
})}