import { useEffect, useState } from 'react'
import DigimonListItem from './DigimonListItem'

// Componente funcional
// Renderizar el componente
function DigimonList(){
    const [digimons, setDigimons] = useState([])

    useEffect(function(){
        fetch('https://digimon-api.vercel.app/api/digimon')
        .then(response => response.json())
        .then(function(data){
            setDigimons(data) // RENDER
        })
    }, [])
   return (
        <div>
            <h1>Lista de Digimon</h1>
            <ul>
                {digimons.map((e)=> <DigimonListItem key={e.name} digimon={e} />)}
            </ul>
        </div>
    )
}

export default DigimonList