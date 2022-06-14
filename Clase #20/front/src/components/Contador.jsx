import PropTypes from 'prop-types'
import {useState, useEffect} from 'react'
import './contador.css'
// Component funcional 
// Funcion constructora
function Contador({initial, increment}){
    let [cant, setCant] = useState(initial)
    let [valor, setValor] = useState(0)

    function handleClick(){
        setCant(cant + increment )
    }
    function handleClick2(){
        setValor(valor + increment )
    }

    useEffect(()=>{
        console.log("Cambio VALOR: ", valor)
    },[valor])

    useEffect(()=>{
        setTimeout(function(){
            setCant(cant + 1)
        }, 1000)
    }, [])

    return (
        <div className="contador dark">
            Valor: {cant} - {valor}
            <button onClick={handleClick}>+</button>
            <button onClick={handleClick2}>+</button>
        </div>
    )
}

Contador.defaultProps = {
    initial: 0,
}

Contador.propTypes = {
    initial: PropTypes.number,
    increment: PropTypes.number.isRequired,
    type: PropTypes.oneOf(['admin','user', 'guest']).isRequired
}


export default Contador