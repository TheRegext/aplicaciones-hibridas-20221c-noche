//invoca el modulo del protocolo http
import http from 'http'
//invoca el modulo que cree para la funcion que procesa la peticion del html.
import {interpretacionPeticionHtml, interpretacionJsFilms} from './html.js'

http.createServer(function(req, response){
    let recurso = req.url
    console.log("Entré a la petición", recurso)

    if(recurso === '/andre.html'){
        interpretacionPeticionHtml('./html/andre.html', response)
    }else if (recurso === '/juli.html'){
        interpretacionPeticionHtml('./html/juli.html', response)
    }else if (recurso === '/fede.html'){
        interpretacionPeticionHtml('./html/fede.html', response)
    }else if(recurso === '/jorge'){
        interpretacionJsFilms('./data/film.json', response)
    }else{
        console.log('nada')
        response.end();
    }
}).listen(1880)