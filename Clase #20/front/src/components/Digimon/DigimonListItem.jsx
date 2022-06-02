import './DigimonListItem.css'

function DigimonListItem({digimon}){
    return (
        <li className='digimon-list-item'>
            <img src={digimon.img} alt={digimon.name}/>
            <p>{digimon.name}</p>
        </li>
    )
}

export default DigimonListItem