const arr = [1, 2, 3, 4]


let alumno = arr.find(function(eleme){
    if(eleme == 3){
        return eleme
    }
})

console.log(alumno)