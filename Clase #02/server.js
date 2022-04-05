// Requerimos el modulo HTTP utilizando CommonJS
// EScritp
const http = require('http');

http.createServer(function(request, response){
    console.log("Hola")

    console.log("Reques: ", request.url)

    if(request.url === '/pepe.html'){
        response.write("<h1>Hola Pepe</h1>")    
    }
    else if(request.url === '/hola.html'){
        for(let i=0; i<10; i++)
            response.write("<h1>Hola sin nombre, como estas?</h1>") 
    }
    else{
        response.write("Hola, que haces en esta pagina? no existe...")
    }

    

    response.end()    

}).listen(1880)

