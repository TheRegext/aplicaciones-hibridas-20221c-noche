import {useState} from 'react'

// Component funcional 
// Funcion constructora
function Contador(pepe){
    let [cant, setCant] = useState(pepe.initial)


    function handleClick(){
        setCant(cant + pepe.increment )
        
        console.log(cant)
    }

    return (
        <div className="contador dark">
            Valor: {cant}
            <button onClick={handleClick}>+</button>
        </div>
    )
}

export default Contador