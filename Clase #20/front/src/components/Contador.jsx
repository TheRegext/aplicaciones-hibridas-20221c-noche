import {useState, useEffect} from 'react'
import './contador.css'
// Component funcional 
// Funcion constructora
function Contador(pepe){
    let [cant, setCant] = useState(pepe.initial)
    let [valor, setValor] = useState(0)

    function handleClick(){
        setCant(cant + pepe.increment )
    }
    function handleClick2(){
        setValor(valor + pepe.increment )
    }

    useEffect(()=>{
        console.log("Cambio VALOR: ", valor)
    },[valor])

    useEffect(()=>{
        setTimeout(function(){
            setCant(cant + 1)
        }, 1000)
    }, [])




/*
    
*/
    return (
        <div className="contador dark">
            Valor: {cant} - {valor}
            <button onClick={handleClick}>+</button>
            <button onClick={handleClick2}>+</button>
        </div>
    )
}

export default Contador